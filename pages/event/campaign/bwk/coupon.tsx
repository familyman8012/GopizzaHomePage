import React, { ReactElement, useEffect, useState } from "react";
import { BwkPromotionBeforeModal, CouponWrap, Dimm } from "./style";
import Link from "next/link";

const Coupon = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    setIsRegistered(!!localStorage.getItem("bwk_campaign_reg"));
  }, []);

  if (isRegistered) {
    return (
      <div>
        <Dimm />
        <CouponWrap>
          <img src="/images/event/campaign/bwk/bwk3_black.png" alt="Promotion" />
        </CouponWrap>
      </div>
    );
  } else {
    return (
      <>
        <Dimm />
        <BwkPromotionBeforeModal>
          <h2>이벤트 안내</h2>
          <p>
            이벤트에 응모하시면
            <br />
            <strong>무료 쿠폰을 발급</strong> 받으실 수 있습니다.
          </p>
          <Link href="/event/campaign/bwk" className="btn_submit">
            무료 쿠폰 발급받기
          </Link>
        </BwkPromotionBeforeModal>
      </>
    );
  }
};

export default Coupon;

Coupon.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
