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
    align-items: center;
    justify-content: center;

    &:before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.47);
    }

    &:nth-of-type(1) {
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index1x2.webp") no-repeat center / cover;
      a .txt {
        padding-right: 5.7rem;
      }
    }
    &:nth-of-type(2) {
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp") no-repeat center / cover;
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
`;
