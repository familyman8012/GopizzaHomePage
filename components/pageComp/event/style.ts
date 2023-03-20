import styled from "@emotion/styled";

export const EventWrap = styled.div`
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
`;
