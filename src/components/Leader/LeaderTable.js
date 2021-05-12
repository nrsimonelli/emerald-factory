import React from 'react';
import { Link } from 'react-router-dom';

const LeaderTable = () => {
  const players = [
    {
      rank: '1',
      name: 'JoyDivision',
      image:
        'https://play.nintendo.com/images/Masthead_Kirby.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png',
      faction: 'Crimea',
      mat: 'Industrial',
      wins: '52',
      losses: '6',
      total: '58',
      winRate: '96%',
      elo: '1978',
    },
    {
      rank: '2',
      name: 'N0ne',
      image:
        'https://play.nintendo.com/images/Masthead_Kirby.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png',

      faction: 'Nordic',
      mat: 'Innovative',
      wins: '45',
      losses: '2',
      total: '47',
      winRate: '97%',
      elo: '1971',
    },
    {
      rank: '3',
      name: 'bbScythe',
      image:
        'https://play.nintendo.com/images/Masthead_Kirby.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png',

      faction: 'Rusviet',
      mat: 'Mechanical',
      wins: '37',
      losses: '7',
      total: '47',
      winRate: '97%',
      elo: '1971',
    },
    // More people...
  ];

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
              {players.map((player) => (
                <tr
                  key={player.name}
                  className='border-b border-alpha dark:border-darkAlpha-minor hover:bg-alpha dark:hover:bg-darkAlpha-minor'
                >
                  <td className='py-3 px-6 text-left whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div>{player.rank}</div>
                    </div>
                  </td>
                  <td className='py-3 px-6 text-left'>
                    <div className='flex items-center hover:text-beta dark:hover:text-darkPositive'>
                      <div className='flex-shrink-0 h-8 w-8 mr-2'>
                        <Link to={`/players/${player.name}`}>
                          <img
                            className='w-8 h-8 rounded-full border-alpha dark:border-darkAlpha-minor'
                            src={player.image}
                            alt=''
                          />
                        </Link>
                      </div>
                      <Link to={`/players/${player.name}`}>
                        <span>{player.name}</span>
                      </Link>
                    </div>
                  </td>
                  <td className='py-3 px-6 text-left'>
                    <div className='flex items-center'>
                      <div className='mr-2'>{player.faction}</div>
                    </div>
                  </td>
                  <td className='py-3 px-6 text-left'>
                    <div className='flex items-center'>
                      <div className='mr-2'>{player.mat}</div>
                    </div>
                  </td>
                  <td className='py-3 px-6 text-center text-positive dark:text-darkPositive'>
                    <div>{player.wins}</div>
                  </td>
                  <td className='py-3 px-6 text-center text-negative dark:text-darkNegative'>
                    <div>{player.losses}</div>
                  </td>
                  <td className='py-3 px-6 text-center'>
                    <div>
                      {Number(`${player.wins}`) +
                        Number(`${player.losses}`)}
                    </div>
                  </td>
                  <td className='py-3 px-6 text-center text-warning dark:text-darkWarning'>
                    <div>
                      {(
                        (Number(`${player.wins}`) /
                          (Number(`${player.wins}`) +
                            Number(`${player.losses}`))) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  </td>

                  <td className='py-3 px-6 text-center'>
                    <span className='bg-purple-100 text-purple-800 py-1 px-3 rounded-full text-xs'>
                      {player.elo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderTable;
