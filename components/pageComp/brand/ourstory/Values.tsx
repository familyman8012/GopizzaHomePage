import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import { ValuesWrap } from "./style";

function Values() {
  const [txtAni, setTxtAni] = useState(false);
  return (
    <ValuesWrap>
      <h4>VALUES</h4>
      <ul className={`list ${txtAni ? "on" : ""}`}>
        <li>
          <div className="box_txt">
            <h5>INNOVATION</h5>
            <Waypoint
              topOffset="50px"
              onEnter={() => {
                txtAni === false && setTxtAni(true);
              }}
              onLeave={() => {
                !txtAni === false && setTxtAni(false);
              }}
            >
              <p>
                모든 영역에서 끊임없이
                <br />
                발전하고 혁신합니다.
                <br />
                고객을 위한 미래의
                <br />
                외식 경험을 만들어갑니다.
              </p>
            </Waypoint>
          </div>
        </li>
        <li>
          <div className="box_txt">
            <h5>QUALITY</h5>
            <p>
              신선한 재료와
              <br />
              고피자만의 AI오븐으로
              <br />
              최고의 맛과 서비스를
              <br />
              균일하게 제공합니다.
            </p>
          </div>
        </li>
        <li>
          <div className="box_txt">
            <h5>OPENNESS</h5>
            <p>
              고피자는 모두를 존중하고
              <br />
              누구에게나 열려 있습니다.
              <br />
              언제 어디서나, 고피자라면
              <br />
              즐거운 경험이 됩니다.
            </p>
          </div>
        </li>
      </ul>
    </ValuesWrap>
  );
}

export default Values;
