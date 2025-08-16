// import { Button, Card } from "flowbite-react";
// import {
//   FaChartBar,
//   FaPlayCircle,
//   FaFileAlt,
//   FaKeyboard,
//   FaMedal,
//   FaInfinity,
//   FaClock,
//   FaBook,
//   FaLightbulb,
//   FaListAlt,
//   FaUsers,
//   FaClipboardCheck,
//   FaUserTie,
//   FaCommentDots,
//   FaGift,
// } from "react-icons/fa";
// import { useState } from "react";
// import Header from "../CommonComponents/Header";
// import Footer from "../CommonComponents/Footer";

// export default function SpringBootCourse() {
//   const [activeTab, setActiveTab] = useState("about");

//   const tabs = [
//     { id: "about", label: "About the Course", icon: <FaBook /> },
//     { id: "learn", label: "What You'll Learn", icon: <FaLightbulb /> },
//     { id: "curriculum", label: "Curriculum", icon: <FaListAlt /> },
//     { id: "audience", label: "Target Audience", icon: <FaUsers /> },
//     { id: "prereq", label: "Prerequisites", icon: <FaClipboardCheck /> },
//     { id: "instructor", label: "Your Instructor", icon: <FaUserTie /> },
//     { id: "reviews", label: "Reviews", icon: <FaCommentDots /> },
//     { id: "bonus", label: "Exclusive Bonus", icon: <FaGift /> },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case "about":
//         return (
//           <>
//             <p className="text-purple-600 font-medium">Made with 💜</p>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Course</h2>
//             <p className="text-gray-700 mb-4">
//               Spring Boot is the go-to framework for modern Java development. Whether you’re building web applications, microservices, or enterprise applications, Spring Boot simplifies the process by
//               handling configuration, dependency management, and embedded servers—allowing you Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eos sapiente soluta ducimus nobis
//               rem doloribus quaerat voluptas consectetur optio vero, fuga saepe sunt quasi odio et reiciendis perspiciatis praesentium sit iure possimus nesciunt! Fugiat delectus laborum optio beatae
//               natus quia, nihil voluptas possimus. Iste praesentium accusamus sunt repellendus, delectus voluptatum quisquam aperiam tenetur, alias voluptates modi neque fugiat. Totam iste doloribus
//               eius ut. Possimus totam ea aut voluptate nemo aperiam omnis sunt laborum ex quas illum in iste vel quo, itaque maiores cumque, beatae culpa sequi dolorem! Repellendus porro autem
//               perferendis. Similique voluptatum culpa dolores, quisquam, hic eligendi est unde nulla porro, assumenda quo. Error veritatis eveniet architecto? Neque amet in excepturi sequi quibusdam
//               ut aspernatur culpa, saepe eaque optio tenetur qui impedit repudiandae, ab obcaecati! Deleniti et quia vel, ut exercitationem placeat nam nesciunt quidem? Fuga debitis non architecto
//               assumenda sapiente provident! Saepe cumque dolorum unde dolores natus cum est voluptatum, perferendis sequi eius obcaecati quo rerum vel animi dolore officiis magni, nemo quisquam. Quo
//               consectetur unde similique temporibus corrupti. Quos ad dignissimos, at recusandae pariatur consectetur quisquam, dolore unde possimus harum blanditiis repellat fugiat magni nihil libero
//               placeat sit voluptas. In dolorem quasi eos autem tempora ipsa ad rem sunt vero soluta alias beatae, magni perferendis deleniti laudantium ullam similique nulla, placeat aspernatur
//               dignissimos odio eveniet. Sequi in unde porro corrupti, repellat rem exercitationem dolore consectetur expedita voluptatibus sapiente dolores odio laudantium cupiditate quasi voluptatum
//               itaque veritatis dolor sint possimus temporibus? Dignissimos unde tempore excepturi autem illum tenetur odio? Magnam, earum. Vero veritatis magnam officiis amet magni laborum fugit ad
//               suscipit labore nulla! Repellendus, veniam blanditiis. Aperiam quibusdam voluptatum accusantium voluptates voluptas corrupti natus eum saepe, quia neque dolorum vel placeat iste,
//               perspiciatis deserunt veniam, quis corporis quod repudiandae rerum tenetur. Tempora ad nisi voluptatum qui velit nam, quam cum inventore itaque, ratione rerum rem temporibus error modi
//               ipsam minima officia, odit ipsa. Quibusdam, autem impedit? Nostrum enim incidunt velit labore unde magni, id neque aspernatur aut eveniet illum minima earum eius natus, quae non dolore
//               voluptates ipsa exercitationem ipsum repellat temporibus officiis. Ab, aperiam corporis. Esse doloribus neque atque aut! Sint, accusamus laudantium, vero inventore ipsum neque eaque
//               sequi quae sit non consequatur esse! Modi vitae excepturi doloribus dignissimos veritatis accusantium, pariatur quo sapiente expedita possimus vel numquam, animi nemo voluptas,
//               architecto cumque sint magni iure. Adipisci dolor, atque consequuntur aperiam vero officiis repellendus non, culpa quidem minus illo sed exercitationem enim. Quo et neque perspiciatis
//               nihil accusamus quis, saepe in perferendis odit dignissimos temporibus deleniti cupiditate non ex eveniet, vel numquam dolore, ducimus dolorum! Architecto veniam earum dolorem nesciunt
//               hic similique, quasi iusto, eius eum aperiam asperiores, totam nostrum eaque omnis ut excepturi labore id iste nobis fugit perferendis. Odio, molestias animi totam sit quae impedit ad
//               asperiores aut aperiam non commodi at magni, optio vel? Vero repellendus dolores quo quidem asperiores soluta labore consequatur perferendis. Veritatis accusamus est iure quae architecto
//               animi voluptates saepe, qui eos natus, ex aliquid quidem quam officiis dolore consequuntur, fugit sit possimus inventore! Quam perspiciatis quod inventore vel cum? Cumque consectetur vel
//               tempora atque eligendi recusandae itaque et exercitationem culpa ratione! Doloremque vitae consequuntur deleniti, nostrum mollitia accusantium ipsum deserunt autem ea labore itaque illum
//               odio quod, numquam dicta eaque fuga eius nobis vero animi neque blanditiis et! Voluptas enim repellendus hic sequi rem suscipit itaque dolores maxime amet odit, quas inventore ratione
//               omnis aut, quia quis mollitia eos sit dicta cumque. A possimus repellendus voluptates cumque libero? Cupiditate veritatis porro pariatur quia, atque ea in maxime minus recusandae quae
//               molestias ab commodi, libero fuga suscipit aut? Consectetur quidem odio amet nesciunt at veritatis dolore commodi deleniti, modi blanditiis esse voluptatum ratione eos ipsa eligendi
//               praesentium pariatur non, corrupti inventore. Obcaecati, repellat odio dolore at, suscipit officiis culpa blanditiis nesciunt rerum nihil pariatur? Aliquid ratione cupiditate repudiandae
//               tempore minus ducimus accusamus nulla aut. Quos quas eius nisi rem? Praesentium nobis, magnam quam eveniet, accusamus et quae ducimus dicta velit aliquam minus aspernatur quibusdam
//               corporis quo ab, reprehenderit cupiditate quis alias beatae assumenda minima. Dolore quisquam animi quam earum nihil perspiciatis nesciunt quibusdam nobis enim, at minima labore
//               consequuntur? Dolor iusto, sequi maiores dolores id distinctio ullam nisi? Eius esse similique distinctio consectetur nam voluptatibus quisquam reprehenderit harum autem cum, quasi
//               exercitationem nesciunt sit cupiditate, dolore voluptate fugiat debitis tenetur libero tempora odit placeat officiis. Odio vel vitae deserunt, ea dignissimos, eos explicabo incidunt
//               possimus temporibus inventore soluta natus dolore doloribus et quis corrupti. Sunt hic, eaque aliquid cupiditate eligendi similique quod harum atque blanditiis delectus doloribus
//               provident esse, voluptate iste! Ipsum tempora minus ratione accusantium recusandae, architecto porro enim quaerat praesentium eum aliquid sapiente nemo, dolorum odit! Expedita sapiente
//               nostrum ea velit. Distinctio dolor quam dolore aperiam perferendis natus deleniti magnam libero expedita laborum accusantium quia at enim, et aspernatur saepe quos adipisci temporibus
//               reiciendis nihil molestias error? Cum alias molestias similique recusandae dolor autem vel, hic ut repellendus iusto rerum ipsa harum reprehenderit aperiam temporibus tenetur facere
//               natus tempora obcaecati. Quis quaerat est illo, neque molestiae debitis esse fugit quasi deleniti odio delectus ipsa veritatis tenetur! Amet vero, aliquam fugiat non aspernatur rem
//               labore eos, iure, in minus quos dolores at pariatur dolorem quas suscipit! Esse quos nobis cupiditate ducimus accusantium. Accusamus, temporibus fugiat, voluptatibus, perspiciatis
//               laborum magnam id iste consequuntur natus eius incidunt. Eaque ipsa ea dolore maiores sint possimus consectetur recusandae qui quibusdam iusto quam consequuntur explicabo accusantium
//               aperiam eos rem, dolor mollitia rerum repudiandae quod eligendi! Ullam quis provident quos sequi nihil delectus magni atque cumque, architecto dicta tenetur consequuntur veritatis veniam
//               illo impedit deserunt ut necessitatibus aperiam eligendi optio excepturi doloribus voluptates. Natus quia nesciunt iusto praesentium delectus obcaecati possimus expedita sapiente rem
//               ducimus sunt ad id debitis veniam culpa consequuntur excepturi at nulla consequatur tempore corporis, odit, molestiae repellendus. Obcaecati hic quas ipsum reprehenderit aliquam dolor
//               accusamus at molestias veritatis eligendi repellat numquam ex consequuntur ipsam laboriosam dolorem, rem corporis. Maxime vel earum, asperiores corrupti deleniti totam? Ratione
//               repellendus asperiores eius iusto sint? to build and deploy applications quickly.
//             </p>
//             <p className="text-gray-700 mb-4">
//               Mastering Spring Boot isn’t just about writing better code—it’s also a great career move. Companies are actively hiring Spring Boot developers, with salaries ranging from $164K to $306K
//               per year and a median of $219K, according to Glassdoor.
//             </p>
//             <p className="text-gray-700">
//               This course is the first part of a series designed to take you from <strong className="font-semibold">zero to mastering Spring Boot</strong>. In this part, we focus on the fundamentals,
//               ensuring you have a rock-solid understanding before moving on to building web applications and APIs in Part 2.
//             </p>
//           </>
//         );
//       case "learn":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Spring Boot project setup and configuration</li>
//               <li>Dependency injection & Inversion of Control</li>
//               <li>Spring Data JPA for database integration</li>
//               <li>REST API development with Spring Boot</li>
//               <li>Exception handling & validation</li>
//               <li>Deploying Spring Boot applications</li>
//             </ul>
//           </>
//         );
//       case "curriculum":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum</h2>
//             <p className="text-gray-700 mb-2">✔️ Introduction to Spring Boot</p>
//             <p className="text-gray-700 mb-2">✔️ Dependency Injection & Beans</p>
//             <p className="text-gray-700 mb-2">✔️ Database with JPA & Hibernate</p>
//             <p className="text-gray-700 mb-2">✔️ Building REST APIs</p>
//             <p className="text-gray-700 mb-2">✔️ Testing Spring Boot Apps</p>
//             <p className="text-gray-700">✔️ Deployment Strategies</p>
//           </>
//         );
//       case "audience":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Target Audience</h2>
//             <p className="text-gray-700 mb-2">✅ Java Developers</p>
//             <p className="text-gray-700 mb-2">✅ Backend Engineers</p>
//             <p className="text-gray-700 mb-2">✅ Students & Beginners in Java</p>
//             <p className="text-gray-700">✅ Anyone looking to build scalable apps with Spring Boot</p>
//           </>
//         );
//       case "prereq":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Basic knowledge of Java</li>
//               <li>Understanding of OOP concepts</li>
//               <li>Basic familiarity with databases</li>
//             </ul>
//           </>
//         );
//       case "instructor":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Instructor</h2>
//             <p className="text-gray-700">
//               Hi, I’m John Doe 👨‍🏫, a Senior Java Developer with 10+ years of experience in backend development. I’ve helped thousands of students and professionals master Spring Boot and land jobs at
//               top tech companies.
//             </p>
//           </>
//         );
//       case "reviews":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Reviews</h2>
//             <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700">“This is the best Spring Boot course I’ve taken. Super practical and easy to follow!” – Student</blockquote>
//           </>
//         );
//       case "bonus":
//         return (
//           <>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Exclusive Bonus</h2>
//             <p className="text-gray-700">Enroll today and get access to exclusive bonus materials, including source code, real-world projects, and private Q&A sessions with the instructor.</p>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="grid grid-cols-12 max-w-6xl mx-auto lg:my-10 md:my-8 sm:my-4">
//         <div className="lg:col-span-7  col-span-12">
//           <div className="space-y-4 px-5">
//             <p className="text-blue-700 font-semibold text-2xl">A Course You'll Actually Finish</p>
//             <h1 className="font-bold text-gray-900 lg:text-5xl md:text-4xl text-2xl">Spring Boot: Mastering the Fundamentals</h1>
//             <p className="text-gray-600 text-lg">Master dependency injection and database integration with Spring Boot and Spring Data JPA</p>
//             <Button gradientDuoTone="purpleToBlue" className="bg-blue-700 w-30 mb-5">
//               Enroll Now
//             </Button>
//           </div>
//         </div>
//         <div className="col-span-1"></div>
//         <div className="lg:col-span-4  col-span-12">
//           <Card className="rounded-2xl shadow-lg border border-gray-200 mx-5">
//             <ul className="space-y-4 text-gray-700">
//               <li className="flex items-center space-x-3">
//                 <FaChartBar className="text-blue-700 text-xl" />
//                 <span>Beginner to Advance</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaPlayCircle className="text-blue-700 text-xl" />
//                 <span>6 Hours</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaFileAlt className="text-blue-700 text-xl" />
//                 <span>80 Lessons</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaKeyboard className="text-blue-700 text-xl" />
//                 <span>Hands-on Exercises</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaMedal className="text-blue-700 text-xl" />
//                 <span>Certificate of Completion</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaInfinity className="text-blue-700 text-xl" />
//                 <span>Lifetime Access</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaClock className="text-blue-700 text-xl" />
//                 <span>Learn at Your Own Pace</span>
//               </li>
//             </ul>
//           </Card>
//         </div>
//       </div>

