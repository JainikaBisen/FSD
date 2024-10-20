import React, { useState } from "react";

const Achievements = ({ onChange }) => {
  const [achievements, setAchievements] = useState([]);

  const handleInputChange = (e) => {
    const newAchievements = e.target.value.split(",");
    setAchievements(newAchievements);
    onChange("achievements", newAchievements);
  };

  return (
    <div>
      <h2>Skills and Achievements</h2>
      <textarea
        value={achievements.join(",")}
        onChange={handleInputChange}
        placeholder="Enter your skills and achievements, separated by commas"
      />
    </div>
  );
};

export default Achievements;