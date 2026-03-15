import React from "react";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import Hero from '../components/LandingPage/Hero/Hero';
import TS from "../components/LandingPage/Trust & Security/TS";
import Features from "../components/LandingPage/Features/Features";
import HW from "../components/LandingPage/How It Works/HW";
import FraudExperience from "../components/LandingPage/Fraud Experience/FraudExperience";
import Pricing from "../components/LandingPage/Pricing/Pricing";
import FAQ from "../components/LandingPage/FAQ/FAQ";
import Subscribe from "../components/LandingPage/Subscribe/Subscribe";
import Footer from '../components/LandingPage/Footer/Footer';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TS />
      <Features />
      <HW />
      <FraudExperience />
      <Pricing />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Landing;
