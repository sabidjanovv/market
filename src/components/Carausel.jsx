import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
            src="https://images.uzum.uz/ct034tdpq3ggq63emjq0/main_page_banner.jpg"
            alt="Banner 1"
          />
          <div className="relative p-4 text-white">
            <h2 className="text-sm md:text-lg lg:text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              officia!
            </h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] md:h-[600px] lg:h-[800px] border relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="https://images.uzum.uz/ct034ctpq3ggq63emjk0/main_page_banner.jpg"
            alt="Banner 2"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-[400px] md:h-[600px] lg:h-[800px] border relative">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src="https://images.uzum.uz/ct2ue9tpq3gujfcfe950/main_page_banner.jpg"
            alt="Banner 3"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carausel;
