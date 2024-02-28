// components/CreateForm.js
import React, { useState } from 'react';
import { hours } from '../data.js';

function CreateForm({ onCreate }) {
  const [location, setLocation] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [avg, setAvg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const minNum = Math.floor(parseInt(min));
    const maxNum = Math.floor(parseInt(max));
    const avgNum = parseFloat(avg);

    let hour = [];
    let sum = 0;

    for (let h = 0; h < hours.length; h++) {
      let val = Math.floor((Math.random() * (maxNum - minNum + 1) + minNum) * avgNum);
      hour.push(val);
      sum += val;
    }
    hour.push(sum);

    const newStand = {
      location,
      stand: hour,
    };

    // Pass the new stand data to the parent component
    onCreate(newStand);

    // Clear form inputs
    setLocation('');
    setMin('');
    setMax('');
    setAvg('');
  };

  return (
    <form onSubmit={handleSubmit} className='bg-green-300 p-8 rounded-3xl'>

      <label className='px-5 text-black'>Location</label>
      <input
        className="w-10/12 text-black"  
        type="text"
        id='location'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      /> <br />
      <div className='grid grid-cols-3 p-4 float-left'>
        <div className='bg-green-100 p-4 rounded-xl m-2'>
          <label className='p-2 text-black'>Minimum Customer per Hour</label><br />
          <input
            className='w-full text-black'  
            name="min"
            type="number"
            id='min'
            value={min}
            onChange={(e) => setMin(e.target.value)}
            required
          />
        </div>
        <div className='bg-green-100 p-4 rounded-xl m-2'>
          <label className='p-2 text-black'>Maximum Customer per Hour</label><br />
          <input
            className='w-full text-black'  
            name="max"
            type="number"
            id='max'
            value={max}
            onChange={(e) => setMax(e.target.value)}
            required
          />
        </div>
        <div className='bg-green-100 p-4 rounded-xl m-2'>
          <label className='p-2 text-black'>Average Cookies per Sale</label><br />
          <input
            className='w-full text-black'  // Apply text-black class here
            name="avg"
            type="number"
            id='avg'
            value={avg}
            onChange={(e) => setAvg(e.target.value)}
            required
          />
        </div>
      </div>
      <button className='text-white mt-10 bg-green-500 px-10 py-3 rounded-xl hover:text-green-600 hover:bg-green-100' type='submit'>Create</button>
    </form>
  );
}

export default CreateForm;