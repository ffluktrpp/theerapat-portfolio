import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Education({ onInitial }) {
  useEffect(() => {
    onInitial("Education-section");
  }, []);

  const educationData = [
    {
      period: "2021 - present",
      degree: "Computer Science - ITI",
      institution: "Bangkok University",
      details: "CUM GPA. 3.07",
      image:
        "https://ikbs.bu.ac.th/wp-content/uploads/2021/08/cropped-budiamond.jpg",
    },
    {
      period: "2014 - 2020",
      degree: "Sciences - Mathematics",
      institution: "Phichai Rattanakhan School, Ranong",
      image:
        "https://image.makewebeasy.net/makeweb/m_1920x0/9JBOiaFS4/DefaultData/about.jpg?v=202012190947",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-700 rounded-lg p-6 shadow-lg scroll-m-14"
      id="Education-section"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-primaryTitle text-2xl font-bold mb-6"
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            className="flex flex-col lg:flex-row items-center bg-primaryContent/5 rounded-xl p-4 transition-all hover:bg-primaryAccent/10"
          >
            <div className="flex-shrink-0 mb-4 lg:mb-0 lg:mr-6">
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-40 h-40 object-cover rounded-full shadow-md"
              />
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-primaryTitle font-semibold text-xl mb-2">
                {edu.period}
              </h3>
              <p className="text-lg font-medium mb-1">{edu.degree}</p>
              <p className="text-white/80 mb-1">{edu.institution}</p>
              {edu.details && <p className="text-white">{edu.details}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;
