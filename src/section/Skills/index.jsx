import { useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import {
  faHtml5,
  faCss3,
  faReact,
  faVuejs,
  faSquareJs,
  faNodeJs,
  faJava,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"; // Add framer-motion for animations

function Skills({ onInitial }) {
  useEffect(() => {
    onInitial("Skills-section");
  }, []);

  return (
    <motion.div
      className="bg-slate-700 rounded-lg p-2 scroll-m-14"
      id="Skills-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="text-primaryTitle text-2xl font-bold ml-5 mr-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skills
      </motion.div>
      <div className="space-y-4 mx-10 py-4">
        {[
          { icon: faHtml5, percentage: 70 },
          { icon: faCss3, percentage: 80 },
          { icon: faReact, percentage: 75 },
          { icon: faSquareJs, percentage: 50 },
          { icon: faNodeJs, percentage: 50 },
          { icon: faJava, percentage: 40 },
          { icon: faPython, percentage: 70 },
          { icon: faGithub, percentage: 60 },
        ].map(({ icon, percentage }, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-5"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon
              className="text-6xl py-3 hover:text-primaryHover transition-all duration-300"
              icon={icon}
            />
            <ProgressBar
              percentage={percentage}
              color="primaryTitle"
              animated
            />
          </motion.div>
        ))}
        <motion.div
          className="flex items-center gap-5"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/mongodb-icon-512x512-mhzq0108.png"
            alt="MongoDB"
            className="w-16 py-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <ProgressBar percentage={50} color="primaryTitle" animated />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
