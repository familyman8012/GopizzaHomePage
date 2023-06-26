import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const IndexWrap = styled.main`
  display: flex;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background: #000;

  * {
    color: var(--color-white);
  }
  .inner_mobile {
    display: none;
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
  }

  ${mq[0]} {
    .box_goto {
      position: relative;
      width: 100%;
      padding: 0;

      &:nth-of-type(1) {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/mobile/bg_index2.webp") no-repeat center bottom / cover;

        .inner {
          display: none;
        }
        .inner_mobile {
          display: block;
          width: 100vw;

          h1 {
            width: 120.7px;
            height: 67.3px;
            margin: 103px auto 0;
            background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/mobile/logo.svg") no-repeat center / 100%;
          }

          .btn_box {
            position: absolute;
            width: 100%;
            bottom: 38px;

            .inner_btn {
              position: relative;
              z-index: 10;
            }

            &:after {
              content: "";
              position: absolute;
              left: 20px;
              bottom: 0;
              width: calc(var(--vw, 1vw) * 90);
              height: calc(var(--vh, 1vh) * 57);
              background: url("/images/index/mobile/personx2.webp") no-repeat center / auto 100%;
            }
            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: calc(100vw - 40px);
              height: 60px;
              margin: 0 auto;
              border-radius: 10px;

              &:nth-of-type(1) {
                color: #fff;
                background-color: #ff4600;
              }

              &:nth-of-type(2) {
                margin-top: 10px;
                .txt {
                  color: #ff4600;
                }
                background-color: #fff;
              }

              .txt {
                padding: 0;
                font-size: 19px;
                font-weight: 500;
              }
            }
          }
        }
      }
      &:nth-of-type(2) {
        display: none;
      }
    }
  }
  @media (max-height: 670px) {
    .btn_box a {
      height: 50px !important;
    }
  }
  @media (max-height: 599px) {
    .btn_box a {
      height: 45px !important;
    }
  }
`;
