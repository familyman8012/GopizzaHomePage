import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

const wantImg = Array.from({ length: 3 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        margin-right: 4rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_want${i + 1}x2.webp") no-repeat left top / 100%;
      }
      &:last-of-type {
        margin-right: 0;
      }
    `
);

export const YouWantPizzaWrap = styled.section`
  display: flex;
  width: 128rem;
  margin: 20rem auto 18rem;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 2.2rem;
    color: #000;
    font-size: 3.2rem;
  }
  .txt_want {
    margin-bottom: 21rem;
    font-size: 7rem;
    font-weight: bold;
    line-height: 0.63;
  }

  .wrap_list {
    margin-right: 20px;
  }

  .list {
    display: flex;

    li {
      position: relative;
      width: 40rem;
      height: 48rem;
      text-align: center;
      object-fit: contain;

      ${wantImg}

      .txt {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 8.8rem;

        font-size: 2rem;
        font-weight: 500;
        &:before {
          content: "";
          opacity: 0.8;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
          border-radius: 0 0 2rem 2rem;
          background-color: var(--color-orange);
        }

        .inner {
          position: relative;
          z-index: 1;
          color: var(--color-white);
        }
      }
    }
  }

  ${mq[0]} {
    width: auto;
    margin: 42px auto 70px;
    padding: 0;

    h4 {
      margin-bottom: 9px;
      font-size: 16px;
      font-weight: normal;
    }
    .txt_want {
      margin-bottom: 43px;
      font-size: 24px;
      line-height: normal;
    }
    .wrap_list {
      margin-right: 0;
    }
    .list {
      overflow: auto hidden;
      display: flex;
      width: 100vw;
      padding-right: 20px;
      scroll-snap-type: x mandatory;

      &::-webkit-scrollbar {
        display: none;
      }

      li {
        display: block;
        flex-shrink: 0;
        scroll-snap-align: center;
        scroll-snap-stop: always;
        width: 240px;
        height: 280px;
        margin: 0 0 0 20px !important;
        background-size: 240px 280px !important;

        .txt {
          height: 59px;
          font-size: 14px;
          &:before {
            border-radius: 0 0 12px 12px;
          }
        }
      }
    }
  }
`;

const valueImg = Array.from({ length: 3 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        margin-right: 3.2rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_values${i + 1}x2.webp") no-repeat left top / 100%;

        ${(i === 0 || i === 2) && "width: 36.84rem;height: 55.77rem; h5{font-size:4.5rem}"}
        ${i == 1 && "width: 48rem;height: 74rem;"}
      }
      &:last-of-type {
        margin-right: 0;
      }
    `
);

export const ValuesMobileWrap = styled.section`
  display: none;
  padding: 30px 0 70px;
  text-align: center;
  background-color: #f0f0f0;

  ${mq[0]} {
    display: block;
  }

  h4 {
    margin-bottom: 40px;
  }

  .react-3d-carousel {
    height: 380px !important;
  }

  .slider-single-content {
    box-shadow: none !important;
  }

  .slider-left,
  .slider-right {
    div {
      border: none !important;
    }
  }
`;

export const ValuesWrap = styled.section`
  padding-top: 11rem;
  text-align: center;
  background-color: #f0f0f0;

  ${mq[0]} {
    display: none;
  }

  h4 {
    margin-bottom: 10.1rem;
  }

  .list {
    display: flex;
    justify-content: center;
    display: flex;
    align-items: center;
    padding-bottom: 18rem;

    &.on {
      li .box_txt {
        opacity: 1;
        animation: avia 0.8s;
      }
    }

    @keyframes avia {
      0% {
        transform: translate(0, 50%);
        opacity: 0;
      }
      100% {
        transform: translate(0, 0);
        opacity: 1;
      }
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .box_txt {
        opacity: 0;
      }

      h5,
      p {
        color: #ffff;
      }

      h5 {
        margin-bottom: 0.8rem;
        font-family: "solano";
        font-size: 6.5rem;
        font-weight: bold;
      }

      p {
        font-size: 2rem;
      }

      ${valueImg}
    }
  }
`;

