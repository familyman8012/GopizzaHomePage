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
      <h2 className="tit">가맹안내</h2>
      <Tab data={menuTab} />
      {children}
    </StartWrap>
  );
}

export default StartLayout;
