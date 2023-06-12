import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const MainVisualWrap = styled.section`
  position: relative;
  overflow: hidden;
  height: 64rem;
  padding: 0;

  .swiper-pagination {
    bottom: 5.5rem;
  }

  img {
    width: 100%;
    height: 64rem;
    object-fit: cover;
    object-position: center;
  }

  ${mq[0]} {
    height: auto;
    img {
      height: auto;
    }
  }
`;

export const YoutubeComponent = styled.section`
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
  height: 64rem;
  overflow: hidden;
  max-width: 100%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const LinkBannerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 61.4rem;
  height: 25.9rem;

  .txt {
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
  }

  &.find {
    margin-right: 6.4rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/bnr_link1x2.webp?v=2") no-repeat left top / 100%;

    .txt {
      padding: 5.9rem 0 0 22.6rem;
    }
  }
  &.inquiry {
    width: 65.6rem;
    height: 23.5rem;
    padding-top: 2.4rem;
    box-sizing: content-box;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/bnr_link2x2.webp?v=2") no-repeat left bottom / 100%;
    .txt {
      padding: 3.4rem 0 0 9rem;
    }
  }
`;

export const LinkBannerWrap = styled.section`
  display: flex;
  margin: 2rem 0 20.6rem;
  justify-content: center;

  ${mq[0]} {
    display: none;
  }
`;

export const BestMenuWrap = styled.section`
  width: 128rem;
  margin: 0 auto 18rem;
  article {
    overflow: hidden;
    width: 100%;
    margin-top: 5.8rem;

    .box_txt {
      float: left;
    }
    .box_swiper {
      float: right;
    }

    .box_swiper {
      width: 84rem;

      .progress_bar {
        position: relative;
        width: 100%;
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
    }

    .box_txt {
      .desc {
        margin: 3.6rem 0 3.2rem;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 20.2rem;
        height: 6.1rem;
        font-size: 2rem;
        color: var(--color-white);
        border-radius: 3.05rem;
        background-color: var(--color-orange);
      }
    }
    .swiper-slide {
      width: 40rem;

      /* &.swiper-slide-active {
        .box_thumb {
          &::before,
          .txt {
            display: block;
          }
        }
      } */
    }

    .box_thumb {
      position: relative;
      width: 40rem;
      height: 40rem;
      object-fit: contain;
      &:first-of-type {
        margin-right: 4rem;
      }
      &:hover {
        &::before,
        .txt {
          display: block;
        }
      }

      &::before {
        display: none;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background: rgba(0, 0, 0, 0.86);
      }

      .thumb {
        img {
          width: 100%;
          height: 100%;
        }
      }

      .txt {
        display: none;
        position: absolute;
        top: 23.1rem;
        left: 3.1rem;

        span {
          display: block;
          color: var(--color-white);
        }

        .subTitle {
          line-height: 1.38;
        }

        .en {
          font-family: "solano";
          font-size: 2.5rem;
          font-weight: bold;
        }

        .priceWrap {
          display: flex;
          align-items: baseline;
          font-family: "solano";
          font-weight: bold;

          .won {
            position: relative;
            top: -0.3rem;
            margin-left: 0.4rem;
            font-size: 3.2rem;
          }

          .price {
            font-size: 7rem;
          }
        }
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    .box_thumb {
      &:hover {
        &::before,
        .txt {
          display: block;
        }
      }
    }
  }

  ${mq[0]} {
    width: 100%;
    margin: 0 auto 70px;
    h3 {
      margin-top: 32px;
    }
    article {
      margin-top: 8px;

      .box_txt,
      .box_swiper {
        float: none;
      }

      .box_txt {
        .desc {
          margin: 17px 0 32px;
        }
        a {
          width: 156px;
          height: 48px;
          font-size: 16px;

          border-radius: 24px;
        }
      }
      .box_swiper {
        margin: 38px 0 0;

        .progress_bar {
          display: none;
        }

        .swiper-slide {
          width: 230px;
        }
        .box_thumb {
          width: 230px;
          height: 230px;

          .txt {
            top: auto;
            left: 10px;
            bottom: 10px;
            .en {
              font-size: 20px;
            }
            .priceWrap {
              .price {
                font-size: 48px;
              }
              .won {
                font-size: 24px;
              }
            }
          }
        }
      }
    }
  }
`;

