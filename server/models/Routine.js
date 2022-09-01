const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  name: String,
  workouts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workout'
  }],
  description: String,
  week_day: Array
})

workoutSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('Workout', workoutSchema)
