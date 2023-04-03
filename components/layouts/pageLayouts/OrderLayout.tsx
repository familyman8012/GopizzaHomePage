import { OrderWrap } from "ComponentsFarm/pageComp/order/style";
import React from "react";
import Tab from "../Tab";
import { orderTab } from "ComponentsFarm/pageComp/order/constant";

interface Props {
  children: React.ReactNode;
}

function OrderLayout({ children }: Props) {
  return (
    <OrderWrap>
      <h2 className="tit">단체/제휴/문의</h2>
      <Tab data={orderTab} />
      {children}
    </OrderWrap>
  );
}

export default OrderLayout;
