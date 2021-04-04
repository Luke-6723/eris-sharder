const redis = require('redis')
const redisConfig = require('../../config.json').redis
const { promisify } = require('util')

class Redis {
  /**
   * @param {String} name
   * @param {Number} db
   */
  constructor (name, db, connectionDetails) {
    this.name = name
    const commandArray = ['get', 'set', 'del', 'ttl']
    this.connection = redis.createClient({
      db: db,
      port: connectionDetails.port,
      host: connectionDetails.host,
      password: connectionDetails.auth
    }).on('ready', () => {
      process.send ? process.send({ name: 'log', msg: `Redis has connected [${this.name}]` }) : console.log(`Redis has connected [${this.name}]`)
    }).on('error', (err) => {
      process.send ? process.send({ name: 'error', msg: `Redis has encountered an error:\n${err}` }) : console.log(`Redis has encountered an error:\n${err}`)
    })
    commandArray.forEach(command => {
      this[command] = promisify(this.connection[command]).bind(this.connection)
    })
  }
}

module.exports = Redis
