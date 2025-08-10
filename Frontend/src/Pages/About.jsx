import React from "react";
import Header from "../Components/CommonComponents/Header";
import DetailSection from "../Components/AboutPageComponents/DetailSection";
import WhyChooseUsSection from "../Components/AboutPageComponents/WhyChooseusSection";
import MissionVisionSection from "../Components/AboutPageComponents/MissionVisionSection";
import Footer from "../Components/CommonComponents/Footer"
const AboutPage = () => {
  return (
    <main className=" p-5">
      <Header />
      <DetailSection />
      <WhyChooseUsSection />
      <MissionVisionSection />
      <Footer />

    </main>
  );
};

export default AboutPage;
