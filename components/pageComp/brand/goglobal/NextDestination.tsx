import Link from "next/link";
import React from "react";
import { NextDestinationWrap } from "./style";

function NextDestination() {
  return (
    <NextDestinationWrap>
      <h4>Next destination?</h4>
      <div className="box_txt">
        <em>다음은 어디로? 글로벌 성장과 함께하고 싶다면? </em>
        <p>
          전 세계 어딜가나 ‘피자하면 고피자!’ 하는 그 날,
          <br /> 타원형 1인 피자가 당연한 그 날을 꿈꾸고 있습니다.
        </p>
      </div>
      <Link href="/start/inquiry">글로벌 성장 함께하기</Link>
    </NextDestinationWrap>
  );
}

export default NextDestination;
