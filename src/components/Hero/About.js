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
          <div className='w-full md:w-7/12 lg:w-6/12 px-4'>
            <h2
              data-aos='zoom-out-right'
              className='text-4xl font-semibold dark:text-alpha-major text-darkAlpha-major'
            >
              Build something
            </h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-darkAlpha-mid dark:text-alpha-mid'>
              Put the potentially record low maximum sea ice extent
              tihs year down to low ice. According to the National
              Oceanic and Atmospheric Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap mt-12 justify-center'>
          <div className='w-full md:w-7/12 lg:w-3/12 px-4 text-center'>
            <div
              data-aos='flip-left'
              data-aos-delay='400'
              className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin-minor dark:to-darkBetaMax-minor inline-flex items-center justify-center'
            >
              <RiPlantFill className='h-8 w-auto text-alpha-pure dark:text-darkAlpha-pure' />
            </div>
            <h6 className='text-xl mt-5 font-semibold dark:text-alpha-major text-darkAlpha-major'>
              Learn & Grow
            </h6>
            <p className='mt-2 mb-4 text-darkAlpha-mid dark:text-alpha-mid'>
              Deepen your understanding of the game by taking
              advantage the community's rich knowledge base.
            </p>
          </div>
          <div className='w-full md:w-7/12 lg:w-3/12 px-4 text-center'>
            <div
              data-aos='flip-left'
              data-aos-delay='800'
              className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin-minor dark:to-darkBetaMax-minor inline-flex items-center justify-center'
            >
              <IoTrophy className='h-8 w-auto text-alpha-pure dark:text-darkAlpha-pure' />
            </div>
            <h5 className='text-xl mt-5 font-semibold dark:text-alpha-major text-darkAlpha-major'>
              Test your skills
            </h5>
            <p className='mt-2 mb-4 text-darkAlpha-mid dark:text-alpha-mid'>
              Challenge yourself against top players from around the
              world, take your game to the next level.
            </p>
          </div>
          <div className='w-full md:w-7/12 lg:w-3/12 px-4 text-center'>
            <div
              data-aos='flip-left'
              data-aos-delay='1200'
              className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-betaMin-minor to-betaMax-minor dark:from-darkBetaMin-minor dark:to-darkBetaMax-minor inline-flex items-center justify-center'
            >
              <AiTwotoneHeart className='h-8 w-auto text-alpha-pure dark:text-darkAlpha-pure' />
            </div>
            <h5 className='text-xl mt-5 font-semibold dark:text-alpha-major text-darkAlpha-major'>
              Support
            </h5>
            <p className='mt-2 mb-4 text-darkAlpha-mid dark:text-alpha-mid'>
              Be a part of something new and exciting! Help lift up
              those around you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
