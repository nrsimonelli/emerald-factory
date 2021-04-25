import React from 'react';
import { Link } from 'react-router-dom';

const Color = () => {
  return (
    <div className='h-screen'>
      <div className='h-1/5 bg-violet-500'>
        <div className='h-1/2 bg-fuchsia-500'>
          <Link to='/'>Home</Link>
        </div>
      </div>
      <div className='h-1/5 bg-purple-500'>
        <div className='h-1/2 bg-indigo-500'></div>
      </div>
      <div className='h-1/5 bg-black'>
        <div className='h-1/2 bg-black'></div>
        <div className='h-1/2 bg-black'></div>
      </div>
      <div className='px-6 h-2/5 bg-black text-fuchsia-500'>
        Scythe League
      </div>
    </div>
  );
};

export default Color;
