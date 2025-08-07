import React from 'react'
import { SkillsInfo } from '@/assets/assets'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-Ovo bg-skills-gradient clip-path-custom scroll-mt-20"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <motion.h4 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-Ovo"
        >
          My technical arsenal
        </motion.h4>
        
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-5xl font-Ovo"
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-950 mt-4 text-lg font-Ovo"
        >
          A collection of my technical skills and expertise honed through various projects and experiences
        </motion.p>
      </div>

      {/* Skill Categories */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="bg-white backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-lg hover:bg-gray-100 hover:-translate-y-2 duration-500 hover:shadow-black"
          >
            <h3 className="text-2xl sm:text-3xl text-gray-950 mb-6 text-center font-Ovo">
              {category.title}
            </h3>

            {/* <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            > */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 w-full">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * skillIndex, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-3 bg-gray-200 rounded-xl hover:bg-gray-300"
                  >
                    <Image
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm text-black font-Ovo">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            {/* </Tilt> */}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;