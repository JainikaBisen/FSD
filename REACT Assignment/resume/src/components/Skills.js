import React, { useState } from "react";

const Skills = ({ onChange }) => {
  const [academicSkills, setAcademicSkills] = useState([]);
  const [nonAcademicSkills, setNonAcademicSkills] = useState([]);

  const handleAcademicSkillChange = (e) => {
    const newSkills = e.target.value.split(",");
    setAcademicSkills(newSkills);
    onChange("academicSkills", newSkills);
  };

  const handleNonAcademicSkillChange = (e) => {
    const newSkills = e.target.value.split(",");
    setNonAcademicSkills(newSkills);
    onChange("nonAcademicSkills", newSkills);
  };

  return (
    <div>
      <h2>Academic and Non-Academic Skills</h2>
      <input
        type="text"
        value={academicSkills.join(",")}
        onChange={handleAcademicSkillChange}
        placeholder="Enter academic skills separated by commas"
      />
      <input
        type="text"
        value={nonAcademicSkills.join(",")}
        onChange={handleNonAcademicSkillChange}
        placeholder="Enter non-academic skills separated by commas"
      />
    </div>
  );
};

export default Skills;