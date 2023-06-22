import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const FindWrap = styled.main`
  width: 128rem;
  margin: 9rem auto 17.4rem;

  h2 {
    margin-bottom: 13.2rem;
  }

  .wrp_filter {
    display: flex;

    select {
      width: 29rem;
      padding: 0 2.4rem;
      border-radius: 5.6rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/sel_find.webp") no-repeat #fff 94% 51% / 1.8rem 1.1rem;

      &:last-of-type {
        margin: 0 2.4rem;
      }
    }
  }
  .box_search_keyword {
    display: flex;
    border: 1px solid var(--color-inputBorder);
    border-right: none;
    border-radius: 5.6rem;
    input {
      width: 29rem;
      border: none;
      border-radius: 5.6rem;
    }
    button {
      width: 10.5rem;
      height: 5.6rem;
      font-size: 1.8rem;
      color: #fff;
      border-radius: 0 2.8rem 2.8rem 0;
      background: var(--color-orange);
    }
  }

  .list_store {
    border-top: 0.3rem solid #ec5528;
    margin-top: 6.25rem;

    .box_basicInfo {
      button {
        display: block;
        width: 15rem;
        height: 3.8rem;
        margin: 1.5rem auto 0;
        font-size: 1.5rem;
        color: #fff;
        border-radius: 2rem;
        background: var(--color-bluedark);
        cursor: pointer;
      }
    }

    &.off {
      li {
        background: none;
        display: flex;
        align-items: center;
        padding: 5rem 4rem;
        justify-content: center;
        flex-direction: column;

        p {
          font-size: 2rem;
        }
      }
    }

    li {
      padding: 3.05rem 0 3.05rem;
      border-bottom: 1px solid #ddd;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/go_find.svg") no-repeat 117.6rem 6.35rem / 8rem;

      &:not(.on) {
        height: 20.7rem;
      }

      &.on {
        border-bottom: none;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/go_find_on.svg") no-repeat 117.6rem 6.35rem / 8rem;
        dl {
          dt {
            color: var(--color-orange);
            .distance {
              color: var(--color-bluedark);
            }
          }
        }

        #react-kakao-maps-sdk-map-container {
          width: 100%;
          height: 40rem;
          margin-top: 3.2rem;
        }
      }

      dl {
        padding: 0 4rem;
      }

      dt {
        font-size: 3.2rem;
        font-weight: bold;
        line-height: 1.38;

        .distance {
          margin-left: 0.8rem;
          font-family: "Montserrat";
          font-size: 2.4rem;
          color: var(--color-gray);
        }
      }

      .address {
        margin: 2.4rem 0 1.6rem;
        font-size: 2rem;
      }

      .info {
        display: flex;
        align-items: center;

        span {
          display: block;
          height: 3.2rem;
          line-height: 3.2rem;
          margin-right: 4.9rem;
          padding-left: 4.8rem;
          font-size: 2rem;
          font-family: "Montserrat";

          &.pc {
            padding-left: 0;
          }

          &:last-of-type {
            margin-right: 0;
          }
        }

        .tel {
          .mobile {
            display: none;
          }
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/ico_tel.svg") no-repeat left center / 3.2rem;
        }

        .time {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/ico_time.svg") no-repeat left center / 3.2rem;
        }
      }
    }
  }
  ${mq[0]} {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 90px;

    h2 {
      display: block;
      margin: 36px 0 30 px;
      font-size: 24px;
    }

    .wrp_filter {
      display: block;
      padding: 0 20px;

      select {
        display: inline-block;
        width: calc(50% - 5px);
        height: 40px;
        padding: 0 13px;
        font-size: 14px;
        background-size: 12px auto;
        background-position: 94% 51.5%;

        &:last-of-type {
          margin: 0 0 0 10px;
        }
      }

      .box_search_keyword {
        margin-top: 15px;
        height: 40px;

        input,
        button {
          height: 38px;
        }

        input {
          padding: 0 16px;
          font-size: 14px;
        }
      }
    }

    .list_store {
      margin: 47.5px 20px 0;

      &.off li {
        padding: 50px 0;
        p {
          font-size: 14px;
        }
      }

      li {
        padding: 19.5px 0;
        height: auto !important;
        background-position: 288px 18.5px !important;
        background-size: 32px !important;

        &.on {
          #react-kakao-maps-sdk-map-container {
            height: 194px;
          }
        }

        dl {
          padding: 0;
        }
        dt {
          font-size: 20px;
          line-height: 28px;

          .distance {
            margin-left: 5px;
            font-size: 14px;
          }
        }
        .address {
          margin: 4px 0 8px;
          font-size: 12px;
        }
        .info {
          span {
            height: 20px;
            line-height: 20px;
            margin-right: 37px;
            padding-left: 28px;
            font-size: 12px;
            background-size: 20px !important;
          }
          .pc {
            display: none;
          }
          .mobile {
            display: block !important;
          }
        }
      }
    }
  }
`;
