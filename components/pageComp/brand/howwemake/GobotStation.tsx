import VisibilitySensorVideo from "ComponentsFarm/common/VisibilitySensorVideo";
import { GobotStationWrap } from "./style";

function GobotStation() {
  return (
    <GobotStationWrap>
      <div className="inner">
        <div className="box1">
          <h4>
            <span className="titleNo">05</span>
            <span className="tit">
              GOBOT
              <br />
              STATION
            </span>
          </h4>
          <div className="thumb">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make5_1.webp" alt="GOBOT STATION" />
          </div>
        </div>
        <div className="box2">
          <div className="thumb">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make5_2.webp" alt="GOBOT STATION" />
          </div>
          <p>
            고피자 로보틱스의 정점인
            <br />
            고봇 스테이션은 피자에 맞춰 스스로 <br />
            컷팅부터 드리즐링, 후토핑까지!
            <br />
            점주님을 도와줍니다.
            <br />
            <br />
            <strong>
              고봇 스테이션이 피자를 만드는 동안 <br />
              고객 여러분은 고피자 가족과의 반가운 <br />
              눈인사, 즐거운 대화 한마디 어떠세요?
            </strong>
          </p>
        </div>
      </div>
    </GobotStationWrap>
  );
}

export default GobotStation;
