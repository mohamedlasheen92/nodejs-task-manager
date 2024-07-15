const express = require('express');
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks');

const router = express.Router();

router.get('/', getAllTasks)
router.get('/:id', getTask)

router.post('/', createTask)
router.delete('/:id', deleteTask)
router.patch('/:id', updateTask)

module.exports = router