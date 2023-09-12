import React from 'react';
import LayoutMain from '../../layouts/LayoutMain';
import ModernMainPage from '../../layouts/Modern/ModernMainPage';
import TopOffersPage from '../../layouts/TopOffers/TopOffersPage';
import AboutPage from '../../layouts/About/AboutPage';
import OurTeam from '../../layouts/Ourteam/OurTeam';
import FooterPage from '../../components/Footer/FooterPage';
import ContactPage from '../../components/Contact/ContactPage';
import { IconPagination } from '../../components/icon';
import ReferencesPage from '../../layouts/References/ReferencesPage';

const HomePage = () => {
  return (
    <LayoutMain>
      <div className='flex flex-col'>
        <ModernMainPage></ModernMainPage>
        <TopOffersPage></TopOffersPage>
        <AboutPage></AboutPage>
        <OurTeam></OurTeam>
        <div className='flex items-center justify-center mt-10'>
          <IconPagination></IconPagination>
        </div>
        <ReferencesPage></ReferencesPage>
        <div className='flex items-center justify-center mt-10'>
          <IconPagination></IconPagination>
        </div>
        <ContactPage></ContactPage>
        <FooterPage></FooterPage>
      </div>
    </LayoutMain>
  );
};

export default HomePage;
