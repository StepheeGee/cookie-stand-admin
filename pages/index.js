// // pages/index.js
// import Head from 'next/head';
// import { useState } from 'react';
// import Header from '../components/Header.js';
// import Footer from '../components/Footer.js';
// import CreateTable from '../components/CreateTable.js';
// import CreateForm from '../components/CreateForm.js';
// import { time } from '../data.js';

// export default function Home() {
//   const [locations, setLocations] = useState([]);
//   const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

//   const onCreate = (cookieStand) => {
//     setLocations([...locations, cookieStand]);
//     setTotal(total.map((value, index) => value + cookieStand.stand[index]));
//   };

//   return (
//     <div className="flex flex-col min-h-screen font-serif">
//       <Head>
//         <title>Cookie Stand Admin</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Header title={'Cookie Stand Admin'} />

//       <main className="flex-grow">
//         <div id="big_container" className="bg-green-400 flex-col flex w-10/12 my-10 p-4 m-auto rounded-md">
//           <h2 className="text-center font-semibold text-2xl">Create Cookie Stands</h2>
//           <br />
//           <CreateForm onCreate={onCreate} time={time} />
//         </div>
//         <CreateTable locations={locations} total={total} time={time} />
//       </main>

//       <Footer nlocation={locations} />
//     </div>
//   );
// }

// pages/index.js
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateTable from '../components/CreateTable';
import CreateForm from '../components/CreateForm';
import LoginForm from '../components/LoginForm';

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [total, setTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {

    if (username === 'demo' && password === 'password') {
      setUser({ username });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Simulate logout by resetting the user state
    setUser(null);
  };

  const onCreate = (cookieStand) => {
    setLocations([...locations, cookieStand]);
    setTotal(total.map((value, index) => value + cookieStand.stand[index]));
  };

  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Header title={'Cookie Stand Admin'} />

      <main className="flex-grow">
        {user ? (
          <div id="big_container" className="bg-green-400 flex-col flex w-10/12 my-10 p-4 m-auto rounded-md">
            <h2 className="text-center font-semibold text-2xl">Create Cookie Stands</h2>
            <p>Welcome, {user.username}!</p>
            <button onClick={handleLogout}>Logout</button>
            <br />
            <CreateForm onCreate={onCreate} />
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}

        <CreateTable locations={locations} total={total} />
      </main>

      <Footer nlocation={locations} />
    </div>
  );
}

