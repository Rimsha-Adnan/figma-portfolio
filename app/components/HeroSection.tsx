import React from 'react';

function HeroSection() {
  return (
    <div className='ml-28 bg-[#F3F3F3] '>
      <div className='flex justify-between whitespace-nowrap mt-40'>
        <div>
        <h1 className='font-bold text-5xl text-black font-[DM Sans]'>Hello,I`m<br/>
            Rimsha Sheikh.
        </h1>
        </div>
        <div>
        <p className='ml-32 mt-12 mr-[60px] text-[#606060] font-medium text-3xl font-[DM Sans]'>
        
        I dedicated to building responsive, user-friendly web <br/>
        applications using tools like React and Next.js.I <br/>
        consistently focuses on improving my craft and staying <br/>
        current with the latest web technologies.
        </p>
        </div>
     
      </div>
      <div className='mt-32 text-4xl'>
      <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
}

export default HeroSection;
