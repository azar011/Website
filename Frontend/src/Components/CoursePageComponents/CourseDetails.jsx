import { BookOpen, Lightbulb, ListChecks, Users, Shield, User, Star, Gift } from "lucide-react";
import { HiCheckCircle } from "react-icons/hi";
import { useState, useEffect, useContext } from "react";
import { FaLayerGroup, FaClock, FaFileAlt, FaDownload, FaLaptopCode, FaClosedCaptioning, FaMedal, FaInfinity, FaPlayCircle } from "react-icons/fa";
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'
import { Link } from 'react-router-dom'
import { myContext } from "../../Context/MyContextProvider";

const iconMap = {
  BookOpen,
  Lightbulb,
  ListChecks,
  Users,
  User,
  Gift,
};

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
      "Mastering Spring Boot isn’t just about writing better code—it’s also a great career move. Companies are actively hiring Spring Boot developers, with salaries ranging from $164K to $306K per year and a median of $219K, according to Glassdoor.",
    ],
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
      "Deploy Spring Boot applications with ease",
    ],
  },
  {
    id: "curriculum",
    label: "Curriculum",
    icon: "ListChecks",
    title: "Curriculum",
    paragraphs: ["This course includes:"],
    list: ["80+ lessons across multiple modules", "Hands-on coding exercises", "Downloadable resources", "Real-world project: Spring Store"],
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
      "Want to understand dependency injection and JPA deeply",
    ],
  },

  {
    id: "instructor",
    label: "Your Instructor",
    icon: "User",
    title: "Your Instructor",
    paragraphs: [
      "Hi, I’m Anis Fathima. With over 5 years of experience in the software industry, I’ve taught millions of students worldwide through my courses. My teaching style is practical, clear, and focused on real-world skills.",
    ],
  },
 
  {
    id: "bonus",
    label: "Exclusive Bonus",
    icon: "Gift",
    title: "Exclusive Bonus",
    paragraphs: ["Enroll today and get access to additional downloadable resources, project files, and lifetime updates to the course content."],
  },
];

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

  const { courseData } = useContext(myContext)

  return (
    <>
        <Header />

        <div className='bg-gray-50'>
          {/* Hero Section */}
          <section className="text-black lg:py-16 py-4 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:pl-10  gap-10 items-center">
              {/* Left Side */}
              {courseData.map((value, index) => (
                <>
                
                <div key={index}>
                  <p className="text-blue-700 mb-3 lg:text-2xl font-bold">A Course You'll Actually Finish</p>

                  <h1 className="text-5xl lg:block md:hidden hidden font-bold mb-4 leading-tight">{value.courseName}</h1>
                  <h1 className="text-3xl lg:hidden md:block block font-bold mb-4 leading-tight">{value.courseName}</h1>

                  <p className="text-gray-800 text-lg mb-8">{value.courseDescription}</p>

                  <Link to='/contact' >
                    <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-full font-semibold transition">Enroll Now</button>
                  </Link>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xs sm:max-w-sm md:w-[320px] mx-auto border border-transparent hover:border-blue-200">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaLayerGroup /></span>
                <span>Beginner to Intermediate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaClock /></span>
                <span>{value.courseHours} Hours</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaFileAlt /></span>
                <span>{value.courseTopicsCount} Lessons</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaLaptopCode /></span>
                <span>Hands on Exercises</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaMedal /></span>
                <span>Certificate of Completion</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaInfinity /></span>
                <span>Lifetime Access</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-700 text-lg"><FaPlayCircle /></span>
                <span>Learn at Your Own Pace</span>
              </li>
            </ul>
        </div> 

                </>
              ))}

        </div>
          </section>

          <div className="py-2 px-4">
            <p className="text-center text-black text-lg max-w-3xl mx-auto leading-relaxed">
              Say goodbye to scattered tutorials and endless fluff. This course gives you a clear, structured path with bite-sized videos that blend theory and hands-on practice.
            </p>
          </div>

          {/* Detail Section */}

          <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

              {/* Grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Sidebar for desktop (sticky) */}
                <aside className="hidden md:block md:col-span-1 sticky top-20 self-start">
                  <ul className="space-y-6">
                    {courseContent.map((item, index) => {
                      const Icon = iconMap[item.icon];
                      return (
                        <li key={index}>
                          <a href={`#${item.id}`} className={`flex items-center space-x-3 transition ${activeId === item.id ? "text-blue-700" : "text-black hover:text-blue-700"}`}>
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-8">
                    <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">Enroll Now</button>
                  </div>
                </aside>

                {/* Right content */}
                <div className="md:col-span-3 space-y-10">
                  {courseContent.map((item, index) => (
                    <div key={index} id={item.id} className="scroll-mt-15">
                      <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                      {item.paragraphs &&
                        item.paragraphs.map((p, i) => (
                          <p key={i} className="text-black mb-4">
                            {p}
                          </p>
                        ))}
                      {item.list && (
                        <ul className="list-disc list-inside text-black space-y-2">
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
          </section>
          
        </div>

      <Footer />

    </>
  );
};

export default CoursePage;
