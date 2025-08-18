const express = require('express')
const courseRouter = express.Router()

const { addCourse, getCourse, deleteCourse, updateCourse } = require('../controllers/courseControllers')
courseRouter.post('/addcourse', addCourse)
courseRouter.get('/getcourse', getCourse)
courseRouter.delete('/deletecourse/:id', deleteCourse)
courseRouter.put('/updatecourse/:id', updateCourse)

module.exports = courseRouter