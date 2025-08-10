import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    // Full-screen header with background image and gradient overlay
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/header_img.jpg)",
      }}
      id="Header"
    >
      {/* Navigation component */}
      <Navbar />

      {/* Animated header content with motion effects */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial hidden state
        transition={{ duration: 1.5 }} // Animation transition duration
        whileInView={{ opacity: 1, y: 0 }} // Animation when component is in view
        viewport={{ once: true }} // Trigger animation only once
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        {/* Main headline */}
        <h2 className="text-5xl sm:text-6xl md:text[82px] inline-block max-w-3xl font-semibold pt-20">
          Where dreams become your address
        </h2>

        {/* Call-to-action buttons */}
        <div className="mt-16 space-x-6 ">
          <a href="#Projects" className="btn btn-outline-secondary text-white">
            Projects
          </a>
          <a href="#Contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
