import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiApachespark,
  SiJupyter,
  SiGithub,
  SiNumpy,
  SiPandas,
  SiGooglecolab,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const Skills = () => {
  const skillCategories = [
    {
      title: "Artificial Intelligence & Machine Learning",
      skills: [
        { name: "Machine Learning", level: 92, icon: <SiScikitlearn /> },
        { name: "Deep Learning", level: 86, icon: <SiPytorch /> },
        {
          name: "Artificial Intelligence",
          level: 88,
          icon: <GiArtificialIntelligence />,
        },
        { name: "Scikit-learn", level: 90, icon: <SiScikitlearn /> },
        { name: "XGBoost", level: 82, icon: <SiScikitlearn /> },
        { name: "PyTorch", level: 84, icon: <SiPytorch /> },
        { name: "TensorFlow / Keras", level: 80, icon: <SiTensorflow /> },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { name: "Python", level: 95, icon: <FaPython /> },
        { name: "Pandas", level: 88, icon: <SiPandas /> },
        { name: "NumPy", level: 88, icon: <SiNumpy /> },
        { name: "Data Analysis", level: 86, icon: <FaDatabase /> },
        { name: "Data Visualization", level: 84, icon: <SiJupyter /> },
        { name: "Feature Engineering", level: 82, icon: <FaDatabase /> },
        { name: "Data Preprocessing", level: 85, icon: <FaDatabase /> },
      ],
    },
    {
      title: "Big Data & Distributed Computing",
      skills: [
        { name: "Apache Spark", level: 80, icon: <SiApachespark /> },
        { name: "Spark ML", level: 78, icon: <SiApachespark /> },
      ],
    },
    {
      title: "Programming & Web Development",
      skills: [
        { name: "JavaScript", level: 82, icon: <FaJs /> },
        { name: "React", level: 84, icon: <FaReact /> },
        { name: "HTML", level: 86, icon: <FaHtml5 /> },
        { name: "CSS", level: 84, icon: <FaCss3Alt /> },
        { name: "Java", level: 72, icon: <FaJs /> },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Jupyter", level: 90, icon: <SiJupyter /> },
        { name: "VS Code", level: 90, icon: <FaGitAlt /> },
        { name: "Google Colab", level: 88, icon: <SiGooglecolab /> },
        { name: "Git / GitHub", level: 86, icon: <SiGithub /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p className="skills-intro">
        I focus on <strong>AI, machine learning, data science</strong>, and
        practical software engineering, with experience building intelligent
        systems and data-driven applications.
      </p>

      <div className="skills-categories">
        {skillCategories.map((category, catIndex) => (
          <div key={category.title} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-container">
              {category.skills.map((skill, index) => (
                <div key={skill.name} className="skill">
                  <div className="skill-header">
                    <span>
                      {skill.icon} {skill.name}
                    </span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-level"
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.08,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                    />
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
