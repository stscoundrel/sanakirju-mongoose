const mongoose = require('mongoose')

const dictionarySchema = mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  definitions: [
    {
      definition: mongoose.Schema.Types.Mixed,
      type: mongoose.Schema.Types.Mixed,
      grammaticalNote: mongoose.Schema.Types.Mixed,
      examples: mongoose.Schema.Types.Mixed,
    },
  ],
})

dictionarySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('dictionary', dictionarySchema)
