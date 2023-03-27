
## CryptoPrice
A simple Node.js app that fetches current crypto prices from CoinGecko API and sends notifications to a Discord channel via a webhook. 
To configure the app, create a **config.json** file in the project root with the following contents. This example follows btc and eth with a 3-hour (180 minutes) interval set:

```json
{
  "webhookID": "...",
  "webhookToken": "...",
  "interval": 180,
  "watchlist": ["Bitcoin", "Ethereum"],
  "compare": ["EUR"]
}
```

The config.json file should include the listed parameters, and the __webhook ID__ and __token__ must be valid to enable notifications to the specified Discord channel.

### Description
The app is triggered to run every config.interval minutes and it uses the coingecko-api module to fetch price data for a specified watchlist of cryptocurrencies. After fetching the data, it sends a default notification to the channel.
For the bitcoin, the app also checks if the price of BTC is higher than the previous all-time high. If necessary, it updates the bitcoin all time high and sends a special notification.

### Usage:

1. Download or clone the project
2. Run npm install
3. Create a **config.json** file in the project root and provide valid webhook id and token.

```json
{
  "webhookID": "...",
  "webhookToken": "...",
  "interval": 180,
  "watchlist": ["Bitcoin", "Ethereum"],
  "compare": ["EUR"]
}
```

4. Run npm start

### Run Node.js application as a Windows Service

If you want the app to start on boot and run continuously as long as your system is running, you could set it up as a Windows Service.
You could use the node-windows package and follow the instructions at https://github.com/coreybutler/node-windows#windows-services.