// Projects Component
import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Projects = () => {
    // State to track the currently displayed project index in the slider
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // State to manage number of project cards displayed based on screen size
    const [cardsToShow, setCardsToShow] = useState(1);

    // Responsive effect to update card display based on screen width
    useEffect(() => {
        const updateCards = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(projectsData.length) // Show all cards on large screens
            } else {
                setCardsToShow(1) // Show one card on smaller screens
            }
        };
        updateCards(); // Initial setup of card display

        // Add event listener to handle window resize
        window.addEventListener('resize', updateCards);
        
        // Cleanup event listener to prevent memory leaks
        return () => window.removeEventListener('resize', updateCards);
    }, [])

    // Navigate to the next project in the slider
    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    
    // Navigate to the previous project in the slider
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        // Animated container with motion effects for project section
        <motion.div
        initial={{opacity: 0, x:-200}} // Initial hidden state with horizontal offset
        transition={{duration: 1}} // Animation transition duration
        whileInView={{opacity: 1, x:0}} // Animation when component enters view
        viewport={{once: true}} // Trigger animation only once
        className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            {/* Section title with underlined completed text */}
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects
             <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            
            {/* Descriptive subtitle for the projects section */}
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting spaces, Building legacies-Explore Our Portfolio</p>

            {/* Navigation buttons for project slider */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='btn btn-outline-secondary' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className='btn btn-outline-secondary ml-3' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="next" />
                </button>
            </div>

            {/* Slider container for project cards */}
            <div className='overflow-hidden'>
                {/* Horizontal scrolling container with transform for slider effect */}
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}>
                    {/* Render project cards dynamically from projectsData */}
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full md:w-1/4 sd:w-1/1'>
                            {/* Project image */}
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                            
                            {/* Project details overlay */}
                            <div className='absolute left-0 right-0 bottom-0 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    {/* Project title */}
                                    <h2 className='text-xl font-semibold text-gray-600'>
                                        {project.title}
                                    </h2>
                                    {/* Project price and location */}
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1 '></span> {project.location} 
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
