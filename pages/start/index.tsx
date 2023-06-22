import Tab from "ComponentsFarm/layouts/Tab";
import { menuTab } from "ComponentsFarm/pageComp/start/constant";
import { Content, StartWrap } from "ComponentsFarm/pageComp/start/style";
import SubVisual from "ComponentsFarm/pageComp/start/SubVisual";
import Strong3 from "ComponentsFarm/pageComp/start/competitive/Strong3";
import Support from "ComponentsFarm/pageComp/start/competitive/Support";
import ParbakedWrap from "ComponentsFarm/pageComp/start/competitive/Parbaked";
import Goven from "ComponentsFarm/pageComp/start/competitive/Goven";
import Revenue from "ComponentsFarm/pageComp/start/competitive/Revenue";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import BtnInquiry from "ComponentsFarm/pageComp/start/BtnInquiry";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "HookFarm/useDebounce";

function Competitive() {
  const { windowWidth, spaceBetween } = useDebounce("spaceBetween");

  return (
    <StartLayout>
      <Strong3 />
      <Revenue windowWidth={windowWidth} spaceBetween={spaceBetween} />
      <Support windowWidth={windowWidth} />
      <ParbakedWrap />
      <Goven />
      <BtnInquiry />
    </StartLayout>
  );
}

export default Competitive;
