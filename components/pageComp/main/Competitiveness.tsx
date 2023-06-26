import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";
import { CompetitivenessWrap } from "./style";

const Slide = [
  {
    idx: 1,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_compet1x2.webp",
    mobile_imgUrl: "/images/main/mobile/img_compet1x2.webp",
    linkUrl: "/brand/howwemake",
    alt: "고피자만의 경쟁력 - 도우 (CRISPY BASAK DOUGH) : 고피자 도우 이노베이션 센터에서 직접 생산부터 배송까지 진행합니다. 한결같은 맛과 식감을 느끼실 수 있습니다.",
  },
  {
    idx: 2,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_compet2x2.webp",
    mobile_imgUrl: "/images/main/mobile/img_compet2x2.webp",
    linkUrl: "/brand/howwemake",
    alt: "고피자만의 경쟁력 - 고븐(GOVEN) : 고피자의 열기, AI 고븐은 특별합니다. 고피자에서만 만나볼 수 있는 고븐은 맛있는 피자가 완성되는 최적의 온도를 유지하며 가장 완벽한 1인피자의 경험을 제공합니다.",
  },
  {
    idx: 3,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_compet3x2.webp",
    mobile_imgUrl: "/images/main/mobile/img_compet3x2.webp",
    linkUrl: "/brand/howwemake",
    alt: "고피자만의 경쟁력 - 균일한 퀄리티(Quality Promise) : 가성비 있고 빠르게 제공되어도 고피자의 품질은 항상 최상입니다. 가장 빠른 것이 가장 신선한 것입니다.",
  },
];

function Competitiveness() {
  return (
    <CompetitivenessWrap>
      <VisibilitySensorSwiper view={1} paging>
        {Slide.map((el) => (
          <SwiperSlide key={el.idx}>
            <Link href={el.linkUrl}>
              {/* <Image src={el.imgUrl} width={1279} height={740} alt={el.alt} /> */}

              <picture>
                <source media="(max-width: 767px)" srcSet={el.mobile_imgUrl} />
                <source media="(min-width: 768px)" srcSet={el.imgUrl} />
                <img src={el.imgUrl} alt={el.alt} />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </VisibilitySensorSwiper>
    </CompetitivenessWrap>
  );
}

export default Competitiveness;
