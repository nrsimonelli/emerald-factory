const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <body className='bg-alpha-major dark:bg-darkAlpha-major transition-all'>
      {children}
    </body>
  );
};

export default ThemeBackground;
