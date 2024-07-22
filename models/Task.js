const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a value for the task name'],
    trim: true,
    maxlength: [20, 'Oops! You’ve gone beyond the 20-character limit']
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Task = model('Task', schema);

module.exports = Task