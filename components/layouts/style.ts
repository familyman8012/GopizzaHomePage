import styled from "@emotion/styled";
import { folder, mq } from "ComponentsFarm/common";

export const HeaderWrap = styled.header`
  position: relative;
  z-index: 110;
  height: 12rem;
  background: #ff4600;

  .inner {
    display: flex;
    align-items: center;
    width: 128rem;
    height: 100%;
    margin: 0 auto;

    a {
      color: #fff;
      font-size: 1.8rem;
    }

    h1 {
      width: 12.7rem;
      height: 7.05rem;
      background: url("/images/common/h1_logo.svg") no-repeat left center / 100%;
    }
    .menuArea {
      margin-left: auto;
      > a {
        margin-right: 7rem;
        font-weight: bold;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    aside {
      display: flex;
      margin-left: 5.6rem;

      a {
        display: inline-block;
        width: 12.6rem;
        height: 4.8rem;
        line-height: 4.8rem;
        text-align: center;
        color: var(--color-orange);
        border-radius: 2.4rem;
        background-color: #fff;

        &:first-of-type {
          margin-right: 2.2rem;
        }
      }
    }
  }

  ${mq[0]} {
    height: auto;

    .inner {
      display: none;
    }
  }
`;

export const MobileHeaderWrap = styled.div`
  display: none;
  .header {
    display: none;
  }
  .layer_menu {
    display: none;

    span {
      color: #fff;
    }
  }
  .bnr {
    display: none;
  }
  &.on {
    height: 100%;
    background: var(--color-orange);
    position: fixed;
    width: 100%;
    .header {
    }

    .layer_menu {
      display: block;
    }

    .bnr {
      position: absolute;
      display: flex;
      align-items: center;
      width: 100%;
      height: 62px;
      bottom: 0;
      background: #171c8f;
      .txt {
        width: fit-content;
        margin-left: 27px;
        padding-left: 55px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/mobile/ico_phone.svg") no-repeat left center / 33px;
      }
    }
  }

  ${mq[0]} {
    display: block;
    .header {
      display: flex;
      align-items: center;
      height: 60px;

      h1 {
        width: 67px;
        height: 37.7px;
        margin-left: 20px;
        background: url("/images/common/h1_logo.svg") no-repeat left center / 100%;
      }

      .right {
        display: flex;
        align-items: center;
        margin: 0 10px 0 auto;

        .link_find {
          display: block;
          width: 42px;
          height: 47px;
          margin-right: 4px;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/mobile/ico_find.svg") no-repeat center center / 22px 27px;
        }

        .btn_menu {
          width: 46px;
          height: 40px;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/mobile/btn_menu.svg") no-repeat center center / 26px 20px;

          &.on {
            width: 46px;
            height: 44px;
            background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/mobile/btn_close.svg") no-repeat center center / 24px 24px;
          }
        }
      }
    }

    .layer_menu {
      overflow: auto;
      width: 100%;
      height: calc(100% - 122px);
      background: var(--color-orange);

      button,
      .list_submenu li {
        display: block;
        width: 100%;
        height: 56px;
        padding: 0 20px;
        text-align: left;
        font-size: 16px;
        color: #fff;
        border-bottom: 1px solid #fe7c4b;
        background: none;

        &:nth-of-type(1) {
          border-top: 1px solid #fe7c4b;
        }
      }

      button {
        position: relative;
        font-weight: bold;

        &:after {
          content: "";
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/mobile/arrow_menu.svg") no-repeat left center / 100%;
        }
      }

      /* CSS */
      .list_submenu {
        overflow: hidden;
        transition: max-height 0.2s ease-in-out;
        max-height: 0;

        li {
          display: flex;
          align-items: center;
          background: #ff682f;
        }
      }

      .active {
        ul {
          max-height: 300px; /* 이 값은 실제 필요한 값에 따라 조정해야 합니다. */
        }
        button:after {
          transform: rotate(180deg) translateY(-50%);
          transform-origin: 50% 0;
        }
      }
    }
  }
`;

