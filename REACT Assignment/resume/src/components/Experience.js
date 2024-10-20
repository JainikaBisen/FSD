import React, { useState } from "react";

const Experience = ({ onChange }) => {
  const [experience, setExperience] = useState([{ title: "", company: "", year: "" }]);

  const handleChange = (index, e) => {
    const newExperience = [...experience];
    newExperience[index][e.target.name] = e.target.value;
    setExperience(newExperience);
    onChange("experience", newExperience);
  };

  const addExperience = () => {
    setExperience([...experience, { title: "", company: "", year: "" }]);
  };

  return (
    <div>
      <h2>Experience and Internships</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            value={exp.title}
            onChange={(e) => handleChange(index, e)}
            placeholder="Job Title"
          />
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            placeholder="Company"
          />
          <input
            type="text"
            name="year"
            value={exp.year}
            onChange={(e) => handleChange(index, e)}
            placeholder="Year"
          />
        </div>
      ))}
      <button type="button" onClick={addExperience}>
        Add More Experience
      </button>
    </div>
  );
};

export default Experience;