export const KeepGoingWrap = styled.section`
  overflow: hidden;
  width: 100vw;

  h4 {
    margin: 14rem 0 16.2rem;
    text-align: center;
  }

  .wrap_history {
    position: relative;
    margin-left: 32rem;

    .list_nav {
      position: absolute;
      li {
        margin-bottom: 1.25rem;
        font-family: "solano";
        font-size: 4.8rem;
        font-weight: bold;
        color: var(--color-gray);
        cursor: pointer;

        &.on {
          font-size: 10rem;
          font-weight: bold;
          color: var(--color-orange);
          line-height: 1;
          margin-bottom: 3.15rem;

          padding-bottom: 0.2rem;
          border-bottom: 0.2rem solid var(--color-orange);
        }
      }
    }
    .box_history {
      margin: 1.8rem 0 0 34rem;

      .wrap_swiper {
        height: 63.36rem;
      }

      .swiper-slide {
        width: 51rem;
      }

      .swiper-progress-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.4rem;
        background-color: #f00;
        z-index: 1;
      }

      .swiper-progress-bar-current {
        position: absolute;
        bottom: 0;
        height: 0.4rem;
        background-color: #0f0;
        z-index: 2;
      }

      .thumb {
        position: relative;
        width: 51rem;
        height: 50rem;

        .badge {
          &:after {
            content: "";
            position: absolute;
            animation: rot03 5s ease infinite;
            transform-origin: 50% 50%;
          }
          &:hover {
            display: block;
            transform: translate(0px, -5px);
            transition: all 0.5s ease;
          }
        }

        &.badge2016_1 .badge:after {
          width: 20.6rem;
          height: 20.6rem;
          right: -3.6rem;
          bottom: -13.5rem;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2016_1x2.webp") no-repeat left top / 100%;
        }
        &.badge2017_3 .badge:after {
          width: 15.8rem;
          height: 13.2rem;
          right: -2.1rem;
          bottom: -12.6rem;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2017_3x2.webp") no-repeat left top / 100%;
        }
        &.badge2020_2 .badge:after {
          width: 21.6rem;
          height: 7.9rem;
          right: -1.8rem;
          bottom: -10.7rem;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2020_2x2.webp") no-repeat left top / 100%;
        }
        &.badge2021_5 .badge:after {
          width: 19.2rem;
          height: 20.9rem;
          right: -2.1rem;
          bottom: -14rem;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2021_5x2.webp") no-repeat left top / 100%;
        }
        &.badge2022_2 .badge:after {
          width: 20rem;
          height: 21.5rem;
          right: -2.1rem;
          bottom: -13rem;
          animation: rot02 5s ease infinite;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2022_2x2.webp") no-repeat left top / 100%;
        }
        &.badge2022_3 .badge:after {
          width: 28rem;
          height: 17rem;
          right: -5.5rem;
          bottom: -14rem;
          animation: rot03 5s ease infinite;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2022_3x2.webp") no-repeat left top / 100%;
        }
        &.badge2022_4 .badge:after {
          width: 20.3rem;
          height: 17.8rem;
          right: -3.8rem;
          bottom: -13.4rem;
          animation: rot02 5s ease infinite;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2022_4x2.webp") no-repeat left top / 100%;
        }
        &.badge2022_6 .badge:after {
          width: 21.8rem;
          height: 17rem;
          right: -2.3rem;
          bottom: -13.5rem;
          animation: rot03 5s ease infinite;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2022_6x2.webp") no-repeat left top / 100%;
        }
        &.badge2022_7 .badge:after {
          width: 21.6rem;
          height: 16.8rem;
          right: -2.3rem;
          bottom: -13.5rem;
          animation: rot02 5s ease infinite;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/badge_2022_7x2.webp") no-repeat left top / 100%;
        }
      }
      @keyframes rot02 {
        0% {
          -webkit-transform: rotate(-7deg);
          -o-transform: rotate(-7deg);
          transform: rotate(-7deg);
        }
        50% {
          -webkit-transform: rotate(7deg);
          -o-transform: rotate(7deg);
          transform: rotate(7deg);
        }
        100% {
          -webkit-transform: rotate(-7deg);
          -o-transform: rotate(-7deg);
          transform: rotate(-7deg);
        }
      }
      @keyframes rot03 {
        0% {
          -webkit-transform: rotate(7deg);
          -o-transform: rotate(7deg);
          transform: rotate(7deg);
        }
        50% {
          -webkit-transform: rotate(-7deg);
          -o-transform: rotate(-7deg);
          transform: rotate(-7deg);
        }
        100% {
          -webkit-transform: rotate(7deg);
          -o-transform: rotate(7deg);
          transform: rotate(7deg);
        }
      }
      .box_txt {
        display: flex;
        align-items: center;
        margin-top: 2.1rem;

        .number {
          margin-right: 1.6rem;
          font-family: "solano";
          font-size: 6.2rem;
          font-weight: bold;
          line-height: 0.63;
        }

        .txt_area {
          margin-top: 1.1rem;
          .tit,
          .desc {
            font-size: 2rem;
          }

          .desc.no {
            color: #fff;
          }

          .tit {
            color: var(--color-orange);
            font-weight: bold;
          }
        }
      }
    }
  }

  .temp_swipe {
    display: flex;
    overflow: hidden;
    margin-left: 17rem;

    li {
      width: 51rem;
      margin-right: 4rem;
    }
  }

  .progress_bar {
    position: relative;
    width: 95rem;
    height: 1.2rem;
    margin-top: 2rem;
    background-color: #dddddd;
    border-radius: 0.6rem;

    .inner {
      position: absolute;
      height: 1.2rem;
      background-color: #ff4600;
      border-radius: 0.6rem;
    }
  }

  ${mq[0]} {
    padding: 0;
    h4 {
      margin: 70px 0 36px;
    }
    .wrap_history {
      margin: 0;

      .list_nav {
        display: grid;
        flex-wrap: wrap;
        position: static;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 11px 12px;
        max-width: 360px;
        margin-bottom: 54px;
        padding: 0 20px;

        li,
        li.on {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 71px;
          height: 37px;
          margin: 0;
          padding: 0;
          font-size: 21px;
          text-align: center;
          border-radius: 18.5px;
        }

        li {
          background-color: #efefef;
        }

        li.on {
          color: #fff;
          border-bottom: 0;
          background: var(--color-orange);
        }
      }

      .box_history {
        margin: 0;

        .wrap_swiper {
          height: auto;

          .swiper {
            padding: 0 20px;
          }
        }

        .swiper-slide {
          width: 289px;
        }

        .progress_bar {
          display: block;
          width: 90vw;
          margin: 20px;
        }

        .thumb {
          position: relative;
          width: 289px;
          height: 283px;
        }
        .badge {
          display: none;
        }

        .box_txt {
          margin-top: 13px;
          .number {
            line-height: 1;
            font-size: 48px;
          }
          .txt_area {
            .tit,
            .desc {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export const BrandBiWrap = styled.section`
  margin: 25.5rem 0;
  h4,
  p {
    text-align: center;
  }
  p {
    margin: 4rem 0 7.4rem;
    line-height: 1.58;

    &.mobile {
      display: none;
    }
  }

  .banner_2area {
    display: flex;
    justify-content: center;
    picture {
      width: 62rem;
      &:nth-of-type(1) {
        margin-right: 4rem;
      }
    }
  }

  .brand_slogan,
  .brand_color {
    width: 128rem;
    margin: 5.2rem auto 0;
  }

  ${mq[0]} {
    margin: 70px 0 90px;

    p {
      margin: 18px 0 38px;
      font-size: 14px;
      line-height: 30px;

      &.pc {
        display: none;
      }
      &.mobile {
        display: block;
      }
    }

    .banner_2area {
      display: block;

      picture {
        display: block;
        width: 100%;
        margin: 0;
        &:nth-of-type(2) {
          margin-top: 24px;
        }
      }
    }

    .brand_slogan {
      width: 100%;
      margin-top: 24px;
    }

    .brand_color {
      width: 100%;
      margin-top: 24px;
    }
  }
`;
