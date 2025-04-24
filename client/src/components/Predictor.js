import React, { useState } from "react";
import "./Predictor.css";

function Predictor() {
  const [formData, setFormData] = useState({
    description: "",
    resource: "",
    throughput: "",
    load: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData),
    });
    const text = await res.text();
    const match = text.match(/Prediction:\s*([A-Za-z0-9 _-]+)/i);
    setPrediction(match ? match[1] : "Error fetching prediction");
  };

  return (
    <div className="app-container">
      <h1>5G Network Optimization Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          required
        />

        <label>Resource Allocation Strategy</label>
        <input type="text" name="resource" onChange={handleChange} required />

        <label>Throughput Maximization Outcome</label>
        <input type="text" name="throughput" onChange={handleChange} required />

        <label>Load Balancing Outcome</label>
        <input type="text" name="load" onChange={handleChange} required />

        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <div className="prediction-box">Prediction: {prediction}</div>
      )}
    </div>
  );
}

export default Predictor;
