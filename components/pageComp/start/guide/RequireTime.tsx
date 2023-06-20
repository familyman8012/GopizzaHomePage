import React from "react";
import { RequireTimeWrap } from "./style";

function RequireTime() {
  return (
    <RequireTimeWrap>
      <h4>
        <span className="txt">오픈 절차 및 소요기간</span>
      </h4>
      <div className="box_time">
        <img src="/images/start/info/mobile/img_time.svg" className="mobile_time" alt="오픈 절차 및 소요기간" />
        <div className="hiddenZoneV">
          1일차 : 가맹상담 <br />
          2일차 ~ 3일: 상권 분석 및 입지 선정 <br />
          4일차 ~ 6일차 : 실측 및 도면 작업 <br />
          8일차 ~ 9일차 : 장비 기물 및 인테리어 견적 확인
          <br />
          10일차 ~ 25일차 : 인테리어 시공 및 본사 교육 진행
          <br />
          25일차 ~ 26일차 : 행정업무
          <br />
          29일차 : 최종점검
          <br />
          30일 : 매장 오픈
        </div>
      </div>
    </RequireTimeWrap>
  );
}

export default RequireTime;
