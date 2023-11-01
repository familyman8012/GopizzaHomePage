import React, { useState } from "react";
import { GlobalListWrap, GlobalListItemWrap, Airplane, GoGlobalListSection } from "./style";
import { Waypoint } from "react-waypoint";
import NextDestination from "./NextDestination";
import useDebounce from "HookFarm/useDebounce";

const GlobalListArr = [
  {
    country: "KOREA",
    number: "114",
    title: `F&B 브랜드의 격전지 한국에서\n ‘1인피자’ 시장을 개척하다`,
    desc: `세계적 브랜드들의 F&B 격전지가 된 한국에서, 고피자는 ‘1인피자’라는 새로운 시장을 
    개척해 성공했습니다. 그 중심인 ‘고피자’의 헤드쿼터가 한국에 있습니다. 
    한국에 뿌리를 두고 단숨에 전 세계 100개 이상의 매장을 돌파하며 영화관, 백화점, 
    휴게소 등에서 활약을 펼치고 있는 고피자가 더욱 궁금하시지 않나요?`,
  },
  {
    country: "SINGAPORE",
    number: "22",
    title: `음식천국 싱가포르\n 핫플레이스에 고피자가 있다`,
    desc: `싱가포르는 제주도의 3분의 1만한 작은 도시 국가이지만
    높은 경제 수준을 이룩한 동남아 시장의 허브입니다.
    고피자는 2020년 진출하여, 1년만에 전국구 브랜드로 성장하였습니다.
    싱가포르에 놀러오면 고피자가 기다리고 있을게요!`,
  },
  {
    country: "INDIA",
    number: "32",
    title: `성장하는 인도의\n 피자 시장을 선도한다`,
    desc: `인도는 13억명의 인구 수와 높은 IT 기술력을 바탕으로
    경제가 빠르게성장하고 있는 초대형 시장입니다.
    큰 시장인 만큼 10년 후 고피자는 인도에서만 1,000개 이상의 
    매장을목표하고 있습니다.`,
  },
  {
    country: "INDONESIA",
    number: "4",
    title: `젊은 열기가 가득한 인도네시아에\n 고피자라는 불을 붙이다`,
    desc: `인도네시아가 세계에서 4위로 인구가 많은 나라인 것을 아셨나요? 
    심지어 청년층이 많은 젊은 열기로 가득한 나라랍니다. 세계 4위 경제인구를 
    보유한 동남아의 거대한 시장, 그 한가운데 고피자의 불꽃이 함께 합니다. 
    노릇노릇 피자를 구워내는 고븐의 열기와 닮아있는 나라같지 않나요?`,
  },
];

function GlobalListItem({ data }: any) {
  const [show, setShow] = useState(false);

  const { windowWidth } = useDebounce();

  return (
    <Waypoint onEnter={() => setShow(true)} onLeave={() => setShow(false)} bottomOffset={windowWidth <= 767 ? "430px" : "700px"}>
      <GlobalListItemWrap className={show ? "on" : ""}>
        <div className="wrap_item">
          <div className="country">{data.country}</div>
          <div className="storeNumber">
            <div className="number">{data.number}</div>
            <div className="txt">매장 수</div>
          </div>
        </div>
        <div className="txt_box">
          <dl>
            <dt>
              {data.title?.split("\n").map((title: string, i: number) => {
                return (
                  <React.Fragment key={`line${i}`}>
                    {title}
                    <br />
                  </React.Fragment>
                );
              })}
            </dt>
            <dd>
              {data.desc?.split("\n").map((text: string, i: number) => {
                return (
                  <React.Fragment key={`line${i}`}>
                    {text}
                    <br />
                  </React.Fragment>
                );
              })}
            </dd>
          </dl>
        </div>
      </GlobalListItemWrap>
    </Waypoint>
  );
}

function GlobalList() {
  const [showAirplane, setShowAirplane] = useState(false);

  return (
    <GoGlobalListSection>
      <Airplane className={showAirplane ? "on" : ""} />
      <Waypoint onEnter={() => setShowAirplane(true)} onLeave={() => setShowAirplane(false)} bottomOffset="400px">
        <GlobalListWrap>
          {GlobalListArr.map((el, i) => (
            <GlobalListItem key={i} data={el} />
          ))}
        </GlobalListWrap>
      </Waypoint>
    </GoGlobalListSection>
  );
}

export default GlobalList;
