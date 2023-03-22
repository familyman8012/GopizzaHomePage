import React, { useEffect, useRef, useState } from "react";
import Dialog from "ComponentsFarm/common/Dialog";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

const MainPopupWrap = styled.div`
  overflow-y: hidden;
  width: 132rem;
  height: 70rem;
  border-radius: 3rem;
  background: #ccc;

  .swiper-button-prev,
  .swiper-button-next {
    width: var(--swiper-navigation-size);
    &:after {
      font-size: 0;
    }
  }

  .swiper-button-prev {
    left: -11rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_slide_left.svg") center;
  }

  .swiper-button-next {
    right: -11rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_slide_right.svg") center;
  }

  .content {
    height: 61rem;
  }

  .btn_box {
    display: flex;
    button {
      width: 50%;
      height: 9rem;
      line-height: 9rem;
      font-size: 24px;
      text-align: center;
      cursor: pointer;

      &:first-of-type {
        color: #000;
        background: #fff;
      }
      &:last-of-type {
        color: #fff;
        background: var(--color-orange);
      }
    }
  }
`;

function MainPopUp() {
  const popref = useRef<any>(null);
  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const [closedTime, setClosedTime] = useState<number>(0);

  useEffect(() => {
    const lastClosedTime = localStorage.getItem("popupClosedTime");
    if (lastClosedTime) {
      setClosedTime(Number(lastClosedTime));
    }
  }, []);

  const handleTodayClose = () => {
    setClosedTime(Date.now());
    localStorage.setItem("popupClosedTime", String(Date.now()));
    popref.current?.close();
  };

  const canOpen = () => {
    const timeDiff = Date.now() - closedTime;
    const oneDayInMS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    return timeDiff > oneDayInMS;
  };

  const handleOpen = () => {
    if (canOpen()) {
      popref.current?.showModal();
    }
  };

  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  const swiper3Ref = useRef(null);

  return (
    <div
      css={css`
        padding: 200px;
      `}
    >
      <button onClick={handleOpen}>Open</button>
      <Dialog ref={popref}>
        <MainPopupWrap>
          <div className="content">
            <Swiper
              onInit={onInit}
              breakpoints={{
                320: {
                  spaceBetween: 10,
                },
                800: {
                  spaceBetween: 30,
                },
                1200: {
                  spaceBetween: 40,
                },
              }}
              direction={"vertical"}
              loop={true}
              pagination={true}
              navigation={{
                nextEl: ".swiper-button-prev",
                prevEl: ".swiper-button-next",
              }}
            >
              <SwiperSlide>
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/pop_mainx2.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/pop_main2x2.webp" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onInit={onInit}
              loop={true}
              direction={"vertical"}
              pagination={true}
              navigation={{
                nextEl: ".swiper-button-prev",
                prevEl: ".swiper-button-next",
              }}
            >
              <SwiperSlide>
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/promotion/img_event1.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/promotion/img_event2.webp" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onInit={onInit}
              loop={true}
              direction={"vertical"}
              pagination={true}
              navigation={{
                nextEl: ".swiper-button-prev",
                prevEl: ".swiper-button-next",
              }}
            >
              <SwiperSlide>
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/pop_mainx2.webp" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/pop_main2x2.webp" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="">
            <i className="swiper-button-prev"></i>
            <i className="swiper-button-next"></i>
          </div>
          <div className="btn_box">
            <button onClick={handleTodayClose}>오늘 하루 동안 열지 않기</button>
            <button onClick={() => popref.current?.close()}>닫기</button>
          </div>
        </MainPopupWrap>
      </Dialog>
    </div>
  );
}

export default MainPopUp;