export const FooterWrap = styled.footer`
  background: #ff4600;

  ${mq[0]} {
    display: none;
  }

  .mobile_bottom {
    display: none;
  }

  .inner {
    width: 128rem;
    margin: 0 auto;
    a,
    p,
    div,
    address {
      color: #fff;
    }
    h1 {
      width: 12.7rem;
      height: 7.05rem;
      background: url("/images/common/h1_logo.svg") no-repeat left center / 100%;
    }

    dt {
      font-size: 2rem;
      font-weight: bold;
      line-height: 1.4;
      color: #fff;
    }

    dd {
      opacity: 0.8;
      margin-top: 0.5rem;
      font-size: 1.6rem;
      font-family: "Montserrat", "Noto Sans KR";
      line-height: 1.75;
    }
    .top {
      display: flex;
      margin: 0 auto;
      padding: 8rem 0 3.5rem;
      border-bottom: 1px solid #fe7c4b;

      .menuArea {
        display: flex;
        width: calc(100% - 33.1rem);
        margin-left: 20.4rem;
        justify-content: space-between;

        .menuBox {
          &:first-of-type li {
            font-family: "Montserrat";
            letter-spacing: 0.2rem;
          }
        }
      }
    }
    .bottom {
      display: flex;
      align-items: baseline;
      margin-top: 3.75rem;
      padding-bottom: 9.4rem;

      .box_privacy {
        width: 33.33rem;
        dt,
        dd {
          span {
            color: #fff;
            cursor: pointer;
          }
        }
        dt {
          margin-bottom: 2rem;
          font-size: 1.6rem;
          line-height: 2.5;
        }
      }

      .box_biz_info {
        opacity: 0.8;
        width: 44.2rem;
        font-size: 1.6rem;
        line-height: 1.75;

        address {
          margin-top: 2rem;
          font-style: normal;
        }
      }

      .box_global {
        dt {
          width: max-content;
          margin-bottom: 2rem;
        }
        dd {
          margin-top: 0;
        }
      }
    }
    .list_sns {
      display: flex;
      position: relative;
      top: 25px;
      align-items: center;
      align-self: self-end;
      margin-left: 16.3rem;

      a {
        display: block;
      }
      li {
        margin-right: 1.6rem;
        &:last-of-type {
          margin-right: 0;
        }
        &:not(.youtube) {
          a {
            width: 3.2rem;
            height: 3.2rem;
          }
        }

        &.instagram {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_instagram.svg") no-repeat left top / 100%;
        }
        &.youtube {
          a {
            width: 3.4rem;
            height: 2.6rem;
          }
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_youtube.svg") no-repeat left top / 100%;
        }
        &.kakao {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_kakao.svg") no-repeat left top / 100%;
        }
        &.facebook {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_facebook.svg") no-repeat left top / 100%;
        }
      }
    }
  }
`;

export const FooterMobileWrap = styled.footer`
  display: none;

  ${mq[0]} {
    display: block;
    padding: 27px 0 0;
    background: #2c2c2c;

    .list_sns {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      align-self: self-end;

      a {
        display: block;
      }
      li {
        margin-right: 24px;
        &:last-of-type {
          margin-right: 0;
        }
        &:not(.youtube) {
          a {
            width: 30px;
            height: 30px;
          }
        }

        &.instagram {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_instagram.svg") no-repeat left top / 100%;
        }
        &.youtube {
          a {
            width: 30px;
            height: 24px;
          }
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_youtube.svg") no-repeat left top / 100%;
        }
        &.kakao {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_kakao.svg") no-repeat left top / 100%;
        }
        &.facebook {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_facebook.svg") no-repeat left top / 100%;
        }
      }
    }

    .box_privacy {
      display: flex;

      li:nth-of-type(3) span {
        border-right: none;
      }
    }

    .box_global ul {
      border-bottom: 1px solid rgba(112, 112, 112, 0.2);
    }

    .box_global,
    .box_privacy {
      width: 292px;
      margin: 24px auto 11px;
      h2,
      li * {
        display: block;
        font-family: "Montserrat";
        font-size: 10px;

        color: #fff;
        opacity: 0.7;
        text-align: center;
      }
      h2 {
        font-weight: bold;
      }
      li * {
        padding: 0 12px;
        border-right: 1px solid;
      }
      li span {
        width: max-content;
      }
      ul {
        display: flex;
        justify-content: center;
        margin: 10px 0 0;
        padding-bottom: 15.5px;
        li {
          width: fit-content;
          text-align: center;

          &:nth-of-type(1) * {
            padding-left: 0;
          }

          &:nth-of-type(2) * {
            width: max-content;
          }

          &:last-of-type * {
            border: none;
            padding-right: 0;
          }
        }
      }
    }
    address {
      display: block;
      font-family: "Montserrat";
      font-size: 10px;
      font-style: normal;
      color: #fff;
      opacity: 0.7;
      text-align: center;
      line-height: 19px;
    }
  }

  ${folder} {
    .box_global,
    .box_privacy {
      ul {
        justify-content: center;
      }
      li * {
        padding: 0 7px;
      }
    }
  }
`;

