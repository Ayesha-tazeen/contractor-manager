import React from "react";
import Slider from "react-slick";
import "./Carousal.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousal() {
  const images = [
    "/images/construction.jpg",
    "/images/construction1.jpg",
    "/images/graph1.png",
    "/images/construction3.jpg",
  ];

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    arrows: false,
    dots: true,
  };

  return (
   <div className="relative w-full max-w-6xl mx-auto py-12 overflow-hidden">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className=" py-5">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="carousel-image overfloy rounded-2xl border-blue-900 border-2  shadow-xl transition-transform duration-500 ease-in-out"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
