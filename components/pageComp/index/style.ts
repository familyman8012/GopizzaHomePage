import styled from "@emotion/styled";

export const IndexWrap = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #000;

  * {
    color: var(--color-white);
  }
  .box_goto {
    display: flex;
    position: relative;
    width: 50vw;
    height: 100%;
    padding: 13rem 0 0 12rem;

    &:nth-of-type(1) {
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_main1x2.webp?v=2") no-repeat center bottom / cover;
      a .txt {
        padding-right: 5.7rem;
      }
    }
    &:nth-of-type(2) {
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_main2x2.webp?v=2") no-repeat center bottom / cover;
      a .txt {
        padding-right: 4.5rem;
      }
    }

    .inner {
      position: relative;
      z-index: 2;
    }

    h1 {
      margin-bottom: 0.8rem;
      font-family: "solano";
      font-size: 4.8rem;
      font-weight: bold;
    }
    p {
      font-size: 6.4rem;
      font-weight: bold;
      line-height: 1.47;
    }

    a {
      display: block;
      width: 20.9rem;
      height: 6.4rem;
      margin-top: 4rem;
      padding-left: 3rem;
      color: var(--color-white);
      font-size: 2.5rem;
      line-height: 6.4rem;
      border-radius: 3.2rem;
      background-color: var(--color-orange);

      .txt {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/arrow_right.svg") no-repeat right center / 1rem 1.6rem;
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    .box_goto {
      width: 100vw !important;
      padding: 3rem 0 0 12rem;
      h1 {
        margin-bottom: 8px;
        font-family: "solano";
        font-size: 20px;
        font-weight: bold;
      }
      p {
        font-size: 27px;
        font-weight: bold;
        line-height: 1.3;
      }

      a {
        display: flex !important;
        align-items: center;
        justify-content: center;
        width: 105px;
        height: 32px;
        margin-top: 12px;
        padding-left: 3px;
        display: block;
        font-size: 12px;
        border-radius: 16px;
        .txt {
          position: relative;
          top: -1px;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/arrow_right.svg") no-repeat right 5px / 5px 8px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    &.off .pop_mobile_not {
      display: none;
    }
  }

  .pop_mobile_not {
    display: none;

    @media (max-width: 400px) {
      display: block;
    }
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);

    .inner_content {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 84%;
      height: 363px;
      padding: 38.5px 35px 0;
      text-align: center;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      background: #fff;

      &:before {
        content: "";
        display: block;
        width: 82.5px;
        height: 75.5px;
        margin: 0 auto 28px;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_mobile_not.svg") no-repeat left top / 100%;
      }

      .box_txt {
        * {
          color: #000;
        }
        h2 {
          margin-bottom: 6px;
          font-size: 18px;
          line-height: 1.06;
        }
        p {
          margin-bottom: 53px;
          font-size: 12px;
          line-height: 1.5;
        }
      }

      button {
        display: block;
        color: #000;

        &.btn_back {
          width: 230px;
          height: 42px;
          color: #fff;
          text-align: center;
          line-height: 42px;
          color: #fff;
          border-radius: 4px;
          background: var(--color-orange);
        }

        &.show_page {
          width: 100%;
          margin-top: 16px;
          text-align: center;
          background: none;
        }
      }
    }
  }
`;
