import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <section id="contact" className=" pt-16 pb-20 px-6 bg-[#0e0e0e] text-white">
      <div className="max-w-2xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-cyan-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Let’s connect! Reach out through the form or any platform below.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 text-3xl mb-10 flex-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://in.linkedin.com/in/sanyam-jain-995525291?original_referer=https%3A%2F%2Fwww.google.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#22d3ee] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sanyam302"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#22d3ee] transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/jainsanyam6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_10px_#22d3ee] transition duration-300"
          >
            <FaInstagram />
          </a>
        </motion.div>

       <div className="pb-5">
        Email: jsanyam219@gmail.com      ,    Contact:7678317928
       </div>
       

        
        <motion.form
          action="https://formsubmit.co/jsanyam219@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-[#1e1e1e] text-white border border-cyan-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-[#1e1e1e] text-white border border-cyan-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded bg-[#1e1e1e] text-white border border-cyan-400 focus:outline-none"
          />

          {/* Submit Button Centered */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="bg-cyan-400 text-black px-6 py-2 rounded hover:bg-cyan-300 hover:shadow-[0_0_10px_#22d3ee] transition duration-300"
              onClick={()=>{
                  toast.success('Send Succesfully')
                }}
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
