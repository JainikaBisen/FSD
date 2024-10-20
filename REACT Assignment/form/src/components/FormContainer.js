import React, { useState } from "react";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

const FormContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [errors, setErrors] = useState({});
  
  const [successMessage, setSuccessMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^[0-9]{10}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    let formErrors = {};

    if (!name) formErrors.name = "Name is required.";
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email format.";
    }
    if (!phone) {
        formErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
        formErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccessMessage("Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <h1>User Information Form</h1>

      <form onSubmit={handleSubmit} className="form">
        <FormInput
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <FormInput
          label="Phone Number"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />

        <FormInput
          label="Address (Optional)"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <SubmitButton />

        {successMessage && <SuccessMessage message={successMessage} />}
      </form>
    </div>
  );
};

export default FormContainer;