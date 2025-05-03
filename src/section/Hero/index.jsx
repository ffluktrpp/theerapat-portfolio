import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import flareImage from "../../assets/floatItem/flare.png";

const HeroSection = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const roles = ["Front-end Developer", "Web Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < roles[roleIndex].length) {
        const timeout = setTimeout(() => {
          setText((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, roleIndex, roles]);

  const handleToggleInfo = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-10">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-12 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-6">
            Theerapat Srichompoo
          </h1>

          <div className="h-16 flex items-center justify-center">
            <div className="text-2xl md:text-4xl font-semibold">
              <span className="text-primaryTitle mr-2">I'm a</span>
              <span className="relative text-white">
                {text}
                <span className="absolute right-[-8px] top-0 h-full w-[3px] bg-primaryTitle animate-blink"></span>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FontAwesomeIcon
              icon={showInfo ? faChevronUp : faChevronDown}
              onClick={handleToggleInfo}
              className="text-primaryHover text-2xl cursor-pointer hover:text-white transition-colors duration-300"
            />
          </motion.div>
        </div>

        {/* Personal Info Section */}
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl w-full max-w-3xl"
          >
            <div className="text-2xl font-bold text-primaryTitle mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primaryTitle rounded-full"></span>
              Personal Info
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400">Nickname</p>
                <p className="text-white">Fluke</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Birth Date</p>
                <p className="text-white">August 19, 2002 (22 years)</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Klong Luang, Prathumthani</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">093-698-9263</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">theerapat.sric@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HeroSection;
