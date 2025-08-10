import React from "react";

const DetailSection = () => {
  return (
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
  );
};

export default DetailSection;
