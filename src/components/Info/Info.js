import React from 'react';
import Card from './Card';
const Info = () => {
  return (
    <div
      id='info'
      className='pb-20 mx-auto w-full min-h-screen bg-alpha-minor'
    >
      <div>
        <p className='text-4xl font-semibold dark:text-alpha-major text-darkAlpha-major'>
          Info text incoming..
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Info;
