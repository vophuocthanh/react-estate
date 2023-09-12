import React, { useState } from 'react';
import Button from '../../components/button/Button';
import { IconNext, IconPrevious } from '../../components/icon';
import EstateCard from '../../components/estate/EstateCard';

const TopOffersPage = () => {
  return (
    <div className='flex items-center flex-col justify-center mb-9'>
      <div className='flex items-center m-auto gap-[252px] justify-around'>
        <div className=''>
          <h1 className='w-[838px] h-[86px] text-xl font-bold text-darkBlue'>
            Top offers
          </h1>
          <p className='w-[611px] h-[69px] text-lg text-darkBlue'>
            Fulfill your career dreams, enjoy all the achievements of the city
            center and luxury housing to the fullest.
          </p>
        </div>
        <div className=''>
          <Button type='button'>Show all offers</Button>
        </div>
      </div>
      <div className='mt-[42px] flex items-center m-auto gap-[152px] justify-around'>
        <div className='w-[943px] h-[2px] bg-lightGray relative'>
          <div className='w-[250px] h-[2px] bg-blue-500 absolute top-0'></div>
        </div>
        <div className='flex gap-4'>
          <IconPrevious></IconPrevious>
          <IconNext></IconNext>
        </div>
      </div>
      <div className='flex w-[1230px] mt-16'>
        <EstateCard></EstateCard>
      </div>
    </div>
  );
};

export default TopOffersPage;
