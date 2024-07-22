const { createCustomError } = require("../errors/CustomError")
const asyncWrapperMidleware = require("../middlewares/asyncWrapper")
const Task = require("../models/Task")

const getAllTasks = asyncWrapperMidleware(async (req, res, next) => {

  const tasks = await Task.find()
  res.json({ tasks, count: tasks.length })

})

const getTask = asyncWrapperMidleware(async (req, res, next) => {

  const { id: taskId } = req.params

  const selectedTask = await Task.findById(taskId)
  if (!selectedTask) {
    return next(createCustomError(`No task with ID ${taskId}`, 404))
  }

  res.json({ task: selectedTask })

})


const createTask = asyncWrapperMidleware(async (req, res, next) => {

  const newTask = new Task(req.body)
  const savedTask = await newTask.save()
  res.status(201).json(savedTask)

})

const deleteTask = asyncWrapperMidleware(async (req, res, next) => {

  const { id: taskId } = req.params

  const selectedTask = await Task.findByIdAndDelete(taskId)
  if (!selectedTask) {
    return next(createCustomError(`No task with ID ${taskId}`, 404))
  }

  res.json({ task: selectedTask, message: 'Task has been successfully deleted' })
  // res.send()
  // res.json({ task: null, message: 'Task has been successfully deleted' })

})


const updateTask = asyncWrapperMidleware(async (req, res, next) => {

  const { id: taskId } = req.params

  const selectedTask = await Task.findByIdAndUpdate(taskId, req.body, {
    new: true,
    runValidators: true,
    //overwrite: true     //no Defaults in Schema
  })
  if (!selectedTask) {
    return next(createCustomError(`No task with ID ${taskId}`, 404))
  }

  res.json({ task: selectedTask, message: 'Task has been successfully updated' })

})


module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
}