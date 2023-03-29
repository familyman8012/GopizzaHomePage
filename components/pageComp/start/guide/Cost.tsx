import React from "react";
import { CostWrap } from "./style";

const CostArr = [
  {
    title: "가맹비",
    desc: "상호 및 상표 사용",
    price: "5,000,000",
  },
  {
    title: "본사교육",
    desc: "이론·실습 5일 / 직영교육 : 실습 5일 (총 10일간 진행)",
    price: "3,000,000",
  },
  {
    title: "보증금",
    desc: "계약 이행 보증금 (계약 종료시 반환)",
    price: "5,000,000",
  },
  {
    title: "GOVEN 자동화덕",
    desc: "특허등록번호 제 10-1899035호",
    price: "5,000,000",
  },
  {
    title: "주요 장비 및 집기",
    desc: "토핑 냉장고 / 업소용 냉장·냉동고 / 튀김기 외 100여가지 주방 기물 및 브랜드 상품",
    price: "5,000,000",
  },
  {
    title: "인테리어",
    desc: "가구 간판 DID (매장전면 5m 기준)",
    price: "1,4~800,000",
  },
  {
    title: "인테리어",
    desc: "인테리어",
    price: "2,700,000 ~ 3,800,000",
  },
  {
    title: "별도 공사",
    desc: "전기 증설 / 에어컨 / 도시가스 외",
    price: "매장별 상이",
  },
];

function Cost() {
  return (
    <CostWrap>
      <h4>
        <span className="txt">개설 비용 안내</span>
      </h4>
      <p className="notice">
        <span className="txt1">매장 형태 및 상황에 따라 금액이 변동 될 수 있으며, 동일한 평수라도 요구사항에 따라 상이할 수 있습니다.</span>
      </p>
      <table>
        <caption>개설비용안내표</caption>
        <thead>
          <tr>
            <th>
              <span className="hiddenZoneV">비용 항목</span>
            </th>
            <th>
              <span className="txt1">일반매장</span>
              <span className="txt2">15평 기준(vat별도)</span>
            </th>
            <th>
              <span className="txt1">배달전용매장</span>
              <span className="txt2">9평 기준 (vat별도)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>가맹비</td>
            <td>5,000,000</td>
            <td>
              <span className="sale">5,000,000</span>
            </td>
          </tr>
          <tr>
            <td>교육비</td>
            <td>3,000,000</td>
            <td>
              <span className="sale">3,000,000</span>
            </td>
          </tr>
          <tr>
            <td>계약이행보증금</td>
            <td>5,000,000</td>
            <td>
              <span className="sale">5,000,000</span>
            </td>
          </tr>
          <tr>
            <td>GOVEN 자동화덕</td>
            <td>8,900,000</td>
            <td>8,900,000</td>
          </tr>
          <tr>
            <td>장비 및 기물 비용</td>
            <td>18,500,000</td>
            <td>14,500,000</td>
          </tr>
          <tr>
            <td>인테리어</td>
            <td>55,000,000</td>
            <td>27,000,000</td>
          </tr>
          <tr>
            <td>별도 공사</td>
            <td>매장별 상이</td>
            <td>매장별 상이</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>합계(VAT별도)</td>
            <td>95,400,000</td>
            <td>63,400,000</td>
          </tr>
        </tfoot>
      </table>
    </CostWrap>
  );
}

export default Cost;
