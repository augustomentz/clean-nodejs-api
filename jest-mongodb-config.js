module.exports = {
  mongodbMemoryServerOptions: {
		instance: {
      dbName: 'jest'
    },
    binary: {
      version: '3.6.4',
      skipMD5: true
    },
    autoStart: false
  }
};