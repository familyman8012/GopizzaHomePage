import styled from "@emotion/styled";
import { folder, mq } from "ComponentsFarm/common";

export const EventWrap = styled.main`
  position: relative;
  width: 128rem;
  margin: 0 auto;
  padding: 12rem 0 26.5rem;

  img {
    width: 100%;
  }
  .filter {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5.4rem;

    li {
      margin-right: 2.4rem;
      font-size: 1.8rem;

      span {
        cursor: pointer;
      }

      &.on span {
        font-weight: bold;
        color: var(--color-orange);
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

    &.promotion li {
      overflow: hidden;
      height: 40.3rem;
      border-radius: 2rem;
    }

    li {
      overflow: hidden;
      position: relative;
      width: 40rem;

      .thumb img {
        border-radius: 2rem;
      }
    }
  }

  .mainvideo {
    position: relative;
    width: 128rem;
    height: 72.3rem;
    margin: 10.1rem auto 6.4rem;
    background: var(--color-black);

    iframe {
      position: relative;
      z-index: 10;
    }
  }
  .btn_go_list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36rem;
    height: 8rem;
    margin: 5.6rem auto 0;
    color: #fff;
    font-size: 2.4rem;
    border-radius: 3.6rem;
    background: var(--color-bluedark);
  }

  ${mq[0]} {
    width: 100%;
    padding: 0 0 90px 0;

    .list_tab {
      box-shadow: 0 -1px 24px 0 rgba(0, 0, 0, 0.16);
    }

    .filter {
      justify-content: center;
      margin: 36px 0;

      li {
        margin-right: 20px;
        font-size: 14px;
      }
    }

    .list_event {
      padding: 0 20px;
      gap: 20px;
      grid-template-columns: repeat(2, 1fr);

      &.promotion li {
        width: auto;
        height: 150px;
        border-radius: 10px;
      }

      li {
        width: 100%;
        .thumb img {
          border-radius: 10px;
        }
      }
    }

    .mainvideo {
      width: calc(100vw - 40px);
      height: auto;
      margin: 30px auto;
    }
    .video_wrap {
      overflow: hidden;
      width: calc(100vw - 40px);
      margin: 36px auto 48px !important;
      border-radius: 10px;

      .box_img {
        width: 100%;
        height: 180px;
      }
    }
    .btn_go_list {
      width: 280px;
      height: 60px;
      margin: 25px auto 0;
      font-size: 18px;
      border-radius: 3.6rem;
    }
  }
  ${folder} {
    .btn_go_list {
      width: 200px;
    }
  }
`;

export const Board = styled.div`
  width: 128rem;
  margin: 0 auto;
  .box_tit {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 3.9rem;
    border-bottom: 0.2rem solid var(--color-gray);

    .txt {
      width: 100%;
      * {
        font-family: "Montserrat";
      }
      h4 {
        color: var(--color-black);
        font-size: 3.6rem;
        font-weight: bold;
      }
      .date {
        padding: 1.6rem 0;
        font-size: 2.4rem;
      }
    }

    button {
      display: block;
      width: 4.8rem;
      height: 4.8rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/promotion/icon-share.svg") no-repeat left top / 100%;
    }
  }

  .contents {
    p,
    span,
    a,
    div {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  ${mq[0]} {
    width: 100%;
    padding: 36px 20px;

    .box_tit {
      margin-bottom: 19.5px;
      border-bottom: 1px solid var(--color-gray);

      .txt {
        h4 {
          font-size: 24px;
        }
        .date {
          margin: 8px 0 19.5px 0;
          padding: 0;
          font-size: 16px;
        }
      }

      button {
        display: block;
        width: 24px;
        height: 24px;
        margin-bottom: 19.5px;
        align-self: end;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/promotion/icon-share.svg") no-repeat left top / 100%;
      }
    }

    .contents {
      p,
      span,
      a,
      div {
        font-size: 14px;
        text-align: center;
      }
    }
  }
`;
