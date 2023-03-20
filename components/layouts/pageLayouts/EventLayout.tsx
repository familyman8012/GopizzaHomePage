import { brandTab, SubMainVisualArr } from "ComponentsFarm/pageComp/brand/constant";
import { BrandWrap } from "ComponentsFarm/pageComp/brand/style";
import SubMainVisual from "ComponentsFarm/pageComp/brand/SubMainVisual";
import { eventTab } from "ComponentsFarm/pageComp/event/constant";
import { EventWrap } from "ComponentsFarm/pageComp/event/style";
import React from "react";
import Tab from "../Tab";

interface Props {
  children: React.ReactNode;
}

function EventLayout({ children }: Props) {
  return (
    <EventWrap>
      <h2 className="tit">이벤트</h2>
      <Tab data={eventTab} />
      {children}
    </EventWrap>
  );
}

export default EventLayout;
