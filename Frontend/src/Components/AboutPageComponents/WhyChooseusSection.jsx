import React from "react";
import { FaGraduationCap, FaCertificate, FaBookReader } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <section className="container mx-auto py-10 sm:py-14 md:py-10 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Text */}
      <div>
        <h6 className="text-blue-600 uppercase tracking-widest mb-2 text-sm sm:text-base">
          Why Choose Us?
        </h6>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Why You Should Start Your IT Training with Us
        </h2>
        <p className="mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          We are committed to providing hands-on, industry-focused IT training that prepares you for
          real-world challenges.
        </p>

        {/* Features */}
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-blue-500 text-white p-3 sm:p-4 rounded-full mr-4 flex-shrink-0">
              <FaGraduationCap size={22} className="sm:size-[28px]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">Expert IT Trainers</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Learn from certified trainers with years of real-world IT experience.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gray-500 text-white p-3 sm:p-4 rounded-full mr-4 flex-shrink-0">
              <FaCertificate size={22} className="sm:size-[28px]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">Industry-Recognized Certifications</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Prepare for globally recognized certifications such as AWS, Azure, and more.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-yellow-500 text-white p-3 sm:p-4 rounded-full mr-4 flex-shrink-0">
              <FaBookReader size={22} className="sm:size-[28px]" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-semibold">Hands-On Training</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Work on real-life projects and gain practical skills for your IT career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src="https://www.its.ac.id/stp/wp-content/uploads/sites/113/2024/09/ilbi-shaking-corporate-meeting-together-teamwork-1.png"
          alt="IT Training Features"
          className="rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