export const CompetitivenessWrap = styled.section`
  width: 127.9rem;
  margin: 0 auto 18rem;

  img {
    width: 100%;
    height: auto;
  }

  .swiper-pagination {
    bottom: 6rem;
  }

  ${mq[0]} {
    width: 100%;
    margin: 0 auto 70px;
    a {
      display: block;
    }

    .swiper-pagination {
      bottom: 16px;
    }
  }
`;

const snsIco = Array.from({ length: 4 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        margin-right: 1.5rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/ico_order${i + 1}.webp") no-repeat left top / 100%;
      }
    `
);

export const OrderItem = styled.li`
  width: 62.2rem;
  height: 36rem;
  padding: 8rem 14.4rem 8rem;
  border-radius: 18rem;
  text-align: center;

  h2 {
    color: #fff;
  }

  .list_order {
    display: flex;
    margin: 2.7rem 0;
    li {
      width: 7.2rem;
      height: 7.2rem;
      ${snsIco}
    }
  }

  .tel {
    width: 33.4rem;
    height: 12rem;
    margin: -0.5rem 0 1rem;
    font-size: 10rem;
    font-weight: bold;
    font-family: "solano";
    color: #fff;
  }

  .go_txt {
    display: inline-block;
    padding-right: 1.5rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
  }

  .go_link {
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/arrow_right.svg") no-repeat right center;
  }

  &.order {
    margin-right: 3.6rem;
    background-color: var(--color-orange);
  }
  &.group {
    background-color: var(--color-bluedark);
  }

  ${mq[0]} {
    width: 100%;
    height: 185px;
    padding: 24px 62px 0;
    border-radius: 10px;
    text-align: center;

    &:nth-last-of-type(1) {
      margin-bottom: 20px;
    }

    .list_order {
      justify-content: center;
      margin: 17px 0 12px;

      li {
        width: 42px;
        height: 42px;
        margin-right: 10px !important;
      }
    }
    .go_txt {
      padding-right: 0;
      font-size: 14px;
      font-weight: normal;
    }

    .tel {
      width: auto;
      height: 64px;
      margin: 6px 0 4px;
      font-size: 54px;
      font-weight: bold;
    }

    .go_link {
      padding-right: 9.6px;
      background-size: 5.1px 8.5px;
    }
  }
`;

export const OrderWrap = styled.ul`
  display: flex;
  justify-content: center;

  ${mq[0]} {
    display: block;
    padding: 0 20px;
  }
`;

export const InstagramWrap = styled.section`
  margin: 18rem 0 17.2rem;
  padding: 12.6rem 0 18.3rem;
  text-align: center;
  background-color: #efefef;

  .tit_box {
    margin-bottom: 4.7rem;
    em {
      font-family: "solano";
      font-size: 2.5rem;
      font-weight: bold;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    li {
      width: 40rem;
      height: 40rem;
      &:nth-of-type(2) {
        margin: 0 4rem;
      }
      img {
        width: 100%;
      }
    }
  }

  ${mq[0]} {
    margin: 70px 0 0;
    padding: 40px 20px 70px;

    ul {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);

      li {
        width: auto;
        height: auto;
        border-radius: 10px;

        &:nth-of-type(2) {
          margin: 0;
        }
      }
    }
  }
`;

export const YoutubeWrap = styled.section`
  padding-bottom: 20rem;

  ${mq[0]} {
    display: none;
  }

  h3 {
    margin-bottom: 6rem;
  }
  text-align: center;

  ul {
    display: flex;
    width: 100vw;
    justify-content: space-between;
    li {
      width: calc(33.3% - 2rem);
    }
  }
`;
