import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function RegistrationsByAcademicYearChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/registrations/by_academic_year')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) return <div>Loading...</div>;

  return (
    <div className="chart">
      <h3>Registrations by Academic Year</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="academic_year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
