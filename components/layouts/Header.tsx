import styled from "@emotion/styled";
import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { mobileHeader } from "MobxFarm/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { HeadMenuUrl, HeadAsideUrl, FooterMenu } from "./constant";
import { HeaderWrap } from "./style";

export const TopBanner = styled.div`
  display: none;
  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 31px;
    padding: 0 13.5px;
    background-color: #171c8f;

    span {
      color: #ffce00;
      font-size: 14px;
      line-height: 13px;

      padding-left: 22.5px;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_mobile_not.svg") no-repeat left top / 14.5px 13px;
    }
  }
`;

function Header() {
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
      <HeaderWrap className={hiddenPopMobile ? `off` : ""}>
        <div className="inner">
          <Link href="/main">
            <h1>
              <span className="hiddenZoneV">GOPIZZA</span>
            </h1>
          </Link>
          <nav className="menuArea">
            {HeadMenuUrl.map((el, i) => (
              <Link key={i} href={el.url}>
                {el.menuName}
              </Link>
            ))}
          </nav>
          <aside>
            {HeadAsideUrl.map((el, i) => (
              <Link
                key={i}
                href={el.url}
                onClick={(e) => {
                  if (el.menuName === "인재채용") {
                    e.preventDefault();
                    alert("준비 중입니다.");
                  }
                }}
              >
                {el.menuName}
              </Link>
            ))}
          </aside>
          <button className={`btn_mobile_menu ${mobileHeader.open ? "on" : ""}`} onClick={() => runInAction(() => (mobileHeader.open = !mobileHeader.open))}>
            <span className="hiddenZoneV">open</span>
          </button>
        </div>
        <div className={`layer_mobile_menu ${mobileHeader.open ? "on" : ""}`}>
          <Link href="/start" className="link_start">
            <span className="txt">가맹문의 바로가기</span>
          </Link>
          <div className="wrap_menuBox">
            {FooterMenu.map((el, i) => (
              <dl className="menuBox" key={i}>
                <dt>
                  <Link href={el.url}>{el.depth1}</Link>
                </dt>
                {el.depth2?.map((item, j) => (
                  <dd key={j}>
                    <Link href={item.url}>{item.menuName}</Link>
                  </dd>
                ))}
              </dl>
            ))}
          </div>
        </div>
      </HeaderWrap>
    </>
  );
}

export default observer(Header);
