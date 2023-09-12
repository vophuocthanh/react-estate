import React from 'react';
import IconPlane from '../icon/IconPlane';
import Input from '../input/Input';
import Button from '../button/Button';
const ContactPage = () => {
  return (
    <div className='flex items-center  gap-[100px] justify-center max-w-full h-[398px] bg-lightGray mt-[40px]'>
      <IconPlane></IconPlane>
      <div className=''>
        <h1 className='w-[838px] h-[54px]text-4xl font-bold text-darkBlue'>
          Subscribe to newsletter
        </h1>
        <p className='w-[679px] h-[40px] text-xl text-textColor'>
          Get the latest news and interesting offers and real estate
        </p>
        <div className='flex items-center justify-start mt-3 gap-4'>
          <Input></Input>
          <Button type='button'>Subscribe</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
