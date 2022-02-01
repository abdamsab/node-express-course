const express = require('express')
const router = express.Router()

const { getAllTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

/*
router.get('/api/v1/tasks')
router.post('/api/v1/tasks')
router.get('/api/v1/tasks/:id')
router.patch('/api/v1/tasks/:id')
router.delete('/api/v1/tasks/:id')*/


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router