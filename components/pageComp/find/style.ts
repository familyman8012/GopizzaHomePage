import styled from "@emotion/styled";

export const FindWrap = styled.section`
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

          &:last-of-type {
            margin-right: 0;
          }
        }

        .tel {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/ico_tel.svg") no-repeat left center / 3.2rem;
        }

        .time {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/find/ico_time.svg") no-repeat left center / 3.2rem;
        }
      }
    }
  }
`;
