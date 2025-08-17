import {
    BookOpen,
    Lightbulb,
    ListChecks,
    Users,
    Shield,
    User,
    Star,
    Gift,
} from "lucide-react";
import { HiCheckCircle } from "react-icons/hi";
import { useState, useEffect } from "react";
import { FaLayerGroup, FaClock, FaFileAlt, FaDownload, FaLaptopCode, FaClosedCaptioning, FaMedal, FaInfinity, FaPlayCircle } from "react-icons/fa";


// Map icons from string names
const iconMap = {
    BookOpen,
    Lightbulb,
    ListChecks,
    Users,
    Shield,
    User,
    Star,
    Gift,
};


// Hero Content
const heroContent = [
    {
        tag: "A Course You'll Actually Finish",
        title: "Spring Boot: Mastering the Fundamentals",
        subtitle:
            "Master dependency injection and database integration with Spring Boot and Spring Data JPA",
        cta: "Enroll Now",
    }
];

// Dummy hero content (dynamic)
const features = [
    { icon: <FaLayerGroup />, text: "Beginner to Intermediate" },
    { icon: <FaClock />, text: "6 Hours" },
    { icon: <FaFileAlt />, text: "80 Lessons" },
    { icon: <FaDownload />, text: "Downloadable Content" },
    { icon: <FaLaptopCode />, text: "Hands-on Exercises" },
    { icon: <FaClosedCaptioning />, text: "English Captions" },
    { icon: <FaMedal />, text: "Certificate of Completion" },
    { icon: <FaInfinity />, text: "Lifetime Access" },
    { icon: <FaPlayCircle />, text: "Learn at Your Own Pace" },
];



// ✅ JSON data directly in same file
const courseContent = [
    {
        id: "about",
        label: "About the Course",
        icon: "BookOpen",
        title: "About the Course",
        paragraphs: [
            "Spring Boot is the go-to framework for modern Java development. Whether you’re building web applications, microservices, or enterprise applications, Spring Boot simplifies the process by handling configuration, dependency management, and embedded servers—allowing you to build and deploy applications quickly.",
            "Mastering Spring Boot isn’t just about writing better code—it’s also a great career move. Companies are actively hiring Spring Boot developers, with salaries ranging from $164K to $306K per year and a median of $219K, according to Glassdoor.",
            "Spring Boot is the go-to framework for modern Java development. Whether you’re building web applications, microservices, or enterprise applications, Spring Boot simplifies the process by handling configuration, dependency management, and embedded servers—allowing you to build and deploy applications quickly.",
            "Mastering Spring Boot isn’t just about writing better code—it’s also a great career move. Companies are actively hiring Spring Boot developers, with salaries ranging from $164K to $306K per year and a median of $219K, according to Glassdoor."
        ]
    },
    {
        id: "learn",
        label: "What You’ll Learn",
        icon: "Lightbulb",
        title: "What You’ll Learn",
        list: [
            "Master dependency injection and Spring Boot architecture",
            "Work with Spring Data JPA for database integration",
            "Build RESTful APIs and microservices",
            "Handle configuration and environment setup",
            "Deploy Spring Boot applications with ease"
        ]
    },
    {
        id: "curriculum",
        label: "Curriculum",
        icon: "ListChecks",
        title: "Curriculum",
        paragraphs: ["This course includes:"],
        list: [
            "80+ lessons across multiple modules",
            "Hands-on coding exercises",
            "Downloadable resources",
            "Real-world project: Spring Store"
        ]
    },
    {
        id: "audience",
        label: "Target Audience",
        icon: "Users",
        title: "Target Audience",
        paragraphs: ["This course is designed for developers who:"],
        list: [
            "Are new to Spring Boot and want a strong foundation",
            "Want to build enterprise-grade applications",
            "Are Java developers aiming to upskill",
            "Want to understand dependency injection and JPA deeply"
        ]
    },
    {
        id: "prerequisites",
        label: "Prerequisites",
        icon: "Shield",
        title: "Prerequisites",
        list: [
            "Basic knowledge of Java",
            "Familiarity with object-oriented programming",
            "No prior experience with Spring required"
        ]
    },
    {
        id: "instructor",
        label: "Your Instructor",
        icon: "User",
        title: "Your Instructor",
        paragraphs: [
            "Hi, I’m Mosh Hamedani. With over 20 years of experience in the software industry, I’ve taught millions of students worldwide through my courses. My teaching style is practical, clear, and focused on real-world skills."
        ]
    },
    {
        id: "reviews",
        label: "Reviews",
        icon: "Star",
        title: "Reviews",
        paragraphs: [
            "⭐⭐⭐⭐⭐ “This course made Spring Boot so easy to understand. Everything is well structured and practical.” – Student Review"
        ]
    },
    {
        id: "bonus",
        label: "Exclusive Bonus",
        icon: "Gift",
        title: "Exclusive Bonus",
        paragraphs: [
            "Enroll today and get access to additional downloadable resources, project files, and lifetime updates to the course content."
        ]
    }
];


