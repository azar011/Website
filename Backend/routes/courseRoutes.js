const express = require("express");
const courseRouter = express.Router();

const { addCourse, getCourse, deleteCourse, updateCourse } = require("../controllers/courseControllers");
const upload = require("../middleware/multerConfig");

courseRouter.post("/addcourse", upload.single("courseImg"), addCourse);
courseRouter.get("/getcourse", getCourse);
courseRouter.delete("/deletecourse/:id", deleteCourse);
courseRouter.put("/updatecourse/:id", upload.single("courseImg"), updateCourse);

module.exports = courseRouter;