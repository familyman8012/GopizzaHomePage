import { useState, useEffect, useRef } from "react";
import { VideoPlayWrap } from "./style";
import ReactPlayer from "react-player/lazy";
import { useMediaQuery } from "react-responsive";

interface IVideoPlay {
  imgUrl: string;
  txt1: string;
  videoUrl: string;
}

function VideoPlay({ videoUrl, imgUrl, txt1 }: IVideoPlay) {
  const [winReady, setWinReady] = useState(false);
  const [play, setPlay] = useState(false);
  const handleMouseEnter = () => {
    setPlay(true);
  };
  const handleMouseLeave = () => {
    setPlay(false);
  };

  useEffect(() => {
    setWinReady(true);
  }, []);

  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && isMobile ? (
        <VideoPlayWrap className="mobile_view">
          <a target="_blank" rel="noreferrer" href={videoUrl}>
            <div className="video_bg">
              <div className="thumb">
                <img src={imgUrl} alt={txt1} />
              </div>
            </div>
          </a>
        </VideoPlayWrap>
      ) : (
        <VideoPlayWrap className="pc_view" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div style={{ position: "absolute", top: 0, left: 0, zIndex: 2, opacity: play ? 1 : 0 }}>
            {winReady && (
              <ReactPlayer
                width="100%"
                height="100%"
                playing={play}
                muted={true}
                controls={false}
                opts={{
                  playerVars: {
                    rel: 0, //관련 동영상 표시하지 않음. 유튜브 api 변경이후, 강제 관련 동영상이 나타남.
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    loop: 0,
                  },
                }}
                url={`https://www.youtube.com/watch?v=${videoUrl.split("/")[3]}`}
              />
            )}
          </div>

          {play && (
            <a
              target="_blank"
              rel="noreferrer"
              href={videoUrl}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
                width: "100%",
                height: "100%",
              }}
            ></a>
          )}
          <div className="video_bg" style={{ position: "relative", zIndex: 1, opacity: play ? 0 : 1 }}>
            <div className="thumb">
              <img src={imgUrl} alt={txt1} />
            </div>
          </div>
        </VideoPlayWrap>
      )}
    </>
  );
}

export default VideoPlay;
