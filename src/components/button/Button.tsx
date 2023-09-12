import React from 'react';
interface IButon {
  type: string;
  children: string;
  className?: string;
}

const Button = ({ type, children, className }: IButon) => {
  return (
    <div>
      <button className='inline-flex items-center justify-center px-6 py-3 font-sans font-semibold tracking-wide text-white bg-CTA_2 rounded-lg w-[138px] h-[38px]'>
        {children}
      </button>
    </div>
  );
};

export default Button;
