/* eslint-disable react/prop-types */

import Slider from "react-slick";
 import "./Slide.scss";


const Slide = ({ children, slidesToShow = 1, arrowsScroll = true }) => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll ? 1 : slidesToShow,
    arrows: arrowsScroll,
  };

  return (<>


    <div className="slide">
      <div className="container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  </>
  );
};

export default Slide;
