import React, { useState } from "react";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import CareerObjective from "./components/CareerObjective";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import './App.css';

const App = () => {
  const [resumeData, setResumeData] = useState({
    summary: "",
    education: [],
    academicSkills: [],
    nonAcademicSkills: [],
    careerObjective: "",
    experience: [],
    achievements: [],
  });

  const [submitted, setSubmitted] = useState(false);   
  const [error, setError] = useState("");              
  const handleChange = (section, data) => {
    setResumeData((prevState) => ({
      ...prevState,
      [section]: data,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  

   if (resumeData.education.length === 0) {
      setError("Educational qualification is required.");
      return;  
    }

    setError("");

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

    console.log("Resume Data:", resumeData);
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <ProfessionalSummary onChange={handleChange} />
        <Education onChange={handleChange} />
        <Skills onChange={handleChange} />
        <CareerObjective onChange={handleChange} />
        <Experience onChange={handleChange} />
        <Achievements onChange={handleChange} />
        
        {error && <div className="error-message">{error}</div>}

        <button type="submit">Submit Resume</button>
      </form>

      {submitted && (
        <div className="success-message">
          Resume submitted successfully!
        </div>
      )}
    </div>
  );
};

export default App;