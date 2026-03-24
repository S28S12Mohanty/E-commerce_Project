import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";

const Carousel = () => {
  const images = [product1, product2, product3];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ Auto slide
  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-100 h-150 flex items-center justify-center">
      
      <div className="max-w-[80%] w-full relative overflow-hidden h-100 rounded-xl shadow-lg">

        {/* Slider */}
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-full shrink-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="w-full h-full bg-black/20"></div>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <IoIosArrowBack size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
        >
          <IoIosArrowForward size={20} />
        </button>

      </div>
    </section>
  );
};

export default Carousel;