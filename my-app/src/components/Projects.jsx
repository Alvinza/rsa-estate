import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current project index
  const [cardsToShow, setCardsToShow] = useState(1); // Cards shown at once

  // Adjust cards shown based on screen size
  useEffect(() => {
    const updateCards = () => {
      setCardsToShow(window.innerWidth >= 1024 ? projectsData.length : 1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

    // Navigate to the next project in the slider
  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);

    
  // Navigate to the previous project in the slider
  const prevProject = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );

  return (
     // Animated container with motion effects
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting spaces, Building legacies – Explore Our Portfolio
      </p>

      {/* Slider navigation */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="btn btn-outline-secondary"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="btn btn-outline-secondary ml-3"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="next" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full md:w-1/4 sd:w-1/1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 bottom-0 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-600">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1"></span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
