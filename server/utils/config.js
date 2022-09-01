require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const SECRET = process.env.SECRET
const SALT_ROUNDS = process.env.SALT_ROUNDS

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
  SALT_ROUNDS
}
