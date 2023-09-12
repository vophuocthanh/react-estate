import React from 'react';
import About from '../../assets/about.png';
import Dots from '../../assets/dots.png';
const AboutPage = () => {
  return (
    <div className='flex items-center justify-center mt-[60px] mb-[60px]'>
      <div className=''>
        <img src={About} alt='About' className='w-[628px] h-[471px]' />
        <img src={Dots} alt='Dots' className='w-[100px] h-[100px]' />
      </div>
      <div className='ml-[90px]'>
        <h1 className='w-[356px] h-[56px] text-5xl text-darkBlue font-bold'>
          About us
        </h1>
        <p className='w-[352px] h-[414px] text-darkBlue text-lg'>
          We are a company that connects the world of real estate and finance.
          We provide a complete service for the sale, purchase or rental of real
          estate. Our advantage is more than 15 years of experience and soil in
          attractive locations in Slovakia with branches in Bratislava and
          Košice.
          <br />
          <br />
          We have a connection to all banks on the Slovak market, so we can
          solve everything under one roof. By constantly innovating our business
          activities, we move forward and we are able to offer truly
          above-standard services that set us apart from the competition.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
