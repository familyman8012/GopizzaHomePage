import Form from "ComponentsFarm/pageComp/order/Form";
import Tab from "ComponentsFarm/layouts/Tab";
import { orderTab } from "ComponentsFarm/pageComp/order/constant";
import Banner from "ComponentsFarm/pageComp/order/group/Banner";
import { OrderWrap } from "ComponentsFarm/pageComp/order/style";
import React from "react";
import OrderLayout from "ComponentsFarm/layouts/pageLayouts/OrderLayout";
import styled from "@emotion/styled";
import { SwiperSlide } from "swiper/react";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

const company = [
  "대구국제뮤지컬페스티벌",
  "Daily&Co",
  "비앤빛 강남 밝은세상안과",
  "KaKao ENtErtAINMENT",
  "KAIST",
  "서울대학교",
  "세종대학교",
  "건국대학교",
  "D.CAMP",
  "SOFTWARE MAESTRO",
  "Lyreco",
  "대한예수교 장로회- 청운교회",
];

const Bnr = styled.div`
  overflow: hidden;
  width: 128rem;

  .div_img1 {
    width: 128.2rem;
    height: 198.5rem;
    background: url("/images/order/group/img_group_bnr1.webp") no-repeat left top / auto 100%;
  }
  .div_img2 {
    width: 128.2rem;
    height: 48.7rem;
    background: url("/images/order/group/bg_group_bnr2.webp") no-repeat left top / auto 100%;
  }
  .div_img3 {
    width: 128.2rem;
    height: 178.3rem;
    background: url("/images/order/group/img_group_bnr3.webp") no-repeat left top / auto 100%;
  }
`;

function Group() {
  return (
    <OrderLayout>
      {/* <Banner /> */}
      <Bnr>
        <div className="div_img1">
          <div className="hiddenZoneV">
            고피자 단체주문 합리적인 고피자 누구든지 부담없이 즐길 수 있는 사이즈로 제공됩니다. 시간, 비용, 사람에 구애 없이 언제든 즐길 수 있는 고피자와 함께 하세요.
          </div>
        </div>
        <div className="div_img2">
          <VisibilitySensorSwiper view={1}>
            <SwiperSlide>
              <img
                src="/images/order/group/bnr_pizza1x2.webp"
                alt="오리지널 페퍼로니 피자 - 고소하고 짭조름한 페퍼로니가 듬뿍 들어간 정통 페퍼로니 피자의 맛을 느껴보세요."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/order/group/bnr_pizza2x2.webp"
                alt="슈퍼 콤비네이션 피자 - 남녀노소 모두가 좋아하는 피자로, 다양하고 풍부한 토핑의 조합을 맛볼 수 있습니다."
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/order/group/bnr_pizza3x2.webp" alt="베이컨 포테이토 피자 - 담백한 감자와 바삭한 베이컨이 입안 가득! 기분 좋은 든든함을 느껴보세요." />
            </SwiperSlide>
          </VisibilitySensorSwiper>
        </div>
        <div className="div_img3">
          <div className="hiddenZoneV">
            단체주문 혜택 1. 10% 할인 - 주문 메뉴 전체 10% 할인 2. 배송비 무료 - 단체 주문 접수 건은 배송비 무료! 3. 모바일 쿠폰 발송 - 단체 주문 접수자에게 감사카드 및
            모바일 쿠폰 발송
          </div>
        </div>
      </Bnr>
      <h2 className="tit tit2">단체주문 예약 / 문의</h2>
      <p className="txt">정보 입력시, 동그라미 표시는 필수입력 항목입니다.</p>
      <Form type={"group"} />
      {Array.from({ length: 3 }).map((_, i) => (
        <ul className={`list_company company${i + 1}`} key={`ul_${i}`}>
          {Array.from({ length: 4 }).map((_, j) => (
            <li key={`li_${i}_${j}`}>
              <img src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_comp${i * 4 + j + 1}x2.webp`} alt={company[i * 4 + j]} />
            </li>
          ))}
        </ul>
      ))}
    </OrderLayout>
  );
}

export default Group;
