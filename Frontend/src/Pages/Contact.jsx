import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: Contact form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions, suggestions, or just want to say hello? Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full h-32"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact info */}
        <div className="bg-blue-50 rounded-2xl p-6 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" size={28} />
            <div>
              <h4 className="font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">contact@yourdomain.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" size={28} />
            <div>
              <h4 className="font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" size={28} />
            <div>
              <h4 className="font-semibold text-gray-800">Location</h4>
              <p className="text-gray-600">Chennai, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
