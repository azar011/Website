const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseTopicsCount: {
        type: String,
        required: true
    },
    courseHours: {  
        type: String,
        required: true
    },
    courseAbout: {
        type: String,
        required: true
    },
    courseYouLearn:  [{ 
        type: String,
        required : true 
    }]
})

const courseModel = mongoose.model('courseData', courseSchema)

module.exports = courseModel