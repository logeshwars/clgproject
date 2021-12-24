import React from 'react'
import './Carousel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Carousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className='carouselContainer'>
          <div className='carousel'>
        <Slider {...settings} className='slider'>
          <div className='slide'>
            <img src='https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg' alt=''/>
          </div>
          <div className='slide'>
        <img src='http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg' alt=''/>
          </div>
          <div className='slide'>
          <img src='https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg' alt=''/>
        
          </div>
        </Slider>
        </div>
        </div>
      );
}
export default Carousel;
