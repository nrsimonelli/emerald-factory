import React from 'react';
import { Link } from 'react-router-dom';

import About from '../About/About';

function Landing() {
  return (
    <div className='px-4 mx-auto max-w-screen-sm md:max-w-screen-md md:p-0 lg:max-w-screen-lg xl:max-w-screen-xl'>
      <div className='min-h-screen flex justify-center items-center'>
        <header>
          <p className='sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-beta dark:text-darkBeta mb-3'>
            despisedwarmonger v1.0
          </p>
          <h1 className='text-darkAlpha-major dark:text-alpha-pure text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8'>
            Welcome To{' '}
            <div
              data-aos='zoom-out-up'
              className='h-16 bg-clip-text text-transparent bg-gradient-to-r from-betaMax-minor to-betaMin-minor dark:from-darkBetaMin dark:to-darkBetaMax'
            >
              Scythe League
            </div>
          </h1>
          <div className='text-alpha-neutral dark:text-darkAlpha-neutral text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6'>
            <p>
              Your central location for competitive Scythe events!
            </p>
            <Link to='/profile'>
              <div className='text-base sm:text-lg lg:text-base xl:text-lg font-medium text-beta hover:text-beta-major dark:text-darkBeta dark:hover:text-darkBeta-minor'>
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
