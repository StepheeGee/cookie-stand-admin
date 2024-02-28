// components/Table.js
import React from 'react';
import { hours } from '../data.js';

function Table({ cookieStands, hoursTotals }) {
  if (locations.length) {
    return (
            <table className="w-1/2 mx-auto border-4 border-collapse border-green-500 mt-10 bg-green-200">
                <thead>
                    <tr className='bg-green-400'>
                        <th className="border border-green-500 p-1 ">Location</th>
                        {open_hours.map((h,i)=> <th key={i} className="border border-green-500 p-1">{h}am</th>)}
                        <th className="border border-green-500 p-1">Totals</th>
                    </tr>
                </thead>
                <tbody>

                    {cookieStands.map((stand,k) => (
                        <tr key={k} className="bg-green-200 odd:bg-green-300 ">
                            <td className="pl-2 border border-green-500 p-1">{stand.location}</td>
                            {stand.hourly_sales.map((sales,i) => <td key={i} className="pl-2 border border-green-500 p-1">{sales}</td> )}
                            <td className="pl-2 border border-green-500 p-1">{stand.hourly_sales.reduce((a,h)=> a+=h, 0)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot >
                    <tr className="bg-green-400">
                        <th>Totals</th>
                    {hoursTotals.map((hr_s,i) =>  <th key={i} className="pl-2 border border-green-500 p-1">{hr_s}</th> )}
                        <th className="pl-2 border border-green-500 p-1">{hoursTotals.reduce((a,h)=> a+=h, 0)}</th>
    
                    </tr>
                </tfoot>
            </table>
    
        )} else {
        return (
            <h2 className='m-5 text-gray-700 text-xl' >No Cookie Stands Available</h2>
        )
    }
}

export default Table;