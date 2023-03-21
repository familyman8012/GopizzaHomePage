import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

const strongImg = Array.from({ length: 3 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_strong${i + 1}x2.webp") no-repeat center top / 100%;
      }
    `
);

export const Strong3Wrap = styled.section`
  margin-top: 16rem;

  h4 {
    margin-bottom: 5.6rem;
  }
  dt,
  .txt,
  .txt1,
  .txt2 {
    white-space: pre-line;
  }
  .list_strong {
    display: flex;
    justify-content: center;

    li:nth-of-type(2) {
      margin: 0 4rem;
    }

    li {
      display: flex;
      overflow: hidden;
      position: relative;
      width: 40rem;
      height: 61.61rem;
      border-radius: 2rem;

      dl {
        display: none;
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(255, 70, 0, 0) 27%, rgba(255, 70, 0, 0.02) 27%, #ff4600 89%);
      }

      &:hover {
        cursor: pointer;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to top, rgba(255, 70, 0, 0) -38%, rgba(255, 70, 0, 0.4) -38%, #ff4600 89%);
        }
        .txt {
          display: none;
        }
        dl {
          display: block;
        }
      }

      ${strongImg}

      .txt {
        position: relative;
        z-index: 2;
        color: #fff;
        font-size: 3.2rem;
        font-weight: bold;
        line-height: 1.38;
        padding: 4rem 0 0 4rem;
      }

      dl {
        position: relative;
        z-index: 2;
        padding: 4rem 4rem;

        dt,
        dd p {
          color: #fff;
        }

        dt {
          padding-bottom: 2.35rem;
          font-size: 3.2rem;
          font-weight: bold;
          line-height: 1.38;
          border-bottom: 1px solid #fff;
        }
        dd {
          .txt1 {
            margin: 2.35rem 0 2.2rem;
            font-size: 2.4rem;
            font-weight: bold;
            line-height: 1.25;
          }
          .txt2 {
            font-size: 2rem;
            font-weight: 500;
            line-height: 1.6;
            letter-spacing: -0.2px;
          }
        }
      }
    }
  }
`;

export const RevenueWrap = styled.section`
  h4 {
    margin: 18rem 0 11.7rem;
  }

  .list_revenue {
    &.line1 {
      margin-bottom: 9.7rem;
    }

    li {
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 16.1rem;
        border-radius: 0 0 2rem 2rem;
        background: rgba(0, 0, 0, 0.8);
      }

      .box_txt {
        display: flex;
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 16.1rem;
        padding: 0 3.2rem 1.3rem;
        span {
          display: block;
          color: var(--color-white);
        }

        .sales {
          position: absolute;
          .date {
            font-size: 1.8rem;
          }
          .store {
            width: max-content;
            font-size: 3.2rem;
            line-height: 1.25;
          }
          .price {
            display: flex;
            align-items: flex-end;

            span {
              color: var(--color-orange);
            }

            .number {
              margin-right: 0.8rem;
              font-family: "solano";
              font-size: 5.6rem;
              font-weight: bold;
            }

            .txt {
              font-size: 1.8rem;
              line-height: 2.22;
            }
          }
        }

        .wrap_per {
          display: flex;
          margin-left: auto;

          .box_per {
            display: flex;
            align-items: end;

            &:first-of-type {
              margin-right: 1.6rem;
            }

            .txt {
              width: max-content;
              font-size: 1.8rem;
              line-height: 2.22;
            }

            .number {
              margin: 0 0.6rem;
              font-family: "solano";
              font-size: 6.5rem;
              font-weight: bold;
              line-height: 1;
            }

            .txt_per {
              font-family: "solano";
              font-size: 3.2rem;
              font-weight: bold;
              line-height: 1.25;
            }
          }
        }
      }
    }
  }
