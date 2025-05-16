import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function RegistrationsByProgrammeChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/registrations/by_programme')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) return <div>Loading...</div>;

  return (
    <div className="chart">
      <h3>Registrations by Programme</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="study_programme" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

