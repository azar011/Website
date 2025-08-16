import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const Services = () => {
    const services = [
        {
            title: "Static Website",
            oldPrice: "₹7,999",
            price: "₹4,999",
            discount: "38% Off",
            description: "A fast, secure, and simple website for small businesses or portfolios.",
            features: ["Up to 5 Pages", "Responsive Design", "Basic SEO", "Contact Form"]
        },
        {
            title: "Dynamic Website",
            oldPrice: "₹14,999",
            price: "₹9,999",
            discount: "33% Off",
            description: "Interactive site with admin panel & content management system.",
            features: ["CMS Integration", "Admin Panel", "Responsive Design", "SEO Friendly"]
        },
        {
            title: "E-Commerce Website",
            oldPrice: "₹29,999",
            price: "₹19,999",
            discount: "33% Off",
            description: "Sell products online with secure payment gateways.",
            features: ["Product Management", "Payment Integration", "Order Tracking", "Mobile Friendly"]
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-10">
                    Our Website Development Services
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 flex flex-col justify-between 
                            hover:shadow-2xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {service.discount}
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <span className="text-gray-400 line-through mr-2">{service.oldPrice}</span>
                                <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-4">{service.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <HiCheckCircle className="text-green-500 mr-2" /> {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
                                text-white font-semibold py-3 rounded-xl shadow-lg 
                                hover:shadow-2xl hover:brightness-110 active:scale-95 transition-all duration-300">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
