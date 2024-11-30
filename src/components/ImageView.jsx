import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Autoplay } from "swiper/modules";

const ImageView = ({ data }) => {
  return (
    <div className="image-slider">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {data?.image?.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`product-image-${index}`}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageView;
