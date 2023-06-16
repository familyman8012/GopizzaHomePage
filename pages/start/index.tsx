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

function Competitive() {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [spaceBetween, setSpaceBetween] = useState<number>(0);

  function getSpaceBetween(width: number): number {
    if (width <= 1000) {
      return 10;
    } else if (width > 1000 && width <= 1400) {
      return 20;
    } else {
      return 40;
    }
  }

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout | null;
    return (...args: any[]) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleResize = useCallback(
    debounce(() => {
      setWindowWidth(window.innerWidth);
      setSpaceBetween(getSpaceBetween(window.innerWidth));
    }, 200),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setSpaceBetween(getSpaceBetween(window.innerWidth));
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [handleResize]);

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
