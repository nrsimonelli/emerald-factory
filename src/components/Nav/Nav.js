import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { GiCutDiamond } from 'react-icons/gi';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

import ThemeToggle from '../Theme/ThemeToggle';
import ProfileButton from './ProfileButton';

import { connect, useDispatch } from 'react-redux';

const Nav = (props) => {
  const dispatch = useDispatch();

  const closeIfOpen = () => {
    if (props.menu.mobile) {
      dispatch({ type: 'CLOSE_MENU' });
    }
    if (props.menu.profile) {
      dispatch({ type: 'CLOSE_PROFILE' });
    }
  };

  const mobileMenuToggle = () => {
    if (props.menu.mobile) {
      dispatch({ type: 'CLOSE_MENU' });
    }
    if (!props.menu.mobile) {
      dispatch({ type: 'OPEN_MENU' });
    }
  };

  const profileMenuToggle = () => {
    if (props.menu.profile) {
      dispatch({
        type: 'CLOSE_PROFILE',
      });
    }
    if (!props.menu.profile) {
      dispatch({
        type: 'OPEN_PROFILE',
      });
    }
  };

  const profileOptions = () => {
    if (props.user.user) {
      return (
        <div
          className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-alpha-pure dark:bg-darkAlpha ring-1 ring-darkAlpha-pure ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu'
        >
          <a
            href='http://localhost:5000/api/auth/login'
            className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha-minor'
            role='menuitem'
          >
            <div>
              Log in with Discord <FiLogIn className='inline' />
            </div>
          </a>
        </div>
      );
    } else {
      return (
        <div
          className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-alpha-pure dark:bg-darkAlpha ring-1 ring-darkAlpha-pure ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='user-menu'
        >
          <Link
            to='/profile'
            className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha-minor'
            role='menuitem'
            onClick={() => {
              closeIfOpen();
            }}
          >
            Your Profile
          </Link>
          <a
            href='#about'
            className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha-minor'
            role='menuitem'
          >
            Settings
          </a>

          <a
            href='http://localhost:5000/api/auth/login'
            className='block px-4 py-2 text-sm text-darkAlpha-minor hover:bg-alpha-major dark:text-alpha-minor dark:hover:bg-darkAlpha-minor'
            role='menuitem'
          >
            Sign out
          </a>
        </div>
      );
    }
  };

  return (
    <nav className='bg-gradient-to-br from-betaMin to-betaMax dark:from-darkBetaMin dark:to-darkBetaMax'>
      <div className='max-w-7xl mx-auto px-2 md:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* // Mobile menu button */}
            <button
              onClick={() => {
                mobileMenuToggle();
              }}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-alpha dark:text-darkAlpha focus:outline-none focus:ring-2 focus:ring-inset focus:ring-alpha-major'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {!props.menu.mobile ? (
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
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
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center md:items-stretch md:justify-start'>
            <div className='flex-shrink-0 flex items-center'>
              <Link
                to='/'
                onClick={() => {
                  closeIfOpen();
                }}
              >
                <GiCutDiamond className='block lg:hidden h-8 w-auto text-alpha-pure dark:text-darkAlpha-major' />
                <GiCutDiamond className='hidden lg:block h-8 w-auto text-alpha-pure dark:text-darkAlpha-major' />
              </Link>
            </div>
            <div className='hidden md:block md:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/events'
                  onClick={() => {
                    closeIfOpen();
                  }}
                >
                  <div className='text-alpha hover:text-alpha-pure px-3 py-2 rounded-md text-sm font-medium'>
                    Tournaments
                  </div>
                </Link>
                <Link
                  to='/players'
                  onClick={() => {
                    closeIfOpen();
                  }}
                >
                  <div className='text-alpha hover:text-alpha-pure px-3 py-2 rounded-md text-sm font-medium'>
                    Leaderboard
                  </div>
                </Link>

                <Link
                  to='/'
                  onClick={() => {
                    closeIfOpen();
                  }}
                >
                  <div className='text-alpha hover:text-alpha-pure px-3 py-2 rounded-md text-sm font-medium'>
                    Support
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
            <ThemeToggle />

            {/* // Profile dropdown // */}
            <div className='ml-3 relative'>
              <div>
                <ProfileButton
                  profileMenuToggle={profileMenuToggle}
                />
              </div>

              <Transition
                show={props.menu.profile}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                {profileOptions}
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={props.menu.mobile}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {/* // Mobile menu, show/hide based on menu state. // */}
        {(ref) => (
          <div className='md:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='/events'
                onClick={() => {
                  closeIfOpen();
                }}
              >
                <div className='text-alpha hover:text-alpha-pure block px-3 py-2 rounded-md text-base font-medium'>
                  Tournaments
                </div>
              </Link>

              <Link
                to='/players'
                onClick={() => {
                  closeIfOpen();
                }}
              >
                <div className='text-alpha hover:text-alpha-pure block px-3 py-2 rounded-md text-base font-medium'>
                  Leaderboard
                </div>
              </Link>

              <Link
                to='/'
                onClick={() => {
                  closeIfOpen();
                }}
              >
                <div className='text-alpha hover:text-alpha-pure block px-3 py-2 rounded-md text-base font-medium'>
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

const mapReduxStateToProps = (reduxState) => ({
  menu: reduxState.menuReducer,
  user: reduxState.userReducer,
});

export default connect(mapReduxStateToProps)(Nav);
