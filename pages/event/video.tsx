import { useEffect, useState } from "react";
import { fetchEventVideoVisual } from "ApiFarm/home";
import { IEventVideo } from "ApiFarm/interface/homeInterface";
import VideoPlay from "ComponentsFarm/common/VideoPlay";
import EventLayout from "ComponentsFarm/layouts/pageLayouts/EventLayout";
import { useMediaQuery } from "react-responsive";

import ReactPlayer from "react-player/lazy";
import { VideoWrap } from "ComponentsFarm/pageComp/start/competitive/style";

function Promotion(eventVideo: IEventVideo) {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  //비디오
  const [winReady, setwinReady] = useState(false);
  const [play, setPlay] = useState(false);
  const handleToggle = (e: any) => {
    e.stopPropagation();
    setPlay((prev) => !prev);
  };
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <EventLayout>
      {isClient &&
        (!isMobile ? (
          <div className="mainvideo">
            <div className="loader loader-7">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${eventVideo?.list[0].youtube_url.split("/")[3]}?controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&playlist=${
                eventVideo?.list[0].youtube_url.split("/")[3]
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        ) : (
          <div className="video_wrap" style={{ marginTop: "-10.6rem" }}>
            <VideoWrap>
              <div className="box_img" onClick={handleToggle}>
                {winReady && (
                  <ReactPlayer
                    light={<img src="/images/event/video/mobile/videox2.webp" alt="Thumbnail" />}
                    url="https://www.youtube.com/watch?v=A-awWOnYf6I"
                    width="100%"
                    height="100%"
                    playing={true}
                    opts={{
                      playerVars: {
                        rel: 0,
                        modestbranding: 1,
                        loop: 0,
                      },
                    }}
                  />
                )}
              </div>
            </VideoWrap>
          </div>
        ))}

      <ul className="list_event">
        {/* eventVideo.list */}
        {eventVideo.list.map((el, i) => (
          <li key={i}>
            <VideoPlay videoUrl={el.youtube_url} imgUrl={el.image_url} txt1={el.subject} />
          </li>
        ))}
      </ul>
    </EventLayout>
  );
}

export const getStaticProps = async () => {
  const eventVideo = await fetchEventVideoVisual();

  return {
    props: eventVideo,
    revalidate: 10,
  };
};

export default Promotion;
