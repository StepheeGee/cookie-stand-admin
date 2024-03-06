// pages/overview.js
import Link from 'next/link';

function Overview() {
  return (
    <div>
      <h1>Overview Page</h1>
      <Link href="/">
        <a className='bg-green-400  text-white p-5 rounded-lg m-40 hover:bg-green-100 hover:text-green-400' >Return to Main page</a>
      </Link>
    </div>
  );
}

export default Overview;
