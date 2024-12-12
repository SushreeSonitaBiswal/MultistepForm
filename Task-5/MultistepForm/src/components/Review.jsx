/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Review = ({ data }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    console.log(data);
    // Optionally reset the form or handle data submission here
  };

  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <div>
        <h3>Personal Information</h3>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
      </div>
      <div>
        <h3>Address Information</h3>
        <p>Street: {data.street}</p>
        <p>City: {data.city}</p>
        <p>ZIP: {data.zip}</p>
      </div>
      <button onClick={() => navigate("/address")}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

// Add PropTypes validation
Review.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.string,
  }).isRequired,
};

export default Review;

