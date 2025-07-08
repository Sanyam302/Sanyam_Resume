

import React, { useRef, useState, useEffect } from "react";
import image2 from "../images/image2.jpg";
import { motion } from "framer-motion";

const Resume = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "Python", "C++"],
    },
    {
      title: "Frameworks / Libraries",
      skills: ["React", "Node.js", "Express", "Tailwind CSS"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Web Development",
      skills: ["REST APIs", "Responsive Design", "MongoDB", "MySql"],
    },
  ];

  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;

    const updateScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    container.addEventListener("scroll", updateScroll);
    return () => container.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.section
      id="resume"
      className="bg-[#0e0e0e] pt-24 text-white py-12 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Panel - Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={image2}
            alt="Sanyam Jain"
            className="w-72 sm:w-96 h-auto shadow-lg shadow-cyan-500/30"
          />
        </motion.div>

        {/* Right Panel */}
        <div className="flex-1 relative">
          {/* Custom Scroll Indicator Line */}
          <div className="absolute top-0 right-0 w-0.5 h-full bg-white/20 rounded overflow-hidden">
            <div
              className="bg-cyan-400 w-full shadow-[0_0_10px_#22d3ee] transition-all duration-200"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          {/* Scrollable Resume Content */}
          <motion.div
            ref={scrollRef}
            className="max-h-[500px] overflow-y-scroll scroll-smooth pr-4 pl-4 sm:pr-16 sm:pl-16 mt-3 hide-scrollbar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Summary */}
            <motion.h2
              className="text-5xl font-bold font-poppins text-cyan-400 mb-2 pl-2.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Profile Summary
            </motion.h2>
            <div className="bg-white h-[1px] w-2/5 mt-5"></div>

            <motion.div
              className="text-gray-300 leading-loose mt-5 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I’m a <span className="text-cyan-400 font-medium">B.Tech Artificial Intelligence and Data Science</span> student at GGSIPU (Batch 2027), with a strong passion for <span className="text-cyan-400">AI, machine learning</span>, and <span className="text-cyan-400">web development</span>. I enjoy solving real-world problems through hands-on projects and continuous learning.
              </p>
              <p>
                Beyond academics, I actively contribute to innovation and leadership within my institution as a member of the <span className="text-cyan-400">NCC</span> and the <span className="text-cyan-400">Institution’s Innovation Council (IIC)</span>.
              </p>
              <p>
                I’m currently seeking <span className="text-cyan-400">internship opportunities</span> where I can apply my skills in artificial intelligence and web development to real-world applications.
              </p>
            </motion.div>

            {/* Education */}
            <motion.h3
              className="text-5xl font-bold font-poppins pl-2.5 mt-10 text-cyan-400 mb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h3>
            <div className="bg-white h-[1px] w-2/5 mt-5"></div>

            <motion.div
              className="text-gray-300 mb-6 mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                <strong>Btech in AI-DS (Artificial Intelligence and Data Science)</strong><br />
                University School of Automation and Robotics, Surajmal Vihars <br />
                2023 – 2027
              </p>
              <p className="mt-5">
                <strong>12th Class CBSE</strong><br />
                Gandhi Memorial Govt SBV, Shahdrha <br />
                2022
              </p>
            </motion.div>

            {/* Skills */}
            <motion.h3
              className="text-5xl pl-2.5 mt-10 font-semibold text-cyan-400 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Skills & Interests
            </motion.h3>
            <div className="bg-white h-[1px] w-2/5 mt-5"></div>

            <motion.div
              className="flex flex-col gap-6 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#101010] border border-gray-500 rounded-xl shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-300 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 border border-cyan-400 rounded-full text-gray-300 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
