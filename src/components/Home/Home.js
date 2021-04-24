import React, { useEffect } from 'react';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Nav />
      <Landing />
    </>
  );
};

export default Home;
