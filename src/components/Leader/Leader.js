import React from 'react';
import Nav from '../Nav/Nav';
import LeaderTable from './LeaderTable';

const Leader = () => {
  return (
    <>
      <Nav />
      <div className='px-4 mx-auto max-w-full md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
        <div className='flex justify-center items-center mt-12'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-blackFade-light to-blackFade-dark dark:from-whiteFade-light dark:to-whiteFade-dark text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-6 pb-4'>
            Player Rankings
          </h1>
        </div>

        <div className='min-h-screen flex flex-col justify-start items-center '>
          <LeaderTable title='Leaderboard' />
        </div>
      </div>
    </>
  );
};

export default Leader;
