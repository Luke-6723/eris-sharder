const IPC = require('./IPC.js')
class Base {
  constructor (setup) {
    this.client = setup.client
    this.clusterID = setup.clusterID
    this.ipc = new IPC()
  }

  restartCluster (clusterID) {
    this.ipc.sendTo(clusterID, 'restart', { name: 'restart' })
  }
}

module.exports = Base
