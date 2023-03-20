import Link from "next/link";
import React from "react";
import { TopWrap } from "./style";

function Top({ className }: { className?: string }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <TopWrap className={className}>
      <a target="_blank" href="/event/campaign/infiltration" rel="noreferrer" className="floating_bnr">
        <span className="hiddenZoneV">2023 전국! 고피자 침투! 이벤트 참여하기</span>
      </a>
      <button onClick={scrollToTop}>TOP</button>
    </TopWrap>
  );
}

export default Top;
