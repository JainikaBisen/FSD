import React, { useState } from "react";

const ProfessionalSummary = ({ onChange }) => {
  const [summary, setSummary] = useState("");

  const handleInputChange = (e) => {
    setSummary(e.target.value);
    onChange("summary", e.target.value);
  };

  return (
    <div>
      <h2>Professional Summary</h2>
      <textarea
        value={summary}
        onChange={handleInputChange}
        placeholder="Enter your professional summary"
      />
    </div>
  );
};

export default ProfessionalSummary;