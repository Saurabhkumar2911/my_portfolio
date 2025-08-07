import React, { useState } from "react";
import { projects } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const cardBgColor = "bg-white";
  const cardBorderColor = "border-gray-400";
  const cardTextColor = "text-black";
  const cardHoverEffect = "hover:shadow-lg hover:shadow-purple-200/50";
  const tagBgColor = "bg-gray-300";
  const tagTextColor = "text-black";

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-Ovo relative bg-white"
      >
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-Ovo text-black"
          >
          My Projects
        </motion.h2>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-32 h-1 bg-purple-500 mx-auto mt-4"
          />
        
          <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-gray-800 mt-4 text-lg font-Ovo"
          >
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
          </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => handleOpenModal(project)}
            className={`border ${cardBorderColor} ${cardBgColor} rounded-2xl hover:shadow-black overflow-hidden cursor-pointer hover:bg-gray-100 ${cardHoverEffect} hover:-translate-y-1 duration-500`}
            >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="p-4"
              >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-xl"
              />
            </motion.div>
            
            <div className="p-6">
              <motion.h3 
                whileHover={{ color: "#7c3aed" }}
                className={`text-2xl font-Ovo ${cardTextColor} mb-2`}
              >
                {project.title}
              </motion.h3>
              
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`inline-block ${tagBgColor} ${tagTextColor} text-xs font-semibold font-Ovo rounded-full px-2 py-1 mr-2 mb-2`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 p-4">
          <div className="bg-gray-100 border border-gray-400 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-800 hover:text-purple-800 text-3xl font-bold"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-100 px-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={500}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-md"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl text-2xl font-Ovo text-black mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-800 mb-6 font-Ovo text-justify">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-300 text-black text-xs font-semibold font-Ovo rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm md:text-base text-center font-Ovo transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm md:text-base  text-center font-Ovo transition-colors"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Work;