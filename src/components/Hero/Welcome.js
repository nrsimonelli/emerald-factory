import React from 'react';

const Welcome = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <header>
        <p className='sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-beta dark:text-darkBeta mb-3'>
          despisedwarmonger v1.0
        </p>
        <h1 className='text-darkAlpha-major dark:text-alpha-pure text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8'>
          Welcome To <br />
          <span
            data-aos='zoom-out-up'
            className='bg-clip-text text-transparent bg-gradient-to-r from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin dark:to-darkBetaMax'
          >
            Scythe League
          </span>
        </h1>
        <div className='text-alpha-neutral dark:text-darkAlpha-neutral text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6'>
          <p>Your central location for competitive Scythe events!</p>
          <a href='#about'>
            <div className='text-base sm:text-lg lg:text-base xl:text-lg font-medium text-beta hover:text-beta-major dark:text-darkBeta dark:hover:text-darkBeta-minor'>
              Learn more
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