// Dynamic Data
const priceCard = {
    title: "Buy this Course",
    subtitle: "Own this course forever.",
    price: "₹866",
    oldPrice: "₹8,658",
    note: "You'll be charged $9 + tax",
    buttonText: "Buy This Course",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    tag: {
        text: "90% OFF",
        color: "bg-pink-600",
    },
    features: [
        "This course only",
        "6 hours of HD video",
        "Lifetime access",
        "Downloadable content",
    ],
};




const CoursePage = () => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: "0px 0px -80% 0px", // middle of the viewport
                threshold: 0, // trigger when any part intersects the middle
            }
        );

        courseContent.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);


    return (

        <>

            {/* Hero Section */}
            <section className="bg-black text-white py-16 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:pl-10  gap-10 items-center">

                    {/* Left Side */}
                    {heroContent.map((hero, i) => (
                        <div key={i}>
                            <p className="text-purple-400 mb-3 font-semibold">
                                {hero.tag}
                            </p>

                            <h1 className=" lg:text-5xl sm:text-4xl font-bold mb-4 leading-tight">
                                {hero.title}
                            </h1>

                            <p className="text-gray-300 text-lg mb-8">
                                {hero.subtitle}
                            </p>

                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition">
                                {hero.cta}
                            </button>
                        </div>
                    ))}



                    {/* Right Side Card */}
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6  shadow-lg w-full max-w-xs sm:max-w-sm md:w-[320px] mx-auto">
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-gray-200"
                                >
                                    <span className="text-purple-400 text-lg">{feature.icon}</span>
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            <div className="bg-black py-2 px-4">
                <p className="text-center text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                    Say goodbye to scattered tutorials and endless fluff. This course gives
                    you a clear, structured path with bite-sized videos that blend theory
                    and hands-on practice.
                </p>
            </div>



            {/* Detail Section */}

            < section className="bg-black text-white py-10" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                    {/* Sidebar for mobile (top, not sticky) */}
                    <aside className="block md:hidden mb-8">
                        <ul className="flex flex-wrap gap-4 justify-center">
                            {courseContent.map((item, index) => {
                                const Icon = iconMap[item.icon];
                                return (
                                    <li key={index}>
                                        <a
                                            href={`#${item.id}`}
                                            className={`flex items-center space-x-3 transition ${activeId === item.id ? "text-purple-400" : "text-gray-400 hover:text-purple-400"
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{item.label}</span>
                                        </a>

                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-6 flex justify-center">
                            <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
                                Enroll Now
                            </button>
                        </div>
                    </aside>

                    {/* Grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                        {/* Sidebar for desktop (sticky) */}
                        <aside className="hidden md:block md:col-span-1 sticky top-20 self-start">
                            <ul className="space-y-6">
                                {courseContent.map((item, index) => {
                                    const Icon = iconMap[item.icon];
                                    return (
                                        <li key={index}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`flex items-center space-x-3 transition ${activeId === item.id ? "text-purple-400" : "text-gray-400 hover:text-purple-400"
                                                    }`}
                                            >

                                                <Icon className="w-5 h-5" />
                                                <span>{item.label}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-8">
                                <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
                                    Enroll Now
                                </button>
                            </div>
                        </aside>

                        {/* Right content */}
                        <div className="md:col-span-3 space-y-10">
                            {courseContent.map((item, index) => (
                                <div key={index} id={item.id} className="scroll-mt-15">
                                    <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                                    {item.paragraphs &&
                                        item.paragraphs.map((p, i) => (
                                            <p key={i} className="text-gray-400 mb-4">{p}</p>
                                        ))}
                                    {item.list && (
                                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                                            {item.list.map((li, i) => (
                                                <li key={i}>{li}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section >

            {/* Price Card */}
            <div className="bg-black w-full">
                <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow-lg w-[350px] mx-auto relative">
                    {/* Discount Tag */}
                    {priceCard.tag && (
                        <span
                            className={`absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full ${priceCard.tag.color}`}
                        >
                            {priceCard.tag.text}
                        </span>
                    )}

                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-2">{priceCard.title}</h2>
                    <p className="text-gray-400 mb-4">{priceCard.subtitle}</p>

                    {/* Price Section */}
                    <div className="mb-4">
                        <span className="text-3xl font-bold text-white">{priceCard.price}</span>
                        <span className="text-gray-500 line-through ml-2">{priceCard.oldPrice}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-6">{priceCard.note}</p>

                    {/* Button */}
                    <button
                        className={`${priceCard.buttonColor} w-full text-white py-3 rounded-full font-semibold transition`}
                    >
                        {priceCard.buttonText}
                    </button>

                    {/* Features List */}
                    <ul className="mt-6 space-y-3 text-gray-300">
                        {priceCard.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <HiCheckCircle className="text-purple-400 text-lg" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </>
    );
};



export default CoursePage;
