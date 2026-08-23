import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Kashif Ali Profile" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I am <strong>Kashif Ali</strong>, a Computer Science graduate from
            the University of Gujrat, Pakistan, with a final BSCS CGPA of
            <strong> 3.6/4.0</strong>. I am now pursuing an MSc in
            <strong> Data Science & Artificial Intelligence</strong> at
            <strong> Université Côte d’Azur</strong>, France.
          </p>
          <p>
            My interests lie in{" "}
            <span className="highlight">Artificial Intelligence</span>,
            <span className="highlight"> Machine Learning</span>,
            <span className="highlight"> Deep Learning</span>,
            <span className="highlight"> Data Science</span>, and intelligent
            systems that turn data and ideas into practical solutions.
          </p>
          <p>
            Through academic and personal projects, I have developed experience
            in AI/ML, data analysis, and full-stack software development. I
            enjoy learning by building, collaborating on meaningful technical
            work, and exploring opportunities in research, internships, and
            applied AI projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
