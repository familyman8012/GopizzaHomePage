import styled from "@emotion/styled";
import { folder, mq } from "ComponentsFarm/common";

export const HowWeMakeWrap = styled.section`
  position: relative;
  z-index: 2;
  width: 128rem;
  margin: 14.3rem auto 24rem;

  video {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .thumb_dough {
    width: 128rem;
    height: 54rem;
  }

  h4 {
    span {
      display: block;
      color: var(--color-orange);
    }
    .titleNo {
      font-size: 24rem;
      font-weight: bold;
    }
    .tit {
      width: max-content;
      font-size: 12rem;
      line-height: 0.96;
    }
  }

  p {
    font-size: 2.4rem;
    line-height: 1.67;
  }

  .txt1 {
    margin-top: 5.4rem;
  }

  .box_how_make1_2 {
    display: flex;
    position: relative;
    margin-top: -16.6rem;

    h4 {
      .titleNo {
        margin-left: -1.2rem;
      }
      .tit {
        margin: -2rem 0 0 -0.5rem;
      }
    }

    .box_desc_img {
      margin: 35rem 0 0 0.06rem;
      img {
        width: 75.4rem;
        height: 50.2rem;
        object-fit: contain;
      }
    }
  }

  .box_how_make2 {
    position: relative;
    width: 128rem;

    margin: 22.2rem auto 0;

    .box_txt {
      padding-left: 76.4rem;
      h4 {
        line-height: 1;
        .tit {
          margin: 3.1rem 0 0 -0.6rem;
        }
      }
    }

    .box_desc_img {
      position: absolute;
      top: 4.6rem;
      left: 0;
      img {
        width: 67.1rem;
        height: 95rem;
        object-fit: contain;
      }
    }
  }

  ${mq[0]} {
    width: 100%;
    margin: 70px auto 100px;

    h4 {
      .titleNo {
        font-size: 80px;
      }
      .tit {
        width: max-content;
        font-size: 50px;
        line-height: 1;
      }
    }

    p {
      font-size: 14px;
      line-height: 30px;
    }

    .txt1 {
      margin-top: 24px;
    }

    .box_how_make1_2 {
      h4 {
        .titleNo {
          margin: 112px 0 0 0;
        }
        .tit {
          margin: 0;
        }
      }
      .box_desc_img {
        display: none;
      }
    }

    .box_how_make2 {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0;

      .box_desc_img,
      .box_desc_img img {
        width: 100%;
      }

      .box_desc_img {
        order: 1;
        position: static;
        margin-top: 100px;

        img {
          height: auto;
        }
      }

      .box_txt {
        order: 2;
        margin-top: -45.5px;
        padding: 0;

        h4 .tit {
          margin: 0;
        }
      }
    }
  }
  ${folder} {
    p {
      font-size: 12px;
      line-height: 2;
    }
  }
`;

export const Goven1Wrap = styled.div`
  margin-top: -11.6rem;

  video {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  .box_goven {
    position: relative;
    padding-bottom: 2.7rem;
    background: #fd4600;

    .bgimg {
      width: 100%;
    }

    .goven_wrap {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 128rem;
      height: 54rem;
      align-items: baseline;

      .govenimg {
        width: 106rem;
      }

      .titleNo {
        margin-left: 4.9rem;
        font-size: 24rem;
        font-weight: bold;
        color: #fff;
      }
    }
  }

  ${mq[0]} {
    margin-top: 0;

    .box_goven {
      padding-bottom: 0;

      img {
        margin-top: -1px;
      }

      .goven_wrap {
        width: 100%;
        height: auto;
        padding: 0 20px;

        .titleNo {
          display: none;
        }
      }
    }
  }
`;

export const RedBox = styled.div`
  position: relative;
  z-index: -1;
  padding-bottom: 20.2rem;

  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/bg_gobot.webp") #fd4600 no-repeat right bottom / 98.9rem 87.3rem;

  video {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 14.5rem;
    left: 0;
    width: 73.6rem;
    height: 121.3rem;

    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/bg_goven.webp") no-repeat right top;
    background-size: cover;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 80.8rem;
    right: 0;
    width: 84rem;
    height: 110.1rem;

    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/bg_aismart.webp") no-repeat left top;
    background-size: cover;
  }

  .inner {
    width: 128rem;
    margin: 0 auto;
  }

  h4 {
    margin-bottom: 2.4rem;
    span {
      color: #fff;
    }

    .tit {
      font-size: 12rem;
    }
    .titleNo {
      font-size: 24rem;
    }
  }

  p,
  strong {
    font-size: 2.4rem;
    color: #fff;
    line-height: 1.67;
  }

  .thumb img {
    width: 100%;
  }

  ${mq[0]} {
    z-index: 0;
    margin-top: -1px;
    padding-bottom: 100px;
    background-image: none;

    &:before,
    &:after {
      display: none;
    }

    .inner {
      display: block;
      width: 100%;

      h4 {
        margin-bottom: 24px;
        .titleNo {
          font-size: 80px;
        }
        .tit {
          width: max-content;
          font-size: 50px;
          line-height: 1;
        }
      }
      p,
      strong {
        font-size: 14px;
        line-height: 30px;
      }
    }
  }
  ${folder} {
    .inner {
      p,
      strong {
        font-size: 12px;
        line-height: 2;
      }
    }
  }
`;

