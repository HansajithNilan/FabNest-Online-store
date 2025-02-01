import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './UserChart.css'

function UserChart() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Group users by registration date
  const groupedData = userData.reduce((acc, user) => {
    const date = new Date(user.createdAt).toISOString().split('T')[0]; // Extract date only
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(groupedData),
    datasets: [
      {
        label: 'Registered Users',
        data: Object.values(groupedData),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className='chart' style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
      <h2>User Registration Trend</h2>
      <Line data={chartData} />
    </div>
  );
}

export default UserChart;
