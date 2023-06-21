import { runInAction } from "mobx";
import { observer } from "mobx-react";
import { mobileHeader } from "MobxFarm/store";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { HeadMenuUrl, HeadAsideUrl, FooterMenu } from "./constant";
import { HeaderWrap } from "./style";

const mobileMenu = ["브랜드", "가맹안내"];

function Header() {
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
    setshowMobileLayer((prev) => !prev);
    showMobileLayer ? document.body.classList.remove("overflowhidden") : document.body.classList.add("overflowhidden");
  }, [showMobileLayer]);

  const handlerMobileMoveMenu = useCallback((url: string) => {
    document.body.classList.remove("overflowhidden");
    router.push(url);
    setshowMobileLayer(false);
  }, []);

  return (
    <>
      <HeaderWrap>
        <div className="wrap_mobile">
          <div className="inner_mobile">
            <Link href="/main">
              <h1>
                <span className="hiddenZoneV">GOPIZZA</span>
              </h1>
            </Link>
            <div className="right">
              <Link href="/find" className="link_find">
                <span className="hiddenZoneV">매장찾기</span>
              </Link>
              <button type="button" className={`btn_menu ${showMobileLayer ? "on" : ""}`} onClick={handlerMobileMenu}>
                <span className="hiddenZoneV">메뉴</span>
              </button>
            </div>
          </div>
          <div className={`layer_menu ${showMobileLayer ? "on" : ""}`}>
            {mobileMenu.map((el) => (
              <div key={el} className={el === "브랜드" ? (isActiveMenu === "brand" ? "active" : "") : isActiveMenu === "franchise" ? "active" : ""}>
                <button onClick={() => handlerMenu(el === "브랜드" ? "brand" : "franchise")}>{el}</button>
                <ul>
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
        </div>
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
