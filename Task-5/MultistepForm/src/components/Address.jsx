/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Address = ({ data, setData }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!data.street) newErrors.street = "Street is required.";
    if (!data.city) newErrors.city = "City is required.";
    if (!data.zip) newErrors.zip = "ZIP code is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/review");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Address Information</h2>
      <div>
        <label>Street:</label>
        <input
          type="text"
          value={data.street || ""}
          onChange={(e) => setData({ ...data, street: e.target.value })}
        />
        {errors.street && <span>{errors.street}</span>}
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={data.city || ""}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />
        {errors.city && <span>{errors.city}</span>}
      </div>
      <div>
        <label>ZIP:</label>
        <input
          type="text"
          value={data.zip || ""}
          onChange={(e) => setData({ ...data, zip: e.target.value })}
        />
        {errors.zip && <span>{errors.zip}</span>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

// Add PropTypes validation
Address.propTypes = {
  data: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default Address;

