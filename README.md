## CryptoPrice
A simple Node.js app that fetches current crypto prices from CoinGecko API, sending notifications to a Discord channel via a webhook. 
To configure the app, create a **config.json** file in the project root with the following contents. This example follows btc and eth with a 3-hour interval set:

```json
{
  "webhookID": "...",
  "webhookToken": "...",
  "interval": 180,
  "watchlist": ["Bitcoin", "Ethereum"],
  "compare": ["EUR"]
}
```

__webhook ID__ and __token__ must be valid!

### Description
The app runs every config.interval minutes and it uses the coingecko-api to fetch price data for a specified watchlist of cryptocurrencies. 
After fetching the data, it sends a notification to the channel.

### Usage:

1. Download or clone the project
2. Run npm install
3. Create a **config.json** file in the project root with valid webhook ID and token
4. Run npm start

### Run Node.js application as a Windows Service

For continuous operation, set it up as a Windows Service using the node-windows package, following the instructions at: https://github.com/coreybutler/node-windows#windows-services.
