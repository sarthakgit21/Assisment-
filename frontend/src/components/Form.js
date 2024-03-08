// src/components/Form.js
import React, { useState } from "react";

const Form = ({ addEntry }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    hobbies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      hobbies: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="hobbies"
        value={formData.hobbies}
        onChange={handleChange}
        placeholder="Hobbies"
      />
      <button type="submit" onClick={addEntry} >Save</button>
    </form>
  );
};

export default Form;
