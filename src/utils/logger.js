const colors = require('colors')

colors.setTheme({
  silly: 'rainbow',
  log: 'white',
  verbose: 'cyan',
  prompt: 'green',
  info: 'green',
  data: 'green',
  help: 'cyan',
  warn: 'yellow',
  debug: 'cyan',
  error: 'red'
})
var log = require('fancy-log')

/**
 *
 *
 * @class Logger
 */
class Logger {
  constructor () {

  }

  /**
     *
     *
     * @param {any} source
     * @param {any} msg
     * @memberof Logger
     */
  log (source, msg) {
    const message = colors.log(msg)
    log(`${source} | ${message}`)
  }

  /**
     *
     *
     * @param {any} source
     * @param {any} msg
     * @memberof Logger
     */
  info (source, msg) {
    const message = colors.info(msg)
    log(`${source} | ${message}`)
  }

  /**
     *
     *
     * @param {any} source
     * @param {any} msg
     * @memberof Logger
     */
  warn (source, msg) {
    const message = colors.warn(msg)
    log(`${source} | ${message}`)
  }

  /**
     *
     *
     * @param {any} source
     * @param {any} msg
     * @memberof Logger
     */
  error (source, msg) {
    const message = colors.error(msg)
    log(`${source} | ${message}`)
  }

  /**
     *
     *
     * @param {any} source
     * @param {any} msg
     * @memberof Logger
     */
  data (source, msg) {
    const message = colors.data(msg)
    log(`${source} | ${message}`)
  }

  /**
     *
     *
     * @param {any} source
     * @param {any} msg
     * @memberof Logger
     */
  debug (source, msg) {
    const message = colors.debug(msg)
    log(`${source} | ${message}`)
  }
}

module.exports = new Logger()
