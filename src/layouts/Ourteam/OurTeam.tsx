import React from 'react';
import Avatar from '../../assets/avatar.png';
const OurTeam = () => {
  return (
    <div className=' flex flex-wrap gap-9 w-[1440px] m-auto items-center justify-center'>
      <div className='w-[350px] h-[378px] rounded bg-white shadow-md flex flex-col items-center justify-center'>
        <img src={Avatar} alt='avatar' className='w-[200px] h-[200px]' />
        <h2 className='mt-3 text-xl font-bold text-darkBlue'>Maren Press</h2>
        <span className='mt-2 text-lg text-darkBlue'>Super duper position</span>
      </div>
      <div className='w-[350px] h-[378px] rounded bg-white shadow-md flex flex-col items-center justify-center'>
        <img src={Avatar} alt='avatar' className='w-[200px] h-[200px]' />
        <h2 className='mt-3 text-xl font-bold text-darkBlue'>Maren Press</h2>
        <span className='mt-2 text-lg text-darkBlue'>Super duper position</span>
      </div>
      <div className='text-darkBlue'>
        <h1 className='w-[352px] h-[56px] text-5xl font-bold'>Our Team</h1>
        <p className='w-[352px] h-[104px]'>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Purus
          <br /> rutrum donec ultricies cras id ac.
        </p>
      </div>
      <div className='w-[350px] h-[378px] rounded bg-white shadow-md flex flex-col items-center justify-center'>
        <img src={Avatar} alt='avatar' className='w-[200px] h-[200px]' />
        <h2 className='mt-3 text-xl font-bold text-darkBlue'>Maren Press</h2>
        <span className='mt-2 text-lg text-darkBlue'>Super duper position</span>
      </div>
      <div className='w-[350px] h-[378px] rounded bg-white shadow-md flex flex-col items-center justify-center'>
        <img src={Avatar} alt='avatar' className='w-[200px] h-[200px]' />
        <h2 className='mt-3 text-xl font-bold text-darkBlue'>Maren Press</h2>
        <span className='mt-2 text-lg text-darkBlue'>Super duper position</span>
      </div>
      <div className='w-[350px] h-[378px] rounded bg-white shadow-md flex flex-col items-center justify-center'>
        <img src={Avatar} alt='avatar' className='w-[200px] h-[200px]' />
        <h2 className='mt-3 text-xl font-bold text-darkBlue'>Maren Press</h2>
        <span className='mt-2 text-lg text-darkBlue'>Super duper position</span>
      </div>
    </div>
  );
};

export default OurTeam;
