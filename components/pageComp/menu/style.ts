import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const MenuWrap = styled.main`
  padding: 12rem 0 0;
  min-height: calc(100vh - 12rem - 50.65rem);

  .list_tab li {
    padding: 9px;
  }

  .menu_visual {
    overflow: hidden;
    width: 100%;
    height: fit-content;
  }

  .wrp_tip {
    display: flex;
    width: 128rem;
    margin: 0 auto;
  }

  .tip {
    width: 18.9rem;
    height: 4.8rem;
    margin: 3.6rem 0 3.6rem auto;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-orange);
    text-align: center;
    line-height: 4.8rem;
    border-radius: 0.8rem;
    cursor: pointer;
    background-color: #ffece5;

    &:hover {
      color: #fff;
      background-color: var(--color-orange);
    }
  }

  ${mq[0]} {
    padding-top: 0;

    .wrp_tip {
      width: 100%;
      padding: 0 20px;

      .tip {
        width: 100%;
        height: 48px;
        margin: 24px 0;
        font-size: 18px;
        line-height: 1.67;
        border-radius: 10px;
      }
    }
  }
`;

export const MenuVisual = styled.figure<{ bgimg: number }>`
  position: relative;
  height: 46rem;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual${({ bgimg }) => bgimg}x2.webp") no-repeat center/cover;

  ${mq[0]} {
    height: 160px;
  }
`;

export const MenuList = styled.ul`
  display: grid;
  width: 128rem;
  margin: 0 auto 12.6rem;
  gap: 4.1rem 4rem;
  grid-template-columns: repeat(4, 1fr);
  text-align: center;

  .thumb {
    position: relative;
    width: 29rem;
    height: 29rem;

    &.badge {
      &:after {
        content: "";
        position: absolute;
        top: 2.4rem;
        left: 2.4rem;
        width: 6.4rem;
        height: 6.4rem;
      }
    }

    &.best {
      &:after {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/badge_best.webp") no-repeat left top / 100%;
      }
    }
    &.new {
      &:after {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/badge_new.webp") no-repeat left top / 100%;
      }
    }
  }

  .ko_name {
    margin: 2rem 0 0.5rem;
    font-size: 2.1rem;
    font-weight: bold;
    line-height: 1.58;
  }

  .en_name {
    font-family: "Montserrat";
    font-size: 1.8rem;
    font-weight: 500;
    color: #aaa;

    &.long {
      font-size: 1.3rem;
      line-height: 2.2rem;
    }
  }

  ${mq[0]} {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    gap: 43px 15px;
    grid-template-columns: repeat(2, 1fr);

    li {
      width: 100%;
    }

    .thumb {
      width: 100%;
      height: auto;

      &.badge {
        &:after {
          top: 12px;
          left: 12px;
          width: 48px;
          height: 48px;
        }
      }
    }

    .ko_name {
      margin: 8px 0;
      font-size: 14px;
    }

    .en_name {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const Detail = styled.div`
  width: 106rem;
  margin: 0 auto 18rem;

  ${mq[0]} {
    width: 100%;
    margin: 0;

    .list_tab {
      box-shadow: 0 -1px 24px 0 rgba(0, 0, 0, 0.16);
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6.1rem;

  h2,
  h3,
  h4 {
    font-size: 1.8rem;
    font-weight: normal;
    color: var(--color-black);
  }
  h4 {
    text-decoration: underline;
  }
  .bar {
    margin: 0 0.5rem;
  }

  ${mq[0]} {
    width: 100%;
    margin: 36px 0 24px;
    padding: 0 20px;

    h2,
    h3,
    h4 {
      display: block;
      font-size: 14px;
    }
    .bar {
      margin: 0 5px;
    }
  }
`;

export const Info = styled.section`
  display: flex;
  position: relative;

  .thumb {
    position: relative;
    width: 55rem;
    height: 55rem;
    margin-right: 6rem;

    &.badge {
      &:after {
        content: "";
        position: absolute;
        top: 2.4rem;
        left: 2.4rem;
        width: 6.4rem;
        height: 6.4rem;
      }
    }

    &.best {
      &:after {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/badge_best.webp") no-repeat left top / 100%;
      }
    }
    &.new {
      &:after {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/badge_new.webp") no-repeat left top / 100%;
      }
    }
  }

  .box_ingredients {
    margin-top: 1.5rem;
    dt {
      font-weight: bold;
      span {
        display: block;
      }
      .ko {
        margin-bottom: 0.4rem;
        font-size: 3.2rem;
        line-height: 1.38;
      }
      .en {
        font-family: "Montserrat";
        font-size: 1.8rem;
        color: #aaa;
      }
    }

    .txt {
      margin: 1.8rem 0 3.2rem;
      font-size: 1.8rem;
      line-height: 1.44;
    }

    .list {
      display: grid;
      width: 35.4rem;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.7rem 0;

      li {
        overflow: hidden;
        width: 10.7rem;
        span {
          display: block;

          text-align: center;
        }
        .img {
          position: relative;
          width: 10.7rem;
          height: 10rem;
          text-align: center;
          img {
            width: 10rem;
          }
        }
        .desc {
          font-size: 1.4rem;
        }
      }
    }
  }

  a {
    position: absolute;
    width: 8rem;
    height: 8rem;
    top: 23.5rem;

    &.prev {
      left: -11rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/btn_prev.svg") no-repeat left top / 100%;
    }
    &.next {
      right: -11rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/btn_next.svg") no-repeat left top / 100%;
    }
  }

  ${mq[0]} {
    display: block;

    .thumb {
      width: 100%;
      height: auto;
      margin-right: 0;

      &.badge {
        &:after {
          top: 12px;
          left: 12px;
          width: 64px;
          height: 64px;
        }
      }
    }

    .box_ingredients {
      margin-top: 16px;
      dt {
        .ko {
          margin-bottom: 8px;
          font-size: 24px;
          line-height: 44px;
        }
        .en {
          font-size: 16px;
        }
      }
      dd {
        &.txt {
          margin: 8px 0 16px;
          font-size: 14px;
          line-height: 26px;
        }

        .box_btn {
          display: flex;
          margin-bottom: 16px;
          a {
            display: block;
            position: static;
            width: 48px;
            height: 48px;

            &:nth-of-type(1) {
              margin-right: 16px;
            }
          }
        }

        .list {
          width: 100%;

          li {
            .desc {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;

export const BtnConfirm = styled.button`
  display: block;
  width: 100%;
  height: 8rem;
  margin-top: 3rem;
  line-height: 8rem;
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-white);
  border-radius: 1.2rem;
  background-color: var(--color-bluedark);
`;
