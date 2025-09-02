import React from "react";

const AboutHero = () => {
  return (
    <>
      <section className="bg-[#001F3F] text-white px-6 md:px-16 py-12 relative overflow-hidden">
        <div className="grid md:grid-cols-2 items-center gap-3 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-blue-400">Fast upskilling</span> in IT Courses...
            </h1>

            <p className="text-lg font-semibold">Hands-on training for students and professionals.</p>

            <p className="text-gray-300 max-w-lg">
              At <span className="font-bold text-blue-400">ViteCode Technologies</span>, we help learners gain job-ready skills through practical projects, expert guidance, and industry-aligned
              curriculum — whether you’re a beginner or career changer.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 px-6 py-3 rounded-lg">Enroll Now</button>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <img src="https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg" alt="Student learning" className="relative z-10 rounded-2xl shadow-lg" />
        </div>
      </section>
    </>
  );
};

export default AboutHero;
