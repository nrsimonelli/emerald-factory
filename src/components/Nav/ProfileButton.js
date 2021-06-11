import React from 'react';
import { SiDiscord } from 'react-icons/si';

const ProfileButton = (props) => {
  return (
    <button
      onClick={() => {
        props.profileMenuToggle();
      }}
      type='button'
      className='bg-darkAlpha flex text-sm focus:outline-none'
      id='user-menu'
      aria-expanded='false'
      aria-haspopup='true'
    >
      <span className='sr-only'>Open user menu</span>
      <SiDiscord className='h-8 w-8 text-alpha-pure dark:text-darkAlpha-major bg-gradient-to-br from-beta to-betaMax dark:from-darkBeta dark:to-darkBetaMax' />
    </button>
  );
};

export default ProfileButton;
