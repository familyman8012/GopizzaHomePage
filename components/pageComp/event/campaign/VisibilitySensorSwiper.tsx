import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import SwiperCore, { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { Swiper } from "swiper/react";

//Pagination, Autoplay, Navigation

SwiperCore.use([Pagination, Autoplay, Navigation, FreeMode]);

interface ISwiper {
  children: any;
  view?: number;
  viewBetween?: number;
  paging?: boolean;
  nav?: boolean;
  delay?: number;
  center?: boolean;
  freemode?: boolean;
}

function VisibilitySensorSwiper({ children, view = 1, viewBetween = 40, paging, nav, delay = 3000, center = false, freemode }: ISwiper) {
  const swiperRef = React.useRef<SwiperCore>();

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleEnter = () => {
    if (swiperRef.current) swiperRef.current?.autoplay.start();
  };
  const handleLeave = () => {
    if (swiperRef.current) swiperRef.current?.autoplay.stop();
  };

  return (
    <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
      <div>
        <div className="wrap_swiper">
          <Swiper
            onInit={onInit}
            slidesPerView={view}
            speed={500}
            loop={true}
            pagination={false}
            autoplay={{
              delay,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: view === 1 ? 0 : 10,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: view === 1 ? 0 : 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: view === 1 ? 0 : viewBetween,
              },
            }}
            centeredSlides={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {children}
          </Swiper>
        </div>
        <div className="swiper_btns">
          <i className="swiper-button-prev"></i>
          <i className="swiper-button-next"></i>
        </div>
      </div>
    </Waypoint>
  );
}

export default VisibilitySensorSwiper;
