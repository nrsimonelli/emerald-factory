import React from 'react';

const Welcome = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <header>
        <a
          href='https://github.com/nrsimonelli/emerald-factory'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className='sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-beta dark:text-darkBeta hover:text-beta-minor mb-3'>
            emerald factory v1.0
          </p>
        </a>
        <h1 className='text-3xl sm:text-5xl lg:text-7xl leading-none font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blackFade-light to-blackFade-dark dark:from-whiteFade-light dark:to-whiteFade-dark'>
          Welcome To
        </h1>
        <a href='/'>
          <h1
            data-aos='zoom-out'
            className='pb-4 text-3xl sm:text-5xl lg:text-7xl leading-none font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin dark:to-darkBetaMax'
          >
            Scythe League
          </h1>
        </a>
        <div className='text-alpha-neutral dark:text-darkAlpha-neutral text-lg sm:text-2xl font-normal sm:leading-10 space-y-6 mb-6'>
          <p className='mb-3'>
            Your central location for competitive Scythe events
          </p>
          <a href='#about'>
            <div className='text-base sm:text-lg lg:text-base xl:text-lg font-medium text-beta hover:text-beta-minor dark:text-darkBeta dark:hover:text-darkBeta-minor'>
              Learn more!
            </div>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
