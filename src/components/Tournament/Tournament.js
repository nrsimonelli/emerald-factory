import React from 'react';

import Nav from '../Nav/Nav';
import EventTable from '../Info/EventTable';

const Tournament = () => {
  return (
    <>
      <Nav />

      <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
        <div className='flex justify-center items-center mt-12'>
          <h1 className='text-darkAlpha-major dark:text-alpha-pure text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8'>
            Scythe Events
          </h1>
        </div>
        <div className='min-h-screen flex flex-col justify-start items-center '>
          <EventTable title='Upcoming' />
          <EventTable title='Active' />
          <EventTable title='Past' />
        </div>
      </div>
    </>
  );
};

export default Tournament;
