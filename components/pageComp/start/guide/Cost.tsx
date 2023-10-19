import React from "react";
import { CostWrap } from "./style";

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
              <span className="txt1">구분</span>
            </th>
            <th>
              <span className="txt1">금액</span>
            </th>
            <th>
              <span className="txt1">비고</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>가맹비</td>
            <td>
              <span>5,000,000</span>
            </td>
            <td>
              <span>소멸성</span>
            </td>
          </tr>
          <tr>
            <td>교육비</td>
            <td>
              <span>3,000,000</span>
            </td>
            <td>
              <span>
                본사 교육 5일
                <br /> 현장 지원 교육 3일
              </span>
            </td>
          </tr>
          <tr>
            <td>
              계약이행
              <br className="mobile_line" />
              보증금
            </td>
            <td>
              <span>2,000,000</span>
            </td>
            <td>
              <span>
                가맹계약 <br className="mobile_line" /> 종료 시 반환
              </span>
            </td>
          </tr>
          <tr>
            <td>
              GOVEN <br className="mobile_line" />및 장비
            </td>
            <td>16,000,000</td>
            <td>
              피자오븐,
              <br className="mobile_line" /> 냉장/냉동류,
              <br className="mobile_line" /> 소기물 포함
            </td>
          </tr>
          <tr>
            <td>인테리어</td>
            <td>27,200,000</td>
            <td>가구, 간판 포함</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              합계
              <br className="mobile_line" />
              (VAT별도)
            </td>
            <td colSpan={2}>
              <span className="box_price">
                {/* <span className="price">95,400,000</span> */}
                {/* <span className="sale_price">85,400,000</span> */}
                <span className="sale_price">53,200,000</span>
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
      <p className="notice bottom">
        <span className="txt1">
          ※ 별도 공사는 전기증설, 소방공사, 에어컨 및 <br className="mobile_line" /> 가스 공사 등으로, 금액은 동일한 평수라도 <br className="mobile_line" /> 매장별로
          상이할 수 있습니다.
        </span>
      </p>
      {/* <table>
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
            <td>
              <span className="sale sale2">5,000,000</span>
            </td>
            <td>
              <span className="sale sale2">5,000,000</span>
            </td>
          </tr>
          <tr>
            <td>교육비</td>
            <td>
              <span className="sale">3,000,000</span>
            </td>
            <td>
              <span className="sale">3,000,000</span>
            </td>
          </tr>
          <tr>
            <td>계약이행보증금</td>
            <td>
              <span className="sale">5,000,000</span>
            </td>
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
            <td>
              <span className="box_price">
                <span className="price">95,400,000</span>
                <span className="sale_price">85,400,000</span>
              </span>
            </td>
            <td>
              <span className="box_price">
                <span className="price">63,400,000</span>
                <span className="sale_price">53,400,000</span>
              </span>
            </td>
          </tr>
        </tfoot>
      </table> */}
    </CostWrap>
  );
}

export default Cost;
