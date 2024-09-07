import React, { useEffect } from "react";
import Carousel from "../../components/Carousel";
import { motion } from "framer-motion";

const slides = [
  {
    image: "https://example.com/image1.jpg",
    alt: "Image 1",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://example.com/image2.jpg",
    alt: "Image 2",
    title: "Slide 2",
    description: "This is the second slide",
  },
  {
    image: "https://example.com/image3.jpg",
    alt: "Image 3",
    title: "Slide 3",
    description: "This is the third slide",
  },
];

function Activities({ onInitial }) {
  useEffect(() => {
    onInitial("Activities-section");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primarySubContent to-primarySubContent/80 rounded-lg p-6 shadow-lg scroll-m-14"
      id="Activities-section"
    >
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-primaryTitle text-2xl font-bold mb-6"
      >
        Activities
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

export default Activities;
