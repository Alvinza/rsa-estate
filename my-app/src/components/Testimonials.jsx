// Testimonials Component
import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity: 0, x:100}} // Initial animation state
    transition={{duration: 1}} // Animation duration
    whileInView={{opacity: 1, x:0}} // Animation when in view
    viewport={{once: true}} // Trigger animation once
    id='Testimonials' className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer
         <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>Real stories from those who find home with us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full max-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                    <h2 className='text-xl text-gray-800 font-medium'>{testimonial.name}</h2>
                    <p>{testimonial.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: testimonial.rating}, (item, index) => (
                            <img key={index} src={assets.star_icon} alt="" />
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials
