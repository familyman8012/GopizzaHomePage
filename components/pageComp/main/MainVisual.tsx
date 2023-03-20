import Image from "next/image";
import { MainVisualWrap } from "./style";
import { SwiperSlide } from "swiper/react";
import { IMainVisual } from "ApiFarm/interface/homeInterface";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";
import Link from "next/link";

function MainVisual({ data }: { data: IMainVisual }) {
  return (
    <>
      <MainVisualWrap>
        <VisibilitySensorSwiper view={1} paging>
          {data &&
            data.list.map((el) => (
              <SwiperSlide key={el.brand_main_banner_idx}>
                <Link href={el.landing_url}>
                  <img src={el.image_url} alt={el.subject} />
                </Link>
              </SwiperSlide>
            ))}
        </VisibilitySensorSwiper>
      </MainVisualWrap>
    </>
  );
}

export default MainVisual;
