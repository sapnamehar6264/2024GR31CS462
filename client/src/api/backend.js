import axios from "axios";

export const sendPredictionRequest = (inputData) =>
  axios.post("http://localhost:5000/predict", inputData);
