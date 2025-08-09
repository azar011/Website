
import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <>
        <div className="w-full px-4 py-10 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Contact Info */}
                <div className="bg-blue-50 p-6 rounded-lg flex flex-col justify-center space-y-8 gap-6">
                    {/* Location */}
                    <div className="flex items-center gap-4">
                    <div className="bg-blue-600 text-white p-4 rounded">
                        <HiLocationMarker size={28} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
                        <p className="text-gray-500">Trichy, TamilNadu</p>
                    </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                    <div className="bg-red-500 text-white p-4 rounded">
                        <HiPhone size={28} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                        <p className="text-gray-500">+91 63800 30086</p>
                    </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-center gap-4">
                    <div className="bg-yellow-400 text-white p-4 rounded">
                        <HiMail size={28} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                        <p className="text-gray-500">tech@gmail.com</p>
                    </div>
                    </div>
                </div>

                {/* Right Form */}
                <div>
                    <p className="text-red-500 font-semibold uppercase tracking-wider border-b-2 border-dashed border-red-400 inline-block mb-2">Need Help?</p>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Send Us A Message</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2" />
                        <input type="email" placeholder="Your Email" className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2" />
                        <input type="text" placeholder="Subject" className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 md:col-span-2" />
                        <textarea placeholder="Message" rows="4" className="border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 md:col-span-2"></textarea>
                        <button type="submit" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded md:col-span-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactForm;
