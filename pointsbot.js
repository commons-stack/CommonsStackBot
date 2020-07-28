const dayjs = require('dayjs')
const {
  dishers,
  point_types,
  reason_seperators,
  max_points,
  sheet_id,
  sheet_tab_name,
  dish_notification_msgs,
  milestone_automation_trigger_users,
  milestone_notification_msg,
} = require('./constants')
const BigNumber = require('bignumber.js')
const { google } = require('googleapis')

exports.handlePointGiving = function(
  auth,
  input,
  privateRooms,
  client,
  notificationFunction
) {
  let message = input.text
  const roomId = input.chat.id
  const user = input.from.username

  if (message.trim()[0] == '>') {
    // quoting another user, skip the quoted part
    message = message.split('\n\n')[1]
  }

  // Support for "! dish" command
  if (message[1] === ' ') {
    message = message.replace(' ', '')
  }

  const msg = message.split(' ')
  const command = msg[0].toLowerCase()

  if (command == '!help') {
    client.sendMessage(
      roomId,
      'dish using the following format:\n!dish Praise to [handle, handle, handle] [' +
        reason_seperators.toString().replace(/,/g, '/') +
        '] [reason]'
    )
  } else if (command == '!roomid') {
    client.sendMessage(roomId, `The room id of this room is: ${roomId}`)
  } else if (command == '!dish') {
    if (input.chat.type === 'private') {
      client.sendMessage(roomId, `Dishing isn't allowed in private rooms.`)
      return
    }
    if (!dishers.includes(user)) {
      client.sendMessage(
        roomId,
        `Sorry, that didn't work! Right now you can only receive Praise. Members of the Trusted Seed who pass a certain threshold of CSTK tokens can also dish. Want CSTK tokens? 1) Apply to become a member 2) Contribute to our mission 3) Receive CSTK tokens (for donating or Praise). Read more here: https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61.`
      )
      return
    }
    handleDish(input, privateRooms, notificationFunction, client, auth)
  } else if (command == '!sheet') {
    client.sendMessage(
      roomId,
      `the Praise sheet can be found here: https://docs.google.com/spreadsheets/d/${sheet_id}`
    )
  } else if (command == '!sendmilestones') {
    if (milestone_automation_trigger_users.includes(user)) {
      handleMilestoneAutomation(notificationFunction, client, privateRooms)
      client.sendMessage(
        roomId,
        `Sent notifications of milestone creation to all eligible users!`
      )
    } else {
      client.sendMessage(roomId, `Sorry, you're not allowed to do that.`)
    }
  } else if (
    command === '/start' &&
    privateRooms[user.toLowerCase()].room === roomId
  ) {
    privateRooms[user.toLowerCase()].started = true
    if (privateRooms[user.toLowerCase()].pendingNotifications) {
      privateRooms[user.toLowerCase()].pendingNotifications.forEach(
        pendingRoomId => {
          const pendingRoomMsg = dish_notification_msgs[pendingRoomId]
          if (pendingRoomId !== undefined) {
            client.sendMessage(roomId, pendingRoomMsg, {
              parse_mode: 'Markdown',
            })
          }
        }
      )
      privateRooms[user.toLowerCase()].pendingNotifications = []
    }
  }
}

function handleMilestoneAutomation(notificationFunc, client, privateRooms) {
  for (var user in privateRooms) {
    var values = privateRooms[user.toLowerCase()]
    var now = new Date()
    if (
      values.lastMonthNotified != now.getMonth() &&
      values.lastDishMonth == now.getMonth()
    ) {
      var startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
      var month = now.toLocaleString('en-us', { month: 'long' })
      var title =
        'RewardDAO ' +
        now.toLocaleString('en-us', { month: 'long', year: 'numeric' }) +
        ': ' +
        user
      var url = `https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424/milestones/propose?title=${encodeURI(
        title
      )}&date=${encodeURI(startOfMonth)}&isCapped=0&requireReviewer=0`
      var deadline = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        7
      ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      notificationFunc(
        milestone_notification_msg
          .replace('%LINK%', url)
          .replace('%MONTH%', month)
          .replace('%DEADLINE%', deadline),
        user,
        client,
        null
      )
      privateRooms[user.toLowerCase()].lastMonthNotified = now.getMonth()
    }
  }
}

