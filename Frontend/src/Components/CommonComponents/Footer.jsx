// import React from "react";
// import {
//   FaBookReader,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaAngleRight,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#0b0a27] text-gray-400 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Logo + Description */}
//           <div>
//             <h1 className="flex items-center text-white text-2xl font-bold mb-4">
//               <FaBookReader className="mr-2 text-white" /> LEARNING
//             </h1>
//             <p>
//               Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem
//               at et diam est, tempor rebum ipsum sit ea tempor stet et
//               consetetur dolores. Justo stet diam ipsum lorem vero clita diam
//             </p>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Newsletter
//             </h3>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Your Email Address"
//                 className="flex-1 px-4 py-3 rounded-l-md focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition"
//               >
//                 Join
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Middle Links */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
//           {/* Get In Touch */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Get In Touch
//             </h3>
//             <p className="flex items-center mb-2">
//               <FaMapMarkerAlt className="mr-2" /> 123 Street, New York, USA
//             </p>
//             <p className="flex items-center mb-2">
//               <FaPhoneAlt className="mr-2" /> +012 345 67890
//             </p>
//             <p className="flex items-center mb-4">
//               <FaEnvelope className="mr-2" /> info@example.com
//             </p>
//             <div className="flex space-x-4 text-white">
//               <a href="#" className="hover:text-blue-400">
//                 <FaTwitter size={20} />
//               </a>
//               <a href="#" className="hover:text-blue-400">
//                 <FaFacebookF size={20} />
//               </a>
//               <a href="#" className="hover:text-blue-400">
//                 <FaLinkedinIn size={20} />
//               </a>
//               <a href="#" className="hover:text-blue-400">
//                 <FaInstagram size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Our Courses */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Our Courses
//             </h3>
//             <ul className="space-y-2">
//               {["Web Design", "Web Development", "Frontend Development", "Full Stack Web Development", "Programming Languages"].map(
//                 (course, i) => (
//                   <li key={i} className="flex items-center hover:text-blue-400">
//                     <FaAngleRight className="mr-2" /> {course}
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 "Privacy Policy",
//                 "Terms & Condition",
//                 "Regular FAQs",
//                 "Help & Support",
//                 "Contact",
//               ].map((link, i) => (
//                 <li key={i} className="flex items-center hover:text-blue-400">
//                   <FaAngleRight className="mr-2" /> {link}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
//           <p>
//             Copyright &copy;{" "}
//             <a href="#" className="text-white hover:text-blue-400">
//               Your Site Name
//             </a>
//             . All Rights Reserved.
//           </p>
//           <p>
//             Designed and Developed by{" "}
//             <a
//               href="https://htmlcodex.com"
//               className="text-white hover:text-blue-400"
//             >
//               Technologies
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaAngleRight,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b0a27] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h1 className="flex items-center text-white text-2xl font-bold mb-4">
              ViteCode Technologies
            </h1>
            <p>
               ViteCode Technologies is a leading provider of innovative web development
                solutions, specializing in creating modern, responsive, and high-performance
                websites and applications.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> Trichy, TamilNadu
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> +91 63800 30086
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-2" /> vitecodetech@gmail.com
            </p>
            <div className="flex space-x-4 text-white">
              <a href="#" className="hover:text-blue-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {[
                "Data Science",
                "Web Design",
                "Web Development",
                "Frontend Development",
                "Full Stack Web Development",
              ].map((course, i) => (
                <li key={i} className="flex items-center hover:text-blue-400">
                  <FaAngleRight className="mr-2" /> {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
              {[
                "Privacy Policy",
                "Terms & Condition",
                "Regular FAQs",
                "Help & Support",
                "Contact",
              ].map((link, i) => (
                <li key={i} className="flex items-center hover:text-blue-400">
                  <FaAngleRight className="mr-2" /> {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>
            Copyright &copy;{" "}
            <a href="#" className="text-white hover:text-blue-400">
              ViteCode Technologies
            </a>
            . All Rights Reserved.
          </p>
          <p>
            Designed and Developed by{" "}
            <a href="#" className="text-white hover:text-blue-400">
              ViteCode Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
