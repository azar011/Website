import React, { useContext, useState } from "react";
import { myContext } from "../Context/MyContextProvider";
import { FaCheckCircle, FaEdit, FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";

const CourseList = () => {
  const {
    courseData,
    courseDeleteFun,
    toggleExpand,
    expandedCourse,
    courseModelFun,
    courseUpdateFun,
    updateCourseName,
    setUpdateCourseName,
    updateCourseDescription,
    setUpdateCourseDescription,
    updateCourseTopicsCount,
    setUpdateCourseTopicsCount,
    updateCourseHours,
    setUpdateCourseHours,
    updateCourseAbout,
    setUpdateCourseAbout,
    updateCourseYouLearn,
    setUpdateCourseYouLearn,
    isCourseModalOpen,
    setIsCourseModalOpen,
  } = useContext(myContext);

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Courses</h2>
      {courseData.length === 0 ? (
        <p className="text-red-600 font-bold text-center">No Course Found</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {courseData.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
              {/* Course Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-gray-800">{course.courseName}</h3>
                <div className="flex gap-2">
                  <button onClick={() => courseModelFun(course._id)} className="cursor-pointer flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md shadow-md">
                    <FaEdit /> Update
                  </button>
                  <button onClick={() => courseDeleteFun(course._id)} className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-md">
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>

              {/* Course Info */}
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Description : </span>
                {course.courseDescription}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Topics : </span>
                {course.courseTopicsCount}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Hours : </span>
                {course.courseHours}
              </p>

              {/* Expandable About & Learn Section */}
              <button onClick={() => toggleExpand(course._id)} className="cursor-pointer flex items-center gap-2 text-blue-600 font-semibold mt-2">
                {expandedCourse === course._id ? (
                  <>
                    <FaChevronUp /> Hide Details
                  </>
                ) : (
                  <>
                    <FaChevronDown /> View Details
                  </>
                )}
              </button>

              {expandedCourse === course._id && (
                <div className="mt-4 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">About</h4>
                    <p className="text-gray-600">{course.courseAbout}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">What You Will Learn</h4>
                    <ul className="space-y-1 mt-1">
                      {course.courseYouLearn.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <FaCheckCircle className="text-green-500" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isCourseModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center bg-gray-50 bg-opacity-50
      transition-opacity duration-300 ${isCourseModalOpen ? "opacity-100" : "opacity-0"}`}>
          <div
            className={`bg-white rounded-lg shadow-xl w-full max-w-5xl transform transition-all duration-300
        ${isCourseModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">Update Course</h3>
              <button onClick={() => setIsCourseModalOpen(false)} className="cursor-pointer font-bold text-2xl text-black-400 hover:text-gray-900">
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form onSubmit={courseUpdateFun} className="grid grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium">Course Name</label>
                    <input type="text" value={updateCourseName} onChange={(e) => setUpdateCourseName(e.target.value)} className="w-full border rounded-lg p-2" required />
                  </div>

                  <div>
                    <label className="block font-medium">Description</label>
                    <textarea value={updateCourseDescription} onChange={(e) => setUpdateCourseDescription(e.target.value)} className="w-full border rounded-lg p-2" rows="3" required />
                  </div>

                  <div>
                    <label className="block font-medium">Topics Count</label>
                    <input type="number" value={updateCourseTopicsCount} onChange={(e) => setUpdateCourseTopicsCount(e.target.value)} className="w-full border rounded-lg p-2" />
                  </div>

                  <div>
                    <label className="block font-medium">Hours</label>
                    <input type="number" value={updateCourseHours} onChange={(e) => setUpdateCourseHours(e.target.value)} className="w-full border rounded-lg p-2" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-medium">About</label>
                    <textarea value={updateCourseAbout} onChange={(e) => setUpdateCourseAbout(e.target.value)} className="w-full border rounded-lg p-2" rows="3" />
                  </div>

                  {/* ✅ What You Will Learn Section */}
                  <div>
                    <label className="block font-medium">What You Will Learn</label>
                    {updateCourseYouLearn.map((point, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={point}
                          onChange={(e) => {
                            const newPoints = [...updateCourseYouLearn];
                            newPoints[index] = e.target.value;
                            setUpdateCourseYouLearn(newPoints);
                          }}
                          className="w-full border rounded-lg p-2"
                          required
                        />
                        {updateCourseYouLearn.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setUpdateCourseYouLearn(updateCourseYouLearn.filter((_, i) => i !== index))}
                            className="cursor-pointer bg-red-500 font-bold text-white px-2 py-1 rounded">
                            ✕
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={() => setUpdateCourseYouLearn([...updateCourseYouLearn, ""])} className="cursor-pointer mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                      + Add Point
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="col-span-2 flex justify-end gap-3">
                  <button type="submit" className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Update Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseList;
