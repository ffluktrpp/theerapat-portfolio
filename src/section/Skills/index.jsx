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
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 py-4">
        {[
          { icon: faHtml5, name: "HTML5" },
          { icon: faCss3, name: "CSS3" },
          { icon: faReact, name: "React" },
          { icon: faSquareJs, name: "JavaScript" },
          { icon: faNodeJs, name: "Node.js" },
          { icon: faJava, name: "Java" },
          { icon: faPython, name: "Python" },
          { icon: faFigma, name: "Figma" },
          { icon: faGithub, name: "GitHub" },
          { icon: faDatabase, name: "SQL" }, // Added SQL
        ].map(({ icon, name }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 relative"
            whileHover={{ scale: 1.1 }}
          >
            <FontAwesomeIcon
              className="text-6xl py-3 transition-all duration-300"
              icon={icon}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-bold rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {name}
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          className="flex flex-col items-center gap-2 relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/mongodb-icon-512x512-mhzq0108.png"
            alt="MongoDB"
            className="w-16 py-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-bold rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            MongoDB
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 relative"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
            alt="Firebase"
            className="w-16 py-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-bold rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Firebase
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Skills;
