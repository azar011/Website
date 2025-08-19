// const courseModel = require("../models/courseModel")

// const addCourse = async (req, res) => {
//     try {
//         const courseData = new courseModel({
//             courseImage : req.body.courseImage
//             courseName: req.body.courseName,
//             courseDescription: req.body.courseDescription,
//             courseTopicsCount: req.body.courseTopicsCount,
//             courseHours: req.body.courseHours,
//             courseAbout: req.body.courseAbout,
//             courseYouLearn: req.body.courseYouLearn,
//         })

//         await courseData.save()
//         res.status(201).json({ message: "Course added successfully", data: courseData })
//     } catch (err) {
//         res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)

//     }
// }

// const getCourse = async (req, res) => {
//     try{
//         const courseData = await courseModel.find()
//         res.status(200).send(courseData)
//     }
//     catch(err){
//         res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
//     }
// }

// const deleteCourse = async (req, res) => {
//     try{
//         await courseModel.findByIdAndDelete(req.params.id)
//         res.status(200).send('Data is Deleted')
//     }
//     catch(err){
//         res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
//     }
// }

// const updateCourse = async (req, res) => {
//     try{
//         const courseUpdateData = await courseModel.findByIdAndUpdate(req.params.id,  req.body, { new : true })
//         res.status(200).send('Data is Deleted')
//     }
//     catch(err){
//         res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
//     }
// }

// module.exports = { addCourse, getCourse, deleteCourse, updateCourse }


const courseModel = require("../models/courseModel");

// Add Course
const addCourse = async (req, res) => {
  try {
    const courseData = new courseModel({
      courseImage: req.file ? req.file.filename : null, // multer file
      courseName: req.body.courseName,
      courseDescription: req.body.courseDescription,
      courseTopicsCount: req.body.courseTopicsCount,
      courseHours: req.body.courseHours,
      courseAbout: req.body.courseAbout,
      courseYouLearn: req.body.courseYouLearn ? JSON.parse(req.body.courseYouLearn) : [],
    });

    await courseData.save();
    res.status(201).json({ message: "Course added successfully", data: courseData });
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

// Get All Courses
const getCourse = async (req, res) => {
  try {
    const courseData = await courseModel.find();
    res.status(200).send(courseData);
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
    await courseModel.findByIdAndDelete(req.params.id);
    res.status(200).send("Data is Deleted");
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

// Update Course
const updateCourse = async (req, res) => {
  try {
    const updatedData = {
      ...req.body,
      ...(req.file && { courseImage: req.file.filename }), // update image if new uploaded
    };

    const courseUpdateData = await courseModel.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).json({ message: "Course updated successfully", data: courseUpdateData });
  } catch (err) {
    res.status(500).send(`Error Name : ${err.name}, Error Message : ${err.message}`);
  }
};

module.exports = { addCourse, getCourse, deleteCourse, updateCourse };
