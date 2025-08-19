import React, { useContext } from "react";
import { myContext } from "../Context/MyContextProvider";

const AddCourse = () => {
  const {
    courseAddFun,
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

  return (
    <div className="max-w-2xl bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-5">Add New Course</h2>
      <form className="space-y-4" onSubmit={courseAddFun}>
        {/* Course Name */}
        <div>
          <label className="block mb-1 font-medium">Course Name</label>
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} className="w-full p-2 border rounded-lg" required />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} className="w-full p-2 border rounded-lg" required />
        </div>

        {/* Topics Count */}
        <div>
          <label className="block mb-1 font-medium">Topics Count</label>
          <input type="number" value={courseTopicsCount} onChange={(e) => setCourseTopicsCount(e.target.value)} className="w-full p-2 border rounded-lg" required />
        </div>

        {/* Hours */}
        <div>
          <label className="block mb-1 font-medium">Hours</label>
          <input type="number" value={courseHours} onChange={(e) => setCourseHours(e.target.value)} className="w-full p-2 border rounded-lg" required />
        </div>

        {/* About */}
        <div>
          <label className="block mb-1 font-medium">About</label>
          <textarea value={courseAbout} required onChange={(e) => setCourseAbout(e.target.value)} className="w-full p-2 border rounded-lg" />
        </div>

        {/* What You Will Learn */}
        <div>
          <label className="block font-medium">What You Will Learn</label>
          {courseYouLearn.map((value, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input type="text" required value={value} onChange={(e) => updateLearnPoint(index, e.target.value)} className="w-full border rounded-lg p-2" />
              {courseYouLearn.length > 1 && (
                <button type="button" onClick={() => removeLearnPoint(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                  ✕
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addLearnPoint} className="cursor-pointer mt-2 bg-blue-500 text-white px-3 py-1 rounded">
            + Add Point
          </button>
        </div>

        {/* Submit */}
        <button type="submit" className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg w-full font-semibold">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;