import { css } from "@emotion/react";
import styled from "@emotion/styled";

const techImg = Array.from({ length: 4 }).map(
  (_, i) =>
    css`
      &:nth-of-type(${i + 1}) {
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/img_tech${i + 1}x2.webp") no-repeat center top / 100%;
      }
    `
);

export const GopizzaTechWrap = styled.section`
  position: relative;
  margin: 7.4rem auto 0;
  width: 128rem;

  ul {
    display: grid;
    gap: 2.7rem;
    grid-template-columns: repeat(4, 1fr);
    li {
      display: flex;
      width: 30rem;
      height: 45rem;
      padding: 0 0 3.4rem 2.4rem;
      cursor: pointer;

      ${techImg}

      &:hover dl {
        overflow: visible;
        height: 16.2rem;
        transition: height 0.3s;
        dt:after {
          display: none;
        }
      }
    }

    dl {
      overflow: hidden;
      height: 3.2rem;
      margin-top: auto;
      dt,
      dd {
        color: #fff;
      }
      dt {
        display: flex;
        margin-bottom: 0.65rem;
        font-family: "solano";
        font-size: 3.2rem;
        font-weight: bold;

        &:after {
          content: "";
          display: block;
          width: 1.1rem;
          height: 1rem;
          margin: 1.8rem 0 0 0.8rem;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/arrow_tech.svg") no-repeat left top;
        }
      }
      dd {
        height: 15.7rem;
        font-size: 1.8rem;
        line-height: 1.6;
      }
    }
  }
`;

export const NeedWrap = styled.section`
  position: relative;
  width: 128rem;
  margin: 16rem auto 0;

  h4 {
    margin-bottom: 8rem;
  }

  ul {
    li {
      &:nth-of-type(1) {
        height: 38.7rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/bg_need1x2.webp?v=2") no-repeat left top / 100%;
        dl {
          padding: 7rem 0 0 39.5rem;
        }
        dt {
          margin-bottom: 1.9rem;
        }
      }
      &:nth-of-type(2) {
        dl {
          padding: 6.2rem 0 0 5.6rem;
        }
        dt {
          margin-bottom: 0.9rem;
          &:not(&:nth-of-type(1)) {
            margin-top: 3.5rem;
          }
        }
      }

      dl {
        dt {
          font-size: 2.4rem;
          font-weight: bold;
          line-height: 1.58;
        }
        dd {
          font-size: 2rem;

          line-height: 1.6;
          strong {
            font-weight: bold;
          }
        }
      }
      &:nth-of-type(2) {
        height: 67.1rem;
        margin-top: 4.1rem;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/bg_need2x2.webp?v=2") no-repeat left top / auto 67.1rem;
      }
    }
  }
`;

export const CaseWrap = styled.section`
  h4 {
    margin-bottom: 9.8rem;
  }
  .list {
    display: flex;

    li {
      flex: none;
      width: 84rem;
      height: 47rem;
      margin-right: 4rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  width: 132.08rem;
  height: 38.7rem;
  margin: 20.4rem auto 0;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/ico_bnr.svg") no-repeat left top / auto 100%;

  background-color: var(--color-bluedark);

  p {
    width: 99.6rem;
    margin-left: auto;
    text-align: center;
    color: #fff;
    font-size: 5.8rem;
    font-weight: bold;
    line-height: 1.41;

    strong {
      color: var(--color-orange);
    }
  }
`;