export const CopyrightWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  color: #7b7b7b;
  font-size: 2rem;
  font-family: "Montserrat";
  background: #2c2c2c;

  ${mq[0]} {
    height: auto;
    padding: 16px 0;
    font-family: "Montserrat";
    font-size: 10px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    background: #2c2c2c;
  }
`;

export const TopWrap = styled.div`
  display: flex;
  position: sticky;
  z-index: 30;
  bottom: 2.4rem;
  width: 100%;
  padding: 0 3.2rem;

  ${mq[0]} {
    display: none;
  }

  .floating_bnr {
    position: absolute;
    right: 2.7rem;
    bottom: 14.3rem;
    width: 16.2rem;
    height: 21.9rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/floating_bnrx2.webp") no-repeat left top / 100%;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 5.9rem;
    bottom: 2.4rem;
    width: 8rem;
    height: 8rem;
    margin-left: auto;
    text-align: center;
    font: bold 3.5rem "solano";
    color: #fff;
    border-radius: 8rem;
    background: var(--color-bluedark);

    &:before {
      content: "";
      display: block;
      width: 2.1rem;
      height: 1.4rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_up.svg") no-repeat left top / 100%;
    }
  }
`;

export const Container = styled.div`
  &.brand {
    position: relative;
    /* width: 1920px; */
    padding: 12rem 0 0;

    /* opacity: 0.5;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/mask_ourstory.png") no-repeat left -120px; */

    /* .temp_mask {
    display: none;
    content: "";
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    width: 1920px;
    height: 9868px;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/mask_how.png") no-repeat left -120px;
  } */
  }

  &.event {
    position: relative;
    width: 128rem;
    margin: 0 auto;
    padding: 12rem 0 26.5rem;

    img {
      width: 100%;
    }

    /* opacity: 0.5;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/mask_ourstory.png") no-repeat left -120px; */
    /* 
  .temp_mask {
    display: none;
    content: "";
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    width: 1920px;
    height: 9868px;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/mask_how.png") no-repeat left -120px;
  } */

    .filter {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 5.4rem;

      li {
        margin-right: 2.4rem;
        font-size: 1.8rem;

        &.on {
          font-weight: bold;
          font-size: 2rem;
          color: var(--color-orange);
        }
        &:first-of-type {
          font-family: "Montserrat";
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }

    .list_event {
      display: grid;
      gap: 4rem;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    .mainvideo {
      width: 128rem;
      height: 72.3rem;
      margin: 10.1rem auto 6.4rem;
      background: var(--color-loadingbg);
    }
  }
  &.order {
    position: relative;
    width: 128rem;
    margin: 0 auto;
    padding: 12rem 0 26.5rem;

    &.location {
      width: 100vw;
    }

    img {
      width: 100%;
    }

    /* opacity: 0.5;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/mask_ourstory.png") no-repeat left -120px; */
    /* 
  .temp_mask {
    display: none;
    content: "";
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    width: 1920px;
    height: 9868px;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/mask_how.png") no-repeat left -120px;
  } */

    .tit2 {
      margin-top: 18rem;
    }

    .txt {
      margin-top: 1.6rem;
      font-size: 1.6rem;
      text-align: center;
    }
  }
  .start {
    h2.tit {
      margin-top: 12rem;
    }
    h4 {
      font-size: var(--size-startH4);
      .txt {
        font-family: "Noto Sans KR";
      }
      text-align: center;
      margin-bottom: 4.8rem;

      span {
        display: block;
      }
      .titleNo {
        margin-bottom: 0.5rem;
      }
      .txt {
        color: inherit;
      }
    }

    .title_txt {
      margin: 5.6rem 0 10.5rem;
      font-size: 2.4rem;
      line-height: 1.58;
      text-align: center;
    }

    &.info {
      padding-bottom: 74rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/bg_infox2.webp") no-repeat center bottom/100%;
    }
  }
`;
