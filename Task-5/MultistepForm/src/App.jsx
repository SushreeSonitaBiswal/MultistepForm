/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonalInfo from "./components/PersonalInfo";
import Address from "./components/Address";
import Review from "./components/Review";
import './App.css';


const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PersonalInfo data={formData} setData={setFormData} />}
        />
        <Route
          path="/address"
          element={<Address data={formData} setData={setFormData} />}
        />
        <Route path="/review" element={<Review data={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;


