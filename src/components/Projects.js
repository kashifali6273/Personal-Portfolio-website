import React, { useRef } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "AI-Powered Resume Matcher & Job Monitoring System",
      description:
        "A Flask-based application that matches resumes with job descriptions, gives feedback on fit, and monitors relevant opportunities with automated alerts.",
      link: "https://github.com/kashifali6273/AI-Powered-Resume-Matcher-and-Job-Monitoring-System",
      tech: "Python, Flask, AI, NLP",
    },
    {
      title: "Multilingual Code-Mixed Sentiment Analysis",
      description:
        "A research-focused NLP project using XLM-RoBERTa for sentiment classification on multilingual code-mixed datasets, with emphasis on real-world text understanding.",
      link: "https://github.com/kashifali6273/Code-Mixed-Sentiment-Analysis-using-XLM-RoBERTa",
      tech: "Python, Transformers, NLP, Deep Learning",
    },
    {
      title: "Monitoring Vegetation Changes in Punjab Using NDVI and CNN",
      description:
        "A geospatial and AI project using NDVI and convolutional models to analyze regional vegetation changes and visualize environmental patterns.",
      link: "https://github.com/kashifali6273/Monitoring-Vegetation-Changes-in-Punjab-Using-NDVI-and-CNN",
      tech: "Python, CNN, Remote Sensing, Data Analysis",
    },
    {
      title: "Personalized Learning Recommendation System",
      description:
        "An intelligent recommendation system designed to tailor learning paths using data-driven analysis of student performance and learning needs.",
      link: "https://github.com/kashifali6273/Personalized-Learning-Recommendation-System",
      tech: "Python, Machine Learning, Recommendation Systems",
    },
    {
      title: "Twitter Sentiment Analysis with Big Data",
      description:
        "An end-to-end big data pipeline for sentiment analysis, combining Apache Spark, FastAPI, and React to process and present social media insights.",
      link: "https://github.com/kashifali6273/Twitter-Sentiment-Analysis-with-Big-Data-Spark-FastAPI-React",
      tech: "Spark, FastAPI, React, Python",
    },
    {
      title: "AI Health Assistant",
      description:
        "A Streamlit-based disease risk prediction application that applies machine learning models to provide practical health insight in a user-friendly interface.",
      link: "https://github.com/kashifali6273/AI-Health-Assistant-Disease-Risk-Prediction-with-Streamlit",
      tech: "Python, Streamlit, Machine Learning",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="projects-nav">
        <button onClick={() => scroll("left")} className="scroll-btn">
          ⬅
        </button>
        <button onClick={() => scroll("right")} className="scroll-btn">
          ➡
        </button>
      </div>

      <div className="projects-scroll" ref={scrollRef}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.tech}</div>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
