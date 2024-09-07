import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between p-6 text-white"
    >
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primaryTitle">
          Hello
        </h1>
        <h1 className="text-4xl md:text-4xl font-bold mb-4 text-primaryTitle">
          I'm Fluke
        </h1>
        <p className="text-md md:text-2xl">Welcome to My Web Portfolio</p>
      </div>
      <div className="flex-shrink-0">
        <img
          src="src\assets\hero.png"
          alt="Hero"
          className="w-60 md:w-80 h-auto rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default HeroSection;
