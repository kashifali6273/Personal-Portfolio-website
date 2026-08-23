import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Certificates />
              <Blog />
              <Contact />
              <Footer />
            </div>
          }
        />

        <Route path="/blogs" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
