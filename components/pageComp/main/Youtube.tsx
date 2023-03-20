import { IYoutube } from "ApiFarm/interface/homeInterface";
import { SwiperSlide } from "swiper/react";
import { YoutubeWrap } from "./style";
import Link from "next/link";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

function Youtube({ data }: { data: IYoutube }) {
  return (
    <YoutubeWrap>
      <h3>YOUTUBE</h3>
      <VisibilitySensorSwiper view={3}>
        {data &&
          data.list.map((el) => (
            <SwiperSlide key={el.brand_main_youtube_idx}>
              <a target="_blank" href={el.landing_url !== null ? el.landing_url : "#"} rel="noreferrer">
                <img src={el.image_url} alt={el.subject} />
              </a>
            </SwiperSlide>
          ))}
      </VisibilitySensorSwiper>
    </YoutubeWrap>
  );
}

export default Youtube;
