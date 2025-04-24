import React, { useState } from "react";
import axios from "axios";

function InputForm() {
  const [input, setInput] = useState({
    description: "",
    resource: "",
    throughput: "",
    load: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", input);
      setResult(res.data.prediction);
    } catch (error) {
      console.error("Prediction error:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>5G Optimization Predictor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="resource"
          placeholder="Resource Strategy"
          onChange={handleChange}
        />
        <input
          type="text"
          name="throughput"
          placeholder="Throughput Outcome"
          onChange={handleChange}
        />
        <input
          type="text"
          name="load"
          placeholder="Load Outcome"
          onChange={handleChange}
        />
        <button type="submit">Predict</button>
      </form>
      {result && (
        <div>
          <strong>Prediction:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default InputForm;
