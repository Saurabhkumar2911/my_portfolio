import React from "react";
import { education } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-Ovo bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl text-black font-Ovo"
        >
          Education
        </motion.h2>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-32 h-1 bg-purple-500 mx-auto mt-4"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-gray-950 mt-4 text-lg font-Ovo"
        >
          My education has been a journey of learning and development. Here are the details of my academic background
        </motion.p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        {/* <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-black h-full"
        /> */}

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col sm:flex-row items-center mb-6 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content Section */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-gray-400 bg-white backdrop-blur-md hover:bg-gray-100  hover:shadow-black ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-24 h-24 bg-white rounded-md overflow-hidden"
                >
                  <Image
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain"                    
                    // className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col pl-2 justify-between">
                  <div>
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-xl sm:text-xl font-Ovo text-black"
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.h4 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-md sm:text-sm text-black font-Ovo"
                    >
                      {edu.school}
                    </motion.h4>
                  </div>
                  {/* Date at the bottom */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-sm text-gray-950 mt-2 font-Ovo"
                  >
                    {edu.date}
                  </motion.p>
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-gray-950 font-bold font-Ovo"
              >
                Grade: {edu.grade}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-4 text-gray-800 font-Ovo text-justify"
                >
                {edu.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;