import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

export default function About() {
  return (
    <>
      {/* <Header /> */}

      {/* Hero */}
      {/* <section
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: "url('/img/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          <div className="flex items-center space-x-3 mt-2 text-sm md:text-base">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>›</span>
            <span>About</span>
          </div>
        </div>
      </section> */}

      {/* About Us */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="/img/about.jpg"
            alt="About"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
        <div>
          <h6 className="text-secondary uppercase tracking-wide font-semibold">
            About Us
          </h6>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            First Choice For Online Education Anywhere
          </h1>
          <p className="mb-6 text-gray-700">
            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
            dolor diam ipsum et, tempor voluptua sit consetetur sit...
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-green-500 text-white p-4 rounded-lg">
              <h1 className="text-xl md:text-2xl font-bold">123</h1>
              <p className="text-sm">Available<br />Subjects</p>
            </div>
            <div className="bg-primary text-white p-4 rounded-lg">
              <h1 className="text-xl md:text-2xl font-bold">1234</h1>
              <p className="text-sm">Online<br />Courses</p>
            </div>
            <div className="bg-secondary text-white p-4 rounded-lg">
              <h1 className="text-xl md:text-2xl font-bold">123</h1>
              <p className="text-sm">Skilled<br />Instructors</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg">
              <h1 className="text-xl md:text-2xl font-bold">1234</h1>
              <p className="text-sm">Happy<br />Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h6 className="text-secondary uppercase tracking-wide font-semibold">
            Why Choose Us?
          </h6>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Why You Should Start Learning with Us?
          </h1>
          <p className="mb-6 text-gray-700">
            Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum
            dolores amet voluptua duo...
          </p>

          {/* Skilled Instructors */}
          <div className="flex items-start mb-6">
            <div className="bg-primary p-4 rounded-full mr-4 text-white flex items-center justify-center flex-shrink-0">
              <i className="fa fa-graduation-cap text-3xl md:text-4xl"></i>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Skilled Instructors</h4>
              <p className="text-gray-600">
                Labore rebum duo est Sit dolore eos sit tempor eos stet...
              </p>
            </div>
          </div>

          {/* International Certificate */}
          <div className="flex items-start mb-6">
            <div className="bg-secondary p-4 rounded-full mr-4 text-white flex items-center justify-center flex-shrink-0">
              <i className="fa fa-certificate text-3xl md:text-4xl"></i>
            </div>
            <div>
              <h4 className="text-lg font-semibold">International Certificate</h4>
              <p className="text-gray-600">
                Labore rebum duo est Sit dolore eos sit tempor eos stet...
              </p>
            </div>
          </div>

          {/* Online Classes */}
          <div className="flex items-start">
            <div className="bg-yellow-500 p-4 rounded-full mr-4 text-white flex items-center justify-center flex-shrink-0">
              <i className="fa fa-book-reader text-3xl md:text-4xl"></i>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Online Classes</h4>
              <p className="text-gray-600">
                Labore rebum duo est Sit dolore eos sit tempor eos stet...
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/img/feature.jpg"
            alt="Feature"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
