import React from "react";

const ContactHeroSection = () => {
  return (
    <section className="relative bg-blue-600 text-white h-48 md:h-56 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/contact-bg.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-800 bg-opacity-75"></div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <nav className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="hover:underline">
            HOME
          </a>
          <span>»</span>
          <span className="font-semibold">CONTACT</span>
        </nav>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58,14.94,114,29.87,172,19.42,30.27-5.42,59.24-18.48,89.6-24.19,
            34.6-6.67,69.39-3.19,104.14,1.65,59.08,8.46,117.94,24.66,176,35.24,
            86,15.91,172,18.36,258,9.07,26.35-2.84,52.54-7.06,78.74-11.45V0H0
            V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default ContactHeroSection;
