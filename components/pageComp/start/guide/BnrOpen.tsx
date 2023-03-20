import { BnrOpenWrap } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

function BnrOpen() {
  return (
    <BnrOpenWrap>
      <VisibilitySensorSwiper view={1} nav paging>
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide key={i}>
            {i === 0 && (
              <p className="txt">
                고피자만의 트렌디한
                <br />
                컬러와 컨셉의 인테리어
              </p>
            )}
            <img src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/info/bnr_info${i + 1}.webp`} alt="" />
          </SwiperSlide>
        ))}
      </VisibilitySensorSwiper>
    </BnrOpenWrap>
  );
}

export default BnrOpen;
