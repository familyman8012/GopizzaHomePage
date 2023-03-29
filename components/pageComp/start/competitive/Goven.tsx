import React from "react";
import { Bnr, GovenWrap, TxtQuotes } from "./style";
import { SwiperSlide } from "swiper/react";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";
import GovenRolling from "./GovenRolling";

function Operation() {
  return (
    <GovenWrap>
      <div className="wrap_inner">
        <GovenRolling />
        <TxtQuotes>
          <strong className="txt1">
            누구든지 손쉽게
            <br />
            화덕 피자를 조리할 수 있습니다
          </strong>
          <p className="txt2">상권과 매장환경에 따라 GOBOT STATION은 선택적으로 이용이 가능합니다.</p>
        </TxtQuotes>
      </div>
      <Bnr>
        <VisibilitySensorSwiper view={1} nav>
          <SwiperSlide>
            <img src="/images/start/competitive/slide_goven1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/start/competitive/slide_goven2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/start/competitive/slide_goven3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/start/competitive/slide_goven4.webp" alt="" />
          </SwiperSlide>
        </VisibilitySensorSwiper>
      </Bnr>
      <div className="wrap_rating">
        <p className="txt">
          <span className="inner">
            배달에서는 이미 모든 가맹점이
            <br />
            <em>평균 4.8점 이상의 높은 평점을 받는 고피자.</em>
          </span>
        </p>
      </div>
      <div>
        <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_reviewx2.webp" alt="리뷰이미지" />
      </div>
    </GovenWrap>
  );
}

export default Operation;
