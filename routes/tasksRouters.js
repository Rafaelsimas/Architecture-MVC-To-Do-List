const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')

router.get('/add',TaskController.createTask)
router.post('/add',TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTasks)
router.post('/edit', TaskController.updateTasksPost)
router.post('/updateStatus', TaskController.toggleStatus)
router.get('/',TaskController.showTasks)

module.exports = router