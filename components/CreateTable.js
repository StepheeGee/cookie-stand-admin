// components/CreateTable.js
import React from 'react';
import { hours } from '../data.js';

function CreateTable(props) {
  return (
    <div className='flex justify-center font-serif '>
      {props.locations.length > 0 ? (
        <table className='m-7 mx-auto text-center bg-green-200'>
          <thead className='bg-green-600 text-center rounded-md '>
            <th className="rounded-md ">Location</th>
            {hours.map(element => (
              <th key={element} className='px-2 py-1 text-center rounded-md'>{element}</th>
            ))}
            <th className="rounded-md">Totals</th>
          </thead>
          {props.locations.map((location, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <tr key={idx} className={isEven ? 'bg-green-400 border-b  text-center border-black' : 'bg-green-300 border-b border-gray-50 text-center border-black'}>
                <td className={isEven ? 'px-10 py-3 text-center' : 'px-4 py-3 text-center text-bold'}>{location.location}</td>
                {location.stand.map((val, index) => (
                  <td key={index} className={isEven ? 'px-4 py-3 text-center' : 'text-center'}>{val}</td>
                ))}
              </tr>
            );
          })}
          <tr className='text-center bg-green-600'>
            <th className='px-2 py-1 text-center'>Totals</th>
            {props.total.map((value, index) => (
              <th key={index} className='px-2 py-1 text-center'>{value}</th>
            ))}
          </tr>
        </table>
      ) : (
        <div className='text-center'>
          <h1 className='text-center font-bold text-2xl text-black-900'>Sorry! No Locations Available</h1>
        </div>
      )}
    </div>
  );
}

export default CreateTable;
