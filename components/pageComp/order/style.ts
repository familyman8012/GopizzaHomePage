import styled from "@emotion/styled";

export const OrderWrap = styled.div`
  position: relative;
  width: 128rem;
  margin: 0 auto;
  padding: 12rem 0 26.5rem;

  &.location {
    width: 100vw;
  }

  img {
    width: 100%;
  }

  .tit2 {
    margin-top: 18rem;
  }

  .txt {
    margin-top: 1.6rem;
    font-size: 1.6rem;
    text-align: center;
  }

  .bnr {
    img {
      display: block;
    }
  }

  .list_company {
    display: flex;
    justify-content: center;

    li {
      width: 23rem;
      height: 8rem;
      &:last-of-type {
        margin-right: 0;
      }
    }
    &.company1 {
      margin-top: 12rem;
      li {
        margin-right: 4.4rem;
      }
    }

    &.company2 {
      margin: 8.3rem 0 9rem;
      li {
        margin-right: 6.6rem;
      }
    }
    &.company3 li {
      margin-right: 4.4rem;
    }
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;

  .box_info,
  .area_map {
    width: 50vw;
  }

  .box_info {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      margin-bottom: 6.2rem;
      font-size: 3.2rem;
      font-weight: bold;
      color: var(--color-black);
      line-height: 1.38;
    }

    .list {
      li {
        margin-bottom: 4rem;
        padding-left: 6.4rem;
        font-size: 2.4rem;
        line-height: 1.58;

        &:nth-of-type(1) {
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/location/ico_location1.webp") no-repeat left 0.3rem / 3.2rem;
        }
        &:nth-of-type(2) {
          margin-bottom: 0;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/location/ico_location2.webp") no-repeat left 0.3rem / 3.2rem;
        }
      }
    }
  }
`;

export const LocationWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 12rem - 50.65rem);
  padding: 12rem 0 0;

  .list_tab {
    position: relative;
    left: 0.2rem;
    margin-bottom: 3rem;
  }
  .box_info,
  .area_map {
    width: 50vw;
  }
  .wrap_location {
    display: flex;
    flex: 1;

    align-items: center;

    .box_info {
      display: flex;
      flex-direction: column;
      align-items: center;

      h4 {
        margin-bottom: 6.2rem;
        font-size: 3.2rem;
        font-weight: bold;
        color: var(--color-black);
        line-height: 1.38;
      }

      .list {
        li {
          margin-bottom: 4rem;
          padding-left: 6.4rem;
          font-size: 2.4rem;
          line-height: 1.58;

          &:nth-of-type(1) {
            background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/location/ico_location1.webp") no-repeat left 0.3rem / 3.2rem;
          }
          &:nth-of-type(2) {
            margin-bottom: 0;
            background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/location/ico_location2.webp") no-repeat left 0.3rem / 3.2rem;
          }
        }
      }
    }
    .area_map {
      display: flex;

      #react-kakao-maps-sdk-map-container {
        width: 94rem;
        height: 66rem;
        margin-left: auto;
      }
    }
  }
`;

export const BannerWrap = styled.div`
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 14.7rem 0 0;

  .box_swiper {
    width: 62rem;
    height: 34rem;
  }
`;
