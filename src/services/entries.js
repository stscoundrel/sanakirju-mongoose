const utils = require('../utils/utils')
const Dictionary = require('../models/dictionary.js')
const constants = require('../constants/entries.js')

const { CHUNK_SIZE } = constants

/**
 * Populate dictionary entries to DB.
 * Run in chunks.
 */
const populate = async (entries) => {
  const entryChunks = utils.chunkArray(entries, CHUNK_SIZE)

  try {
    for (let i = 0; i < entryChunks.length; i += 1) {
      await Dictionary.insertMany(entryChunks[i])
    }

    return { status: true }
  } catch (err) {
    return { status: false, err }
  }
}

module.exports = {
  populate,
}
