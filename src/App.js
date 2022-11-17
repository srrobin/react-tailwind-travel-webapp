import React from "react";
import Carousel from "./components/Carousel";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Select from "./components/Select";
import websiteData from "./data/websiteData.json";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Destinations />
      <Search />
      <Select imageCardData={websiteData.card} />
      <Carousel carousel={websiteData.card} />
      <Footer />
    </div>
  );
};

export default App;
