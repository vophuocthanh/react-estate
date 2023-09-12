import React from 'react';

const ReferencesPage = () => {
  return (
    <div className='flex flex-wrap w-[1440px] m-auto mt-[60px] items-center justify-center'>
      <div className='flex mr-[435px] flex-col m-auto'>
        <h1 className='w-[838px] h-[86px] text-darkBlue text-5xl font-bold'>
          References
        </h1>
        <p className='w-[611px] h-[69px] text-darkBlue text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum
          donec ultricies cras id ac.
        </p>
      </div>
      <div className=' flex gap-6'>
        <div className='flex '>
          <div className='w-[541px] h-[340px] bg-lightGray rounded'>
            <div className='relative'>
              <span className='text-9xl absolute text-[#757575] bottom-20 left-3'>
                “
              </span>
              <p className='w-[444px]  text-darkBlue text-lg mt-12 ml-[63px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique in pellentesque ultrices et massa neque, convallis
                lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc
                placerat ultricies pretium.
              </p>
            </div>
            <div className='mt-4 ml-3'>
              <h2 className='w-[194px] font-bold text-darkBlue text-xl'>
                Emerson Aminoff
              </h2>
              <p className='w-[273px] text-darkBlue text-lg'>
                3 bedroom apartmentt in Madrid
              </p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[541px] h-[340px] bg-lightGray rounded'>
            <div className='relative'>
              <span className='text-9xl absolute text-[#757575] bottom-20 left-3'>
                “
              </span>
              <p className='w-[444px]  text-darkBlue text-lg mt-12 ml-[63px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Tristique in pellentesque ultrices et massa neque, convallis
                lorem. Erat proin in posuere dui accumsan lorem. Diam nunc
                scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc
                placerat ultricies pretium.
              </p>
            </div>
            <div className='mt-4 ml-3'>
              <h2 className='w-[194px] font-bold text-darkBlue text-xl'>
                Emerson Aminoff
              </h2>
              <p className='w-[273px] text-darkBlue text-lg'>
                3 bedroom apartmentt in Madrid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
