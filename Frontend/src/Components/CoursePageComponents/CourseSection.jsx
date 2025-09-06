import React, { useContext } from "react";
import { myContext } from "../../Context/MyContextProvider";

const CourseSection = () => {
  const { courseData, url } = useContext(myContext);

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courseData.map((value, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_silver]">
            <img className="rounded-t-lg w-full h-48 object-cover" src={value.courseImage ? `${url}/uploads/${value.courseImage}` : ""} alt={value.courseName} />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{value.courseName}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.courseDescription}</p>
              <a
                href={`/course/${value._id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read More
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
