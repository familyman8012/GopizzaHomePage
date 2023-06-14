import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const OrderWrap = styled.main`
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

    &.mobile_line {
      display: none;
    }
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

  ${mq[0]} {
    width: 100%;
    padding: 0 0 100px;

    .list_tab {
      box-shadow: 0 -1px 24px 0 rgba(0, 0, 0, 0.16);
    }
    .tit2 {
      display: block;
      margin-top: 24px;
      font-size: 24px;
    }

    .txt {
      margin-top: 16px;
      font-size: 14px;

      &.mobile_line {
        display: block;
      }
    }

    .list_company {
      padding: 0 20px;
      li {
        width: auto;
        height: auto;
        &:last-of-type {
          margin-right: 0;
        }
      }
      &.company1 {
        margin-top: 0;
        li {
          margin-right: 10px;
        }
      }

      &.company2 {
        margin: 20px 0;
        li {
          margin-right: 10px;
        }
      }
      &.company3 li {
        margin-right: 10px;
      }
    }
  }
`;

export const Bnr = styled.div`
  overflow: hidden;
  width: 128rem;

  .div_img1,
  .div_img2,
  .div_img3 {
    width: 128.2rem;
  }

  .div_img1 {
    height: 198.5rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr1.webp") no-repeat left top / auto 100%;
  }
  .div_img2 {
    height: 48.7rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/bg_group_bnr2.webp") no-repeat left top / auto 100%;
  }
  .div_img3 {
    height: 178.3rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr3.webp") no-repeat left top / auto 100%;
  }

  ${mq[0]} {
    width: 360px;
    margin: 24px auto 0;
    padding: 0 20px;

    .div_img1,
    .div_img2,
    .div_img3 {
      width: 100%;
    }

    .div_img1 {
      height: 527px;
    }
    .div_img2 {
      height: 129px;
    }
    .div_img3 {
      height: 473px;
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

export const StoreWrap = styled.div`
  position: relative;
  width: 68rem;
  border-radius: 0.3rem;
  background: #fff;
  .btn_close {
    position: absolute;
    right: 1.4rem;
    top: 1.4rem;
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    background: url("/images/common/ico_pop_close.svg") no-repeat left top / 100%;
  }
  .content {
    padding: 2.34rem 4.2rem 0;
    height: 62.1rem;

    h2 {
      font-size: 2.1rem;
      text-align: center;
    }
    .box_search {
      position: relative;
      height: 4rem;
      margin-top: 2.8rem;
      border: 1px solid #e0e0e0;
      border-radius: 0.25rem;
      background: #fff;

      input {
        width: 80%;
        height: 100%;
        border: none;
      }
      &::after {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        background: url("/images/common/ico_search.svg") no-repeat left top / 100%;
        filter: invert(55%) sepia(0%) saturate(508%) hue-rotate(147deg) brightness(93%) contrast(87%);
      }
    }
    .noResult {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0;
      font-size: 1.6rem;
      height: 5rem;
    }
    .box_store_info {
      overflow-y: auto;
      max-height: 50rem;
    }
    h3 {
      margin-top: 3rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-size: 1.8rem;
      border-bottom: 1px solid #ddd;
    }
    .list_store {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      display: flex;
      align-items: center;
      width: 50%;
      height: 40px;
      padding-left: 2rem;

      input {
        height: auto;
        padding: 0;
      }

      label {
        padding-left: 1rem;
        font-size: 1.6rem;
        font-family: "Montserrat";
      }
    }
  }
  .box_btn {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;

    button {
      display: inline-flex;
      position: relative;
      box-shadow: none;
      font-weight: 500;
      margin: 0;
      min-width: 8rem;
      height: 3.4rem;
      cursor: pointer;
      color: #fff;
      background: #2f80ed;
      appearance: none;
      border: 0;
      justify-content: center;
      align-items: center;
    }
  }

  ${mq[0]} {
    width: 90vw;

    .content {
      padding: 10px;
      height: 80vh;

      .box_search {
        margin-top: 40px;
      }

      .box_store_info {
        max-height: calc(100% - 68px);

        h3 {
          margin-top: 20px;
          font-size: 16px;
        }

        li {
          padding-left: 10px;
          label {
            padding-left: 5px;
            font-size: 13px;
          }
        }
      }
    }
    .box_btn {
      position: relative;
      z-index: 2;
      background: #fff;
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

export const LocationWrap = styled.main`
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
    }c
  }

  ${mq[0]} {
    padding: 0 0 100px;

    .list_tab {
      position: static;
      margin-bottom: 24px;
      box-shadow: 0 -1px 24px 0 rgba(0, 0, 0, 0.16);
    }

    .wrap_location {
      display: block;
      padding: 0 20px;

      .box_info,
      .area_map {
        width: calc(100vw - 40px);
      }

      .box_info {
        display: block;
        h4 {
          margin-bottom: 0;
          font-size: 24px;
        }
        .list {
          margin: 35px 0;
          li {
            padding-left: 50px;
            font-size: 14px;
            line-height: 30px;
          }
        }
      }

      .area_map {
        #react-kakao-maps-sdk-map-container {
          width: 100%;
          height: 264px;
          margin-left: auto;
        }
      }
    }
  }
`;
