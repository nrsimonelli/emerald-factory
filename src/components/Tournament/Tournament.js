import React from 'react';

import Nav from '../Nav/Nav';
import EventTable from '../Info/EventTable';

const Tournament = () => {
  return (
    <>
      <Nav />

      <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
        <div className='min-h-screen flex justify-center items-center'>
          <div className='w-full mb-12 px-4'>
            <EventTable title='Upcoming' />
            <EventTable title='Active' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tournament;
