const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Task name is Required'],
    trim: true,
    maxlength: [20, 'Youe have exceeded the max Length']
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Task = model('Task', schema);

module.exports = Task