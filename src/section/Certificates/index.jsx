import React, { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { motion } from "framer-motion";
import certN1 from "../../assets/cert1.png";
import certN2 from "../../assets/cert2.png";
import certN3 from "../../assets/cert3.png";
import certN4 from "../../assets/cert4.png";
import certN5 from "../../assets/cert5.png";
import certN6 from "../../assets/cert6.png";

const slides = [
  { image: certN1, alt: "Certificate 1" },
  { image: certN2, alt: "Certificate 2" },
  { image: certN3, alt: "Certificate 3" },
  { image: certN4, alt: "Certificate 4" },
  { image: certN5, alt: "Certificate 5" },
  { image: certN6, alt: "Certificate 6" },
];

function Certificates({ onInitial }) {
  useEffect(() => {
    onInitial("Certificates-section");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-700 rounded-lg p-6 shadow-lg scroll-m-14 mb-40"
      id="Certificates-section"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-primaryTitle text-2xl font-bold mb-6"
      >
        Certificates
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative overflow-hidden rounded-lg shadow-md"
      >
        <Carousel slides={slides} interval={5000} autoPlay={true} />
      </motion.div>
    </motion.div>
  );
}

export default Certificates;
