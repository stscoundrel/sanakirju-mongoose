const utils = require('../utils/utils')
const Dictionary = require('../models/dictionary.js')
const constants = require('../constants/entries.js')

const { CHUNK_SIZE } = constants

/**
 * Populate dictionary entries to DB.
 * Run in chunks.
 */
const populate = async (entries) => {
  const formattedEntries = format(entries)

  const entryChunks = utils.chunkArray(formattedEntries, CHUNK_SIZE)

  try {
    for (let i = 0; i < entryChunks.length; i += 1) {
      await Dictionary.insertMany(entryChunks[i])
    }

    return { status: true }
  } catch (err) {
    return { status: false, err }
  }
}

/**
 * Formats entries to fit the Mongoose model.
 */
const format = (entries) => {
  const formattedEntries = entries.map(entry => {
    entry.startsWith = entry.word.charAt(0)

    /**
     * "Type" key confuses Mongoose.
     * Use plural to avoid the confusion.
     */
    entry.types = entry.type
    delete entry.type

    return entry
  })

  return formattedEntries
}

module.exports = {
  populate,
}
