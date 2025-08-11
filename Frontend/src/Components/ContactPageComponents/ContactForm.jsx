// import React from "react";
// import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

// const ContactForm = () => {
//   return (
//     <>
//       <div className="w-full px-4 py-10 bg-white">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
//           {/* Left Contact Info */}
//           <div className="bg-blue-50 p-6 rounded-lg flex flex-col justify-center space-y-8 gap-6 md:col-span-5">
//             {/* Location */}
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-600 text-white p-4 rounded">
//                 <HiLocationMarker size={28} />
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
//                 <p className="text-gray-500">Trichy, TamilNadu</p>
//               </div>
//             </div>
//             {/* Phone */}
//             <div className="flex items-center gap-4">
//               <div className="bg-red-500 text-white p-4 rounded">
//                 <HiPhone size={28} />
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
//                 <p className="text-gray-500">+91 98765 43210</p>
//               </div>
//             </div>
//             {/* Email */}
//             <div className="flex items-center gap-4">
//               <div className="bg-yellow-400 text-white p-4 rounded">
//                 <HiMail size={28} />
//               </div>
//               <div>
//                 <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
//                 <p className="text-gray-500">vitecodetech@gmail.com</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Form */}
//           <div className="md:col-span-7">
//             <p className="text-red-500 font-semibold uppercase tracking-wider border-b-2 border-dashed border-red-400 inline-block mb-2">
//               Need Help?
//             </p>
//             <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
//               Send Us A Message
//             </h2>
//             <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2"
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 md:col-span-2"
//               />
//               <textarea
//                 placeholder="Message"
//                 rows="4"
//                 className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 md:col-span-2"
//               ></textarea>
//               <button
//                 type="submit"
//                 className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded md:col-span-2"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactForm;





import React, { useState } from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { FaFacebookF, FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactSection() {
  const [selectedInterest, setSelectedInterest] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.5)] ">
        
        {/* Left Section */}
        <div className="bg-[#0b0a27] text-white p-8 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold leading-snug">
              Let’s Design Your <br /> <span className="text-blue-400">Success</span> Together
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-blue-400"><HiMail size={28} /></span>
                <span>vitecodetech@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg w-fit">
                <span className="text-blue-400"><HiPhone size={28} /></span>
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-400"><HiLocationMarker size={28} /></span>
                <span>Trichy, TamilNadu</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-10 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaXTwitter /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 md:w-1/2">
          <p className="font-medium mb-4 lg:text-3xl md:text-2xl text-xl">I'm interested in...</p>
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setSelectedInterest("UI/UX design")}
              className={`px-4 py-2 border rounded-lg text-sm cursor-pointer ${
                selectedInterest === "UI/UX design"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
              }`}
            >
              Data Science
            </button>
            <button
              onClick={() => setSelectedInterest("Web design")}
              className={`px-4 py-2 border rounded-lg text-sm cursor-pointer ${
                selectedInterest === "Web design"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
              }`}
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectedInterest("Graphic design")}
              className={`px-4 py-2 border rounded-lg text-sm cursor-pointer ${
                selectedInterest === "Graphic design"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setSelectedInterest("Design system")}
              className={`px-4 py-2 border rounded-lg text-sm cursor-pointer ${
                selectedInterest === "Design system"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setSelectedInterest("Other")}
              className={`px-4 py-2 border rounded-lg text-sm cursor-pointer ${
                selectedInterest === "Other"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "border-gray-300 text-gray-700 hover:border-blue-700 hover:text-blue-700"
              }`}
            >
              Other
            </button>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm mb-2 font-medium">Enter Your Details </label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
                placeholder="Your Name"
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <textarea
                rows="3"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
