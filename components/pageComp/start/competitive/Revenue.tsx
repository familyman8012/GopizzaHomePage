import BtnInquiry from "../BtnInquiry";
import { RevenueWrap } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";
import { useState, useCallback, useEffect } from "react";

const storeInfo = [
  { id: 1, date: "21년 10월", storeName: "행당점 월 매출", price: "4,000", hall: "39", deliver: "61" },
  { id: 2, date: "21년 10월", storeName: "서울대점 월 매출", price: "6,000", hall: "22", deliver: "78" },
  { id: 3, date: "22년 10월", storeName: "건대점 월 매출", price: "5,300", hall: "48", deliver: "52" },
  { id: 4, date: "22년 10월", storeName: "대치본점 월 매출", price: "8,800", hall: "55", deliver: "45" },
  { id: 5, date: "23년 2월", storeName: "잠실새내점 월 매출", price: "6,200", hall: "63", deliver: "37" },
  { id: 6, date: "21년 10월", storeName: "인천구월NC점 월 매출", price: "4,900", hall: "62", deliver: "38" },
];

const storeInfo2 = [
  { id: 7, date: "21년 10월", storeName: "중계학원가점 월 매출", price: "5,200", hall: "63", deliver: "37" },
  { id: 8, date: "23년 1월", storeName: "구로개봉점 월 매출", price: "5,700", hall: "19", deliver: "81" },
  { id: 9, date: "21년 10월", storeName: "부천역점 월 매출", price: "6,800", hall: "10", deliver: "90" },
  { id: 10, date: "22년 8월", storeName: "평촌학원가점 월 매출", price: "5,200", hall: "63", deliver: "37" },
  { id: 11, date: "21년 10월", storeName: "신촌1호점 월 매출", price: "4,800", hall: "17", deliver: "82" },
];

function StoreItem({ el }: { el: any }) {
  return (
    <li>
      <div className="thumb">
        <img src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_revenue${el.id}.webp`} alt={el.storeName} />
      </div>
      <div className="box_txt">
        <span className="sales">
          <span className="date">{el.date}</span>
          <span className="store">{el.storeName}</span>
          <span className="price">
            <span className="number">{el.price}</span>
            <span className="txt">만원대</span>
          </span>
        </span>
        <span className="wrap_per">
          <span className="box_per">
            <span className="txt">홀</span>
            <span className="number">{el.hall}</span>
            <span className="txt_per">%</span>
          </span>
          <span className="box_per">
            <span className="txt">배달</span>
            <span className="number">{el.deliver}</span>
            <span className="txt_per">%</span>
          </span>
        </span>
      </div>
    </li>
  );
}

interface IRevenue {
  windowWidth: number;
  spaceBetween: number;
}

function Revenue({ windowWidth, spaceBetween }: IRevenue) {
  return (
    <RevenueWrap>
      <h4>
        <span className="txt">
          효율적으로 높은 매출을 달성!
          <br />
          수익으로 만족스러운 고피자
        </span>
      </h4>
      {spaceBetween && (
        <>
          <div className="list_revenue line1">
            <VisibilitySensorSwiper view={600 > windowWidth ? "auto" : 3} viewBetween={spaceBetween} center={600 > windowWidth ? true : false}>
              {(600 > windowWidth ? [...storeInfo, ...storeInfo2] : storeInfo).map((el) => (
                <SwiperSlide key={el.id}>
                  <StoreItem el={el} />
                </SwiperSlide>
              ))}{" "}
            </VisibilitySensorSwiper>
          </div>

          <div className="list_revenue line2">
            <VisibilitySensorSwiper view={3} viewBetween={spaceBetween} delay={3000}>
              {storeInfo2.map((el) => (
                <SwiperSlide key={el.id}>
                  <StoreItem el={el} />
                </SwiperSlide>
              ))}{" "}
            </VisibilitySensorSwiper>
          </div>
        </>
      )}
    </RevenueWrap>
  );
}

export default Revenue;
