import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";


import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";

const Carausel = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className="container mx-auto mySwiper select-none"
    >
      <SwiperSlide>
        <div className="h-[400px] md:h-[600px] lg:h-[800px] border relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={image1}
            alt="Banner 1"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] md:h-[600px] lg:h-[800px] border relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={image2}
            alt="Banner 2"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] md:h-[600px] lg:h-[800px] border relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={image3}
            alt="Banner 3"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] md:h-[600px] lg:h-[800px] border relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={image4}
            alt="Banner 4"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carausel;
