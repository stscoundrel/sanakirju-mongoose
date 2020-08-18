const mongoose = require('mongoose')

const dictionarySchema = mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  definitions: [
    {
      definition: [String],
      types: [String],
      grammaticalNote: String,
      examples: [String],
    },
  ],
  startsWith: String
})

dictionarySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('dictionary', dictionarySchema)
