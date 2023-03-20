import styled from "@emotion/styled";

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
`;

export const RedBox = styled.div`
  position: relative;
  z-index: -1;
  padding-bottom: 20.2rem;
  background: #fd4600;

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
`;

export const Goven2Wrap = styled.div`
  padding-top: 3.3rem;
  .inner {
    display: flex;
    align-items: center;
  }
  h4 {
    margin-bottom: 1.8rem;
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
`;

export const AiSmartWrap = styled.div`
  padding-top: 31.1rem;

  h4 {
    display: flex;
    margin-bottom: 8.3rem;
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
`;
