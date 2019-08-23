const fs = require('fs')
const readline = require('readline')
const { google } = require('googleapis')
const TelegramBot = require('node-telegram-bot-api')
const pointsBot = require('./pointsbot.js')
const markdown = require('markdown').markdown
let privateRooms = {}

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const TOKEN_PATH = 'credentials.json'

// Load client secrets from a local file.
fs.readFile('client_secret.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err)
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content), authenticated)
})

// Make sure we have privateRooms.json
fs.writeFile('./privateRooms.json', '{}', { flag: 'wx' }, function(err) {})

fs.readFile('./privateRooms.json', 'utf8', function(err, data) {
  if (!err) {
    privateRooms = JSON.parse(data)
  }
})

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token))
    callback(oAuth2Client)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  rl.question('Enter the code from that page here: ', code => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err)
      oAuth2Client.setCredentials(token)
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

function authenticated(auth) {
  fs.readFile('bot_credentials.json', (err, content) => {
    if (err) return console.log('Error loading bot credentials', err)

    content = JSON.parse(content)

    const bot = new TelegramBot(content.token, { polling: true })

    console.log('Logged in')

    bot.on('polling_error', err => console.log(err))

    bot.on('new_chat_members', msg => {
      msg.new_chat_members.forEach(user => {
        checkUser({ from: { id: user.id, username: user.username } })
      })
      savePrivateRooms()
    })

    bot.on('message', msg => {
      checkUser(msg)
      pointsBot.handlePointGiving(
        auth,
        msg,
        privateRooms,
        bot,
        sendInternalMessage
      )
      savePrivateRooms()
    })
  })
}

// Make sure that every username-id pair is noted down
function checkUser(msg) {
  if (
    !Object.values(privateRooms).some(
      u => u.room === msg.from.id && u.username === msg.from.username
    )
  ) {
    privateRooms[msg.from.username] = {
      room: msg.from.id,
      username: msg.from.username,
    }
  }
}

function sendInternalMessage(msg, user, client, callback) {
  sendMessage(msg, user, client, privateRooms[user].room)
  if (callback) {
    callback()
  }
}

function sendMessage(msg, user, client, room) {
  if (msg.length > 0) {
    msg = msg.replace(/^ +| +$/gm, '')
    let html = markdown.toHTML(msg)
    msg = msg.replace('%USER%', user)
    html = html
      .replace('%USER%', user)
      .replace(/<p>/g, '\n')
      .replace(/<\/p>/g, '')
    client.sendMessage(room, html, { parse_mode: 'HTML' })
  }
}

function savePrivateRooms() {
  fs.writeFile(
    './privateRooms.json',
    JSON.stringify(privateRooms, null, 2),
    err => {
      if (err) console.error(err)
    }
  )
}

// Zeit NOW workaround
const http = require('http')
http
  .createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello there!')
  })
  .listen()
