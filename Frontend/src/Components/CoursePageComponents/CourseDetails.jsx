import React from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../../assets/assets";
import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";
import { FaStar, FaCheckCircle, FaBolt } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const CourseDetails = () => {
  const { id } = useParams();
  const selectedCourse = coursesData.find((a) => a.id === Number(id));

  // Dummy pricing
  const actualPrice = 19999;
  const discountPrice = 14999;
  const discountPercentage = Math.round(((actualPrice - discountPrice) / actualPrice) * 100);
  const emiPrice = Math.round(discountPrice / 24);

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto min-h-screen px-5 py-10 text-gray-900 dark:text-white">
        
        {/* Course Name */}
        <h1 className="text-4xl font-bold mb-2">{selectedCourse.courseName}</h1>

        {/* Rating Row */}
        <div className="flex items-center gap-2 text-sm mb-4">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
          <FaStar className="text-yellow-500/70" />
          <span className="ml-2 font-semibold">4.1</span>
          <span className="text-gray-500">· Very Good · 1,130 ratings</span>
        </div>

        {/* Pricing Section */}
        <div className="mb-6">
          <p className="text-3xl font-bold">₹{emiPrice}/month</p>
          <p className="text-sm text-gray-500">
            24 months Cost EMI Plan with SBI credit-card.
            <span className="text-blue-600 cursor-pointer hover:underline ml-1">Details</span>
          </p>
          <div className="flex items-center gap-2 mt-2 text-lg">
            <span className="text-green-600 font-semibold">-{discountPercentage}%</span>
            <span className="line-through text-gray-500">₹{actualPrice.toLocaleString()}</span>
            <span className="font-bold">₹{discountPrice.toLocaleString()}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1 flex items-center">
            Or Pay ₹{(discountPrice - 100).toLocaleString()} + <FaBolt className="text-yellow-500 mx-1" /> 100
          </p>
        </div>

        {/* Course Details Inline */}
        <div className="flex flex-wrap gap-6 mb-6 text-sm">
          <span><strong>Duration:</strong> {selectedCourse.courseDuration}</span>
          <span><strong>Certificate:</strong> Yes, on completion</span>
          <span><strong>Mode:</strong> Online</span>
        </div>

        {/* Topics */}
        <h2 className="text-2xl font-bold mb-3">Topics Covered</h2>
        <ul className="space-y-2 mb-6">
          {["HTML & CSS", "JavaScript Fundamentals", "React.js", "Node.js & Express.js", "MongoDB"].map((topic, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> {topic}
            </li>
          ))}
        </ul>

        {/* Enroll Button */}
        <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-700 rounded-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300">
          Enroll Now <MdKeyboardArrowRight className="ml-2 text-xl" />
        </button>

      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
