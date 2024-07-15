const getAllTasks = (req, res) => {
  
  res.send('Get All Tasks Here')

}

const getTask = (req, res) => {
  
  res.send('Task Number 1')

}

const createTask = (req, res) => {
  
  res.send('CreateTask')

}

const deleteTask = (req, res) => {
  
  res.send('Delete Task')

}

const updateTask = (req, res) => {
  
  res.send('Update Task')

}


module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}