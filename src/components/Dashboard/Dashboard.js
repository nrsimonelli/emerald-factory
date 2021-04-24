import React from 'react';
import Nav from '../../components/Nav/Nav';
const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className='px-4 md:px-10 mx-auto w-full -m-24'>
        <div className='flex flex-wrap'>
          <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
            <div>test 1</div>
          </div>
          <div className='w-full xl:w-4/12 px-4'>
            <div>test 1</div>
          </div>
        </div>
        <div className='flex flex-wrap mt-4'>
          <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
            <div>test 1</div>
          </div>
          <div className='w-full xl:w-4/12 px-4'>
            <div>test 1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
