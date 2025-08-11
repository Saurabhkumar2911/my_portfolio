import React, { useState } from "react";
import { researchs } from "@/assets/assets";
import { motion } from "framer-motion";

const Research = () => {
  
  const [selectedResearch, setSelectedResearch] = useState(null);

 

  const handleOpenResearch = (research) => {
    setSelectedResearch(research);
  };

  const handleCloseResearch = () => {
    setSelectedResearch(null);
  };

  const cardBgColor = "bg-white";
  const cardBorderColor = "border-gray-400";
  const cardTextColor = "text-black";
  const cardHoverEffect = "hover:shadow-lg hover:shadow-purple-200/50";
  const tagBgColor = "bg-gray-300";
  const tagTextColor = "text-black";

  return (
    <motion.section
      id="research"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-Ovo relative bg-white"
      >

{/*.............................Research................................ */}

      <div className="text-center mb-16">
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl font-Ovo text-black "
          >
          My Researchs
        </motion.h3>
        
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
          A showcase of the researchs I have worked on, highlighting my skills
          and experience in various technologies
          </motion.p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4"> </div>
          </div>

  
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">

      {researchs.map((research, index) => (
      <motion.div
      key={research.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-gray-400 bg-white rounded-2xl hover:shadow-lg overflow-hidden cursor-pointer hover:bg-gray-100 hover:shadow-black hover:-translate-y-1 duration-500 p-6"
    >
      <motion.h3   
         whileHover={{ color: "#7c3aed" }}  
        className="text-2xl font-Ovo text-black mb-3"
      >
        {research.title}
      </motion.h3>
      
      <p className="text-gray-800 mb-4 line-clamp-3 font-Ovo text-justify">
       <span className="font-Ovo font-semibold text-gray-800">Abstract:</span>  {research.abstract}
      </p>
      
      <div className="mb-4">
        <p className="text-sm font-Ovo font-semibold text-gray-950 mb-2">Keywords:</p>
        <div className="flex flex-wrap gap-2">
          {research.keywords.map((keyword, idx) => (
            <motion.span
            key={idx}
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`inline-block ${tagBgColor} ${tagTextColor} text-xs font-semibold font-Ovo rounded-full px-2 py-1 mr-2 mb-2`}
            >
              {keyword}
            </motion.span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          onClick={() => handleOpenResearch(research)}
          className="text-black hover:text-purple-800 text-sm font-medium"
        >
          Read More →
        </motion.button>
      </div>
       </motion.div>
       ))}
      </div>     
      </div>

      {/* ...................container................................... */}
       {selectedResearch && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90 p-4">

                <div className="bg-gray-100 border border-gray-400 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
                    
                  <div className="flex justify-end pr-4 pt-4">
                     <h3 className="lg:text-3xl text-2xl font-Ovo text-black mb-4 ml-5 mt-3">
                        {selectedResearch.title}
                      </h3>
                    <button
                      onClick={handleCloseResearch}
                      className="text-gray-800 hover:text-purple-800 text-3xl font-bold mr-5"
                        >
                      &times;
                    </button>
                  </div>
      
                  <div className="flex flex-col">
                    
                    <div className="lg:p-6 p-2">
                        
                     
                      <p className="text-gray-800 mb-6 font-Ovo text-justify">
                        <span className="font-Ovo font-black">Abstract: </span>{selectedResearch.abstract}
                      </p>
                        <p className="text-gray-800 mb-6 font-Ovo text-justify">
                        <span className="font-Ovo font-black">Conference: </span>{selectedResearch.Conference}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedResearch.keywords.map((keywords, index) => (
                          <span
                            key={index}
                            className="bg-gray-300 text-black text-xs font-semibold font-Ovo rounded-full px-2 py-1"
                          >
                            {keywords}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-center">
                        <a
                          href={selectedResearch.Certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm md:text-base text-center font-Ovo transition-colors"
                        >
                          View Certificate
                        </a>
                        {/* <a
                          href={selectedProject.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-1/2 bg-gray-800 hover:bg-purple-800 text-white px-6 py-2 rounded-xl text-sm md:text-base  text-center font-Ovo transition-colors"
                        >
                          View Live
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}



    </motion.section>
  );

  
}

export default Research;


