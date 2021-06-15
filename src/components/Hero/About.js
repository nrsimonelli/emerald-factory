import React from 'react';

import { AiTwotoneHeart } from 'react-icons/ai';
import { IoTrophy } from 'react-icons/io5';
import { RiPlantFill } from 'react-icons/ri';

const About = () => {
  return (
    <div
      id='about'
      className='pb-20 min-h-screen flex justify-center items-center'
    >
      <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full md:w-6/12 px-4'>
            <h2
              id='anchor'
              data-aos='zoom-out-right'
              className='text-4xl font-semibold dark:text-alpha-major text-darkAlpha-major'
            >
              Join the Community
            </h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-darkAlpha-mid dark:text-alpha-mid'>
              From first timers to seasoned veterans, all are welcome.
              Sign up for one of our Scythe events today!
            </p>
          </div>
        </div>
        <div className='flex flex-wrap mt-12 justify-center'>
          <div className='w-full md:mt-0 md:w-3/12 px-4 text-center'>
            <div
              data-aos='flip-left'
              data-aos-delay='400'
              data-aos-anchor-placement='about'
              className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin-minor dark:to-darkBetaMax-minor inline-flex items-center justify-center'
            >
              <RiPlantFill className='h-8 w-auto text-alpha-pure dark:text-darkAlpha-pure' />
            </div>
            <h6 className='text-xl mt-4 font-semibold dark:text-alpha-major text-darkAlpha-major'>
              Grow
            </h6>
            <p className='mt-2 text-darkAlpha-mid dark:text-alpha-mid lg:block hidden'>
              Deepen your understanding of the game alongside other
              passionate players.
            </p>
          </div>
          <div className='w-full mt-8 md:mt-0 md:w-3/12 px-4 text-center'>
            <div
              data-aos='flip-left'
              data-aos-delay='800'
              data-aos-anchor-placement='about'
              className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin-minor dark:to-darkBetaMax-minor inline-flex items-center justify-center'
            >
              <IoTrophy className='h-8 w-auto text-alpha-pure dark:text-darkAlpha-pure' />
            </div>
            <h5 className='text-xl mt-4 font-semibold dark:text-alpha-major text-darkAlpha-major'>
              Compete
            </h5>
            <p className='mt-2 text-darkAlpha-mid dark:text-alpha-mid lg:block hidden'>
              Take your game to the next level against players from
              around the world.
            </p>
          </div>
          <div className='w-full mt-8 md:mt-0 md:w-3/12 px-4 text-center'>
            <div
              data-aos='flip-left'
              data-aos-delay='1200'
              data-aos-anchor-placement='about'
              className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin-minor dark:to-darkBetaMax-minor inline-flex items-center justify-center'
            >
              <AiTwotoneHeart className='h-8 w-auto text-alpha-pure dark:text-darkAlpha-pure' />
            </div>
            <h5 className='text-xl mt-4 font-semibold dark:text-alpha-major text-darkAlpha-major'>
              Support
            </h5>
            <p className='mt-2 text-darkAlpha-mid dark:text-alpha-mid lg:block hidden'>
              Help lift up those around you while enjoying the
              wonderful game of Scythe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
