import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs  } from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiFlask,
  SiC, SiCplusplus
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";


const Skills = () => {
  const skillCategories = [
    {
      title: "Core AI & Machine Learning",
      skills: [
        { name: "Python", level: 95, icon: <FaPython /> },
        { name: "Machine Learning", level: 90, icon: <SiScikitlearn /> },
        { name: "Data Science & AI", level: 85, icon: <SiTensorflow /> },
        { name: "Deep Learning", level: 80, icon: <SiPytorch /> },
        
        {
          name: "Natural Language Processing (NLP)",
          level: 80,
          icon: <GiArtificialIntelligence />,
        },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: <FaPython /> },
        { name: "C", level: 90, icon: <SiC /> },
        { name: "C++", level: 85, icon: <SiCplusplus /> },
        { name: "HTML", level: 85, icon: <FaHtml5 /> },
        { name: "CSS", level: 85, icon: <FaCss3Alt /> },
        { name: "JavaScript", level: 80, icon: <FaJs /> },
      ],
    },

    {
      title: "Web Development",
      skills: [
        { name: "Flask (Backend Development)", level: 80, icon: <SiFlask /> },
        { name: "React (Frontend Development)", level: 80, icon: <FaReact /> },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL & Databases", level: 75, icon: <FaDatabase /> },
        { name: "Git & Version Control", level: 75, icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        I specialize in{" "}
        <strong>
          Artificial Intelligence, Machine Learning, and Data Science
        </strong>
        , with experience in building intelligent systems, backend services, and
        full-stack applications. Below is a breakdown of my skills across core
        AI, web development, and supporting tools.
      </p>

      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-container">
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="skill">
                  <div className="skill-label">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-level"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: (catIndex * 5 + index) * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
