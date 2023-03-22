import styled from "@emotion/styled";
import DatePick from "ComponentsFarm/common/DatePick";
import React, { useState } from "react";
import { RegionWrap } from "../style";

const FormWrap = styled.div`
  margin: 11rem 0 0 0;
  padding-bottom: 11.95rem;

  h4 {
    margin-bottom: 5.6rem;
    font-size: 4.8rem;
    color: #000;
  }
  p.form_txt {
    margin-bottom: 8rem;
    font-size: 2.4rem;
    text-align: center;
  }
  .box_custom_chk {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 6.4rem 0 0;

    button {
      margin-left: 0.8rem;
      font-size: 2rem;
      color: #7b7b7b;
      text-decoration: underline;
      background: none;
    }
  }
`;

const email = [
  "naver.com",
  "gmail.com",
  "nate.com",
  "yahoo.co.kr",
  "hanmail.net",
  "daum.net",
  "dreamwiz.com",
  "lycos.co.kr",
  "empas.com",
  "korea.com",
  "paran.com",
  "freechal.com",
  "hanmir.com",
  "hotmail.com",
];

const inflowArr = ["방송/기사", "온라인 광고", "앱 광고", "유튜브", "매장이용", "검색엔진", "지인/주변인", "기타"];

function Form({ type }: { type?: string }) {
  const [startDate, setStartDate] = useState(null);

  return (
    <FormWrap>
      <h4>후보지 정보</h4>
      <div className="box_inp box_radio flex">
        <label htmlFor="own1" className="req">
          소유여부
        </label>
        <div className="box_custom_radio">
          <input type="radio" name="own" id="own1" value="예" checked />
          <label htmlFor="own1">예</label>
          <input type="radio" name="own" id="own2" value="아니오" />
          <label htmlFor="own2">아니오</label>
        </div>
      </div>
      <div className="box_inp flex baseline">
        <label htmlFor="store_address1" className="req">
          점포주소
        </label>
        <div>
          <div style={{ marginBottom: 4 }}>
            <input type="text" className="m" name="store_address1" placeholder="기본주소" style={{ marginRight: 4 }} />
            <button>주소검색</button>
          </div>
          <div>
            <input type="text" placeholder="상세주소" name="store_address2" className="m" />
          </div>
        </div>
      </div>
      <div className="box_inp">
        <label htmlFor="sqm" className="req">
          평형
        </label>
        <input type="text" className="s" name="sqm" />
        <span className="txt_desc">평형</span>
      </div>
      <div className="box_inp">
        <label htmlFor="store_name" className="req">
          현상호
        </label>
        <input type="text" className="s" name="store_name" />
      </div>
      <div className="box_inp box_radio flex">
        <label htmlFor="own1" className="req">
          희망지역
        </label>
        <RegionWrap className="box_custom_radio">
          <input type="radio" name="region" id="region1" value="수도권 (서울, 경기, 인천)" checked />
          <label htmlFor="region1">
            수도권
            <br />
            (서울, 경기, 인천)
          </label>
          <input type="radio" name="region" id="region2" value="영남권 (부산.대구.울산.포항 외)" />
          <label htmlFor="region2">
            영남권
            <br />
            (부산.대구.울산.포항 외)
          </label>
          <input type="radio" name="region" id="region3" value="호남권 (여수.목포.전주 외)" />
          <label htmlFor="region3">
            호남권
            <br />
            (여수.목포.전주 외)
          </label>
          <input type="radio" name="region" id="region4" value="중부.강원권 (대전.충남.충북.강릉 외)" />
          <label htmlFor="region4">
            중부.강원권
            <br />
            (대전.충남.충북.강릉 외)
          </label>
          <input type="radio" name="region" id="region5" value="그 외 (글로벌)" />
          <label htmlFor="region5">
            그 외
            <br />
            (글로벌)
          </label>
        </RegionWrap>
      </div>

      <div className="box_inp">
        <label htmlFor="store_name" className="req">
          세부지역
        </label>
        <input type="text" className="s" name="store_name" />
        <span className="txt_desc"> (시/군, 구/동)</span>
      </div>
      <div className="box_inp flex baseline">
        <label htmlFor="question" className="req">
          문의내용
        </label>
        <textarea name="question" className="l" />
      </div>

      <div className="box_custom_chk">
        <input type="checkbox" name="privacy_agree" id="inp_agree_chk" />
        <label htmlFor="inp_agree_chk">개인정보취급방침을 읽었으며 이에 동의합니다.</label>
        <button className="openPrivacy">전문보기</button>
      </div>
      <button className="submit">신청하기</button>
    </FormWrap>
  );
}

export default Form;
