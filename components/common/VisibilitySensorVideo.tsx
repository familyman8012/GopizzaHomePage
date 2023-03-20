import React, { useRef } from "react";
import { Waypoint } from "react-waypoint";

function VisibilitySensorVideo({ src }: { src: string }) {
  const vidRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    vidRef.current?.play();
  };

  const pauseVideo = () => {
    vidRef.current?.pause();
  };

  return (
    <Waypoint onEnter={() => playVideo()} onLeave={() => pauseVideo()}>
      <video muted loop poster={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/${src}.webp`} ref={vidRef}>
        <source src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/${src}.mp4`} type="video/mp4" />
        <p>Your browser cannot play the provided video file.</p>
      </video>
    </Waypoint>
  );
}

export default VisibilitySensorVideo;
