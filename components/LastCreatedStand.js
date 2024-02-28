// components/LastCreatedStand.js
import React from 'react';

export default function LastCreatedStand({ lastStand }) {
  return (
    <div>
      <h2>Last Created Cookie Stand</h2>
      <pre>{JSON.stringify(lastStand, null, 2)}</pre>
    </div>
  );
}
