const Sharder = require('../src/index').Master

require('dotenv').config()

const sharder = new Sharder(process.env.TOKEN, '/tests/main.js', {
  name: 'Travis CLI',
  stats: true,
  // clusters: 2,
  shards: 12,
  debug: true,
  redis: {
    host: 'localhost',
    port: 7045,
    auth: process.env.REDIS_AUTH,
    db: 0,
    tag: 'local'
  }
})

sharder.on('stats', stats => {
  console.log(stats)
})
