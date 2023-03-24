import { IndexWrap } from "ComponentsFarm/pageComp/index/style";
import Link from "next/link";
import { ReactElement, useCallback, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { TopBanner } from "ComponentsFarm/layouts/Header";

function Index() {
  const router = useRouter();
  const [hiddenPopMobile, setHiddenPopMobile] = useState(false);
  const handlerShowPopMobile = useCallback(() => {
    document.body.classList.add("webShow");
  }, []);
  return (
    <>
      <TopBanner>
        <span className="txt">모바일 최적화 준비 중에 있습니다.</span>
      </TopBanner>
      <IndexWrap className={hiddenPopMobile ? `off` : ""}>
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
