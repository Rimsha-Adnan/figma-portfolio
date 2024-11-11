import React from 'react';

function Footer() {
  return (
    <div className=' flex w-[1400px] bg-[#F3F3F3] h-20 ml-28 mr-28 mt-60'>
      <div className='flex'>
        <h3 className='text-[#2429AF] font-semibold text-xl font-[DM Sans]'>Rimsha Sheikh</h3>
        <div className='max-h-0.5 w-4 ml-1 mr-1 mt-3 bg-[#2429AF]'></div>
        <h3 className='text-[#2429AF] font-semibold text-xl'>2024</h3>
      </div>
      <div className='flex gap-7 text-justify ml-[800px] text-[#606060] font-semibold font-[DM Sans] text-xl'>
        <div>Artstation</div>
        <div>Linkdin</div>
        <div>Twitter</div>
      </div>
    </div>
  );
}

export default Footer;
