import React, { useState } from "react";

const CareerObjective = ({ onChange }) => {
  const [careerObjective, setCareerObjective] = useState("");

  const handleInputChange = (e) => {
    setCareerObjective(e.target.value);
    onChange("careerObjective", e.target.value);
  };

  return (
    <div>
      <h2>Career Objective</h2>
      <textarea
        value={careerObjective}
        onChange={handleInputChange}
        placeholder="Enter your career objective"
      />
    </div>
  );
};

export default CareerObjective;