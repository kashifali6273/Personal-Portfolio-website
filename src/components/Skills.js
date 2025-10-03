import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaDatabase, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiFlask } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core AI & Machine Learning",
      skills: [
        { name: "Python", level: 95, icon: <FaPython /> },
        { name: "Machine Learning", level: 90, icon: <SiScikitlearn /> },
        { name: "Deep Learning", level: 85, icon: <SiPytorch /> },
        { name: "Data Science & AI", level: 88, icon: <SiTensorflow /> },
        { name: "Natural Language Processing (NLP)", level: 80, icon: <GiArtificialIntelligence /> },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "Flask (Backend Development)", level: 78, icon: <SiFlask /> },
        { name: "React (Frontend Development)", level: 75, icon: <FaReact /> },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "SQL & Databases", level: 72, icon: <FaDatabase /> },
        { name: "Git & Version Control", level: 85, icon: <FaGitAlt /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p className="skills-intro">
        I specialize in <strong>Artificial Intelligence, Machine Learning, and Data Science</strong>,
        with experience in building intelligent systems, backend services, and full-stack applications. 
        Below is a breakdown of my skills across core AI, web development, and supporting tools.
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
                      transition={{ duration: 1, delay: (catIndex * 5 + index) * 0.1 }}
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
