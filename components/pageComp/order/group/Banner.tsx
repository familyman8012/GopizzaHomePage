import { BannerWrap } from "../style";
import { SwiperSlide } from "swiper/react";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

const Slide = [
  {
    idx: 1,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_slide1.webp",
    alt: "단체 행사도 취향존중, 1인 피자로 GO! GO!",
  },
  {
    idx: 2,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_slide2.webp",
    alt: "파티의 필수 아이템, 1인 피자로 GO! GO!",
  },
];

function Banner() {
  return (
    <BannerWrap>
      <div className="box_swiper">
        <VisibilitySensorSwiper view={1} paging>
          {Slide.map((el) => (
            <SwiperSlide key={el.idx}>
              <img src={el.imgUrl} alt={el.alt} />
            </SwiperSlide>
          ))}
        </VisibilitySensorSwiper>
      </div>

      <div className="bnrImg">
        <img
          src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group2.webp"
          alt="단체 주문 T.1800-8972 이벤트에 색다른 재미를 더해 보세요!"
        />
      </div>
    </BannerWrap>
  );
}

export default Banner;
