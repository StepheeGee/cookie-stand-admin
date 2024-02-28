// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CreateTable from '../components/CreateTable.js';
import CreateForm from '../components/CreateForm.js';

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Define and initialize answeredQuestions

  const onCreate = (cookieStand) => {
    setLocations([...locations, cookieStand]);
    setTotal(total.map((value, index) => value + cookieStand.stand[index]));
  };

  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header answers={answeredQuestions} title={'Cookie Stand Admin'} />

      <main className="flex-grow">
        <div id="big_container" className="bg-green-400 flex-col flex w-10/12 my-10 p-4 m-auto rounded-md">
          <h2 className="text-center font-semibold text-2xl">Create Cookie Stands</h2>
          <br />
          <CreateForm onCreate={onCreate} />
        </div>
        <CreateTable locations={locations} total={total} />
      </main>

      <Footer nlocation={locations} />
    </div>
  );
}