function handleDish(msg, privateRooms, notificationFunc, client, auth) {
  let message = msg.text
  let matched = false

  let regex = new RegExp(
    '!\\s*dish\\s+(\\S+)\\s+to\\s+(.+?)\\s+(' +
      reason_seperators.toString().replace(/,/g, '|') +
      ')\\s+([^\\n]+)',
    'gi'
  )

  if (msg.from.is_bot) {
    // we sent the message.
    return
  }

  let match
  do {
    match = regex.exec(message)
    if (match) {
      tryDish(
        msg,
        client,
        auth,
        privateRooms,
        notificationFunc,
        1,
        match[1],
        match[2],
        match[4]
      )
      matched = true
    }
  } while (match)
  if (!matched) {
    client.sendMessage(
      msg.chat.id,
      'ERROR, please use the following format:\n!dish Praise to [handle, handle, handle] for [reason]'
    )
  }
}

function tryDish(
  msg,
  client,
  auth,
  privateRooms,
  notificationFunc,
  nPoints,
  type,
  users,
  reason
) {
  try {
    const roomId = msg.chat.id
    const sender = msg.from.username
    const roomTitle = msg.chat.title ? msg.chat.title : ''
    const amount = new BigNumber(nPoints)
    type = type.toUpperCase()

    if (amount.isNaN()) {
      const pointError = new Error(
        'Invalid number of praise dished. Please enter a valid number and try again'
      )
      pointError.code = 'POINTS_NOT_NUMBER'
      throw pointError
    }

    if (amount.isLessThan(1)) {
      const pointError = new Error(
        "You can't dish negative or zero amount of praise!"
      )
      pointError.code = 'POINTS_ARE_NEGATIVE_OR_ZERO'
      throw pointError
    }

    if (amount.isGreaterThan(max_points)) {
      const pointError = new Error(
        `You can't dish more than ${max_points} praise each time!`
      )
      pointError.code = 'POINTS_OVER_MAXIMUM'
      throw pointError
    }

    if (!point_types.includes(type)) {
      const typeError = new Error(
        `Invalid type '${type}'. Please use one of ${point_types}.`
      )
      typeError.code = 'POINT_TYPE_DOES_NOT_EXIST'
      throw typeError
    }

    users = users.split(',')

    const sheets = google.sheets({ version: 'v4', auth })
    var values = []
    var errors = []

    users.forEach(user => {
      user = user.trim()
      let { userInRoom, receiver, multipleUsers } = findReceiver(
        privateRooms,
        user
      ) // try to find user

      // handle github users
      const BASE_GITHUB_URL = 'https://github.com/'
      if (user.split(BASE_GITHUB_URL)[1]) {
        receiver = user
        ;(userInRoom = true), (multipleUsers = false)
      }

      try {
        if (multipleUsers) {
          const userError = new Error(
            `There are multiple users with the name '${receiver}' in this room.`
          )
          userError.usernames = [receiver]
          userError.genMessage = usernames =>
            `There are multiple users with the name(s) '${enumerate(
              usernames
            )}' in this room.`
          userError.code = 'USER_MULTIPLE'
          throw userError
        }

        if (!userInRoom) {
          const userError = new Error(
            `Username '${receiver}' does not exist in this room.`
          )
          userError.usernames = [receiver]
          userError.genMessage = usernames =>
            `Username(s) '${enumerate(
              usernames
            )}' do(es) not exist in this room.`
          userError.code = 'USER_DOES_NOT_EXIST'
          throw userError
        }
        const date = dayjs().format('DD-MMM-YYYY')
        values.push([receiver, sender, reason, type, date, roomTitle])
      } catch (err) {
        errors.push(err)
      }
    })

    if (errors.length > 0) {
      throw errors
    }

    const body = { values }
    sheets.spreadsheets.values.append(
      {
        spreadsheetId: sheet_id,
        range: sheet_tab_name,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: body,
      },
      err => {
        if (err) {
          return console.log('The API returned an error: ' + err)
        }

        let shouldSendLargeMessage = false

        values.forEach(value => {
          console.log(value[0].toLowerCase())
          if (!privateRooms[value[0].toLowerCase()].started) {
            if (!privateRooms[value[0].toLowerCase()].pendingNotifications) {
              privateRooms[value[0].toLowerCase()].pendingNotifications = []
            }
            privateRooms[value[0].toLowerCase()].pendingNotifications.push(
              Math.abs(roomId)
            )
            shouldSendLargeMessage = true
          } else {
            const msg = dish_notification_msgs[Math.abs(roomId)]
            if (msg !== undefined) {
              notificationFunc(
                msg.replace('%DISHER%', value[1]).replace('%ROOM%', value[6]),
                value[0],
                client,
                null
              )
            }
          }
          privateRooms[
            value[0].toLowerCase()
          ].lastDishMonth = new Date().getMonth()
        })

        const users = values.map(e => e[0])
        let text = ''
        const first = values[0]
        if (shouldSendLargeMessage) {
          text = `${first[1]} dished ${first[3]} to ${enumerate(
            users
          )} \nIn order to claim the praise, please send me a [direct message](https://t.me/commonsstackbot?start), hit start and I'll send you all the info you need`
        } else {
          text = `Praise dished, I have sent you a direct message ${enumerate(
            users
          )}`
        }
        // Prevent issues with Markdown and users with _ in their name
        text = text.replace(/_/g, '\\_')
        client.sendMessage(msg.chat.id, text, { parse_mode: 'Markdown' })
      }
    )
  } catch (errors) {
    combineErrors(errors).forEach(err => {
      console.error(err)
      const MANUAL_ERROR_CODES = [
        'POINTS_NOT_NUMBER',
        'USER_DOES_NOT_EXIST',
        'POINT_TYPE_DOES_NOT_EXIST',
        'USER_MULTIPLE',
        'POINTS_ARE_NEGATIVE_OR_ZERO',
        'POINTS_OVER_MAXIMUM',
      ]
      if (MANUAL_ERROR_CODES.includes(err.code)) {
        client.sendMessage(
          msg.chat.id,
          'ERROR: ' +
            (err.usernames ? err.genMessage(err.usernames) : err.message) +
            "\nType '!help' for more information."
        )
      } else {
        client.sendMessage(
          msg.chat.id,
          'ERROR, please use the following format:\n!dish Praise to [handle, handle, handle] for [reason]'
        )
      }
    })
  }
}

// Try to intelligently format the receiver field
function findReceiver(privateRooms, receiver) {
  if (receiver[0] == '@') {
    receiver = receiver.substr(1)
  }

  // defaults
  let userInRoom = false
  let multipleUsers = false

  receiver = receiver.toLowerCase()

  if (privateRooms[receiver] != null) {
    userInRoom = true
  }

  return {
    userInRoom,
    receiver,
    multipleUsers,
  }
}

function combineErrors(errors) {
  if (!Array.isArray(errors)) {
    return [errors]
  }
  var combinedErrors = {}
  errors.forEach(err => {
    if (combinedErrors[err.code]) {
      combinedErrors[err.code].usernames.push(err.usernames[0])
    } else {
      combinedErrors[err.code] = err
    }
  })
  return Object.values(combinedErrors)
}

function enumerate(users) {
  return users
    .map(u => `@${u}`)
    .join(', ')
    .replace(/, ((?:.(?!, ))+)$/, ' and $1')
}
