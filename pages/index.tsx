import { IndexWrap } from "ComponentsFarm/pageComp/index/style";
import Link from "next/link";
import { ReactElement, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function Index() {
  return (
    <>
      <IndexWrap>
        <div className="box_goto">
          <div className="inner">
            <h1>BRAND</h1>
            <p>
              고피자의 메뉴와
              <br />
              매장을 찾고 계신가요?
            </p>
            <Link href="/main">
              <span className="txt">홈페이지</span>
            </Link>
          </div>
          <div className="inner_mobile">
            <h1>
              <span className="hiddenZoneV">GOPIZZA</span>
            </h1>
            <div className="btn_box">
              <div className="inner_btn">
                <Link href="/main">
                  <span className="txt">홈페이지 바로가기</span>
                </Link>
                <Link href="/start">
                  <span className="txt">가맹안내 바로가기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="box_goto">
          <div className="inner">
            <h1>FRANCHISE</h1>
            <p>
              고피자 창업을
              <br /> 고민하고 계신가요?
            </p>
            <Link href="/start">
              <span className="txt">프랜차이즈</span>
            </Link>
          </div>
        </div>
      </IndexWrap>
    </>
  );
}

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
