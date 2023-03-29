import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalWrap = styled.div`
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/bg_globalx2.webp") no-repeat center bottom / 100%;
`;

export const GoGlobalListSection = styled.div`
  position: relative;
  width: 128rem;
  margin: 0 auto;
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
`;

const countryImg = Array.from({ length: 5 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/img_global${i + 1}x2.webp") no-repeat left top / 100%;
        .country {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/goglobal/ico_global${i + 1}.webp") no-repeat left top / 100%;
        }
      }
    `
);

export const GlobalListWrap = styled.ul`
  width: 128rem;
  margin: 18.1rem auto 0;
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
`;
