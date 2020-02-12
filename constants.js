// Allowed users that can dish out points
// module.exports.userList = [
// ]

// Dishers
module.exports.dishers = [
  'GriffGreen',
  'loie_giveth',
  'krrisis',
  'jeffemmett',
  'mzargham',
  'frederikbolding',
  'phil_h',
  'sembrestels',
]

// Allowed point types
module.exports.point_types = ['PRAISE']

module.exports.reason_seperators = ['for', 'over', 'because']

module.exports.max_points = 10000

module.exports.sheet_id =
  process.env.NODE_ENV === 'production'
    ? '1Qxgjg4YxTBNIIwIEm3WGDcmGs_8Klv-UzztQCzYLvNA'
    : '1p6_zA792aeKnEJ2iudIjeVFmPTFgnj-znoH6mQFzpw8'
module.exports.sheet_tab_name = 'PraiseBot!A1:F1'

module.exports.dish_notification_msg =
  'Congratulations! You’ve been dished Praise! Your contribution to the Commons Stack has been recognized [in our Telegram channel](https://t.me/CommonsStack). This Praise may turn into CSTK tokens at the end of the month, giving you reputation as part of our Trusted Seed.\
  \n\nTo be eligible to receive tokens, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted we will be sending you your tokens on the address you mention in the form. If you already applied, no need to do this again!\
  \n\nPlease see the [Contributors Guide](https://wiki.commonsstack.org/contributors-guide) on our Wiki to learn more about Praise and the Trusted Seed.\
  \n\n**Thank you** for helping make the Commons Stack a reality!'

module.exports.milestone_automation_trigger_users = ['@danibelle:matrix.org']

module.exports.milestone_notification_msg =
  "You've got Love from Giveth!\
  We appreciate your contributions and the [RewardDAO](https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424) is here to thank you.\
\nYou were [dished praise](https://docs.google.com/spreadsheets/d/12cblUYuYq4NwZX7JdRo0-NWnrOxlDy-XCbvF3ugzb2c/edit#gid=0) in the month of %MONTH%, which means you have ETH waiting for you to collect it. To do so you'll need to create a Milestone by %DEADLINE%.\
\n\n[Prepare to record or upload a video](https://wiki.giveth.io/dapp/milestones/) to claim your monthly reward, and [use this link when you're ready to create the milestone](%LINK%) - it will automatically populate important details. Join the conversation in our [#contributors](https://riot.im/app/#/room/#giveth-contributors:matrix.org) room for more information and updates please, see you there!"
