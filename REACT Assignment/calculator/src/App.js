import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      allClear();
    } else if (value === "=") {
      calculate();
    } else if (["+", "-", "*", "/"].includes(value)) {
      chooseOperation(value);
    } else {
      appendValue(value);
    }
  };

  const appendValue = (value) => {
    if (value === "." && currentInput.includes(".")) return;
    setCurrentInput(currentInput + value);
  };

  const chooseOperation = (op) => {
    if (currentInput === "") return;
    if (previousInput !== "") {
      calculate();
    }
    setOperation(op);
    setPreviousInput(currentInput);
    setCurrentInput("");
  };

  const allClear = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperation(null);
    setResult("");
  };

  const calculate = () => {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    setResult(computation);
    setCurrentInput(computation.toString());
    setPreviousInput("");
    setOperation(null);
  };

  return (
    <div className="calculator">
      <Display
        previous={`${previousInput} ${operation || ""}`}
        current={currentInput || result || "0"}
      />
      <div className="calculator-buttons">
        <Button value="AC" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="0" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} />

        <Button value="9" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="7" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />

        <Button value="6" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="4" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />

        <Button value="3" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="1" onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />

        <Button value="=" className="span-four" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;