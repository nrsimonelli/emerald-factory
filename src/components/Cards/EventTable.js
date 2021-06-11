import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaEye, FaUserCheck } from 'react-icons/fa';

const EventStatus = (status) => {
  if (status === 1) {
    return (
      <span className='bg-blue-200 text-blue-700 py-1 px-3 rounded-full text-xs w-20'>
        Active!
      </span>
    );
  }
  if (status === 2) {
    return (
      <span className='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs w-20'>
        Open
      </span>
    );
  }
  if (status === 3) {
    return (
      <span className='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs w-20'>
        Full
      </span>
    );
  }
  if (status === 4) {
    return (
      <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs w-20'>
        Complete
      </span>
    );
  }
};

const EventTable = (props) => {
  return (
    <>
      <div className='w-full mb-6 px-4 overflow-hidden'>
        <div className='max-h-60 shadow-md rounded my-6 overflow-auto'>
          <table className='w-full bg-alpha-major dark:bg-darkAlpha'>
            <thead>
              <tr className='sticky z-10 top-0 bg-beta-major dark:bg-darkBeta text-alpha-major dark:text-darkAlpha-major uppercase text-sm leading-normal'>
                <th className='py-3 px-6 text-left'>{props.title}</th>
                <th className='py-3 px-6 text-left'>Date</th>
                <th className='py-3 px-6 text-center'>Duration</th>
                <th className='py-3 px-6 text-center'>Finalists</th>
                <th className='py-3 px-6 text-center'>Status</th>
                <th className='py-3 px-6 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody className='text-darkAlpha-mid dark:text-alpha-mid text-sm overflow-y-scroll w-full'>
              <tr className='border-b border-alpha dark:border-darkAlpha-minor hover:bg-alpha dark:hover:bg-darkAlpha-minor'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <Link to='/events/1'>
                      <span className='font-medium'>May Classic</span>
                    </Link>
                    <div className='flex-shrink-0 h-6 w-6 ml-2'>
                      <img
                        className='w-6 h-6 rounded-full border-alpha dark:border-darkAlpha-minor'
                        src='https://ssb.wiki.gallery/images/thumb/a/ae/Kirby_SSBB.jpg/250px-Kirby_SSBB.jpg'
                        alt=''
                      />
                    </div>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <span>5/15/2021</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>1 Month</td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-8 h-8 rounded-full border-alpha dark:border-darkAlpha-minor border -mr-1 transform hover:scale-125'
                      src='https://play.nintendo.com/images/Masthead_Kirby.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png'
                      alt=''
                    />
                    <img
                      className='w-8 h-8 rounded-full border-alpha dark:border-darkAlpha-minor border -mr-1 transform hover:scale-125'
                      src='https://i.pinimg.com/originals/89/ca/c1/89cac15c75c6bc1277f723205b59d79b.jpg'
                      alt=''
                    />
                    <img
                      className='w-8 h-8 rounded-full border-alpha dark:border-darkAlpha-minor border -mr-1 transform hover:scale-125'
                      src='https://w7.pngwing.com/pngs/264/391/png-transparent-kirby-s-return-to-dream-land-kirby-s-dream-land-kirby-super-star-kirby-the-amazing-mirror-mario-kart-game-mammal-cat-like-mammal.png'
                      alt=''
                    />
                  </div>
                </td>
                <td className='text-center flex h-14 items-center justify-center'>
                  {EventStatus(4)}
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <Link to='/events/1'>
                      <div className='w-6 h-6 ml-1 transform hover:text-purple-500 hover:scale-110'>
                        <FaEye size='20' />
                      </div>
                    </Link>
                    <Link to='/events/1'>
                      <div className='w-6 h-6 ml-1 transform hover:text-purple-500 hover:scale-110'>
                        <FaUserCheck size='20' />
                      </div>
                    </Link>
                    <Link to='/events/1'>
                      <div className='w-6 h-6 ml-1 transform hover:text-purple-500 hover:scale-110'>
                        <FaUsers size='20' />
                      </div>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EventTable;
