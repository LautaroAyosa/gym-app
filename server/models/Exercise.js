const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  img: String,
  type: String,
  targetMuscle: String,
  equipment: String,
  dificulty: String
})

exerciseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('Exercise', exerciseSchema)
