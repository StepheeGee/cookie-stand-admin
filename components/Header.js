// components/Header.js
import Link from 'next/link';

function CookieStandHeader() {
  return (
    <header className="flex justify-between bg-green-500 text-black-100 p-3 items-center">
      <h1 className="font-semibold text-4xl font-sans mx-9">Cookie Stand Admin</h1>
      <Link href='/overview' legacyBehavior>
        <a className="bg-gray-100 text-gray-800 rounded-lg mr-4 pb-1 pl-1 pr-1 text-l float-right">Overview</a>
      </Link>
    </header>
  );
}

export default CookieStandHeader;
