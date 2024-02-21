import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reels = () => {
  const reelsData = [
    { id: 1, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, imageUrl: 'https://via.placeholder.com/150' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {reelsData.map((reel) => (
          <div key={reel.id}>
            <img src={reel.imageUrl} alt={`Reel ${reel.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reels;
