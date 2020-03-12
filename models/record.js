const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number,
    required: false
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: 'User',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)