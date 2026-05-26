import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutDoctor from '../components/home/AboutDoctor';
import VideoSection from '../components/home/VideoSection';
import StatsSection from '../components/home/StatsSection';
import ServicesGrid from '../components/home/ServicesGrid';
import TeamSection from '../components/home/TeamSection';
import Testimonials from '../components/home/Testimonials';
import ProcessSection from '../components/home/ProcessSection';
import BeforeAfterSlider from '../components/home/BeforeAfterSlider';
import FAQAccordion from '../components/home/FAQAccordion';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutDoctor />
      <VideoSection />
      <StatsSection />
      <ServicesGrid />
      <TeamSection />
      <Testimonials />
      <ProcessSection />
      <BeforeAfterSlider />
      <FAQAccordion />
    </>
  );
};

export default Home;
