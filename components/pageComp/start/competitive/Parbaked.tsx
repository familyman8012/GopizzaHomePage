import React from "react";
import { Bnr, ParbakedWrap, TxtQuotes } from "./style";
import { SwiperSlide } from "swiper/react";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

function Operation() {
  return (
    <>
      <ParbakedWrap>
        <h4>
          <span className="txt">운영이 편리한 고피자</span>
        </h4>
        <div className="wrap_parbake">
          <h5>
            CRISPY BASAK
            <br /> DOUGH
          </h5>
          <TxtQuotes>
            <strong className="txt1">
              초벌 된 도우를
              <br />
              그대로 사용하시면 됩니다
            </strong>
            <p className="txt2">
              3년간의 R&amp;D를 통해 고피자만의 특수 배합과 공정으로 생산된
              <br />
              파베이크 도우는 매장에서 발효, 성형이 전혀 필요없는 특수 도우입니다.
              <br />
              <em>
                다른 피자 프랜차이즈의 생지(반죽)납품 방식이 아닌 파베이크 도우의 납품으로
                <br />
                초기 비용, 근로자의 업무 피로도 또한 혁신적으로 감소합니다.
              </em>
            </p>
          </TxtQuotes>
        </div>
      </ParbakedWrap>
      <Bnr>
        <VisibilitySensorSwiper view={1} nav>
          <SwiperSlide>
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/slide_dough1.webp" alt="고피자 파베이크 음성공장" />
            <p className="txt_box">
              HACCP 인증을 받은
              <br />
              고피자 도우 공장에서 생산
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/slide_dough2.webp" alt="고피자 파베이크" />
            <p className="txt_box">
              최고의 품질로 전국 점주님들께
              <br />
              일일배송 하고 있습니다.
            </p>
          </SwiperSlide>
        </VisibilitySensorSwiper>
      </Bnr>
    </>
  );
}

export default Operation;
