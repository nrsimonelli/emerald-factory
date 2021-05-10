import React from 'react';
import { Link } from 'react-router-dom';

const LeaderTable = (props) => {
  return (
    <>
      <div className='w-full mb-6 px-4 overflow-hidden'>
        <div className='shadow-md rounded my-6 overflow-auto'>
          <table className='w-full bg-alpha-major dark:bg-darkAlpha'>
            <thead>
              <tr className='bg-beta-major dark:bg-darkBeta text-alpha-major dark:text-darkAlpha-major uppercase text-xs leading-normal'>
                <th className='py-3 px-6 text-left'>Rank</th>
                <th className='py-3 px-6 text-left'>Player</th>
                <th className='py-3 px-6 text-center'>Faction</th>
                <th className='py-3 px-6 text-center'>Mat</th>
                <th className='py-3 px-6 text-center'>Wins</th>
                <th className='py-3 px-6 text-center'>Losses</th>
                <th className='py-3 px-6 text-center'>Total</th>
                <th className='py-3 px-6 text-center'>Win Rate</th>
                <th className='py-3 px-6 text-center'>ELO</th>
              </tr>
            </thead>
            <tbody className='text-darkAlpha-mid dark:text-alpha-mid text-sm overflow-y-scroll w-full'>
              <tr className='border-b border-alpha dark:border-darkAlpha-minor hover:bg-alpha dark:hover:bg-darkAlpha-minor'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div>1</div>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <Link to='/players/1'>
                        <img
                          className='w-6 h-6 rounded-full border-alpha dark:border-darkAlpha-minor transform hover:scale-125'
                          src='https://ssb.wiki.gallery/images/thumb/a/ae/Kirby_SSBB.jpg/250px-Kirby_SSBB.jpg'
                        />
                      </Link>
                    </div>
                    <Link to='/players/1'>
                      <span>Player Name</span>
                    </Link>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full border-alpha dark:border-darkAlpha-minor'
                        src='https://ssb.wiki.gallery/images/thumb/a/ae/Kirby_SSBB.jpg/250px-Kirby_SSBB.jpg'
                      />
                    </div>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full border-alpha dark:border-darkAlpha-minor'
                        src='https://ssb.wiki.gallery/images/thumb/a/ae/Kirby_SSBB.jpg/250px-Kirby_SSBB.jpg'
                      />
                    </div>
                  </div>
                </td>
                <td className='py-3 px-6 text-center text-positive dark:text-darkPositive'>
                  <div>56</div>
                </td>
                <td className='py-3 px-6 text-center text-negative dark:text-darkNegative'>
                  <div>4</div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div>60</div>
                </td>
                <td className='py-3 px-6 text-center text-warning dark:text-darkWarning'>
                  <div>95%</div>
                </td>

                <td className='py-3 px-6 text-center'>
                  <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                    hmm
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderTable;
