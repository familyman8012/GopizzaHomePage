import Form from "ComponentsFarm/pageComp/order/Form";
import Tab from "ComponentsFarm/layouts/Tab";
import { orderTab } from "ComponentsFarm/pageComp/order/constant";
import Banner from "ComponentsFarm/pageComp/order/group/Banner";
import { OrderWrap } from "ComponentsFarm/pageComp/order/style";
import React from "react";
import OrderLayout from "ComponentsFarm/layouts/pageLayouts/OrderLayout";

const company = [
  "대구국제뮤지컬페스티벌",
  "Daily&Co",
  "비앤빛 강남 밝은세상안과",
  "KaKao ENtErtAINMENT",
  "KAIST",
  "서울대학교",
  "세종대학교",
  "건국대학교",
  "D.CAMP",
  "SOFTWARE MAESTRO",
  "Lyreco",
  "대한예수교 장로회- 청운교회",
];

function Group() {
  return (
    <OrderLayout>
      {/* <Banner /> */}
      <div className="bnr">
        <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr1.webp" />
        <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr2.webp" />
        <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr3.webp" />
        <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr4.webp" />
      </div>
      <h2 className="tit tit2">단체주문 예약 / 문의</h2>
      <p className="txt">정보 입력시, 동그라미 표시는 필수입력 항목입니다.</p>
      <Form type={"group"} />
      {Array.from({ length: 3 }).map((_, i) => (
        <ul className={`list_company company${i + 1}`} key={`ul_${i}`}>
          {Array.from({ length: 4 }).map((_, j) => (
            <li key={`li_${i}_${j}`}>
              <img src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_comp${i * 4 + j + 1}x2.webp`} alt={company[i * 4 + j]} />
            </li>
          ))}
        </ul>
      ))}
    </OrderLayout>
  );
}

export default Group;
