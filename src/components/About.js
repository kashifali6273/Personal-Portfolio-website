import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg"; // reuse your profile image

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Image with animation */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Kashif Ali Profile" />
        </motion.div>

        {/* Text with animation */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I am <strong>Kashif Ali</strong>, a Computer Science student with a strong academic record 
            (Matric 91%, Intermediate 92%, CGPA 3.61 after six semesters). 
            I am passionate about <span className="highlight">Artificial Intelligence</span>, 
            <span className="highlight"> Data Science</span>, and 
            <span className="highlight"> Machine Learning</span>, with a growing focus on solving 
            real-world problems through intelligent systems.
          </p>
          <p>
            I have developed practical projects including an AI-powered resume matcher, 
            a multilingual sentiment analysis system, a personal expense tracker, and 
            other applications that combine <strong>technical depth</strong> with 
            <strong> practical usability</strong>.
          </p>
          <p>
            Alongside my academic studies, I actively pursue certifications and research, 
            aiming to contribute to cutting-edge AI innovations and collaborative projects 
            that bridge <em>theory with real-world applications</em>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
