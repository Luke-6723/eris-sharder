const Sharder = require('../src/index').Master

require('dotenv').config()

const sharder = new Sharder(process.env.TOKEN, '/tests/main.js', {
  name: 'Travis CLI',
  stats: true,
  // clusters: 2,
  shards: 12,
  debug: true
}, {
  host: 'localhost',
  port: 7044,
  auth: process.env.REDIS_AUTH,
  db: 0
})

sharder.on('stats', stats => {
  console.log(stats)
})
