import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import AboutDoctor from '../components/home/AboutDoctor';
import ServicesGrid from '../components/home/ServicesGrid';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import BeforeAfterSlider from '../components/home/BeforeAfterSlider';
import FAQAccordion from '../components/home/FAQAccordion';
import SectionDivider from '../components/common/SectionDivider';

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutDoctor />
      <SectionDivider variant="wave" className="-mt-1 bg-page-bg" />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <BeforeAfterSlider />
      <FAQAccordion />
    </>
  );
};

export default Home;
