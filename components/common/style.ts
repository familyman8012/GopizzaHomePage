import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const VideoPlayWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 2rem;

  &.mobile_view {
    display: none;
  }

  > div {
    width: 100%;
    height: 100%;
  }

  /* &:after {
    content: "";
    position: absolute;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  } */

  .video_bg {
    position: relative;
    overflow: hidden;
  }
  .video_img-01,
  .video_img-02 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11;
  }

  .play-video {
    position: absolute;
    z-index: 100;
    left: 50%;
    top: 50%;
    width: 6.5rem;
    height: 6.5rem;
    margin: -3.3rem 0 0 -3.3rem;
    border-radius: 50%;
    background: rgba(8, 3, 31, 0.76);
    text-indent: -9999px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

    &:after {
      content: "";
      position: absolute;
      left: 2.7rem;
      top: 2.3rem;
      width: 2rem;
      height: 2rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/icons/blog_icon_play.png");
    }
  }
  ${mq[0]} {
    border-radius: 10px;

    &.mobile_view {
      display: block;
    }
    &.pc_view {
      display: none;
    }
  }
`;
