const mongoose = require('mongoose')

const connect = (url, config) => {
  try {
    mongoose.connect(url, config)

    return { status: true }
  } catch (error) {
    return { status: 'error', error }
  }
}

module.exports = {
  connect,
}
