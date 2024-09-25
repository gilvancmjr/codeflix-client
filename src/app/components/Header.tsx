import React from 'react';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full items-center justify-between bg-blue-500 px-4 py-4 lg:px-10 lg:px-6'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='netflix'
        width={120}
        height={120}
      />
      <ul>
        <li>Home</li>
        <li>TV Showa</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
}
