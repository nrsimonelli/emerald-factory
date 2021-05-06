import React from 'react';
import Nav from '../Nav/Nav';

const GameDetails = () => {
  return (
    <>
      <Nav />

      <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
        <div className='flex justify-center items-center mt-12'>
          <h1 className='text-darkAlpha-major dark:text-alpha-pure text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8'>
            Game Details
          </h1>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
