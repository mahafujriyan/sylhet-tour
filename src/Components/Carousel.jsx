"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "/asscets/a5 - Copy.jpg",
    "/asscets/e6.jpg",
    "/asscets/e9.jpg",
    "/asscets/jaflong.jpg",
    "/asscets/jhorna.jpg",
    "/asscets/moulovi bazzar.jpg",
    "/asscets/pangthumai-waterfall.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-[85vh]">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-[85vh]">
            <Image
              src={img}
              alt={`Banner ${i + 1}`}
              fill
              className="object-cover"
              priority={i === 0}
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
               Wander far, discover yourself, embrace new horizons
              </h1>
              <p className="text-lg md:text-2xl text-white mb-6 drop-shadow-md">
                Experience the world, your way. And helping hand with travel guru
              </p>

              <div className="bg-white p-4 rounded-2xl flex flex-wrap md:flex-nowrap items-center gap-3 shadow-lg w-full max-w-4xl">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
