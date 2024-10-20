import React from "react";

function Display({ previous, current }) {
  return (
    <div className="calculator-display">
      {/* Display previous input and operation */}
      <div className="previous-display">{previous}</div>
      {/* Display current input */}
      <div className="current-display">{current}</div>
    </div>
  );
}

export default Display;