import React from "react";
import { coursesData } from "../../assets/assets";

const CourseSection = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_silver]">
            <a href="#">
              <img className="rounded-t-lg w-full h-48 object-cover" src={course.courseImg} alt={course.courseName} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{course.courseName}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.courseSubTitle}</p>
              <a
                href={`/course/${course.id}`}
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
