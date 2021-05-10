import React from 'react';
import Nav from '../Nav/Nav';
import Welcome from './Welcome';
import About from './About';
import BlockInfo from './BlockInfo';
import Info from './Info';
import Footer from '../Footer/Footer';

const Hero = () => {
  return (
    <>
      <Nav />
      <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
        <Welcome />
        <About />
      </div>
      <BlockInfo />
      <Info />
      <Footer />
    </>
  );
};

export default Hero;
