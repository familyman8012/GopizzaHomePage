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
      <div className="wrap_swiper">
        <Swiper
          onInit={onInit}
          slidesPerView={view}
          speed={500}
          loop={true}
          pagination={paging}
          navigation={nav}
          freeMode={freemode}
          autoplay={{
            delay,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              spaceBetween: view === 1 ? 0 : 10,
            },
            800: {
              spaceBetween: view === 1 ? 0 : 30,
            },
            1200: {
              spaceBetween: view === 1 ? 0 : viewBetween,
            },
          }}
          centeredSlides={center}
        >
          {children}
        </Swiper>
      </div>
    </Waypoint>
  );
}

export default VisibilitySensorSwiper;
