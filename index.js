const toMongoose = require('./src')
const Dictionary = require('./src/models/dictionary.js')
const connection = require('./src/database/connection.js')

module.exports = {
  connection,
  toMongoose,
  Dictionary,
}
