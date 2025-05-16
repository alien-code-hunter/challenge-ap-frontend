import React from 'react';
import TotalRegistrationsWidget from './TotalRegistrationsWidget';
import RegistrationsByProgrammeChart from './RegistrationsByProgrammeChart';
import RegistrationsByAcademicYearChart from './RegistrationsByAcademicYearChart';
import TopSecondarySchoolsTable from './TopSecondarySchoolsTable';

export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Registration Dashboard</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <TotalRegistrationsWidget />
        <RegistrationsByProgrammeChart />
        <RegistrationsByAcademicYearChart />
        <TopSecondarySchoolsTable />
      </div>
    </div>
  );
}
