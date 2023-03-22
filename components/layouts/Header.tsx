import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { HeadMenuUrl, HeadAsideUrl } from "./constant";
import { HeaderWrap } from "./style";

function Header() {
  const router = useRouter();
  const [hiddenPopMobile, setHiddenPopMobile] = useState(false);
  const handlerShowPopMobile = useCallback(() => {
    document.body.classList.add("webShow");
  }, []);
  return (
    <>
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
        </div>
        <div className="pop_mobile_not">
          <div className="inner_content">
            <div className="box_txt">
              <h2>모바일 최적화 준비중</h2>
              <p>
                현재는 모바일 최적화 준비중으로
                <br />
                모바일 환경을 지원하고 있지 않습니다.
              </p>
            </div>
            <button className="btn_back" onClick={() => router.back()}>
              뒤로가기
            </button>
            <button className="show_page" onClick={() => handlerShowPopMobile()}>
              웹 페이지로 살펴보기 &gt;
            </button>
          </div>
        </div>
      </HeaderWrap>
    </>
  );
}

export default Header;
