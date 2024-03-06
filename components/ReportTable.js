// components/ReportTable.js
import React from 'react';

function ReportTable({ locations, total, time, cookieStands, hoursTotals }) {
  return (
    <div className='flex justify-center font-serif'>
      {locations.length > 0 ? (
        <table className='m-7 mx-auto text-center bg-sand border-yellow-500 border-4 rounded-md'>
          <thead className='bg-sand-light text-center rounded-md text-yellow-100'>
            <th className="px-4 py-2 border-b border-yellow-500">Location</th>
            {time.map(element => (
              <th key={element} className='px-2 py-1 text-center border-b border-yellow-500'>{element}</th>
            ))}
            <th className="px-4 py-2 border-b border-yellow-500">Totals</th>
          </thead>
          {locations.map((location, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <tr key={idx} className={isEven ? 'bg-sand-dark text-yellow-900 border-b border-yellow-500' : 'bg-sand-light text-yellow-900 border-b border-yellow-500'}>
                <td className={isEven ? 'px-4 py-2 text-bold' : 'px-4 py-2'}>{location.location}</td>
                {location.stand.map((val, index) => (
                  <td key={index} className={isEven ? 'px-2 py-1' : 'px-2 py-1'}>{val}</td>
                ))}
              </tr>
            );
          })}
          <tr className='text-center bg-sand-light text-yellow-100'>
            <th className='px-4 py-2'>Totals</th>
            {total.map((value, index) => (
              <th key={index} className='px-2 py-1'>{value}</th>
            ))}
          </tr>
        </table>
      ) : (
        <h1 className='text-center font-bold text-2xl text-sand-dark'>No cookie stands created, yet.</h1>
      )}
    </div>
  );
}

export default ReportTable;