//       <div className="min-h-screen max-w-7xl mx-auto bg-white flex p-6">
//         <aside className="w-64 sticky top-20 h-max space-y-4">
//           <nav className="space-y-2">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center space-x-3 w-full px-4 py-2 rounded-lg text-left font-medium transition ${
//                   activeTab === tab.id ? "bg-purple-100 text-purple-700" : "text-gray-600 hover:bg-gray-100"
//                 }`}>
//                 {tab.icon}
//                 <span>{tab.label}</span>
//               </button>
//             ))}
//           </nav>
//           <Button gradientDuoTone="purpleToBlue" size="lg" className="w-full">
//             Enroll Now
//           </Button>
//         </aside>

//         <main className="flex-1 pl-10">{renderContent()}</main>
//       </div>

//       <Footer />
//     </>
//   );
// }

import { Button, Card } from "flowbite-react";
import {
  FaChartBar,
  FaPlayCircle,
  FaFileAlt,
  FaKeyboard,
  FaMedal,
  FaInfinity,
  FaClock,
  FaBook,
  FaLightbulb,
  FaListAlt,
  FaUsers,
  FaClipboardCheck,
  FaUserTie,
  FaCommentDots,
  FaGift,
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../CommonComponents/Header";
import Footer from "../CommonComponents/Footer";

export default function SpringBootCourse() {
  const [activeTab, setActiveTab] = useState("about");
  const contentRef = useRef(null);

  // Sections in right-side content
  const sections = [
    { id: "about", label: "About" },
    { id: "curriculum", label: "Curriculum" },
    { id: "instructor", label: "Instructor" },
    { id: "faq", label: "FAQ" },
  ];

  // Scroll spy: detect which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.6, root: contentRef.current } // 60% visible inside scroll container
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle sidebar tab click → scroll to section
  const handleTabClick = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el && contentRef.current) {
      contentRef.current.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };


  // ✅ Dynamic tab structure
  const tabs = [
    {
      id: "about",
      label: "About the Course",
      icon: <FaBook />,
      content: (
        <>
          <p className="text-purple-600 font-medium">Made with 💜</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About the Course
          </h2>
          <p className="text-gray-700 mb-4">
            Spring Boot is the go-to framework for modern Java development. It
            simplifies configuration, dependency management, and deployment. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa sapiente vel iure neque facere dolore cumque totam quis suscipit, ipsam amet vero exercitationem voluptatum minus cupiditate repellat, saepe, perspiciatis nam. Natus molestiae fuga id architecto magni veritatis. Odit fugiat alias, velit sapiente quas fugit nemo quae et blanditiis! Sequi explicabo eos id nesciunt sunt reprehenderit natus praesentium odio, modi recusandae inventore repellendus. Atque ullam maiores possimus pariatur totam, architecto voluptates facere odio quo, voluptatibus recusandae. Tempore rerum perferendis sit. Quam repellat necessitatibus explicabo cum quidem nulla sunt sint esse porro alias excepturi optio totam pariatur ipsam accusamus, vero veniam recusandae nostrum a laboriosam reprehenderit commodi aliquid? Sapiente beatae culpa numquam veniam voluptatum molestiae officiis totam cum. Hic dolores ad repellat sequi, et odio, dicta nesciunt suscipit tempora aliquid illo inventore ipsum doloremque vero unde, mollitia aspernatur. Fuga nam accusantium libero odio id consectetur laudantium laborum enim ut quae eligendi a, alias, sunt unde temporibus quibusdam exercitationem tenetur perspiciatis. Repellat porro, maiores officia harum ipsa itaque quas mollitia autem doloribus excepturi cum consequuntur vel quae exercitationem! Facilis corporis exercitationem dignissimos reprehenderit doloribus voluptatum omnis quasi optio tenetur eum accusamus illum pariatur perferendis a sit magni possimus accusantium veritatis cumque, nam adipisci totam eos quia! Eveniet eaque dicta sed omnis dignissimos aperiam unde soluta maiores sunt facere reprehenderit magni temporibus voluptates repellat eligendi vitae, voluptatibus, beatae alias similique id harum, dolorem impedit. Expedita qui amofficiis aperiam. Quos distinctio commodi tempore! Mollitia error corrupti vero itaque cumque eos facere, illo quos eum voluptatem harum nobis impedit culpa delectus aspernatur ipsa perspiciatis deserunt pariatur. Autem qui, vel sint voluptates eveniet iusto enim recusand error sit! Vero enim commodi iusto dolores, voluptatem accusamus illo quos culpa ab ducimus sit laudantium debitis corrupti mollitia quae exercitationem repudiandae maiores doloribus quam. Velit inventore consequatur dolorum accusamus quod aliquid illum expedita quia. Non ipsa eaque harum facilis sed mollitia! Non itaque quos obcaecati ad, quo illo asperiores neque natus, quia sunt, soluta odio aut! Neque quisquam quos minus in impedit reiciendis rem ullam sed necessitatibus, a iste incidunt eius eveniet. Accusamus fuga, asperiores tempore illo similique eum sit aperiam perferendis illum ab perspiciatis facilis cumque voluptatum. Doloremque corporis aliquid hic, voluptatem deserunt ullam nam ducimus unde excepturi aperiam eveniet deleniti itaque reiciendis maiores. Placeat debitis libero ipsum quisquam inventore alias beatae odio qui voluptates aliquid? Odit dicta quidem et, repellendus culpa id. Nostrum aperiam eligendi, officia facilis ratione veritatis, adipisci aut minima distinctio quia aspernatur corrupti corporis fugiat explicabo optio aliquam, doloremque modi sit illum alias velit pariatur omnis commodi. Amet ut quis hic eum adipisci nihil a, consectetur repellat dolor cumque veniam aspernatur perspiciatis vero porro, commodi quas sint neque rerum explicabo. Exercitationem quaerat fugiat deleniti accusantium qui aspernatur hic officiis, neque atque, ad cumque quis deserunt ea odit ex recusandae totam! Impedit quis error explicabo dignissimos neque?
          </p>
          <p className="text-gray-700 mb-4">
            Mastering Spring Boot is a great career move. Companies are actively
            hiring developers with strong Spring Boot skills.
          </p>
          <p className="text-gray-700">
            This course will take you from{" "}
            <strong className="font-semibold">zero to mastery</strong>, starting
            with fundamentals and progressing to building real-world apps.
          </p>
        </>
      ),
    },
    {
      id: "learn",
      label: "What You'll Learn",
      icon: <FaLightbulb />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What You'll Learn
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Spring Boot project setup and configuration</li>
            <li>Dependency injection & Inversion of Control</li>
            <li>Spring Data JPA for database integration</li>
            <li>REST API development with Spring Boot</li>
            <li>Exception handling & validation</li>
            <li>Deploying Spring Boot applications</li>
          </ul>
        </>
      ),
    },
    {
      id: "curriculum",
      label: "Curriculum",
      icon: <FaListAlt />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Curriculum</h2>
          <p className="text-gray-700 mb-2">✔️ Introduction to Spring Boot</p>
          <p className="text-gray-700 mb-2">✔️ Dependency Injection & Beans</p>
          <p className="text-gray-700 mb-2">✔️ Database with JPA & Hibernate</p>
          <p className="text-gray-700 mb-2">✔️ Building REST APIs</p>
          <p className="text-gray-700 mb-2">✔️ Testing Spring Boot Apps</p>
          <p className="text-gray-700">✔️ Deployment Strategies</p>
        </>
      ),
    },
    {
      id: "audience",
      label: "Target Audience",
      icon: <FaUsers />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Target Audience
          </h2>
          <p className="text-gray-700 mb-2">✅ Java Developers</p>
          <p className="text-gray-700 mb-2">✅ Backend Engineers</p>
          <p className="text-gray-700 mb-2">✅ Students & Beginners in Java</p>
          <p className="text-gray-700">
            ✅ Anyone looking to build scalable apps
          </p>
        </>
      ),
    },
    {
      id: "prereq",
      label: "Prerequisites",
      icon: <FaClipboardCheck />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prerequisites
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Basic knowledge of Java</li>
            <li>Understanding of OOP concepts</li>
            <li>Basic familiarity with databases</li>
          </ul>
        </>
      ),
    },
    {
      id: "instructor",
      label: "Your Instructor",
      icon: <FaUserTie />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Instructor
          </h2>
          <p className="text-gray-700">
            Hi, I’m John Doe 👨‍🏫, a Senior Java Developer with 10+ years of
            experience. I’ve helped thousands of students master Spring Boot and
            land jobs at top companies.
          </p>
        </>
      ),
    },
    {
      id: "reviews",
      label: "Reviews",
      icon: <FaCommentDots />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Reviews</h2>
          <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700">
            “This is the best Spring Boot course I’ve taken. Super practical and
            easy to follow!” – Student
          </blockquote>
        </>
      ),
    },
    {
      id: "bonus",
      label: "Exclusive Bonus",
      icon: <FaGift />,
      content: (
        <>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Exclusive Bonus
          </h2>
          <p className="text-gray-700">
            Enroll today and get access to source code, real-world projects, and
            private Q&A sessions with the instructor.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="grid grid-cols-12 max-w-6xl mx-auto lg:my-10 md:my-8 sm:my-4">
        <div className="lg:col-span-7  col-span-12">
          <div className="space-y-4 px-5">
            <p className="text-blue-700 font-semibold text-2xl">
              A Course You'll Actually Finish
            </p>
            <h1 className="font-bold text-gray-900 lg:text-5xl md:text-4xl text-2xl">
              Spring Boot: Mastering the Fundamentals
            </h1>
            <p className="text-gray-600 text-lg">
              Master dependency injection and database integration with Spring
              Boot and Spring Data JPA
            </p>
            <Button
              gradientDuoTone="purpleToBlue"
              className="bg-blue-700 w-30 mb-5"
            >
              Enroll Now
            </Button>
          </div>
        </div>
        <div className="col-span-1"></div>
        <div className="lg:col-span-4 col-span-12">
          <Card className="rounded-2xl shadow-lg border border-gray-200 mx-5">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-3">
                <FaChartBar className="text-blue-700 text-xl" />
                <span>Beginner to Advance</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPlayCircle className="text-blue-700 text-xl" />
                <span>6 Hours</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaFileAlt className="text-blue-700 text-xl" />
                <span>80 Lessons</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaKeyboard className="text-blue-700 text-xl" />
                <span>Hands-on Exercises</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMedal className="text-blue-700 text-xl" />
                <span>Certificate of Completion</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaInfinity className="text-blue-700 text-xl" />
                <span>Lifetime Access</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-blue-700 text-xl" />
                <span>Learn at Your Own Pace</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

    <div className="min-h-screen max-w-7xl mx-auto bg-white flex p-6">
      {/* Sidebar */}
      <aside className="w-64 sticky top-20 h-max space-y-4">
        <nav className="space-y-2">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleTabClick(sec.id)}
              className={`flex items-center w-full px-4 py-2 rounded-lg text-left font-medium transition ${
                activeTab === sec.id
                  ? "bg-purple-100 text-blue-700 font-bold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content - scrollable */}
      <main
        ref={contentRef}
        className="flex-1 pl-10 h-[80vh] overflow-y-auto scroll-smooth space-y-16"
      >
        {/* About Section */}
        <section id="about" className="pt-10">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700">
            This is the About section. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla at lacus ac erat cursus vestibulum.
          </p>
          <div className="h-64 bg-gray-100 mt-6 flex items-center justify-center">
            Long content here...
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="curriculum" className="pt-10">
          <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
          {[
            "Introduction to Spring Boot",
            "Annotations Deep Dive",
            "Building REST APIs",
            "Connecting to Databases",
            "Spring Security Basics",
          ].map((lesson, i) => (
            <div key={i} className="py-6 border-b">
              <p className="text-gray-700">{lesson}</p>
            </div>
          ))}
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="pt-10">
          <h2 className="text-2xl font-bold mb-4">Instructor</h2>
          <p className="text-gray-700">
            Instructor bio goes here. Lorem ipsum dolor sit amet consectetur. 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque odit ex expedita reiciendis totam quod, ut deleniti laudantium perspiciatis! Facilis, odit error animi veritatis maxime expedita obcaecati ex provident culpa earum ipsum nihil, eaque beatae non itaque? Nam eos mollitia, atque corrupti, omnis esse necessitatibus similique, ea amet nulla molestias!
          </p>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="pt-10">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <p className="text-gray-700">
            Common questions and answers about the course.
          </p>
        </section>
      </main>
    </div>

      <Footer />

    </>
  );
}
