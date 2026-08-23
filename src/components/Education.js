import React from "react";

const Education = () => {
  const education = [
    {
      title: "MSc Data Science & Artificial Intelligence",
      institution: "Université Côte d’Azur, France",
      status: "Incoming / Starting 2026",
      details:
        "Pursuing advanced study in machine learning, AI, data science, and applied intelligent systems.",
    },
    {
      title: "BS Computer Science",
      institution: "University of Gujrat, Pakistan",
      status: "Completed 2026",
      details: "Final CGPA: 3.6/4.0",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="section-heading">
        <h2>Education</h2>
      </div>

      <div className="education-container">
        {education.map((item, index) => (
          <div key={item.title} className="education-card">
            <div className="education-badge">{item.status}</div>
            <h3>{item.title}</h3>
            <p className="education-institution">{item.institution}</p>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
