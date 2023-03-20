import React from "react";
import { CaseWrap } from "./style";
import { SwiperSlide } from "swiper/react";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

function Case() {
  return (
    <CaseWrap>
      <h4>
        <span className="titleNo">03</span>
        <span className="txt">설치 사례</span>
      </h4>
      <VisibilitySensorSwiper view={2} center>
        <SwiperSlide>
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_case1x2.webp"
            alt="고피자의 기술 - 설치사례1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_case2x2.webp"
            alt="고피자의 기술 - 설치사례1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_case3x2.webp"
            alt="고피자의 기술 - 설치사례1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_case1x2.webp"
            alt="고피자의 기술 - 설치사례1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_case2x2.webp"
            alt="고피자의 기술 - 설치사례1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_case3x2.webp"
            alt="고피자의 기술 - 설치사례1"
          />
        </SwiperSlide>
      </VisibilitySensorSwiper>
    </CaseWrap>
  );
}

export default Case;
