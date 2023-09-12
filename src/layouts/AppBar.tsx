import React from 'react';
import { IconLogo } from '../components/icon';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';

const AppBar = () => {
  return (
    <div className='flex justify-around mt-10 mb-[70px] m-auto w-[1440px]'>
      <div className=''>
        <Link to='/'>
          <IconLogo></IconLogo>
        </Link>
      </div>
      <div className='flex items-center gap-6 text-textColor'>
        <Link to='/filter'>
          <h2 className=''>Top offers</h2>
        </Link>
        <Link to='/'>
          <h2 className=''>Search in offers</h2>
        </Link>
        <Link to='/'>
          <h2 className=''>References</h2>
        </Link>
        <Link to='/'>
          <h2 className=''>References</h2>
        </Link>
        <Link to='/'>
          <h2 className=''>References</h2>
        </Link>
      </div>
      <div className=''>
        <Button type='button'>Button</Button>
      </div>
    </div>
  );
};

export default AppBar;
