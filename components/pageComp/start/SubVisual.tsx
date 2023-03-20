import React from "react";
import { useQuery } from "@tanstack/react-query";
import { SubVisualWrap } from "./style";
import { IStart } from "ApiFarm/interface/homeInterface";
import { SwiperSlide } from "swiper/react";
import { AxiosError, AxiosResponse } from "axios";
import { fetchStartVisual } from "ApiFarm/home";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

function SubMainVisual() {
  const { data, isLoading } = useQuery<IStart, AxiosError>(["SubMainVisual"], fetchStartVisual);

  return (
    <SubVisualWrap>
      <VisibilitySensorSwiper view={1} paging>
        {data &&
          data.list.map((el) => (
            <SwiperSlide key={el.startup_main_banner_idx}>
              <img
                src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/sub_visual.webp"
                alt=""
              />
            </SwiperSlide>
          ))}
      </VisibilitySensorSwiper>
      <div className="box_txt">
        <h2 className="txt1">
          MZ세대 80%가
          <br />
          YES!를 외친 브랜드
        </h2>
        <p className="txt2">전체 MZ세대의 76% 특히 2030 여성의 80.5%가 ‘1인피자를 희망한다’ 대답</p>
        <div className="txt3">오픈서베이, total (n=600) 데이터</div>
        <div className="bnr_tel">
          <span className="txt">
            가맹
            <br />
            문의
          </span>
          <span className="tel">T.1800-8972</span>
        </div>
      </div>
    </SubVisualWrap>
  );
}

export default SubMainVisual;
