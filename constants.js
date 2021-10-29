// Allowed users that can dish out points
// module.exports.userList = [
// ]
// Dishers
module.exports.dishers = [
  'Letty_Gar',
  'randomshinichi',
  'loie_giveth',
  'jeffemmett',
  'bradleyc',
  'mzargham',
  'krrisis',
  'metaverde',
  'danlessa',
  'maxsong123',
  'geleeroyale',
  'Alexholman',
  'Sponnet2',
  'daithiC',
  'willruddick',
  'chuygarcia92',
  'GriffGreen',
  'PKK777',
  'Ygganderson',
  'vntrp',
  'Tonga2020',
  'VitorMarthendal',
  'fabiosmendes',
  'pablocgl',
  'frederikbolding',
  'Santigs67',
  'Krisjones',
  'JuankBell',
  'chriscyber',
  'freedumbs00',
  'zeptimusQ',
  'xgabi',
  'naynaysoo',
  'phil_h',
  'rubenrussel7',
  'Tam2140',
  'lkngtn',
  'knobsDAO',
  'TannrA',
  'durgadasji',
  'cranders71',
  'ManuAlzuru',
  'davidhq',
  'iviangita',
  'sembrestels',
  'fabianvb',
  'FabiMol',
  'vegayp',
  'MerlinEgalite',
  'Anthonyoliai',
  'vivszaid',
  'paulo_c2d',
  'fiorebotta',
  'Laurenluz',
  'danibelle',
  'markop',
  'fvigevani',
  'willjgriff',
  'liviade',
  `Gfriis`,
  `JessicaZartler`,
  `Ajmaq`,
  `akrtws`,
  `solsista`,
  `pKrepe`,
  `divine_comedian`,
  `hanners717`,
  `Vyvy_vi`,
  `freshelle`,
  `mosaeedi1`,
  `kristoferkristofer`,
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

// To get the Room ID for set up, use the command !roomid in the room and remember to give the Praisebot admin permissions
module.exports.dish_notification_msgs = {
  // CommonsStack
  1001201746023: 'Congratulations! You’ve been dished Praise! Your contribution to the Commons Stack has been recognized [in our Telegram channel](https://t.me/CommonsStack). This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted and have activated your membership we will be increasing your CSTK Score using the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise and the CSTK Score in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Commons Stack!',
  // CSDEV
  1001383369347: 'Congratulations! You’ve been dished Praise! Your contribution to the Commons Stack has been recognized [in our Telegram channel](https://t.me/csddev). This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted and have activated your membership we will be increasing your CSTK Score using the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise and the CSTK Score in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Commons Stack!',
  // TE Commons
  1001211489679: '👏 Congratulations! You’ve been Praised! 👏 \n\nWant to know what you’ve been praised for? You will find that in our TE Praise Telegram channel (https://t.me/tepraise). \n\nThis recognition of your contribution to the token engineering community will be rewarded with $TEC tokens following the TEC Commons Upgrade. You can learn more about our reward system in this [Forum post](https://forum.tecommons.org/t/reward-system-moving-forward/570). 😊 \n\nIf you are a member of the Commons Stack Trusted Seed, you may also receive an increase in $CSTK score. Find out more about that in this [article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61). \n\nThank you for supporting the [Token Engineering Commons](https://tecommons.org/)!',
  // TE Praise Room
  1001382455209: '👏 Congratulations! You’ve been Praised! 👏 \n\nWant to know what you’ve been praised for? You will find that in our TE Praise Telegram channel (https://t.me/tepraise). \n\nThis recognition of your contribution to the token engineering community will be rewarded with $TEC tokens following the TEC Commons Upgrade. You can learn more about our reward system in this [Forum post](https://forum.tecommons.org/t/reward-system-moving-forward/570). 😊 \n\nIf you are a member of the Commons Stack Trusted Seed, you may also receive an increase in $CSTK score. Find out more about that in this [article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61). \n\nThank you for supporting the [Token Engineering Commons](https://tecommons.org/)!',
  // Gardens Swarm Room
  1001457753760: 'Congratulations! You’ve been dished Praise! Your contribution to the 1hive Gardens Swarm has been recognized [in our Telegram channel](https://t.me/joinchat/HGrjjVbjjqA3MOEOOHV83g).This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted and have activated your membership we will be increasing your CSTK Score using the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise and the CSTK Score in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Gardens Swarm!',
  // cadCAD
  1001400393954: 'Congratulations! You’ve been dished Praise! Your contribution to the cadCAD community has been recognized [in our Telegram channel](https://t.me/cadCAD_org). This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted and have activated your membership we will be increasing your CSTK Score using the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise and the CSTK Score in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting cadCAD and the emerging field of Token Engineering!',
  // Currency Potluck
  1001181521735: 'Congratulations! You’ve been dished Praise! Your contribution to our Potluck Experiment has been recognized in our Telegram channel. The use of Praise is still being expermented with, if you have ideas, DM @griffgreen.\
  \n\nYou might also receive CSTK Tokens, which you can read more about in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Potluck!',
  // Swiss Membership DApp
  475705318: 'Congratulations! You’ve been dished Praise! Your contribution to the Commons Stack has been recognized [in our Telegram channel](https://t.me/csddev). This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted and have activated your membership we will be increasing your CSTK Score using the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise and the CSTK Score in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Commons Stack!',
  // General Magic
  517357430: 'Congratulations! You’ve been dished Praise! Your General Magic has been recognized in the General Magic Telegram channel. This Praise can give you reputation in our Trusted Seed.\
  \n\nTo be eligible, you must be a member of the Commons Stack Trusted Seed. To apply, fill out the form [here](http://commonsstack.org/apply). Once you are accepted and have activated your membership we will be increasing your CSTK Score using the address you mention in the form. If you already applied, no need to do this again!\
  \n\nYou can learn more about Praise and the CSTK Score in [this article](https://medium.com/commonsstack/cstk-the-token-of-the-commons-stack-trusted-seed-931978625c61).\
  \n\n**Thank you** for supporting the Commons Stack, Giveth and the Blockchain4good movement!',
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
