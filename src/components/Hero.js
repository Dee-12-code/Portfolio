import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>Building the future, one line of code at a time.</p>
    </motion.div>
  );
};

export default Hero;
