import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./Dashboard.css";

const sampleData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 70 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard: 5G Network Insights</h2>
      <div className="chart-section">
        <LineChart width={500} height={300} data={sampleData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
