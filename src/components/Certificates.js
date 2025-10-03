import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Certificates = () => {
  // Certificates list (major first)
  const certificates = [
    {
      title: "Microsoft AI & ML Engineering",
      link: "https://coursera.org/share/ec081f6615a925761f0a329a659d57c8",
      description:
        "Specialization covering AI foundations, ML algorithms, troubleshooting agents, and Azure integration.",
    },
    {
      title: "IBM Generative AI Engineering",
      link: "https://coursera.org/verify/IBMGenAI123",
      description:
        "Comprehensive specialization on Generative AI, Transformers, RAG, LangChain, and advanced fine-tuning.",
    },
    {
      title: "Big Data Specialization - UC San Diego",
      link: "https://coursera.org/share/93a81693eda7b10a222512987fbc00e6",
      description:
        "Focused on Hadoop, Spark, graph analytics, and large-scale data systems.",
    },
    {
      title: "Mathematics for Machine Learning - Imperial College London",
      link: "https://coursera.org/verify/MathsML123",
      description:
        "Covered Linear Algebra, Multivariate Calculus, and PCA for ML foundations.",
    },
    {
      title: "Machine Learning Specialization - University of Washington",
      link: "https://coursera.org/verify/MLUW123",
      description:
        "Regression, classification, clustering, and retrieval using case-study approach.",
    },
    {
      title: "Python 3 Programming Specialization",
      link: "https://coursera.org/verify/Py3Spec123",
      description:
        "Learned advanced Python, OOP, and software engineering best practices.",
    },
    {
      title: "Fundamentals of Reinforcement Learning - University of Alberta",
      link: "https://coursera.org/verify/RL123",
      description:
        "Explored RL fundamentals, policies, and value-based learning.",
    },
    {
      title: "Fundamentals of NLP - University of Colorado Boulder",
      link: "https://coursera.org/verify/NLP123",
      description:
        "Learned core NLP techniques, embeddings, and sequence models.",
    },
    {
      title: "Google AI Essentials",
      link: "https://coursera.org/verify/GoogleAI123",
      description:
        "Essentials of AI, prompting, responsible usage, and productivity with AI tools.",
    },
    {
      title: "Learn MLOps for Machine Learning - Pearson",
      link: "https://coursera.org/verify/MLOps123",
      description:
        "Introduction to MLOps pipeline, deployment, and monitoring for ML systems.",
    },
    {
      title: "Algorithmic Toolbox - UC San Diego",
      link: "https://coursera.org/verify/Algo123",
      description: "Algorithm design and analysis techniques.",
    },
    {
      title: "Data Structures - UC San Diego",
      link: "https://coursera.org/verify/DataStruct123",
      description: "Deep dive into data structures for scalable systems.",
    },
    {
      title: "Python for Data Science, AI & Development - IBM",
      link: "https://coursera.org/verify/PyDSAI123",
      description:
        "Applied Python to DS, AI, and web applications with Flask.",
    },
    {
      title: "Databases and SQL for Data Science - IBM",
      link: "https://coursera.org/verify/SQL123",
      description: "Learned SQL, data modeling, and querying techniques.",
    },
    {
      title: "Python for Everybody (3 courses)",
      link: "https://coursera.org/verify/Py4E123",
      description:
        "Programming basics, Python data structures, and web data access.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  // Default view = 4 major certificates
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section id="certificates" className="certificates">
      <h2>My Certificates</h2>
      <p className="cert-intro">
        I have completed multiple specializations and professional certificates
        from top universities and companies.You can click to verify.
      </p>

      <div className="certificates-container">
        <AnimatePresence>
          {visibleCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="certificate-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href={cert.link} target="_blank" rel="noreferrer">
                {cert.title}
              </a>
              <p className="certificate-description">{cert.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        className="view-toggle-btn"
        onClick={() => setShowAll(!showAll)}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
      >
        {showAll ? "Show Less" : "View All Certificates"}
      </motion.button>
    </section>
  );
};

export default Certificates;
