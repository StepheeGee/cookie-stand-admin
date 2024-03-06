// components/CookieStandAdmin.js
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';
import Footer from './Footer';

export default function CookieStandAdmin({ onLogout }) {
  const [reports, setReports] = useState([]);

  const handleCreate = async (formData) => {
    // Simulate an API POST request
    const newReport = { ...formData, id: reports.length + 1 };
    // Normally, you'd await the response from your API here, but we'll simulate it
    // const response = await fetch('/api/locations', { method: 'POST', body: JSON.stringify(newReport), headers: {'Content-Type': 'application/json'} });
    // const data = await response.json();
    // For simulation purposes, we're just adding it to the local state
    setReports([...reports, newReport]);
  };

  // Function to handle delete
  const handleDelete = async (reportId) => {
    // Simulate delete request
    // await fetch(`/api/locations/${reportId}`, { method: 'DELETE' });
    // For simulation purposes, we're filtering it out from the local state
    setReports(reports.filter(report => report.id !== reportId));
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header/>
      <main>
        <CreateForm onCreate={handleCreate} />

        {/* Pass the required data to the ReportTable component */}
        <ReportTable locations={reports} onDelete={handleDelete} total={reports.length} time={time} cookieStands={cookieStands} hoursTotals={hoursTotals}/>

        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <button
            onClick={onLogout}
            className="px-4 py-2 font-bold text-white bg-blue-500 hover:bg-green-700 rounded hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </main>
      <Footer reportCount={reports.length} />
    </>
  );
}
