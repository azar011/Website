import React from "react";

const courses = [
  {
    title: "Full Stack Development",
    desc: "Master MERN stack and build dynamic, industry-ready web apps.",
    img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1213.jpg",
  },
  {
    title: "Data Science & AI",
    desc: "Learn Python, Machine Learning, and AI with real-world projects.",
    img: "https://img.freepik.com/free-vector/data-science-concept-illustration_114360-1020.jpg",
  },
  {
    title: "Cloud Computing",
    desc: "Hands-on training with AWS, Azure & Google Cloud platforms.",
    img: "https://img.freepik.com/free-vector/cloud-computing-concept-illustration_114360-2299.jpg",
  },
  {
    title: "Cyber Security",
    desc: "Explore ethical hacking and secure systems against real threats.",
    img: "https://img.freepik.com/free-vector/cyber-security-concept-illustration_114360-493.jpg",
  },
];

const CourseSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Our <span className="text-blue-600">Trending Courses</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Upgrade your career with our most in-demand courses, designed with industry experts to give you real-world skills.
        </p>

        {/* Course Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl 
                         transition-transform duration-300 hover:scale-105"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition">
                  Read More 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
