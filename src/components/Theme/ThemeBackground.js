const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className='bg-alpha-major dark:bg-darkAlpha-major transition-all'>
      {children}
    </div>
  );
};

export default ThemeBackground;
