const util = require('util')
const sanakirju = require('sanakirju')
const database = require('./database/connection.js')
const entryService = require('./services/entries.js')

const toMongoose = async ({ url, config }) => {
  const dbConnection = await database.connect(url, config)

  if (!dbConnection.status) {
    return dbConnection.error
  }

  const dictionary = await sanakirju.fromXML()
  const result = await entryService.populate(dictionary)

  await database.close()

  if (!result.status) {
    return status.error
  }
}

module.exports = toMongoose
