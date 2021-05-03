import React from 'react';

const EventTable = (props) => {
  return (
    <>
      <div className='bg-alpha-major flex items-center justify-center overflow-hidden'>
        <div className='bg-alpha-pure shadow-md rounded my-6'>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                <th className='py-3 px-6 text-left'>{props.title}</th>
                <th className='py-3 px-6 text-left'>Start Date</th>
                <th className='py-3 px-6 text-center'>Duration</th>
                <th className='py-3 px-6 text-center'>Status</th>
                <th className='py-3 px-6 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody className='text-gray-600 text-sm overflow-y-scroll w-full'>
              <tr className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='mr-2'></div>
                    <span className='font-medium'>React Project</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/1.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/women/2.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/3.jpg'
                    />
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                    Active
                  </span>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex item-center justify-center'>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                  </div>
                </td>
              </tr>
              <tr className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='mr-2'></div>
                    <span className='font-medium'>React Project</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/1.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/women/2.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/3.jpg'
                    />
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                    Active
                  </span>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex item-center justify-center'>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                  </div>
                </td>
              </tr>
              <tr className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='mr-2'></div>
                    <span className='font-medium'>React Project</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/1.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/women/2.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/3.jpg'
                    />
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                    Active
                  </span>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex item-center justify-center'>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                  </div>
                </td>
              </tr>
              <tr className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='mr-2'></div>
                    <span className='font-medium'>React Project</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/1.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/women/2.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/3.jpg'
                    />
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                    Active
                  </span>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex item-center justify-center'>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                  </div>
                </td>
              </tr>
              <tr className='border-b border-gray-200 hover:bg-gray-100'>
                <td className='py-3 px-6 text-left whitespace-nowrap'>
                  <div className='flex items-center'>
                    <div className='mr-2'></div>
                    <span className='font-medium'>React Project</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-left'>
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <img
                        className='w-6 h-6 rounded-full'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                    </div>
                    <span>Eshal Rosas</span>
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/1.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/women/2.jpg'
                    />
                    <img
                      className='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                      src='https://randomuser.me/api/portraits/men/3.jpg'
                    />
                  </div>
                </td>
                <td className='py-3 px-6 text-center'>
                  <span className='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                    Active
                  </span>
                </td>
                <td className='py-3 px-6 text-center'>
                  <div className='flex item-center justify-center'>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        />
                      </svg>
                    </div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
                    <div className='w-4 mr-2 transform hover:text-purple-500 hover:scale-110'></div>
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
