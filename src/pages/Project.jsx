import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Project = () => {
  

  return (
    <section id="projects" className="mt-12 ml-2.5">
      <motion.h2
        className="text-3xl font-bold text-cyan-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        className="bg-[#101010] border border-cyan-500 rounded-xl shadow-md p-6 mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-white mb-2">
          Hospital Management System
        </h3>
        <p className="text-gray-300 mb-4">
          A simple hospital management app that handles patient records, appointments, and staff data using basic CRUD operations.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {["HTML", "CSS", "JavaScript", "ReactJS", "Node.js"].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-cyan-400 rounded-full text-cyan-400 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
       <a
  href="https://hospital-managment-system-jade.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-400 text-black px-6 py-3 mt-4 inline-block rounded hover:bg-cyan-300 transition z-10 relative cursor-pointer"
>
  View Project
</a>

      </motion.div>

      {/* Project 2 */}
      <motion.div
        className="bg-[#101010] border border-cyan-500 rounded-xl shadow-md p-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-white mb-2">
          Spotify UI Clones
        </h3>
        <p className="text-gray-300 mb-4">
          Responsive clone UIs of Amazon and Spotify built with HTML, CSS, and basic JS to replicate layout and interaction.
        </p>
        <div className="flex flex-wrap gap-3 mb-4">
          {["HTML", "CSS", "JavaScript"].map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-cyan-400 rounded-full text-cyan-400 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
       
        <a
  href="https://spotify-two-peach.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-cyan-400 text-black px-6 py-3 mt-4 inline-block rounded hover:bg-cyan-300 transition z-10 relative cursor-pointer"
>
  View Project
</a>

      </motion.div>
    </section>
  );
};

export default Project;



