// src/components/BlogDetails.js
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const blogs = [
    {
      id: "code-mixed-llm",
      title:
        "Multilingual Fine-Tuning of LLMs for Code-Mixed Text Understanding",
      date: "September 2025",
      details:
        "Code-mixed languages like Urdu-English and Roman-Urdu create challenges for NLP systems due to mixed scripts and grammar. " +
        "This project focuses on fine-tuning multilingual transformer models (XLM-RoBERTa, mBERT) for better understanding of code-mixed text. " +
        "I worked with datasets like LinCE and a custom Urdu-English dataset, applying preprocessing, tokenization, and classification tasks such as sentiment analysis, hate speech detection, and intent detection. " +
        "Models were evaluated using Accuracy and F1-score, achieving clear improvements over English-only baselines. " +
        "Deliverables include open-source training code, a Streamlit/Flask demo application, and a research blog to share insights.",
      report: "/reports/Multilingual Code-Mixed Sentiment Analysis_REPORT.pdf",
    },
    {
      id: "satellite-monitoring",
      title: "Monitoring Environmental Changes Using Satellite Imagery and AI",
      date: "July 2025",
      details:
        "This project uses satellite imagery (Sentinel-2 and Landsat-8) to monitor vegetation changes, deforestation, urbanization, and water body changes. " +
        "Preprocessing was performed with PySpark/Dask for handling large datasets, with normalization, tiling, and augmentation applied for training. " +
        "Models included CNNs and Vision Transformers for classification, and U-Net for segmentation tasks. " +
        "Evaluation metrics used were IoU, Accuracy, and F1-score. Grad-CAM was applied for explainability. " +
        "Visualization was done with Streamlit, Plotly, and Folium dashboards, including time-slider functionality to explore trends over years. " +
        "An advanced extension applied time-series analysis to predict future vegetation changes. " +
        "This project demonstrates how AI and satellite data can be combined for sustainability-focused research.",
      report: "/reports/NDVI_Vegetation_Change_Report.pdf",
    },
    {
      id: "healthcare-ai",
      title: "AI Health Assistant – Early Disease Risk Prediction",
      date: "August 2025",
      details:
        "A simple AI-powered health prediction tool built using Streamlit. " +
        "It currently supports Diabetes and Heart Disease risk prediction using trained machine learning models. " +
        "Features include: Diabetes prediction (using glucose, BMI, insulin, etc.), Heart Disease prediction (using blood pressure, cholesterol, chest pain type, etc.), " +
        "a probability bar for showing confidence levels, and a modern, responsive Streamlit UI. " +
        "The tech stack includes Python 3.9+, Streamlit for the frontend, Scikit-learn for ML, Joblib for saving/loading models, and NumPy for numerical processing. " +
        "Planned improvements include adding a RAG-based chatbot to explain predictions, expanding to more diseases (Cancer, Kidney disease, etc.), " +
        "building a health dashboard, mobile app version, and cloud deployment. " +
        "⚠️ Note: This tool is for educational purposes only and not a substitute for professional medical advice.",
      report: "/reports/Project_Report.pdf",
    },
  ];

  // Auto-scroll to specific blog when page loads
  useEffect(() => {
    if (location.hash) {
      const blogId = location.hash.replace("#", "");
      const element = document.getElementById(blogId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="blog-details">
      {/* Back to Home Button */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <h2>All Blogs</h2>
      <div className="blog-details-container">
        {blogs.map((blog) => (
          <div key={blog.id} id={blog.id} className="blog-detail-card">
            <h3>{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <p>{blog.details}</p>
            {blog.report && (
              <a
                href={blog.report}
                download
                className="report-link"
              >
                Download Report
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogDetails;
