import { SupportWrap } from "./style";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import VisibilitySensorSwiper from "ComponentsFarm/common/VisibilitySensorSwiper";

const Slide = [
  {
    idx: 1,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing1.webp",
    linkUrl: "https://www.youtube.com/watch?v=1xEhdvKHJtY",
    alt: "공포의 피자 실험",
  },
  {
    idx: 2,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing2.webp",
    linkUrl: "https://www.youtube.com/watch?v=bY1VdGVUKJA",
    alt: "워크맨 - 환장의 콤비네이션 패스트푸드 피자 알바 리뷰",
  },
  {
    idx: 3,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing3.webp",
    linkUrl: "https://www.youtube.com/watch?v=nZOr__kPHjQ",
    alt: "피자는 1인 7판이죠",
  },

  {
    idx: 4,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing4.webp",
    linkUrl: "https://www.youtube.com/watch?v=5zJbPoyc8ng",
    alt: "침투부 - 말년킹피자",
  },
  {
    idx: 5,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing5.webp",
    linkUrl: "https://www.youtube.com/watch?v=dp19nVUxEW4",
    alt: "피자에 짜장을 싸먹어?",
  },
  {
    idx: 6,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing6.webp",
    linkUrl: "https://www.youtube.com/watch?v=VH8FggoNuCo",
    alt: "고피자x삼양식품 GOPIZZA 짜짜로니 피자",
  },
  {
    idx: 7,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing7.webp",
    linkUrl: "https://www.youtube.com/watch?v=g_upWAlOva0",
    alt: "말년킹 피자 - 이말년, 주호민, 기안84의 영혼을 갈아넣어 만든...",
  },
  {
    idx: 8,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing8.webp",
    linkUrl: "https://www.youtube.com/watch?v=QuPQllB1dMA",
    alt: "말년을 자유롭게 - 100만",
  },
  {
    idx: 9,
    imgUrl: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing9.webp",
    linkUrl: "https://www.youtube.com/watch?v=uaW56o3tgxw",
    alt: "식스센스 - 예산 300만원 푸드 트럭에서 100억 매출 피자 브랜드",
  },
];

function Support() {
  return (
    <SupportWrap>
      <div className="brand">
        <h4>
          <span className="txt">본사의 아낌없는 지원</span>
        </h4>
        <h5>브랜드 인지도 향상 활동</h5>
        <p className="title_txt">
          점주님의 성공을 위해
          <br />
          브랜드가 성장하고자 항상 고민합니다.
        </p>
        <ul className="list_brand">
          <li>TV 프로그램</li>
          <li>유튜브</li>
          <li>PPL진행</li>
          <li>광고 모델 기용</li>
        </ul>
      </div>
      <VisibilitySensorSwiper view={3}>
        {Slide.map((el) => (
          <SwiperSlide key={el.idx}>
            <a target="_blank" href={el.linkUrl} rel="noreferrer">
              <img src={el.imgUrl} alt={el.alt} />
            </a>
          </SwiperSlide>
        ))}
      </VisibilitySensorSwiper>
      <div className="bnr_area">
        <div className="area1">
          <img
            src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/bnr_model1x2.webp"
            alt="고피자 지구침투 - 세상에 없던 빠-삭!함"
          />
        </div>
        <div className="area2">
          <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/bnr_model2x2.webp" alt="NEW MODEL - Lee Dong Wook" />
        </div>
      </div>
      <div className="wrap_sales">
        <h5>매출 증대 활동</h5>
        <p className="title_txt">
          본사의 적극적인 서포트와 함께
          <br />
          꾸준한 매출 성장을 이룰 수 있습니다.
        </p>
        <ul className="list_sales">
          <li>배달 프로모션</li>
          <li>내점 프로모션</li>
          <li>통신사 제휴</li>
        </ul>
      </div>
      <div className="wrap_promotion">
        <ul>
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <img src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_promotion${i + 1}x2.webp`} alt="프로모션 이미지" />
            </li>
          ))}
        </ul>
      </div>
    </SupportWrap>
  );
}

export default Support;
