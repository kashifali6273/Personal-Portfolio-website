import React, { useRef } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Multilingual Code-Mixed Sentiment Analysis",
      description:
        "Fine-tuned XLM-RoBERTa on multilingual code-mixed datasets (English + Roman Urdu) for sentiment classification. Research-focused project demonstrating expertise in NLP and multilingual AI.",
      link: "https://github.com/kashifali6273/Code-Mixed-Sentiment-Analysis-using-XLM-RoBERTa",
    },
    {
      title: "AI-Powered Resume Matcher & Job Monitoring System",
      description:
        "Flask-based web platform that matches resumes with job descriptions, provides AI-driven feedback, and monitors job postings in real-time with automated email alerts.",
      link: "https://github.com/kashifali6273/AI-Powered-Resume-Matcher-and-Job-Monitoring-System",
    },
    {
      title: "Monitoring Vegetation Changes in Punjab Using NDVI and CNN",
      description:
        "Used NDVI and a pre-trained CNN to detect vegetation changes between 2018–2022, with heatmaps showing significant environmental shifts.",
      link: "https://github.com/kashifali6273/Monitoring-Vegetation-Changes-in-Punjab-Using-NDVI-and-CNN",
    },
    {
      title: "Personalized Learning Recommendation System",
      description:
        "AI-powered system combining supervised, unsupervised, and reinforcement learning to recommend study resources and paths tailored to student performance and learning styles.",
      link: "https://github.com/kashifali6273/Personalized-Learning-Recommendation-System",
    },
    {
      title: "AI Co-Founder",
      description:
        "An intelligent assistant that helps brainstorm, validate, and support startup ideas using AI-driven insights and LLM-powered reasoning.",
      link: "https://github.com/kashifali6273/AI-Co-Founder",
    },
    {
      title: "Twitter Sentiment Analysis with Big Data (Spark + FastAPI + React)",
      description:
        "End-to-end big data pipeline analyzing Twitter sentiment using Apache Spark, served via FastAPI backend and React frontend.",
      link: "https://github.com/kashifali6273/Twitter-Sentiment-Analysis-with-Big-Data-Spark-FastAPI-React",
    },
    {
      title: "AI Health Assistant",
      description:
        "Streamlit-based app that predicts Diabetes and Heart Disease risk using trained ML models. Features a clean UI and is easily extendable for future enhancements.",
      link: "https://github.com/kashifali6273/AI-Health-Assistant-Disease-Risk-Prediction-with-Streamlit",
    },
    {
      title: "E-commerce Sales Analysis",
      description:
        "Data analysis project uncovering sales trends, customer segmentation, and forecasting insights using Python and visualization libraries.",
      link: "https://github.com/kashifali6273/Ecommerce-Sales-Analysis",
    },
    {
      title: "A/B Testing Experiment Analysis",
      description:
        "Designed and analyzed A/B testing experiments to optimize conversion rates, applying statistical methods and visualization for insights.",
      link: "https://github.com/kashifali6273/A-B-Testing-Experiment-Analysis-and-Optimization",
    },
    {
      title: "Wheat Yield Prediction",
      description:
        "Machine learning model predicting wheat yield based on environmental and soil features, showcasing AI in agriculture.",
      link: "https://github.com/kashifali6273/Wheat-Yield-Prediction",
    },
    {
      title: "Personal Expense Tracker",
      description:
        "Flask-based multi-user expense tracker with budgeting, filtering, editing, and PDF reporting functionality.",
      link: "https://github.com/kashifali6273/Personal-Expense-Tracker",
    },
    {
      title: "Mood Tracker Application",
      description:
        "Python application for tracking emotions, analyzing mood data, and exporting reports in CSV/PDF format.",
      link: "https://github.com/kashifali6273/Mood-Tracker-",
    },
  ];

  // Scroll helper
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
      <h2>My Projects</h2>

      {/* Arrows */}
      <div className="projects-nav">
        <button onClick={() => scroll("left")} className="scroll-btn">⬅</button>
        <button onClick={() => scroll("right")} className="scroll-btn">➡</button>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="projects-scroll" ref={scrollRef}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
