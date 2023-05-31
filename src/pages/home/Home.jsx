/** @format */

import React from "react";
import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import NewsLetter from "./components/NewsLetter";
import Faqs from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <NewsLetter />
      <Faqs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
