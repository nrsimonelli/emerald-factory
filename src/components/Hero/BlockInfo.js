import React from 'react';

const BlockInfo = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin dark:to-darkBetaMax'>
      <svg
        id='visual'
        className='w-full'
        viewBox='0 0 900 600'
        width='100'
        version='1.1'
      >
        <path
          d='M0 117L900 305L900 0L0 0Z'
          strokeLinecap='square'
          strokeLinejoin='bevel'
        ></path>
      </svg>
    </div>
  );
};

export default BlockInfo;
