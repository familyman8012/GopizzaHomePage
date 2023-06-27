import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { mobileHeader } from "MobxFarm/store";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { HeadMenuUrl, HeadAsideUrl, FooterMenu } from "./constant";
import FooterMobile from "./FooterMobile";
import { HeaderWrap, MobileHeaderWrap } from "./style";

const mobileMenu = ["브랜드", "가맹안내"];

const MobileHeader = () => {
  const [showMobileLayer, setshowMobileLayer] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState("");
  const router = useRouter();

  const brandSubmenus = [
    { name: "브랜드 소개", url: "/brand" },
    { name: "메뉴", url: "/menu" },
    { name: "매장찾기", url: "/find" },
    { name: "이벤트", url: "/event" },
    { name: "단체/제휴문의", url: "/order" },
  ];
  const franchiseSubmenus = [
    { name: "창업경쟁력", url: "/start" },
    { name: "창업안내", url: "/start/guide" },
    { name: "혁신기술력", url: "/start/technology" },
    { name: "CEO&언론보도", url: "/start/media" },
    { name: "가맹문의", url: "/start/inquiry" },
  ];

  useEffect(() => {
    router.asPath.includes("/start") ? setIsActiveMenu("franchise") : setIsActiveMenu("brand");
  }, [router.asPath]);

  const handlerMenu = useCallback(
    (menu: string) => {
      if (isActiveMenu === menu) {
        setIsActiveMenu("");
      } else {
        setIsActiveMenu(menu);
      }
    },
    [isActiveMenu]
  );

  const handlerMobileMenu = useCallback(() => {
    window.scrollTo(0, 0);
    setshowMobileLayer((prev) => !prev);
    showMobileLayer ? document.body.classList.remove("overflowhidden") : document.body.classList.add("overflowhidden");
  }, [showMobileLayer]);

  const handlerMobileMoveMenu = useCallback((url: string) => {
    document.body.classList.remove("overflowhidden");
    router.push(url);
    setshowMobileLayer(false);
  }, []);

  return (
    <MobileHeaderWrap className={showMobileLayer ? "on" : ""}>
      <div className="header">
        <h1
          onClick={() => {
            handlerMobileMoveMenu("/main");
          }}
        >
          <span className="hiddenZoneV">GOPIZZA</span>
        </h1>
        <div className="right">
          <span
            className="link_find"
            onClick={() => {
              handlerMobileMoveMenu("/find");
            }}
          >
            <span className="hiddenZoneV">매장찾기</span>
          </span>
          <button type="button" className={`btn_menu ${showMobileLayer ? "on" : ""}`} onClick={handlerMobileMenu}>
            <span className="hiddenZoneV">메뉴</span>
          </button>
        </div>
      </div>
      <div className="layer_menu">
        <div className="menu_area">
          {mobileMenu.map((el) => (
            <div key={el} className={el === "브랜드" ? (isActiveMenu === "brand" ? "active" : "") : isActiveMenu === "franchise" ? "active" : ""}>
              <button onClick={() => handlerMenu(el === "브랜드" ? "brand" : "franchise")}>{el}</button>
              <ul className="list_submenu">
                {(el === "브랜드" ? brandSubmenus : franchiseSubmenus).map((submenu) => (
                  <li
                    key={submenu.name}
                    onClick={() => {
                      handlerMobileMoveMenu(submenu.url);
                    }}
                  >
                    {submenu.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bnr">
          <div className="txt">
            가맹문의 전화
            <br />
            070-7121-1092
          </div>
        </div>
        <FooterMobile />
      </div>
    </MobileHeaderWrap>
  );
};

function Header() {
  return (
    <>
      <HeaderWrap>
        <MobileHeader />
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
        </div>
      </HeaderWrap>
    </>
  );
}

export default observer(Header);
