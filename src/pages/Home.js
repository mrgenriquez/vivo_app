import React from 'react';
import Header from '../modules/Navbar';
import Reels from '../modules/Reels';
import ImageSlider from '../modules/Slider';

const Home = () => {
  return (
    <div>
      <Header />
      <Reels />
      <ImageSlider />
    </div>
  );
};

export default Home;
