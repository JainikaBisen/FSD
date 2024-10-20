import React from "react";
import ErrorMessage from "./ErrorMessage";

const FormInput = ({ label, type, value, onChange, error }) => {
  return (
    <div className="form-control">
      <label>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={error ? "error-input" : ""}
      />
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default FormInput;