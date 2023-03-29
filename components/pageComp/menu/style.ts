import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const MenuWrap = styled.section`
  padding: 12rem 0 0;
  min-height: calc(100vh - 12rem - 50.65rem);

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
`;

export const MenuVisual = styled.figure<{ bgimg: number }>`
  position: relative;
  height: 46rem;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual${({ bgimg }) => bgimg}x2.webp") no-repeat center/cover;
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
`;

export const Detail = styled.div`
  width: 106rem;
  margin: 0 auto 18rem;
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
`;

export const Info = styled.section`
  display: flex;
  position: relative;

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
