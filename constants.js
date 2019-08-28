// Allowed users that can dish out points
// module.exports.userList = [
// ]

// Allowed point types
module.exports.point_types = [
  'GOV',
  'DAPP',
  'SC',
  'COMM',
  'UNICORN',
  'ARAGON',
  'FLURKEL',
  'ETHKAN',
  'DAPPNODE',
  'SIGNALING',
]

module.exports.reason_seperators = ['for', 'over', 'because']

module.exports.max_points = 10000

module.exports.sheet_id =
  process.env.NODE_ENV === 'production'
    ? '12cblUYuYq4NwZX7JdRo0-NWnrOxlDy-XCbvF3ugzb2c'
    : '10sU4UNlCq8fZ3f4zouoq945zTScw27uUV1LU0siA1YA'
module.exports.sheet_tab_name = 'PointsBot (DONT RENAME!)!A1:F1'

module.exports.dish_notification_msg =
  "Congratulations! Your contribution to Giveth has been recognized by %DISHER% [here](%ROOM%) and you have received Reward Points that can be collected as Eth.\
\n\nPlease join the [Contributors](https://riot.im/app/#/room/#giveth-contributors:matrix.org) Room and see the [Contributors Guide](https://wiki.giveth.io/dac/contributors-guide/) on our Wiki to learn more\
\n\nDo act soon, these points don’t last forever. Unclaimed ETH rolls over at month end! To make a milestone and get that Eth, go to the [RewardDAO Campaign](https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424) for the next steps and create a Profile on our Beta platform if you haven't already.\
\n\nTHANK YOU for being here from the Giveth Unicorns (and our fabulous PointsBot)!"

module.exports.milestone_automation_trigger_users = ['@danibelle:matrix.org']

module.exports.milestone_notification_msg =
  "You've got Love from Giveth!\
  We appreciate your contributions and the [RewardDAO](https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424) is here to thank you.\
\nYou were [dished points](https://docs.google.com/spreadsheets/d/12cblUYuYq4NwZX7JdRo0-NWnrOxlDy-XCbvF3ugzb2c/edit#gid=0) in the month of %MONTH%, which means you have ETH waiting for you to collect it. To do so you'll need to create a Milestone by %DEADLINE%.\
\n\n[Prepare to record or upload a video](https://wiki.giveth.io/dapp/milestones/) to claim your monthly reward, and [use this link when you're ready to create the milestone](%LINK%) - it will automatically populate important details. Join the conversation in our [#contributors](https://riot.im/app/#/room/#giveth-contributors:matrix.org) room for more information and updates please, see you there!"
