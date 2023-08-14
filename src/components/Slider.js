import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from "../assets/slide01_2.jpg";
import slide02 from "../assets/slide02_2.jpg";
import slide03 from "../assets/slide03.jpg";
import slide011 from "../assets/slide011.png";
import slide012 from "../assets/slide012.png";
import slide0124 from "../assets/slide0124.png";
import slide013 from "../assets/slide013.png";

const SlideCard = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autospeed: 3500,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "5% 0" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {/* <img src={slide011} width="100%" height="400px" /> */}
        {/* <img src={slide0124} width="100%" height="400px" /> */}
        <img src={slide013} width="100%" height="400px" />
      </Slider>
    </>
  );
};

export default SlideCard;
