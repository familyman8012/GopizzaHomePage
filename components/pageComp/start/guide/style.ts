import { css } from "@emotion/react";
import styled from "@emotion/styled";

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
`;

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

      &:last-of-type {
        margin-left: auto;
      }
    }
  }

  table {
    width: 100%;
    th,
    td {
      text-align: center;
      font-weight: bold;
      border: 1px solid #ddd;

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
      font-size: 2.4rem;
      border-bottom: 0;
      &:nth-of-type(1) {
        width: 33.7rem;
      }
      &:nth-of-type(2),
      &:nth-of-type(3) {
        width: 47.15rem;

        font-size: 2.4rem;
        font-weight: bold;
        color: var(--color-orange);
      }
    }
    td {
      &:nth-of-type(1) {
        font-size: 2.4rem;
      }
      &:not(&:nth-of-type(1)) {
        font-family: "solano";
      }

      padding: 2.35rem 0;
      font-size: 4rem;
    }
    tfoot {
      td {
        color: #fff;
        border: 1px solid var(--color-orange);
        background: var(--color-orange) !important;
      }
    }
  }
`;
