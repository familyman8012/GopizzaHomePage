import React from "react";
import { CeoMessageWrap } from "../style";

function CeoMessage() {
  return (
    <CeoMessageWrap>
      <h4>CEO MESSAGE</h4>
      <div className="wrap_message">
        <strong>
          착하고 성실하게
          <br /> 고피자로 끝까지 가겠습니다
        </strong>
        <p>
          안녕하세요.
          <br />
          고피자 대표이사 임재원입니다.
          <br />
          ‘왜 피자는 오래 걸리며 비싸고 커야만 할까?’라는 작은 생각에서 시작해 <br />
          고피자를 전 세계적인 피자 브랜드로 키우겠다는 목표 하나로 푸드트럭을
          <br />
          시작으로 지금까지 열심히 성장해왔습니다.
          <br />
          <br />
          최고의 제품과 혁신적인 기술로 고객들에게 행복한 경험을 제공하는 것이
          <br />
          고피자의 가장 중요한 임무이지만, 그 방식에 있어 항상 선한 마음으로
          <br />
          투명하게 경영하는 것이 우리 고객과 점주님, 그리고 주주와 임직원들에
          <br />
          대한 제 철학입니다.
          <br />
          <br />
          전 세계 고객들에게 편리하고, 저렴하게 소비할 수 있는 1인 피자가
          <br />
          피자의 표준이 될 때까지 착하고, 성실하게 고피자만 열심히 하겠습니다.
        </p>
        <div className="sign">
          <span className="txt">대표이사 임재원</span>
          <span className="img">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_signx2.webp" alt="대표 임재원 SIGN" />
          </span>
        </div>
      </div>
    </CeoMessageWrap>
  );
}

export default CeoMessage;
