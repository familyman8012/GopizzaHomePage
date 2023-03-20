import { menuTab } from "ComponentsFarm/pageComp/start/constant";
import { StartWrap } from "ComponentsFarm/pageComp/start/style";
import SubVisual from "ComponentsFarm/pageComp/start/SubVisual";
import React from "react";
import Tab from "../Tab";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function StartLayout({ children, className }: Props) {
  return (
    <StartWrap className={className}>
      {className === "info" && <p className="tit_desc">매장 형태 및 상황에 따라 금액이 변동 될 수 있으며, 동일한 평수라도 요구사항에 따라 상이할 수 있습니다.</p>}
      <h2 className="tit">가맹안내</h2>
      <Tab data={menuTab} />
      {children}
    </StartWrap>
  );
}

export default StartLayout;
