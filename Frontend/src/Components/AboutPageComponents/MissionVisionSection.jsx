import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Mission */}
        <div className="bg-white shadow-2xl rounded-lg p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <FaBullseye className="text-blue-600 mr-2" size={26} />
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Our Mission</h3>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To provide high-quality, practical IT training that helps learners excel in their careers.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-2xl rounded-lg p-6 border border-gray-100">
          <div className="flex items-center mb-4">
            <FaEye className="text-blue-600 mr-2" size={26} />
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600">Our Vision</h3>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            To become the most trusted source for IT skill development worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
