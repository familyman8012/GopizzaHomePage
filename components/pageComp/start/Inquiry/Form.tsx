import styled from "@emotion/styled";
import DatePick from "ComponentsFarm/common/DatePick";
import React, { useState } from "react";

const FormWrap = styled.div`
  margin: 11rem 0 0 0;
  padding-bottom: 11.95rem;
  border-bottom: 1px solid #e6e6e6;

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
      <h4>상담자 정보</h4>
      <p className="form_txt">정보 입력시, 동그라미 표시는 필수입력 항목입니다.</p>
      <div className="box_inp">
        <label htmlFor="username" className="req">
          이름
        </label>
        <input type="text" className="s" name="username" />
      </div>
      <div className="box_inp">
        <label htmlFor="tel" className="req">
          연락처
        </label>
        <input type="tel" className="s" name="tel" />
      </div>
      <div className="box_inp box_email">
        <label htmlFor="email1" className="req">
          이메일
        </label>
        <input type="text" className="s" name="email1" />
        <span className="str">@</span>
        <input type="text" className="s" name="email2" />
        <select name="email3">
          <option value="">직접입력</option>
          {email.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="box_inp">
        <label htmlFor="contact_time" className="req">
          연락 가능 시간
        </label>
        <input type="text" className="s" name="contact_time" />
        <span className="txt_desc">ex. 오전 10시 ~ 오후 4시</span>
      </div>
      <div className="box_inp">
        <label htmlFor="inflow" className="req">
          유입경로
        </label>
        <select name="inflow" id="inflow" className="s">
          <option value="">유입경로</option>
          {inflowArr.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="box_inp flex baseline">
        <label htmlFor="address1" className="req">
          주소
        </label>
        <div>
          <div style={{ marginBottom: 4 }}>
            <input type="text" className="m" name="address1" placeholder="기본주소" style={{ marginRight: 4 }} />
            <button>주소검색</button>
          </div>
          <div>
            <input type="text" placeholder="상세주소" name="address2" className="m" />
          </div>
        </div>
      </div>
      <div className="box_inp">
        <label htmlFor="contact_time" className="req">
          예상 투자금액
        </label>
        <input type="text" className="s" name="contact_time" />
        <span className="txt_desc">만원 (숫자만 입력)</span>
      </div>
      <div className="box_inp box_radio flex">
        <label htmlFor="rad_exp1" className="req">
          외식사업 경험
        </label>
        <div className="box_custom_radio">
          <input type="radio" name="rad_exp" id="rad_exp1" value="없음" checked />
          <label htmlFor="rad_exp1">없음</label>
          <input type="radio" name="rad_exp" id="rad_exp2" value="있음" />
          <label htmlFor="rad_exp2">있음</label>
        </div>
      </div>
      {/* <div className="box_custom_chk">
        <input type="checkbox" name="privacy_agree" id="inp_agree_chk" />
        <label htmlFor="inp_agree_chk">개인정보취급방침을 읽었으며 이에 동의합니다.</label>
        <button className="openPrivacy">전문보기</button>
      </div>
      <button className="submit">신청하기</button> */}
    </FormWrap>
  );
}

export default Form;
