import React, { useEffect, useState } from 'react';

export default function TopSecondarySchoolsTable() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/registrations/top_secondary_schools')
      .then(res => res.json())
      .then(setSchools)
      .catch(console.error);
  }, []);

  if (!schools.length) return <div>Loading...</div>;

  return (
    <div className="table-widget">
      <h3>Top 10 Secondary Schools</h3>
      <table>
        <thead>
          <tr>
            <th>Secondary School</th>
            <th>Registrations</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school, index) => (
            <tr key={index}>
              <td>{school.secondary_school}</td>
              <td>{school.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
