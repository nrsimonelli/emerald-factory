import React from 'react';
import { Link } from 'react-router-dom';

import About from '../About/About';

function Landing() {
  return (
    <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='min-h-screen flex justify-center items-center'>
        <header>
          <p className='sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-primary dark:text-dkPrimary mb-3'>
            despisedwarmonger v1.0
          </p>
          <h1 className='text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8'>
            Welcome To The{' '}
            <span
              data-aos='fade-left'
              className='bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-fuchsia-600 dark:from-green-500 dark:to-teal-500'
            >
              Factory
            </span>
          </h1>
          <div className='text-coolGray-500 dark:text-coolGray-400 text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6'>
            <p>
              Your central location for competitive Scythe events!
            </p>
            <Link to='/profile'>
              <div className='text-base sm:text-lg lg:text-base xl:text-lg font-medium text-primary hover:text-primary-darker dark:text-dkPrimary dark:hover:text-dkPrimary-darker'>
                Learn more
              </div>
            </Link>
          </div>
        </header>
      </div>

      <About />
    </div>
  );
}

export default Landing;
