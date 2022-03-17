
const mongoose = require('mongoose')
const messagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    require: true,
    match: /^.+@.+\..+$/,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  }
})

module.exports = mongoose.model('messages', messagesSchema)