import React from "react";
import "./CarTypes.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const CarTypes = () => {
  return (
    <>
      <div className="general-CarType-cont">
        <Swiper
          rewind={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="../lucidmotors/grand-touring-v5.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../lucidmotors/dream-edition-v5.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../lucidmotors/pure-v5.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../lucidmotors/touring-v5.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CarTypes;
