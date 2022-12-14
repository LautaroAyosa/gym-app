const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  routines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Routine'
    }
  ],
  isDeleted: Boolean
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
