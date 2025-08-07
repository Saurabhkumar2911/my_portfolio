import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'


const Certification = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="certification" className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.3, duration:0.5}}
      className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>
      <motion.h2 
      initial={{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{delay:0.5, duration:0.5}}
      className='text-center text-5xl font-Ovo'>My Certifications</motion.h2>

      <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-32 h-1 bg-purple-500 mx-auto mt-4"
                />

    <motion.p 
    initial={{opacity:0}}
    whileInView={{ opacity:1}}
    transition={{delay:0.1, duration:0.5}}
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        My name is Saurabh Kumar, and I am a Machine Learning Engineer. I aim to use my knowledge and experience in web development, machine learning, and natural language processing to work on creative and meaningful projects.
    </motion.p>
    
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{delay:0.9, duration:0.6}}
    className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon, title}, index)=>(
            <motion.div
            whileHover={{scale:1.05}}            
            key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-gray-200 hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='' className='w-full h-50 object-cover rounded-xl' />
                <h3 className='text-lg my-4 text-gray-700 font-Ovo font-semibold'>{title}</h3>
                {/* <p className='text-sm text-gray-600 leading-5'>{description}</p> */}
                
            </motion.div>
        ))}

    </motion.div>
    </motion.div>
  )
}

export default Certification
