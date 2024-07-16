const Task = require("../models/Task")

const getAllTasks = async (req, res, next) => {
  
  try {
    const tasks = await Task.find()

    res.json({tasks, count: tasks.length})
  } catch (err) {
    next(err)
  }



}

const getTask = async (req, res, next) => {
  
  const { id: taskId } = req.params
  try {
    const selectedTask = await Task.findById(taskId)
    if (!selectedTask) {
      const err = new Error()
      throw err
    }

    res.json({task: selectedTask})

  } catch (err) {
    err.status = 404
    err.message = `No task with ID ${taskId}`
    next(err)
  }


}


const createTask = async (req, res, next) => {
  try {
    const { name, completed } = req.body;
    const newTask = new Task({ name, completed })
    const savedTask = await newTask.save()
    res.json(savedTask)

  } catch (err) {
    next(err)

  }

}

const deleteTask = async (req, res, next) => {
  
  const { id: taskId } = req.params
  try {
    const selectedTask = await Task.findByIdAndDelete(taskId)
    if (!selectedTask) {
      const err = new Error()
      throw err
    }

    res.json({ task: selectedTask, message: 'Task has been successfully deleted'})

  } catch (err) {
    err.status = 404
    err.message = `No task with ID ${taskId}`
    next(err)
  }


}

const updateTask = async (req, res, next) => {
  
  const { id: taskId } = req.params
  try {
    const selectedTask = await Task.findByIdAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true
    })
    if (!selectedTask) {
      const err = new Error()
      throw err
    }

    res.json({ task: selectedTask, message: 'Task has been successfully updated' })

  } catch (err) {
    err.status = 404
    err.message = `No task with ID ${taskId}`
    next(err)
  }


}


module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}