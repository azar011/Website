import React, { useContext, useState } from "react";
import { myContext } from "../Context/MyContextProvider";
import { myAssets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const AddCourse = () => {
  const {
    courseName,
    setCourseName,
    courseDescription,
    setCourseDescription,
    courseTopicsCount,
    setCourseTopicsCount,
    courseHours,
    setCourseHours,
    courseAbout,
    setCourseAbout,
    courseYouLearn,
    updateLearnPoint,
    removeLearnPoint,
    addLearnPoint,
  } = useContext(myContext);

  const url = "http://localhost:5000"; // your backend url

  const [courseImgFile, setCourseImgFile] = useState(null);
  const [courseImgPreview, setCourseImgPreview] = useState(null);

  // handle file select
  const handleCourseImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCourseImgFile(file);
      setCourseImgPreview(URL.createObjectURL(file));
    }
  };

  // submit function
    const courseAddFun = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("courseName", courseName);
      formData.append("courseDescription", courseDescription);
      formData.append("courseTopicsCount", courseTopicsCount);
      formData.append("courseHours", courseHours);
      formData.append("courseAbout", courseAbout);
      formData.append("courseYouLearn", JSON.stringify(courseYouLearn));

      if (courseImgFile) {
        formData.append("courseImg", courseImgFile);
      }

      await axios.post(`${url}/course/addcourse`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Course Added Successfully...");

      // ✅ reset all states
      setCourseName("");
      setCourseDescription("");
      setCourseTopicsCount("");
      setCourseHours("");
      setCourseAbout("");
      setCourseYouLearn([""]); // keep one empty input field
      setCourseImgFile(null);
      setCourseImgPreview(null);

    } catch (err) {
      console.log(`Error: ${err.message}`);
      toast.error("Failed to Add Course");
    }
  };


  return (
    <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-5">Add New Course</h2>
      <form className="space-y-4" onSubmit={courseAddFun}>
        {/* Course Image */}
        <div>
          <label className="block mb-1 font-medium">Course Image</label>
          <input
            type="file"
            id="courseImg"
            hidden
            onChange={handleCourseImgChange}
          />

          <label htmlFor="courseImg" className="cursor-pointer">
            {courseImgPreview ? (
              <img
                src={courseImgPreview}
                alt="preview"
                height="140"
                width="140"
              />
            ) : (
              <img
                src={myAssets.uploadImg}
                alt="upload"
                height="140"
                width="140"
              />
            )}
          </label>
        </div>

        {/* Course Name */}
        <div>
          <label className="block mb-1 font-medium">Course Name</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Topics Count */}
        <div>
          <label className="block mb-1 font-medium">Topics Count</label>
          <input
            type="number"
            value={courseTopicsCount}
            onChange={(e) => setCourseTopicsCount(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* Hours */}
        <div>
          <label className="block mb-1 font-medium">Hours</label>
          <input
            type="number"
            value={courseHours}
            onChange={(e) => setCourseHours(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        {/* About */}
        <div>
          <label className="block mb-1 font-medium">About</label>
          <textarea
            value={courseAbout}
            onChange={(e) => setCourseAbout(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
          <textarea value={courseAbout} required onChange={(e) => setCourseAbout(e.target.value)} className="w-full p-2 border rounded-lg" />
        </div>

        {/* What You Will Learn */}
        <div>
          <label className="block font-medium">What You Will Learn</label>
          {courseYouLearn.map((value, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={value}
                onChange={(e) => updateLearnPoint(index, e.target.value)}
                className="w-full border rounded-lg p-2"
                required
              />
              <input type="text" required value={value} onChange={(e) => updateLearnPoint(index, e.target.value)} className="w-full border rounded-lg p-2" />
              {courseYouLearn.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeLearnPoint(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addLearnPoint}
            className="cursor-pointer mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            + Add Point
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg w-full font-semibold"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
