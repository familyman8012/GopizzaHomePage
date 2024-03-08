import React from "react";
import { EasyBannerWrap } from "./style";

function EasyBanner() {
  return (
    <EasyBannerWrap>
      <p className="txt1">
        고피자가 기술을 개발하는 중요한 이유,
        <br />
        점주님들이 더 쉽고 행복하게 <br className="mobile_line" />
        일하실 수 있도록 돕고자 함입니다.
      </p>
      <p className="txt2">제품을 만드는 사람이 행복해야 고객에게 가장 좋은 제품이 제공된다고 믿기 때문입니다.</p>
    </EasyBannerWrap>
  );
}

export default EasyBanner;