export const Goven2Wrap = styled.div`
  padding-top: 3.3rem;

  .inner {
    display: flex;
    align-items: center;
  }
  h4 {
    margin-bottom: 1.8rem;

    .titleNo {
      display: none;
    }
  }
  p {
    margin-left: 0.6rem;
  }
  .thumb {
    width: 40rem;
    height: 54rem;
    margin-top: 3rem;
    margin-left: auto;
  }
  .mobile_line {
    display: none;
  }

  ${mq[0]} {
    position: absolute;
    top: -51px;
    padding: 0 20px;
    h4 {
      span {
        display: block;
      }
      .titleNo {
        display: block;
      }
    }
    p {
      margin-left: 0;
    }
    .thumb {
      display: none;
    }
    .mobile_line {
      display: block;
    }
    .pc_line {
      display: none;
    }
  }
  ${folder} {
    .inner {
      p,
      strong {
        font-size: 12px;
        line-height: 2;
      }
    }
  }
`;

export const AiSmartWrap = styled.div`
  padding-top: 31.1rem;

  h4 {
    display: flex;
    margin-bottom: 8.3rem;
    &.mobile {
      display: none;
    }

    span {
      display: block;

      &.tit {
        margin: 3.5rem 0 0 5.8rem;

        .txt_topping {
          position: relative;
          padding-left: 9.5rem;
          &:before {
            position: absolute;
            top: 7.2rem;
            left: 0;
            content: "";
            width: 6.4rem;
            height: 0.8rem;
            background: #fff;
          }
        }
      }
    }
  }

  .desc {
    display: flex;
    img {
      width: 100%;
    }

    .thumb {
      width: 73rem;
      height: 92.5rem;
      margin-right: 15rem;
    }
    .thumb2 {
      width: 40rem;
      height: 40rem;
      margin-top: 26rem;
    }
    p {
      margin-top: 4.3rem;
      line-height: 1.67;
    }
  }

  ${mq[0]} {
    padding: 331px 20px 100px;

    .inner {
      display: flex;
      flex-direction: column;

      h4 {
        &.pc {
          display: none;
        }
        &.mobile {
          display: block;
          position: relative;
          margin-top: -55px;

          .tit {
            margin: 0;
          }
          .txt_topping {
            padding-left: 0;

            &:before {
              display: none;
            }
          }
        }
      }
      .desc {
        display: block;
        .thumb {
          width: 100%;
          height: auto;
          margin-right: 0;
        }

        .thum2_txt {
          .thumb2 {
            display: none;
          }
        }

        p {
          margin-top: 0;
        }
      }
    }
  }
`;

export const GobotStationWrap = styled.section`
  margin-top: 23.9rem;

  h4 {
    margin-right: 5.6rem;
    span {
      display: block;
    }
  }

  .box1 {
    display: flex;
    .thumb {
      width: 91.5rem;
      height: 65.7rem;

      video {
        width: 100%;
      }
    }
  }
  .box2 {
    display: flex;
    align-items: center;
    margin-top: 5.1rem;

    .thumb {
      width: 73rem;
      height: 47.2rem;
    }

    p {
      margin-left: 15rem;
    }
  }

  ${mq[0]} {
    margin-top: 0;

    .box1 {
      flex-direction: column;

      .thumb {
        order: 1;
        width: 100%;
        height: auto;
      }
      h4 {
        order: 2;
        margin-top: -55px;
      }
    }
    .box2 {
      display: block;
      margin-top: 0;

      .thumb {
        display: none;
      }

      p {
        margin-left: 0;
      }
    }
  }
`;

export const EasyBannerWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70rem;

  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/bnr_easy.webp") no-repeat left top / cover;

  p {
    color: #fff;
    text-align: center;
  }

  .mobile_line {
    display: none;
  }

  .txt1 {
    margin-top: 24.32rem;
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.56;
  }

  .txt2 {
    margin-top: 1.5rem;
    font-size: 2.4rem;
  }

  ${mq[0]} {
    width: 100%;
    height: 490px;
    justify-content: center;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/mobile/bnr_easy.webp") no-repeat left top / cover;

    .mobile_line {
      display: block;
    }

    .txt1,
    .txt2 {
      margin-top: 0;
      font-size: 16px;
      line-height: 30px;
    }
    .txt1 {
      font-weight: bold;
    }
  }
  ${folder} {
    .txt1,
    .txt2 {
      font-size: 13px;
      line-height: 2;
    }
  }
`;
