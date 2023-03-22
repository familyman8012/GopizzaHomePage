import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Waypoint } from "react-waypoint";
import Link from "next/link";
import { BestMenuWrap } from "./style";

SwiperCore.use([Autoplay]);

interface IData {
  imgSrc: string;
  menuName: string;
  enName: string;
  price: string;
}

const data = [
  {
    imgSrc: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_bestmenu1.webp",
    menuName: "달콤 고구마 피자",
    enName: "Sweet Potato Pizza",
    price: "10,400",
  },
  {
    imgSrc: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_bestmenu2.webp",
    menuName: "베이컨 포테이토 피자",
    enName: "Bacon Potato Pizza",
    price: "10,700",
  },
  {
    imgSrc: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_bestmenu3.webp",
    menuName: "매니악 페퍼로니 피자",
    enName: "Maniac Pepperoni Pizza",
    price: "10,700",
  },
  {
    imgSrc: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_bestmenu4.webp",
    menuName: "치킨앤콘 반반 피자",
    enName: "Half & half Pizza",
    price: "11,800",
  },
  {
    imgSrc: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_bestmenu5.webp",
    menuName: "미트 치즈 파스타",
    enName: "Meat Cheese Pasta",
    price: "8,500",
  },
  {
    imgSrc: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/main/img_bestmenu6.webp",
    menuName: "화덕 떡볶이",
    enName: "Tteokbokki",
    price: "6,500",
  },
];

function BestMenu() {
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
    <BestMenuWrap>
      <h3>BEST MENU</h3>
      <Waypoint onEnter={handleEnter} onLeave={handleLeave}>
        <article>
          <div className="box_txt">
            <p className="subTitle">
              혼자서 두가지 맛을 즐기고,
              <br /> 여럿이 취향따라 각자 먹고!
            </p>
            <p className="desc">
              기존 피자의 사이즈만 줄인 것이 아니에요.
              <br />
              새로운 타원형 형태의 혼자 먹기 좋은 5조각!
              <br />
              시간, 비용, 사람에 구애없이 GO할 수 있는
              <br />
              새로운 피자 문화를 선도합니다.
            </p>
            <Link href="/menu">메뉴 바로가기</Link>
          </div>
          <div className="box_swiper">
            <Swiper
              onInit={onInit}
              slidesPerView={"auto"}
              spaceBetween={30}
              breakpoints={{
                320: {
                  spaceBetween: 10,
                },
                800: {
                  spaceBetween: 30,
                },
                1200: {
                  spaceBetween: 40,
                },
              }}
              onProgress={handleProgress}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {data.map((el, i) => (
                <SwiperSlide key={i}>
                  <ThumbItem key={i} data={el} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ position: "relative", width: "100%", height: "1.2rem", marginTop: "2rem", backgroundColor: "#dddddd", borderRadius: ".6rem" }}>
              <div style={{ position: "absolute", width: `${progress * 100}%`, height: "1.2rem", backgroundColor: "#ff4600", borderRadius: ".6rem" }}></div>
            </div>
          </div>
        </article>
      </Waypoint>
    </BestMenuWrap>
  );
}

function ThumbItem({ data }: { data: IData }) {
  return (
    <div className="box_thumb">
      <div className="thumb">
        {/* <Image src={data.imgSrc} width={400} height={400} quality={100} alt={data.menuName} /> */}
        <img src={data.imgSrc} alt={data.menuName} />
      </div>
      <div className="txt">
        <span className="subTitle">{data.menuName}</span>
        <span className="en">{data.enName.toUpperCase()}</span>
        <span className="priceWrap">
          <span className="price">{data.price}</span>
          <span className="won">원</span>
        </span>
      </div>
    </div>
  );
}

export default BestMenu;
