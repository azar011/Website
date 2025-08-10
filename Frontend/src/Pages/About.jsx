import React from "react";
import Header from "../Components/CommonComponents/Header";
import DetailSection from "../Components/AboutPageComponents/DetailSection";
import WhyChooseUsSection from "../Components/AboutPageComponents/WhyChooseusSection";
import MissionVisionSection from "../Components/AboutPageComponents/MissionVisionSection";

const AboutPage = () => {
  return (
    <main className="w-full">
      <Header />
      <DetailSection />
      <WhyChooseUsSection />
      <MissionVisionSection />
    </main>
  );
};

export default AboutPage;
