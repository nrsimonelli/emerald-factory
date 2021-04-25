import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';

import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { SiDiscord } from 'react-icons/si';
import { GiCutDiamond } from 'react-icons/gi';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className='bg-gradient-to-br from-betaMin to-betaMax dark:from-darkBetaMin dark:to-darkBetaMax'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* // Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-alpha-major hover:text-alpha-pure dark:text-alpha-minor dark:hover:alpha-major  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-alpha-pure'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Link to='/dashboard'>
                <GiCutDiamond className='block lg:hidden h-8 w-auto text-alpha-pure dark:text-darkAlpha-major' />
                <GiCutDiamond className='hidden lg:block h-8 w-auto text-alpha-pure dark:text-darkAlpha-major' />
              </Link>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-4'>
                {/* // Current: "bg-darkAlpha-major text-alpha-pure", Default: "text-alpha-minor hover:bg-darkAlpha-minor hover:text-alpha-pure" // */}
                <Link to='/tournament'>
                  <div className='text-alpha-minor hover:text-alpha-pure px-3 py-2 rounded-md text-sm font-medium'>
                    Tournaments
                  </div>
                </Link>
                <Link to='/'>
                  <div className='text-alpha-minor hover:text-alpha-pure px-3 py-2 rounded-md text-sm font-medium'>
                    League
                  </div>
                </Link>

                <Link to='/color'>
                  <div className='text-alpha-minor hover:text-alpha-pure px-3 py-2 rounded-md text-sm font-medium'>
                    Support
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <ThemeToggle />

            {/* // Profile dropdown // */}
            <div className='ml-3 relative'>
              <div>
                <button
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                  }}
                  type='button'
                  className='bg-darkAlpha flex text-sm focus:outline-none'
                  id='user-menu'
                  aria-expanded='false'
                  aria-haspopup='true'
                >
                  <span className='sr-only'>Open user menu</span>
                  <SiDiscord className='h-8 w-8 text-alpha-pure dark:text-darkAlpha-major bg-gradient-to-br from-betaMax to-betaMin dark:from-darkBetaMax dark:to-darkBetaMin' />
                </button>
              </div>

              <Transition
                show={isProfileOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <div
                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-alpha-pure dark:bg-darkAlpha ring-1 ring-darkAlpha-pure ring-opacity-5 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha'
                    role='menuitem'
                  >
                    Your Profile
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha'
                    role='menuitem'
                  >
                    Settings
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha'
                    role='menuitem'
                  >
                    Sign out
                  </a>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isMenuOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {/* // Mobile menu, show/hide based on menu state. // */}
        {(ref) => (
          <div className='sm:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link to='/tournament'>
                <div className='text-alpha-minor hover:text-alpha-pure block px-3 py-2 rounded-md text-base font-medium'>
                  Tournaments
                </div>
              </Link>

              <Link to='/'>
                <div className='text-alpha-minor hover:text-alpha-pure block px-3 py-2 rounded-md text-base font-medium'>
                  League
                </div>
              </Link>

              <Link to='/'>
                <div className='text-alpha-minor hover:text-alpha-pure block px-3 py-2 rounded-md text-base font-medium'>
                  Support
                </div>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Nav;
