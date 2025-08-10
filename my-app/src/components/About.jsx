import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react"; // for animation

const About = () => {
  return (
    <motion.div
      // Initial animation state for the div: starts off-screen with 0 opacity
      initial={{ opacity: 0, x: 200 }}
      // Animation transition properties: 1 second duration
      transition={{ duration: 1 }}
      // Animation state when in view: fully visible and in position
      whileInView={{ opacity: 1, x: 0 }}
      // Ensures the animation only happens once when in the viewport
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Leading Estate Manager with extensive experience overseeing luxury
        properties across South Africa's premier residential markets.
        Demonstrated expertise in managing high-value real estate portfolios in
        prestigious areas including Sandton, Camps Bay, and Umhlanga. Proven
        track record of maximizing property values through strategic maintenance
        programs, staff supervision, and implementation of world-class security
        systems
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Image section for the brand */}
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg"
          alt=""
          style={{ paddingTop: "5rem" }}
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            {/* Statistics section */}
            <div>
              <p className="text-4xl font-medium to-gray-900">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium to-gray-900">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium to-gray-900">20+</p>
              <p>Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium to-gray-900">25+</p>
              <p>On going projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            As a seasoned real estate agent with over a decade of experience
            managing multi-million dollar properties and high-profile
            developments across the city, I've consistently delivered
            exceptional results for my discerning clients. My track record
            speaks for itself through numerous successful transactions,
            maintaining a 100% client satisfaction rate and earning the
            prestigious "Top Producer" award for five consecutive years.
          </p>

          {/* Call to action button */}
          <button className="btn btn-primary">Learn more</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
