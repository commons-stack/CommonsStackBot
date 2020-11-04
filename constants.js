// Allowed users that can dish out points
// module.exports.userList = [
// ]

// Dishers
module.exports.dishers = [
  'loie_giveth',
  'jeffemmett',
  'mzargham',
  'krrisis',
  'willruddick',
  'GriffGreen',
  'vntrp',
  'Tonga2020',
  'frederikbolding',
  'Santigs67',
  'phil_h',
  'lkngtn',
  'cranders71',
  'ManuAlzuru',
  'davidhq',
  'iviangita',
  'sembrestels',
  'fabianvb',
  'liviade',
  `Gfriis`,
  `JessicaZartler`,
  `Ajmaq`,
  `akrtws`,
  `solsista`,
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

module.exports.dish_notification_msgs = {
  // CommonsStack
  1001201746023: 'Congratulations! You’ve been dished Praise! Your contribution to the Commons Stack has been recognized [in our Telegram channel](https://t.me/CommonsStack). This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted we will be sending you CSTK tokens on the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise on our [wiki](https://wiki.commonsstack.org/contributors-guide) and the CSTK Token in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Commons Stack!',
  // CSDEV
  1001383369347: 'Congratulations! You’ve been dished Praise! Your contribution to the Commons Stack has been recognized [in our Telegram channel](https://t.me/csddev). This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted we will be sending you CSTK tokens on the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise on our [wiki](https://wiki.commonsstack.org/contributors-guide) and the CSTK Token in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Commons Stack!',
  // TE Commons
  1001211489679: 'Congratulations! You’ve been dished Praise! Your contribution to the TE Commons has been recognized [in our Telegram channel](https://t.me/tecommons). This Praise will become TE Commons Impact Hours representing your impact on the Cultural Build, and TEC Impact Hours will become TEC Tokens once the TE Commons Hatches!.\
  \n\nYou can learn more about Impact Hours on our [Medium Post about it](https://medium.com/token-engineering-commons/how-to-earn-tec-tokens-now-an-inside-look-at-impact-hours-7d93043b739d). :-D\
  \n\nYou might also receive CSTK Tokens, which you can read more about in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the TE Commons!',
  // TE Praise Room
  1001382455209: 'Congratulations! You’ve been dished Praise! Your contribution to the TE Commons has been recognized [in our Telegram channel](https://t.me/tepraise). This Praise will become TE Commons Impact Hours representing your impact on the Cultural Build, and TEC Impact Hours will become TEC Tokens once the TE Commons Hatches!.\
  \n\nYou can learn more about Impact Hours on our [Medium Post about it](https://medium.com/token-engineering-commons/how-to-earn-tec-tokens-now-an-inside-look-at-impact-hours-7d93043b739d). :-D\
  \n\nYou might also receive CSTK Tokens, which you can read more about in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the TE Commons!',
  // Currency Potluck
  1001181521735: 'Congratulations! You’ve been dished Praise! Your contribution to our Potluck Experiment has been recognized in our Telegram channel. The use of Praise is still being expermented with, if you have ideas, DM @griffgreen.\
  \n\nYou might also receive CSTK Tokens, which you can read more about in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Potluck!',
  // CCA
  919179467: '🌟 Dear contributor to the Community Currency Alliance 🌟\
\n\n👏 Congratulations! Your valuable contribution to the CCA has been acknowledged, and you\'ve just received "Praise" which is a personal non-transferable acknowledgment token powered by the Commons Stack. In the future, we are hoping to use a dedicated community currency to spark collaboration between the different projects in the Community Currency Alliance. Please let us know if you have any ideas for the CCA or how you want to get involved. \
\n\n🖥 Join our work at [https://currency.community/](https://currency.community/) 🖥\
\n\n🌟 Thank you for your support to the Community Currency Alliance 🌟',
  // CCA Test
  457094753: '🌟 Dear contributor to the Community Currency Alliance 🌟\
  \n\n👏 Congratulations! Your valuable contribution to the CCA has been acknowledged, and you\'ve just received "Praise" which is a personal non-transferable acknowledgment token powered by the Commons Stack. In the future, we are hoping to use a dedicated community currency to spark collaboration between the different projects in the Community Currency Alliance. Please let us know if you have any ideas for the CCA or how you want to get involved. \
  \n\n🖥 Join our work at [https://currency.community/](https://currency.community/) 🖥\
  \n\n🌟 Thank you for your support to the Community Currency Alliance 🌟',
}

module.exports.milestone_automation_trigger_users = ['@danibelle:matrix.org']

module.exports.milestone_notification_msg =
  "You've got Love from Giveth!\
  We appreciate your contributions and the [RewardDAO](https://beta.giveth.io/campaigns/5b3d9746329bc64ae74d1424) is here to thank you.\
\nYou were [dished praise](https://docs.google.com/spreadsheets/d/12cblUYuYq4NwZX7JdRo0-NWnrOxlDy-XCbvF3ugzb2c/edit#gid=0) in the month of %MONTH%, which means you have ETH waiting for you to collect it. To do so you'll need to create a Milestone by %DEADLINE%.\
\n\n[Prepare to record or upload a video](https://wiki.giveth.io/dapp/milestones/) to claim your monthly reward, and [use this link when you're ready to create the milestone](%LINK%) - it will automatically populate important details. Join the conversation in our [#contributors](https://riot.im/app/#/room/#giveth-contributors:matrix.org) room for more information and updates please, see you there!"
