import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const imagesData = [
    { id: 1, imageUrl: 'https://via.placeholder.com/800x400' },
    { id: 2, imageUrl: 'https://via.placeholder.com/800x400' },
    { id: 3, imageUrl: 'https://via.placeholder.com/800x400' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {imagesData.map((image) => (
          <div key={image.id}>
            <img src={image.imageUrl} alt={`Image ${image.id}`} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
