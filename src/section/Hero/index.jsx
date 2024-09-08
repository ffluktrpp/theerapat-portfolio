import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggleInfo = () => {
    setShowInfo((prevShowInfo) => !prevShowInfo);
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between md:p-6 text-white"
      >
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primaryTitle text-end md:mr-4">
            Hello
          </h1>
          <h1 className="text-xl md:text-2xl font-bold  text-primaryTitle text-end md:mr-4">
            My name is
          </h1>
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-white text-end md:mr-4">
            Theerapat Srichompoo
          </h1>
        </div>
        <div className="flex-shrink-0">
          <img
            src="src\assets\hero.png"
            alt="Hero"
            className="w-60 md:w-80 h-auto rounded-lg"
          />
        </div>
      </motion.div>

      {/* ลูกศรเพื่อเปิด/ปิดการแสดงผลข้อมูล Personal Info */}
      <div className="text-center">
        <FontAwesomeIcon
          icon={showInfo ? faChevronUp : faChevronDown}
          onClick={handleToggleInfo}
          className="text-primaryHover text-2xl cursor-pointer hover:text-white transition-colors duration-300"
        />
      </div>

      {/* แสดงข้อมูล Personal Info เมื่อกดลูกศร */}
      {showInfo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2 text-lg p-6 rounded-lg shadow-xl mt-4"
        >
          <div className="text-2xl font-bold text-primaryTitle mb-6">
            Personal Info
          </div>
          <div>
            <span className="font-semibold text-primaryTitle">Name:</span>{" "}
            Theerapat Srichompoo
          </div>
          <div>
            <span className="font-semibold text-primaryTitle">Nickname:</span>{" "}
            Fluke
          </div>
          <div>
            <span className="font-semibold text-primaryTitle">Birth Date:</span>{" "}
            August 19, 2002
          </div>
          <div>
            <span className="font-semibold text-primaryTitle">Age:</span> 22
          </div>
          <div>
            <span className="font-semibold text-primaryTitle">
              Current Address:
            </span>{" "}
            Klong Luang, Prathumthani
          </div>
          <div>
            <span className="font-semibold text-primaryTitle">Phone:</span>{" "}
            093-698-9263
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
