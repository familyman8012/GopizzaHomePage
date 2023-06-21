import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const GlobalWrap = styled.div`
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/bg_globalx2.webp") no-repeat center bottom / 100%;
`;

export const GoGlobalListSection = styled.div`
  position: relative;
  width: 128rem;
  margin: 0 auto;

  ${mq[0]} {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Airplane = styled.div`
  position: absolute;
  top: -38rem;
  left: -55rem;
  z-index: 100;
  width: 114.2rem;
  height: 114.2rem;
  transform: translateX(-100rem) translateY(-100rem) rotate(45deg);

  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/img_airplanex2.webp") no-repeat left top / 100%;

  &.on {
    animation: moveObject 1s;
    animation-fill-mode: forwards;
  }

  @keyframes moveObject {
    from {
      transform: translateX(-100rem) translateY(-100rem) rotate(45deg);
    } /* 시작 위치 */
    to {
      transform: translateX(0px) translateY(0px) rotate(45deg);
    }
  }

  ${mq[0]} {
    top: -200px;
    left: -180px;
    width: 400px;
    height: 400px;
    transform: translateX(-360px) translateY(-360px) rotate(45deg);

    &.on {
      animation: moveObject 0.5s;
      animation-fill-mode: forwards;
    }
  }
`;

export const GoglobalTxtWrap = styled.section`
  margin-top: 16rem;
  text-align: center;

  strong {
    display: block;
    margin-bottom: 4rem;
    font-size: 4.8rem;
    font-weight: bold;
    color: var(--color-orange);
  }

  p {
    font-size: 2.4rem;
    line-height: 1.58;
  }

  .mobile_line {
    display: none;
  }

  ${mq[0]} {
    margin-top: 59px;

    strong {
      margin-bottom: 22px;
      font-size: 24px;
    }

    p {
      width: max-content;
      font-size: 16px;
      line-height: 30px;
    }

    .mobile_line {
      display: block;
    }

    .pc_line {
      display: none;
    }
  }
`;

const countryImg = Array.from({ length: 5 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/img_global${i + 1}x2.webp?v=4") no-repeat left top / 100%;
        .country {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/ico_global${i + 1}.webp?v=4") no-repeat left top / 100%;
        }
      }
    `
);

export const GlobalListWrap = styled.ul`
  width: 128rem;
  margin: 18.1rem auto 0;

  ${mq[0]} {
    width: 100%;
    margin-top: 61px;
  }
`;

export const GlobalListItemWrap = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 128rem;
  height: 46rem;
  margin-bottom: 7.2rem;
  opacity: 0.84;
  border-radius: 23rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  &.on,
  &:hover {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      opacity: 0.84;
      border-radius: 23rem;
      background-color: #000;
    }
    .wrap_item,
    .txt_box {
      display: flex;
      position: relative;
      z-index: 2;
    }
  }

  * {
    color: #fff;
  }

  .wrap_item {
    display: none;

    align-items: self-end;
  }

  .country {
    width: 15.13rem;
    padding-top: 17.52rem;
    font-family: "solano";
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }

  ${countryImg}

  .storeNumber {
    text-align: center;
    .number {
      display: block;
      width: 25.49rem;
      height: 19.2rem;
      font-family: "solano";
      font-size: 16rem;
      font-weight: bold;
    }
    .txt {
      margin-top: 1.25rem;
      font-size: 2.4rem;
      line-height: 1.58;
    }
  }

  .txt_box {
    display: none;
    &::before {
      content: "";
      display: block;
      width: 1px;
      height: 21rem;
      margin-right: 8.95rem;
      background: #fff;
    }

    dl {
      dt {
        margin-bottom: 3.7rem;
        font-size: 3.2rem;
        font-weight: bold;
        line-height: 1.34;
      }
      dd {
        font-size: 1.8rem;
        line-height: 1.39;
      }
    }
  }

  ${mq[0]} {
    flex-direction: column;
    width: 100%;
    height: 160px;
    margin-bottom: 24px;
    background-size: auto 100% !important;
    background-position: center !important;

    .wrap_item {
      order: 2;
      align-items: center;

      .country {
        width: auto;
        margin-right: 32px;
        padding: 9px 0 9px 50px;
        font-size: 16px;
        background-size: 37.6px;
      }

      .storeNumber {
        display: flex;
        align-items: center;
        .number {
          display: block;
          width: auto;
          height: auto;
          margin-right: 11.4px;
          font-size: 39px;
        }
        .txt {
          margin-top: 0;
          font-size: 14px;
        }
      }
    }
    .txt_box {
      order: 1;

      &:before {
        display: none;
      }

      dl {
        dt {
          margin-bottom: 16.5px;
          font-size: 16px;
          line-height: 24px;
        }

        dd {
          display: none;
        }
      }
    }
  }
`;

export const NextDestinationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 24rem;
  text-align: center;
  * {
    color: var(--color-white);
  }

  h4 {
    margin-top: 21.4rem;
    font-size: 5.6rem;
    font-weight: bold;
    line-height: 0.68;
  }

  .box_txt {
    margin-top: 3.1rem;

    em {
      display: block;
      margin-bottom: 0.8rem;
      font-size: 2.4rem;
      font-style: normal;
      font-weight: bold;
    }

    p {
      font-size: 2.4rem;
      line-height: 1.58;
    }
  }
  a {
    display: block;
    width: 28.6rem;
    height: 8rem;
    margin-top: 4.5rem;
    text-align: center;
    font-size: 2.4rem;
    line-height: 8rem;
    color: #fff;
    border-radius: 20rem;
    background: var(--color-bluedark);
  }

  .moblie_line {
    display: none;
  }

  ${mq[0]} {
    padding-bottom: 0px;

    .moblie_line {
      display: block;
    }

    h4 {
      position: relative;
      top: 30px;
      margin-top: 50px;
      font-size: 36px;
      font-weight: bold;
    }

    .box_txt {
      margin-top: 50px;

      em {
        font-size: 24px;
      }

      p {
        font-size: 16px;
      }
    }

    a {
      width: 280px;
      height: 60px;
      margin: 30px 0;
      font-size: 18px;
      line-height: 60px;
      border-radius: 200px;
    }
  }
`;
