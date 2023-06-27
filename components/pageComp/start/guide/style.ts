import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { folder, mq } from "ComponentsFarm/common";

export const CostWrap = styled.section`
  margin: 16rem 0;
  .notice {
    display: flex;
    margin-bottom: 1.25rem;
    line-height: 2.44;

    span {
      font-size: 1.8rem;
      opacity: 0.5;
      color: #707070;
    }
  }

  .mobile_line {
    display: none;
  }

  table {
    width: 100%;
    table-layout: auto !important;
    th,
    td {
      text-align: center;
      font-weight: bold;
      border: 1px solid #ddd;
      &:nth-of-type(1) {
        border-left: none;
      }
      &:nth-of-type(3) {
        border-right: none;
      }
    }
    td {
      &:nth-of-type(1) {
        background: #fbfbfb;
      }
    }
    tr {
      &:nth-of-type(7) {
        td {
          &:not(&:nth-of-type(1)) {
            font-size: 2.2rem;
            font-weight: normal;
          }
        }
      }
    }
    th {
      padding: 3.15rem 0;

      border-bottom: 0;
      background: rgb(255, 70, 0, 0.1);

      &:nth-of-type(1) {
        width: 33.7rem;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        width: 47.15rem;

        span {
          display: block;
          &.txt1 {
            font-size: 2.4rem;
            font-weight: bold;
            line-height: 1.83;
            color: var(--color-orange);
          }
          &.txt2 {
            font-size: 1.8rem;
            font-weight: normal;
            color: #00000080;
          }
        }
      }
    }
    td {
      &:nth-of-type(1) {
        font-size: 2.4rem;
      }
      &:not(&:nth-of-type(1)) {
        font-family: "solano";
        .sale {
          position: relative;
          &:before {
            content: "한시적 할인";
            position: absolute;
            top: -5px;
            left: 50%;
            width: max-content;
            color: var(--color-orange);
            font-size: 1.8rem;
            font-weight: normal;
            transform: translate(-50%, -50%);
          }
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 18.57rem;
            height: 0.4rem;
            background: var(--color-orange);
          }
        }
        .sale2 {
          &:before {
            content: "한시적 면제";
          }
        }
      }

      padding: 2.35rem 0;
      font-size: 4rem;
    }
    tfoot {
      td {
        color: #fff;
        border: 1px solid var(--color-orange);
        background: var(--color-orange) !important;

        .box_price {
          span {
            &.price {
              position: relative;
              font-size: 3rem;
              margin-bottom: 0.6rem;
              &:before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                width: 12.88rem;
                height: 0.4rem;
                transform: translate(-50%, -50%);
                background: var(--color-bluedark);
              }
            }
            display: block;
            color: #fff;
          }
        }
      }
    }
  }

  ${mq[0]} {
    margin: 36px 0 36px;

    .notice {
      span {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .mobile_line {
      display: block;
    }

    table {
      tr {
        &:nth-of-type(7) {
          td {
            &:not(&:nth-of-type(1)) {
              font-size: 14px !important;
            }
          }
        }
      }
      th {
        padding: 15px 0;

        &:nth-of-type(1) {
          width: 86px;
        }
        &:nth-of-type(2),
        &:nth-of-type(3) {
          width: calc(50% - 43px);

          span {
            &.txt1 {
              font-size: 16px;
              line-height: 1.83;
            }
            &.txt2 {
              font-size: 12px;
            }
          }
        }
      }
      td {
        &:nth-of-type(1) {
          font-size: 14px !important;
        }
        padding: 10px 0;
        font-size: 20px !important;
      }
    }
  }
`;

export const BnrOpenWrap = styled.div`
  position: relative;
  width: 128rem;
  height: 64rem;
  margin-bottom: 16rem;

  .txt {
    position: absolute;
    z-index: 3;
    top: 7rem;
    left: 7rem;

    font-size: 4.8rem;
    line-height: 1.33;
    color: var(--color-white);
  }

  .swiper {
    .swiper-button-prev {
      left: 3rem;
    }
    .swiper-button-next {
      right: 3rem;
    }
  }

  .swiper-pagination {
    z-index: 5;
    bottom: 5.4rem;
  }

  ${mq[0]} {
    width: 100%;
    height: auto;
    margin-bottom: 70px;
    padding: 0 20px;

    .txt {
      top: 15px;
      left: 15px;

      font-size: 18px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }
`;

const processImg = Array.from({ length: 3 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) .box_txt {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/img_process${i + 1}x2.webp") no-repeat center top / 20rem;
      }
    `
);

const processImg2 = Array.from({ length: 3 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) .box_txt {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/img_process${i + 4}x2.webp") no-repeat center top / 20rem;
      }
    `
);

const processImgMobile = Array.from({ length: 3 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 4}) .box_txt {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/img_process${i + 4}x2.webp") no-repeat center top / 20rem;
      }
    `
);

export const ProcessWrap = styled.ol`
  display: flex;
  &:not(.line2) li {
    ${processImg}
  }
  li {
    position: relative;
    padding-right: 7.7rem;
    margin-right: 7.5rem;

    .box_txt {
      display: flex;
      align-items: center;

      width: max-content;
      min-width: 20rem;
      padding-top: 22.9rem;

      white-space: pre-line;
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 10rem;
      width: 1.9rem;
      height: 2rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/arrow_processx2.webp") no-repeat left top / 1.9rem 2rem;
    }
  }

  &.line2 {
    margin-top: 15.3rem;
    margin-left: 35.5rem;
    li {
      &:last-of-type {
        margin-right: 0;
        padding-right: 0;
        &::after {
          display: none;
        }
      }
      ${processImg2}
    }
  }

  span {
    display: block;
  }
  .num {
    display: flex;
    align-items: center;
    font-family: "Montserrat";
    font-size: 8rem;
    font-weight: bold;

    &:after {
      content: "";
      display: block;
      width: 0.05rem;
      height: 5.9rem;
      margin: 0 2.05rem 0 1.3rem;
      background: #000;
    }
  }
  .txt {
    font-size: 2.4rem;
    font-weight: bold;
  }

  ${mq[0]} {
    display: grid;
    margin-top: 30px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 50px 15px;
    justify-items: center;

    &.line2 {
      display: none;
    }

    li {
      margin-right: 0;
      padding-right: 0;

      ${processImgMobile}

      .box_txt {
        width: fit-content;
        min-width: 130px;
        padding-top: 146px;
        background-size: 130px auto !important;
      }

      &:after {
        display: none;
      }
    }
    .num {
      font-size: 40px;

      &:after {
        width: 1px;
        height: 42px;
        margin: 0 7px;
      }
    }
    .txt {
      font-size: 15px;
      line-height: 24px;
    }
  }
  ${folder} {
    width: 280px;
    margin: 0 auto;
    .num {
      font-size: 30px;
    }

    .txt {
      font-size: 12px;
    }
  }
`;

export const RequireTimeWrap = styled.section`
  margin: 16rem 0 22.7rem;

  h4 {
    margin-bottom: 9.8rem;
  }

  .box_time {
    width: 127.94rem;
    height: 71.46rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/img_time2.webp") no-repeat center / contain;

    .mobile_time {
      display: none;
    }
  }

  ${mq[0]} {
    margin: 70px 0;

    h4 {
      margin-bottom: 24px !important;
    }

    .box_time {
      width: 100%;
      height: auto;
      background: none;

      .mobile_time {
        display: block;
      }
    }
  }
`;
