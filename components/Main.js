// components/Main.js
import React from 'react';
import CreateForm from './CreateForm';
import Table from './Table';

function Main({ onCreate, locations, total }) {
  return (
    <main className="main">
      <CreateForm onCreate={onCreate} />
      <Table locations={locations} total={total} />
    </main>
  );
}

export default Main;
