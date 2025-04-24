import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    description: "",
    resource: "",
    throughput: "",
    load: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    description: [],
    resource: [],
    throughput: [],
    load: [],
  });

  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/dropdown-options")
      .then((res) => res.json())
      .then((data) => setDropdownOptions(data))
      .catch((err) => console.error("Error loading dropdown options:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setPrediction(data.prediction || "Error fetching prediction");
  };

  const renderOptions = (items) =>
    items.map((item, idx) => (
      <option key={idx} value={item}>
        {item}
      </option>
    ));

  return (
    <div className="app-container">
      <h1>5G Network Optimization Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        />

        <label>Resource Allocation Strategy</label>
        <input
          type="text"
          name="resource"
          value={formData.resource}
          onChange={handleChange}
          placeholder="Enter resource strategy"
          required
        />

        <label>Throughput Maximization Outcome</label>
        <select name="throughput" onChange={handleChange} required>
          <option value="">Select...</option>
          {renderOptions(dropdownOptions.throughput)}
        </select>

        <label>Load Balancing Outcome</label>
        <select name="load" onChange={handleChange} required>
          <option value="">Select...</option>
          {renderOptions(dropdownOptions.load)}
        </select>

        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <div className="prediction-box">Prediction: {prediction}</div>
      )}
    </div>
  );
}

export default App;
