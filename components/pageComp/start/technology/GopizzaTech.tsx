import React, { useEffect, useState } from "react";
import { GopizzaTechWrap } from "./style";
import ReactPlayer from "react-player/lazy";
import BtnInquiry from "../BtnInquiry";
import { VideoWrap } from "../competitive/style";

function GopizzaTech() {
  const [winReady, setwinReady] = useState(false);
  const [play, setPlay] = useState(false);
  const handleToggle = (e: any) => {
    e.stopPropagation();
    setPlay((prev) => !prev);
  };
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <GopizzaTechWrap>
      <ul className="list">
        <li>
          <dl>
            <dt>CRISPY BASAK DOUGH</dt>
            <dd>
              고피자 도우 이노베이션 센터에서
              <br />
              직접 생산부터 배송까지, <br />
              늘 한결같은 퀄리티와 맛을
              <br />
              보장합니다.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>GOVEN</dt>
            <dd>
              고피자가 자체 개발한 AI오븐
              <br />
              으로, 피자가 맛있어지는 가장
              <br />
              적절한 온도를 찾아줍니다.
              <br />
              매장 밖에서도 조리된 피자의
              <br />
              퀄리티를 체크할 수 있습니다.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>GOBOT STATION</dt>
            <dd>
              피자를 자체적으로 인식하여
              <br /> 컷팅과 소스 드리즐,
              <br /> 온열기에 보관까지!
              <br /> 점주님께서 믿고 의지할 수
              <br /> 있는 로봇입니다.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>AI SMART TOPPING TABLE</dt>
            <dd>
              모든 토핑 재료를 실시간으로
              <br /> 인식하고 판단하여 매장에서
              <br /> 간편한 토핑 교육과 정확도
              <br />
              관리를 가능하게 합니다.
            </dd>
          </dl>
        </li>
      </ul>
      <VideoWrap>
        <div className="box_img" onClick={handleToggle}>
          {winReady && (
            <ReactPlayer
              light={<img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/videox2.webp" alt="Thumbnail" />}
              url="https://www.youtube.com/watch?v=A-awWOnYf6I?t=50"
              width="100%"
              height="100%"
              playing={true}
              opts={{
                playerVars: {
                  rel: 0,
                  modestbranding: 1,
                  loop: 0,
                },
              }}
            />
          )}
        </div>

        {!play && (
          <button>
            <span className="hiddenZoneV">PLAY</span>
          </button>
        )}
      </VideoWrap>
      <BtnInquiry />
    </GopizzaTechWrap>
  );
}

export default GopizzaTech;
