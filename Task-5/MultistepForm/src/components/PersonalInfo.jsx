/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import validator from 'validator';

const PersonalInfo = ({ data, setData }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Name is required.";
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!validator.isEmail(data.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!data.phone) newErrors.phone = "Phone number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/address");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={data.name || ""}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={data.email || ""}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={data.phone || ""}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

// Add PropTypes validation
PersonalInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default PersonalInfo;

