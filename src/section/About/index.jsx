import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { data } from "../../contents/about";

const About = ({ onInitial }) => {
  useEffect(() => {
    onInitial("About-section");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl w-full max-w-3xl"
      id="About-section"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-primaryTitle text-2xl font-bold tracking-tight"
      >
        {data.title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-white leading-relaxed"
      >
        {data.description.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
