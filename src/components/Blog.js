import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: "code-mixed-llm",
      title: "Multilingual Fine-Tuning of LLMs for Code-Mixed Text Understanding",
      date: "September 2025",
      intro:
        "Code-mixed languages like Urdu-English or Roman-Urdu challenge NLP systems due to mixed grammar and scripts...",
      details:
        "In this blog, I share my research on fine-tuning multilingual models such as XLM-RoBERTa and mBERT on code-mixed datasets (like LinCE and custom Urdu-English corpora). I cover preprocessing, tokenization, and evaluation using accuracy and F1-scores, and explain how multilingual fine-tuning improves sentiment and intent detection tasks. Deliverables include a GitHub repo, demo app (Streamlit/Flask), and a research blog write-up."
    },
    {
      id: "healthcare-ai",
      title: "AI-Powered Healthcare Assistant for Early Disease Prediction",
      date: "August 2025",
      intro:
        "AI can improve healthcare access by predicting chronic diseases such as diabetes and heart disease early...",
      details:
        "This blog explains how I built ML and deep learning models (Logistic Regression, Random Forest, XGBoost, TensorFlow) for disease prediction using open datasets. I also integrated a Generative AI chatbot (LangChain + RAG) to explain risk scores in plain language. The project includes MLOps-style deployment using Flask/Streamlit, with optional cloud hosting, making it both practical and impactful for real-world healthcare solutions."
    },
    {
      id: "satellite-monitoring",
      title: "Monitoring Environmental Changes Using Satellite Imagery and AI",
      date: "July 2025",
      intro:
        "Satellite imagery combined with AI offers powerful tools to track deforestation, urbanization, and climate impacts...",
      details:
        "In this blog, I discuss how I used Sentinel-2 and Landsat-8 imagery with PySpark/Dask for preprocessing at scale, and trained CNNs and Vision Transformers for classification and segmentation. I evaluated models using IoU, Accuracy, and F1-score, and applied Grad-CAM for explainability. The results are visualized with interactive dashboards (Streamlit, Plotly, Folium), allowing users to explore environmental changes over time and even predict future trends."
    }
  ];

  return (
    <section id="blog" className="blog">
      <h2> Blog & Research Interest</h2>
      <p className="blog-intro">
        Here are some of my latest blogs and research interest work. Click on "Read More"
        to view full details.
      </p>

      <div className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <p>{blog.intro}</p>
            <Link to={`/blogs#${blog.id}`} className="read-more-btn">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
