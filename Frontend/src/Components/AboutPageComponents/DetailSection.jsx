import React from "react";

const DetailSection = () => {
  return (
    <section className="container max-w-6xl mx-auto py-10 sm:py-14 md:py-20 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
          alt="About Us"
          className="rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl object-cover"
        />
      </div>

      {/* Text */}
      <div>
        <h6 className="text-blue-600 uppercase tracking-widest mb-2 text-sm sm:text-base">
          About Us
        </h6>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Your First Choice for IT Training & Career Growth
        </h2>
        <p className="mb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
          Learn programming, AI, data science, and fullstack development skills with expert guidance. Practical
          courses, flexible schedules, and career-focused learning designed to help you excel in
          today’s competitive technology-driven world.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-green-500 text-white text-center p-4 rounded-md">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">20+</h1>
            <p className="uppercase text-xs sm:text-sm">Subjects</p>
          </div>
          <div className="bg-blue-500 text-white text-center p-4 rounded-md">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">10+</h1>
            <p className="uppercase text-xs sm:text-sm">Courses</p>
          </div>
          <div className="bg-gray-500 text-white text-center p-4 rounded-md">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">10+</h1>
            <p className="uppercase text-xs sm:text-sm">Instructors</p>
          </div>
          <div className="bg-yellow-500 text-white text-center p-4 rounded-md">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">1200+</h1>
            <p className="uppercase text-xs sm:text-sm">Students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;