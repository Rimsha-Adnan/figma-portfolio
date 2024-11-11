import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className='flex h-[35px] bg-[#F3F3F3] w-full text-black  mt-16'>
      <div>
      <h1 className='font-bold ml-28 font-[DM Sans]  text-3xl '>rim.</h1>
      </div>
      <div className=' ml-auto mr-28  space-x-10 font-semibold font-[DM Sans] text-center '>
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/">Playground</Link>
        <Link href="/">Contact</Link>
      </div>

    </div>
  );
}

export default Navbar;
