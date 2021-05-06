import React from 'react';
import About from '../About/About';
import Info from '../Info/Info';
import BlockInfo from '../BlockInfo/BlockInfo';
import Welcome from '../Welcome/Welcome';
import Footer from '../Footer/Footer';

const Landing = () => {
  return (
    <>
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

export default Landing;
