import React, { useEffect, useState } from 'react';

export default function TotalRegistrationsWidget() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/registrations/count')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(console.error);
  }, []);

  if (count === null) return <div>Loading...</div>;

  return (
    <div className="widget">
      <h3>Total Registrations</h3>
      <p>{count}</p>
    </div>
  );
}