`;

export const SupportWrap = styled.section`
  margin: 18rem 0;

  h4 {
    margin-bottom: 6.4rem;
  }

  h5 {
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: var(--color-bluedark);
  }

  .title_txt {
    margin: 1rem 0 3.2rem;
  }

  .list_brand,
  .list_sales {
    display: flex;
    justify-content: center;
    margin-bottom: 14rem;
    li {
      display: flex;
      padding: 0 2.4rem;
      height: 7.5rem;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;
      font-weight: bold;
      border-radius: 1.2rem;
      margin-right: 2.4rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .list_brand li {
    &:nth-of-type(1) {
      color: #005dff;
      background: #ccf5ff;
    }
    &:nth-of-type(2) {
      color: #009c53;
      background: #ccffe0;
    }
    &:nth-of-type(3) {
      color: #ff3b3b;
      background: #ffd9d9;
    }
    &:nth-of-type(4) {
      color: #70f;
      background: #e6ccff;
    }
  }

  .wrap_swiper {
    position: relative;
    width: 128rem;
    padding-bottom: 5.2rem;
    margin: 0 auto;

    &:before {
      position: absolute;
      top: -33.3rem;
      right: -6.5rem;
      content: "";
      width: 36.2rem;
      height: 33.3rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_personx2.webp") no-repeat left top / 100%;
    }
  }

  .swiper {
    .swiper-slide {
      width: 41rem;
      margin-right: 2rem !important;
    }

    .swiper-pagination {
      bottom: 0;

      .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
        background-color: var(--color-gray);
      }
    }
  }

  .bnr_area {
    display: flex;
    width: 128rem;
    margin: 0 auto;
    .area1 {
      margin-right: 1.7rem;
    }
  }

  .wrap_sales {
    margin-top: 12rem;

    .list_sales li {
      &:nth-of-type(1) {
        color: #a27c00;
        background: #f7ffcc;
      }
      &:nth-of-type(2) {
        color: #40a200;
        background: #d6ffcc;
      }
      &:nth-of-type(3) {
        color: #3100ff;
        background: #ccdaff;
      }
    }
  }

  .wrap_promotion {
    position: relative;
    width: 128rem;
    margin: 0 auto;

    &:before {
      position: absolute;
      z-index: -1;
      top: -256px;
      left: -34px;
      content: "";
      width: 36.2rem;
      height: 33.3rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_person2x2.webp") no-repeat left top / 100%;
    }

    ul {
      display: grid;
      gap: 2.9rem;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
`;

export const TxtQuotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  strong {
    display: block;
  }
  strong,
  p {
    text-align: center;
  }
  .txt1 {
    position: relative;
    margin-bottom: 4.8rem;
    font-size: 7rem;
    font-weight: bold;
    line-height: 1.43;

    &:before,
    &:after {
      content: "";
      display: inline-block;
      position: relative;
      width: 4.54rem;
      height: 2.88rem;
      margin-left: -4.5rem;
    }

    &:before {
      top: -6.7rem;
      left: -0.4rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/ico_talk_left.svg") no-repeat left top / 100%;
    }

    &:after {
      top: -6.1rem;
      left: 4rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/ico_talk_right.svg") no-repeat left top / 100%;
    }
  }
  .txt2 {
    font-size: 3.2rem;
    line-height: 1.5;
    em {
      font-weight: bold;
    }
  }
`;

export const ParbakedWrap = styled.section`
  overflow: hidden;
  width: 100vw;
  margin: 0 auto;

  ${TxtQuotes} {
    margin-top: 81.6rem;
  }

  .wrap_parbake {
    position: relative;
    width: 128rem;
    margin: 21.8rem auto 0;

    &:after {
      content: "";
      position: absolute;
      top: -9.7rem;
      left: 22.4rem;
      width: 131.4rem;
      height: 116.3rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_doughx2.webp") no-repeat left top / 100%;
    }

    @media (min-width: 600px) and (max-width: 1000px) {
      &:after {
        left: 13rem;
      }
    }

    h5 {
      position: relative;
      color: var(--color-orange);
      font-family: "solano";
      font-size: 16rem;
      font-weight: bold;
      line-height: 0.88;

      &:after {
        content: "";
        position: absolute;
        top: 6.7rem;
        left: 75.5rem;
        width: 52.2rem;
        height: 1rem;
        background: var(--color-orange);
      }
    }
  }
`;

export const GovenWrap = styled.section`
  .wrap_inner {
    width: 128rem;
    margin: 18rem auto;

    .tit1 {
      font-size: 3.2rem;
      font-weight: bold;
      line-height: 1.5;
    }

    .tit2 {
      position: relative;

      margin-bottom: 3.8rem;
      font-family: "solano";
      font-size: 16rem;
      font-weight: bold;

      &:before {
        position: absolute;
        content: "";
        top: 7.9rem;
        left: 36.8rem;
        display: block;
        width: 64.4rem;
        height: 1rem;
        background: var(--color-orange);
      }

      &.line3 {
        &:before {
          width: 40rem;
          margin-left: 41.8rem;
        }
      }

      .swiper-button-prev2,
      .swiper-button-next2 {
        position: absolute;
        z-index: 10;
        right: 0;
        width: 2.6rem;
        height: 1.7rem;
        padding: 0 2.5rem;
        cursor: pointer;
      }

      .swiper-button-prev2 {
        top: 5.3rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/arrow_goven_up.svg") no-repeat center;
      }
      .swiper-button-next2 {
        top: 9.3rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/arrow_goven_down.svg") no-repeat center;
      }

      span {
        font-family: "solano";
        line-height: 1;

        &.txt2 {
          margin-left: 72.6rem;
        }
      }

      .swiper {
        height: 16rem;

        .swiper-slide {
          display: flex;
        }
      }

      span {
        color: var(--color-orange);

        &:last-of-type {
          display: flex;
        }
      }
    }

    .box_thumb {
      height: 74.2rem;
    }

    ${TxtQuotes} {
      margin-top: 4rem;
    }
  }

  .wrap_rating {
    .txt {
      display: flex;
      width: 128rem;
      margin: 22.7rem auto 2rem;
      font-size: 3.2rem;
      font-weight: bold;
      line-height: 1.5;

      .inner {
        width: 73rem;
      }

      em {
        color: var(--color-orange);
      }
      &:after {
        display: block;
        content: "";
        width: 34.8rem;
        height: 7.2rem;
        margin-left: 20.2rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/ico_deliveryx2.webp") no-repeat left top / 100%;
      }
    }
  }
`;

export const Bnr = styled.div`
  position: relative;
  margin-top: 11.8rem;

  .txt_box {
    position: absolute;
    z-index: 2;
    top: 6.6rem;
    left: 37.37rem;
    font-size: 5.2rem;
    font-weight: bold;
    color: #fff;
    line-height: 1.33;
  }
`;

// const revenueImg = (line: string) => {
//   return Array.from({ length: line === "line1" ? 6 : 5 }).map(
//     (_, i) =>
//       css`
//         &:nth-of-type(${i + 1}) {
//           background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_revenue${line === "line1" ? i + 1 : i + 1 + 6}.webp") no-repeat
//             center top / 100%;
//         }
//       `
//   );
// };
