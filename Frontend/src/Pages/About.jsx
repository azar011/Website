import React from "react";
import { FaGraduationCap, FaCertificate, FaBookReader } from "react-icons/fa";
import Header from '../Components/CommonComponents/Header'
import { FaBullseye, FaEye } from "react-icons/fa";


const About = () => {
  return (
    <main className="w-full">
      {/* Page Header */}
      <Header />
      {/* About Section */}
      <section className="container mx-auto py-10 sm:py-14 md:py-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src="/img/about.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md w-full object-cover"
          />
        </div>
        {/* Text */}
        <div>
          <h6 className="text-blue-600 uppercase tracking-widest mb-2 text-sm sm:text-base">
            About Us
          </h6>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            First Choice For Online Education Anywhere
          </h2>
          <p className="mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et,
            tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-green-500 text-white text-center p-4 rounded-md">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">123</h1>
              <p className="uppercase text-xs sm:text-sm">Subjects</p>
            </div>
            <div className="bg-blue-500 text-white text-center p-4 rounded-md">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">1234</h1>
              <p className="uppercase text-xs sm:text-sm">Courses</p>
            </div>
            <div className="bg-gray-500 text-white text-center p-4 rounded-md">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">123</h1>
              <p className="uppercase text-xs sm:text-sm">Instructors</p>
            </div>
            <div className="bg-yellow-500 text-white text-center p-4 rounded-md">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">1234</h1>
              <p className="uppercase text-xs sm:text-sm">Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                  Learn from certified trainers with years of real-world IT experience in
                  software development, cloud computing, cybersecurity, and more.
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
                  Our training programs prepare you for globally recognized certifications such as
                  AWS, Microsoft Azure, Cisco, CompTIA, and more.
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
                  Work on real-life projects, use industry-standard tools, and gain practical skills
                  that you can apply immediately in your IT career.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src="/img/feature.jpg"
            alt="IT Training Features"
            className="rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md w-full object-cover"
          />
        </div>
      </section>




      {/* Mission & Vision */}
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


    </main>
  );
};

export default About;
