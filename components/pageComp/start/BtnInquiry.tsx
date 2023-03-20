import Link from "next/link";
import React from "react";
import { BtnInquiryWrap } from "./style";

function BtnInquiry() {
  return (
    <Link href="/start/inquiry">
      <BtnInquiryWrap className="btn_inquiry">창업 문의하기</BtnInquiryWrap>
    </Link>
  );
}

export default BtnInquiry;
