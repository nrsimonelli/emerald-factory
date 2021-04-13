import React from 'react';

import { AiTwotoneHeart } from 'react-icons/ai';
import { IoTrophy } from 'react-icons/io5';
import { RiPlantFill } from 'react-icons/ri';

const About = () => {
  return (
    <div className='pb-20 min-h-screen flex justify-center items-center'>
      <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold dark:text-white text-gray-900'>
              Build something
            </h2>
            <p className='text-lg leading-relaxed mt-4 mb-4 text-blueGray-500 dark:text-blueGray-400'>
              Put the potentially record low maximum sea ice extent
              tihs year down to low ice. According to the National
              Oceanic and Atmospheric Administration, Ted, Scambos.
            </p>
          </div>
        </div>
        <div className='flex flex-wrap mt-12 justify-center'>
          <div className='w-full lg:w-3/12 px-4 text-center'>
            <div className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-teal-500 dark:to-green-500 inline-flex items-center justify-center'>
              <RiPlantFill className='h-8 w-auto text-white dark:text-black' />
            </div>
            <h6 className='text-xl mt-5 font-semibold dark:text-white text-gray-900'>
              Learn & Grow
            </h6>
            <p className='mt-2 mb-4 text-blueGray-500 dark:text-blueGray-400'>
              Deepen your understanding of the game by taking
              advantage the community's rich library.
            </p>
          </div>
          <div className='w-full lg:w-3/12 px-4 text-center'>
            <div className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-teal-500 dark:to-green-500 inline-flex items-center justify-center'>
              <IoTrophy className='h-8 w-auto text-white dark:text-black' />
            </div>
            <h5 className='text-xl mt-5 font-semibold dark:text-white text-gray-900'>
              Test your skills
            </h5>
            <p className='mt-2 mb-4 text-blueGray-500 dark:text-blueGray-400'>
              Challenge yourself against top players from around the
              world and push your game to the next level.
            </p>
          </div>
          <div className='w-full lg:w-3/12 px-4 text-center'>
            <div className='p-3 w-12 h-12 shadow-lg rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 dark:from-teal-500 dark:to-green-500 inline-flex items-center justify-center'>
              <AiTwotoneHeart className='h-8 w-auto text-white dark:text-black' />
            </div>
            <h5 className='text-xl mt-5 font-semibold dark:text-white text-gray-900'>
              Support
            </h5>
            <p className='mt-2 mb-4 text-blueGray-500 dark:text-blueGray-400'>
              Be a part of something amazing and help lift up those
              around you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
