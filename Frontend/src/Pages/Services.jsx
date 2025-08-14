import React from "react";
import { Card } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

const Services = () => {
    const services = [
        {
            title: "Static Website",
            description: "A fast, secure, and simple website for small businesses or portfolios.",
            oldPrice: "7,999",
            price: "₹4,999",
            features: ["Up to 5 Pages", "Responsive Design", "Basic SEO", "Contact Form"],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Dynamic Website",
            description: "Interactive site with admin panel & content management system.",
            oldPrice: "₹14,999",
            price: "₹9,999",
            features: ["CMS Integration", "Admin Panel", "Responsive Design", "SEO Friendly"],
            gradient: "from-blue-500 to-green-500"
        },
        {
            title: "E-Commerce Website",
            description: "Sell products online with secure payment gateways.",
            oldPrice: "₹29,999",
            price: "₹24,999",
            features: ["Product Management", "Payment Integration", "Order Tracking", "Mobile Friendly"],
            gradient: "from-fuchsia-500 to-pink-500"
        },
        {
            title: "Custom Web Application",
            description: "Tailor-made web apps with unique features & scalability.",
            oldPrice: "₹49,999",
            price: "₹39,999",
            features: ["Custom Features", "Scalable Design", "API Integration", "High Security"],
            gradient: "from-orange-500 to-blue-500"
        }
    ];

    return (

        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-6">
                    Our Website Development Services
                </h2>



                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 bg-white overflow-hidden"
                        >
                            {/* Gradient Banner */}
                            <div
                                className={`p-4 text-white text-center font-semibold text-lg bg-gradient-to-r ${service.gradient}`}
                            >
                                {service.title}
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <p className="text-gray-600">{service.description}</p>

                                {/* Features */}
                                <ul className="mt-4 space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-gray-600">
                                            <HiCheckCircle className="text-green-500 mr-2" /> {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Price */}
                                {/* <div className="text-2xl font-bold text-indigo-600 mt-6">{service.price}</div> */}
                                {/* Price */}
                                <div className="mt-6">
                                    <span className="text-lg text-gray-500 line-through mr-2">{service.oldPrice}</span>
                                    <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                                </div>



                                {/* Button */}
                                <button className="mt-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:via-red-500 hover:to-pink-500 transition-all duration-300">
                                    Get Started
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
