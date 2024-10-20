import React, { useState } from "react";

const Education = ({ onChange }) => {
  const [education, setEducation] = useState([{ school: "", degree: "", year: "" }]);

  const handleChange = (index, e) => {
    const newEducation = [...education];
    newEducation[index][e.target.name] = e.target.value;
    setEducation(newEducation);
    onChange("education", newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { school: "", degree: "", year: "" }]);
  };

  return (
    <div>
      <h2>Education Qualifications</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="school"
            value={edu.school}
            onChange={(e) => handleChange(index, e)}
            placeholder="School/University"
          />
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            placeholder="Degree"
          />
          <input
            type="text"
            name="year"
            value={edu.year}
            onChange={(e) => handleChange(index, e)}
            placeholder="Year of Completion"
          />
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add More Education
      </button>
    </div>
  );
};

export default Education;