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
            data.list.map((el) => {
              return (
                <SwiperSlide key={el.brand_main_banner_idx}>
                  {el.landing_url === null ? (
                    <div className="img_box">
                      <div className="mobile_img">
                        <img src={el.mobile_image_url} alt={el.subject} />
                      </div>
                      <div className="pc_img">
                        <Image src={el.image_url} fill alt={el.subject} quality={100} />
                      </div>
                    </div>
                  ) : (el.landing_url.indexOf("http") !== -1 || el.landing_url.indexOf("www")) !== -1 && el.landing_url.indexOf("gopizza.kr") === -1 ? (
                    <a target="_blank" href={el.landing_url} rel="noreferrer">
                      <div className="img_box">
                        <div className="mobile_img">
                          <img src={el.mobile_image_url} alt={el.subject} />
                        </div>
                        <div className="pc_img">
                          <Image src={el.image_url} fill alt={el.subject} quality={100} />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link href={el.landing_url}>
                      <div className="img_box">
                        <div className="mobile_img">
                          <img src={el.mobile_image_url} alt={el.subject} />
                        </div>
                        <div className="pc_img">
                          <Image src={el.image_url} fill alt={el.subject} quality={100} />
                        </div>
                      </div>
                    </Link>
                  )}
                </SwiperSlide>
              );
            })}
        </VisibilitySensorSwiper>
      </MainVisualWrap>
    </>
  );
}

export default MainVisual;
