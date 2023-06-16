import React, { useEffect, useState } from "react";
import { KeepGoingWrap } from "./style";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Waypoint } from "react-waypoint";

SwiperCore.use([Autoplay]);

const YEAR = [2022, 2021, 2020, 2019, 2018, 2017, 2016];
const History = [
  [
    { id: "2022_1", title: "시그니처 도우 출시", desc: "중량 업그레이드하여 식감이 더욱 쫄깃!" },
    { id: "2022_2", title: "고피자 X CGV", desc: "CGV 왕십리점 외 4개 지점" },
    { id: "2022_3", title: "고피자 X 말년을 자유롭게", desc: "말년 킹 피자 출시" },
    { id: "2022_4", title: "파베이크 도우 이노베이션 센터 개관", desc: "충북 음성 위치" },
    { id: "2022_5", title: "SERIES C 투자 유치", desc: "250억원" },
    { id: "2022_6", title: "고피자 X 라면꼰대 X 삼양식품", desc: "짜짜로니 피자 출시" },
    { id: "2022_7", title: "고피자 X 신세계백화점", desc: "신세계 강남점 입점" },
  ],

  [
    { id: "2021_1", title: "Series B 투자 유치", desc: "110억원" },
    { id: "2021_2", title: "가맹점 전국 순회", desc: "전국 100여개 '매장 순회' 프로젝트" },
    { id: "2021_3", title: "고피자 1번째 모델 선정", desc: "배우 이동욱님" },
    { id: "2021_4", title: "수타 파베이크 도우 출시", desc: "100% 수타 성형 도우" },
    { id: "2021_5", title: "고피자 X 곰표", desc: "소복소복 표곰이 피자 출시" },
  ],

  [
    { id: "2020_1", title: "싱가포르 가맹사업 진출", desc: "싱가포르 중심지의 대형 푸드코트 및 쇼핑몰" },
    { id: "2020_2", title: "아기유니콘 기업 선정", desc: "중소기업벤처부" },
    { id: "2020_3", title: "Series A+ 투자 유치", desc: "16억원" },
    { id: "2020_4", title: "국내외 매장 100호점 돌파", desc: "연간 매출 100억원" },
  ],

  [
    { id: "2019_1", title: "도우 공장 설립", desc: "원주 위치" },
    { id: "2019_2", title: "Forbes 30 Under 30 선정", desc: "2019 아시아의 영향력 있는 30세 이하 리더" },
    { id: "2019_3", title: "인도 가맹사업 진출", desc: "해외 매장 첫 오픈" },
    { id: "2019_4", title: "Series A 투자 유치", desc: "40억" },
    { id: "2019_5", title: "국내외 매장 50호점 돌파", desc: `-` },
  ],

  [
    { id: "2018_1", title: "디캠프 D.DAY 우승", desc: "은행권 청년창업재단" },
    { id: "2018_2", title: "Pre-Series A 유치", desc: "10억원" },
    { id: "2018_3", title: "고피자 1호 매장 오픈", desc: "강남 대치본점" },
    { id: "2018_4", title: "국내 매장 20호점 돌파", desc: "-" },
  ],
  [
    { id: "2017_1", title: "국내 3대 백화점 입점", desc: "판교 현대백화점 외 29개 지점" },
    { id: "2017_2", title: "법인사업자 설립", desc: "벤처기업입증" },
    { id: "2017_3", title: "GOVEN 기술 및 디자인 특허 출원", desc: "자동화덕 고븐(GOVEN)", badge: "" },
  ],
  [{ id: "2016_1", title: "밤도깨비 야시장 푸드트럭 입점", desc: "여의도 한강공원 물빛광장", badge: "" }],
];

function KeepGoing() {
  const [selHistory, setSelHistory] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleProgress = (swiper: SwiperCore) => {
    const { progress } = swiper;
    setProgress(progress);
  };

  const swiperRef = React.useRef<SwiperCore>();
  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleEnter = () => {
    if (swiperRef.current) swiperRef.current?.autoplay.start();
  };
  const handleLeave = () => {
    if (swiperRef.current) swiperRef.current?.autoplay.stop();
  };

  useEffect(() => {
    handleLeave();
  }, []);

  return (
    <KeepGoingWrap>
      <h4>KEEP GO-ING GOPIZZA</h4>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
        <div className="wrap_history">
          <ul className="list_nav">
            {YEAR.map((el, i) => (
              <li key={i} className={i === selHistory ? "on" : ""} onClick={() => setSelHistory(i)}>
                {el}
              </li>
            ))}
          </ul>
          <div className="box_history">
            <div className="wrap_swiper">
              <Swiper
                onInit={onInit}
                key={selHistory}
                slidesPerView={"auto"}
                spaceBetween={20}
                // breakpoints={{
                //   600: {
                //     spaceBetween: 23,
                //   },
                //   800: {
                //     spaceBetween: 30,
                //   },
                //   1200: {
                //     spaceBetween: 40,
                //   },
                // }}
                onProgress={handleProgress}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
              >
                {History[selHistory].map((el, i) => (
                  <SwiperSlide key={i}>
                    <div className={`thumb badge${el.id}`}>
                      <img
                        src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/history/${YEAR[selHistory]}/history${i + 1}x2.webp`}
                        alt={`${el.title} 이미지`}
                      />
                      <span className="badge"></span>
                    </div>
                    <div className="box_txt">
                      <div className="number">0{i + 1}</div>
                      <div className="txt_area">
                        <div className="tit">{el.title}</div>
                        <div className={el.desc !== "-" ? "desc" : "desc no"}>{el.desc}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* progress bar */}
            <div className="progress_bar">
              <div className="inner" style={{ width: `${progress * 100}%` }}></div>
            </div>
          </div>
        </div>
      </Waypoint>
    </KeepGoingWrap>
  );
}

export default KeepGoing;
