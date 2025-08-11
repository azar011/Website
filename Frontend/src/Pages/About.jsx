import React from "react";
import Header from "../Components/CommonComponents/Header";
import DetailSection from "../Components/AboutPageComponents/DetailSection";
import WhyChooseUsSection from "../Components/AboutPageComponents/WhyChooseusSection";
import MissionVisionSection from "../Components/AboutPageComponents/MissionVisionSection";
import Footer from "../Components/CommonComponents/Footer"
const AboutPage = () => {
  return (
    <>
      <Header />
      <DetailSection />
      <WhyChooseUsSection />
      <MissionVisionSection />
      <Footer />
    </>
  );
};

export default AboutPage;
