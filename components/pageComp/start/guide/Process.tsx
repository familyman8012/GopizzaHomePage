import React from "react";
import { ProcessWrap } from "./style";

function Process() {
  return (
    <>
      <h4>
        <span className="txt">창업 절차</span>
      </h4>
      <ProcessWrap>
        <li>
          <div className="box_txt">
            <span className="num">01</span>
            <span className="txt">
              창업문의
              <br />
              가맹상담
            </span>
          </div>
        </li>
        <li>
          <div className="box_txt">
            <span className="num">02</span>
            <span className="txt">
              상권분석
              <br />
              입지선정
            </span>
          </div>
        </li>
        <li>
          <div className="box_txt">
            <span className="num">03</span>
            <span className="txt">
              가맹계약
              <br />
              상가계약
            </span>
          </div>
        </li>
      </ProcessWrap>
      <ProcessWrap className="line2">
        <li>
          <div className="box_txt">
            <span className="num">04</span>
            <span className="txt">
              인테리어 공사
              <br />
              본사 교육
            </span>
          </div>
        </li>
        <li>
          <div className="box_txt">
            <span className="num">05</span>
            <span className="txt">
              그랜드
              <br />
              오픈
            </span>
          </div>
        </li>
        <li>
          <div className="box_txt">
            <span className="num">06</span>
            <span className="txt">
              사후
              <br />
              관리
            </span>
          </div>
        </li>
      </ProcessWrap>
    </>
  );
}

export default Process;
