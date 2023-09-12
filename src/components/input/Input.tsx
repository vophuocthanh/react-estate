import React from 'react';

const Input = () => {
  return (
    <div>
      <input
        type='text'
        placeholder='Enter your content'
        className='w-[256px] h-[38px] border border-slate-200 rounded-lg py-[12px] px-4 outline-none  bg-transparent'
      />
    </div>
  );
};

export default Input;
