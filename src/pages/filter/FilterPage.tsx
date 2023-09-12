import React from 'react';
import LayoutMain from '../../layouts/LayoutMain';
import ContactPage from '../../components/Contact/ContactPage';
import FooterPage from '../../components/Footer/FooterPage';
const FilterPage = () => {
  return (
    <LayoutMain>
      <div className='mb-8'>
        <h1 className='flex text-textColor items-center justify-center text-6xl font-bold w-[1440px] m-auto'>
          Search for an offer
        </h1>
        <p className='flex text-textColor items-center justify-center h-11 text-xl '>
          Choose from the most advantageous offers
        </p>
      </div>
      <ContactPage></ContactPage>
      <FooterPage></FooterPage>
    </LayoutMain>
  );
};

export default FilterPage;
