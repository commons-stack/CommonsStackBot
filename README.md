# CommonsStackBot
A Telegram port of the points functionality of [giveth-bot](https://github.com/Giveth/giveth-bot).

## Development
1. Follow [this](https://developers.google.com/sheets/api/quickstart/nodejs) guide to get `client_secret.json`.
2. install dependencies: `npm install`
3. Create a Telegram bot
4. Create a `bot_credentials.json` file containing the bot token in JSON format. Should look something like:

```json
{
  "token": "token"
}
```

5. Simply start the bot using: `node index`

## Production
The bot is automatically deployed to Digital Ocean using Circle CI.

`client_secret.json`, `bot_credentials.json` and `credentials.json` are required files.

## Usage
Invite your bot to a room and use one of the folowing commands:
* `!dish [# of points] [type of points] points to [handle] for [reason explaining why].`
* `!help` for more information.
* `!sheet` to see the current [Praise](https://wiki.commonsstack.org/contributors-guide) sheet

Pull requests are welcome!
Please run `npm test` before submitting a PR to ensure that you have not introduced any errors.
