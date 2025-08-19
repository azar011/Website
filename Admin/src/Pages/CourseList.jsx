import React, { useContext } from "react";
import { myContext } from "../Context/MyContextProvider";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const CourseList = () => {

    const { courseData } = useContext(myContext)

    console.log(courseData);

  return (
    <div className="p-3">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Our Services</h2>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-left">
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Description</th>
              <th className="p-4 font-semibold">Topics</th>
              <th className="p-4 font-semibold">Hours</th>
              <th className="p-4 font-semibold">About</th>
              <th className="p-4 font-semibold">What You Will Learn</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {courseData.map((value, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors duration-200">
                <td className="p-3 font-medium text-gray-800">{value.courseName}</td>
                <td className="p-3 line-through text-gray-800">{value.courseDescription}</td>
                <td className="p-3 font-bold text-green-600">{value.courseTopicsCount}</td>
                <td className="p-3 text-red-500">{value.courseHours}</td>
                <td className="p-3 text-gray-800">{value.courseAbout}</td>
                <td className="p-3 text-gray-800">{value.courseYouLearn}</td>
                <td className="p-3">
                  {/* <ul className="space-y-1">
                    {value.serviceFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-800">
                        <FaCheckCircle className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul> */}
                </td> 
                <td className="p-3 text-center">
                  <button onClick={() => serviceModalFun(value._id)} className="cursor-pointer flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md shadow-md">
                    <FaEdit /> Update
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button onClick={() => serviceDeleteFun(value._id)} className="cursor-pointer flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md shadow-md">
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CourseList;
