import React, { useEffect, useRef, useState } from "react";
import Dialog from "ComponentsFarm/common/Dialog";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Waypoint } from "react-waypoint";

SwiperCore.use([Pagination, Navigation]);

function GovenRolling() {
  const [realIndex, setrealIndex] = useState(1);
  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  return (
    <div>
      <div className="box_title">
        <h5>
          <div className="tit1">편리하고 빠른 AI오븐</div>
          <div className={`tit2 line${realIndex}`}>
            <div className="">
              <i className="swiper-button-prev2">
                <span className="hiddenZoneV">이전</span>
              </i>
              <i className="swiper-button-next2">
                <span className="hiddenZoneV">다음</span>
              </i>
            </div>
            <Swiper
              onInit={onInit}
              direction={"vertical"}
              loop={true}
              pagination={false}
              onSlideChange={(swiper) => setrealIndex(swiper.realIndex + 1)}
              navigation={{
                nextEl: ".swiper-button-prev2",
                prevEl: ".swiper-button-next2",
              }}
            >
              {/* <SwiperSlide>
                <span className="txt1">GOVEN</span>
                <span className="txt2">1.0</span>
              </SwiperSlide> */}
              <SwiperSlide>
                <span className="txt1">GOVEN</span>
                <span className="txt2">2.0</span>
              </SwiperSlide>
              <SwiperSlide>
                <span className="txt1">GOBOT STATION</span>
              </SwiperSlide>
            </Swiper>
          </div>
        </h5>
      </div>
      <div className="box_thumb">
        <Swiper
          onInit={onInit}
          loop={true}
          direction={"vertical"}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-prev2",
            prevEl: ".swiper-button-next2",
          }}
        >
          {/* <SwiperSlide>
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_goven1x2.webp" alt="GOVEN 1.0" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_goven2x2.webp" alt="GOVEN 2.0" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_goven3x2.webp" alt="GOBOT STATION" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default GovenRolling;
