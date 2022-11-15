import React from "react";
import Destinations from "./components/Destinations";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Destinations />
    </div>
  );
};

export default App;
