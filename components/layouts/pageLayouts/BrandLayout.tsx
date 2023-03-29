import { brandTab, SubMainVisualArr } from "ComponentsFarm/pageComp/brand/constant";
import { BrandWrap } from "ComponentsFarm/pageComp/brand/style";
import SubMainVisual from "ComponentsFarm/pageComp/brand/SubMainVisual";
import React from "react";
import Tab from "../Tab";

interface Props {
  children: React.ReactNode;
  index: number;
}

function BrandLayout({ children, index }: Props) {
  return (
    <BrandWrap>
      <h2 className="tit">브랜드 소개</h2>
      <Tab data={brandTab} />
      <SubMainVisual index={index} bgimg={SubMainVisualArr[index].bgimg} txt1={SubMainVisualArr[index].txt1} txt2={SubMainVisualArr[index].txt2} />
      {children}
    </BrandWrap>
  );
}

export default BrandLayout;
