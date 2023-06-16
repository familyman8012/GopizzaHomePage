import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";
import { mobileHeader } from "MobxFarm/store";
import { VideoWrap } from "./competitive/style";

export const StartWrap = styled.div`
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
    padding-bottom: 22.4rem;

    .tit_desc {
      opacity: 0.5;
      margin: 6.2rem 0 3.2rem;
      font-size: 1.8rem;
      text-align: center;
    }
  }

  ${mq[0]} {
    padding-bottom: 50px;
    .list_tab {
      box-shadow: 0 -1px 24px 0 rgba(0, 0, 0, 0.16);
    }
    h4 {
      margin-bottom: 24px !important;
      font-size: 24px;
    }
  }
`;

export const Content = styled.main`
  width: 128rem;
  margin: 0 auto;

  display: ${mobileHeader.open ? `none` : `block`};

  .video_wrap {
    margin-top: -10.6rem;
    ${VideoWrap} {
      margin-top: 0;
    }
  }
`;

export const SubVisualWrap = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60rem;

  .swiper-slide img {
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination {
    bottom: 3rem;
  }

  .box_txt {
    /* display: flex; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    flex-direction: column;
    text-align: center;

    h2 {
      font-size: 7rem;
      font-weight: bold;
      line-height: 1.29;
      color: var(--color-white);
    }
    .txt2 {
      margin-bottom: 0.5rem;
      font-size: 1.8rem;
      color: #ffe87d;
    }
    .txt3 {
      opacity: 0.6;
      margin-bottom: 3.6rem;
      font-size: 1.4rem;
      letter-spacing: -0.22px;
      color: var(--color-white);
    }

    .bnr_tel {
      display: flex;
      align-items: center;
      width: 42rem;
      height: 8.2rem;
      margin: 0 auto;
      padding: 1.2rem 3.6rem 1.2rem;
      border-radius: 0.5rem;
      background-color: var(--color-white);

      .txt,
      .tel {
        color: var(--color-orange);
      }

      .txt {
        display: block;
        margin-right: 1.6rem;
        font-size: 1.8rem;
        font-weight: bold;
        line-height: 1.33;
      }

      .tel {
        font-family: "Montserrat";
        font-size: 4.8rem;
        font-weight: bold;
        line-height: 1.88;
      }
    }
  }
`;

export const BtnInquiryWrap = styled.span`
  display: block;
  width: 36rem;
  height: 8rem;
  margin: 12rem auto 16rem;
  color: var(--color-white);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 8rem;
  text-align: center;
  border-radius: 4rem;
  background-color: var(--color-bluedark);

  &:hover {
    color: var(--color-white);
  }

  ${mq[0]} {
    width: 280px;
    height: 60px;
    margin: 46px auto 51px;
    font-size: 18px;

    line-height: 60px;

    border-radius: 60px;
  }
`;

export const CeoMessageWrap = styled.section`
  .wrap_message {
    width: 100%;
    height: 70rem;
    padding: 8rem 0 0 11rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/bg_messagex2.webp") no-repeat left top / 100%;

    strong {
      display: block;
      margin-bottom: 2.4rem;
      font-size: 3.2rem;
      line-height: 1.38;
    }

    p {
      margin-bottom: 4.2rem;
      font-size: 1.8rem;
    }
    .sign {
      display: flex;
      align-items: center;

      .txt {
        font-size: 1.8rem;
        font-weight: bold;
      }

      .img {
        width: 11.6rem;
        height: 7.8rem;
        margin-top: -1.2rem;
      }
    }
  }
`;

export const InterviewWrap = styled.section`
  margin: 16rem 0;

  .list_interview {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
  }
`;

export const MediaWrap = styled.section`
  h4 {
    font-size: 4.8rem;
    color: #000;
    font-family: "Noto Sans KR", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .list {
    li {
      padding: 2.8rem 0;
      border-bottom: 1px solid #ddd;

      dt {
        font-size: 1.8rem;
        line-height: 2.44;
      }
      dd {
        display: flex;
        align-items: color-interpolation-filters;
        span {
          display: block;
          font-size: 1.6rem;
          line-height: 2.75;
          color: #7b7b7b;
        }
      }
    }
  }
`;

export const RegionWrap = styled.div`
  label {
    width: 18rem;
    margin-right: 0.3rem;
    font-size: 1.6rem;
    line-height: 1.25;
    border: 1px solid #ddd;

    &:last-of-type {
      width: 9rem;
      border: 1px solid #ddd;
    }
  }
`;
