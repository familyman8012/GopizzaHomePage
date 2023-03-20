import Privacy from "ComponentsFarm/popup/Privacy";
import Link from "next/link";
import { useRef, useState } from "react";
import { FooterMenu, FooterPrivacy, Global, Sns } from "./constant";
import { FooterWrap } from "./style";

function Footer() {
  const popref = useRef<any>(null);
  const [privacyIndex, setprivacyIndex] = useState(0);

  return (
    <FooterWrap>
      <div className="inner">
        <div className="top">
          <h1>
            <span className="hiddenZoneV">GOPIZZA</span>
          </h1>
          <div className="menuArea">
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
        <div className="bottom">
          <dl className="box_privacy">
            <dt>
              <span
                onClick={() => {
                  document.body.classList.add("overflowhidden");
                  setprivacyIndex(0);
                  popref.current?.showModal();
                }}
              >
                {FooterPrivacy.depth1}
              </span>
            </dt>
            {FooterPrivacy.depth2?.map((item, j) => (
              <dd key={j}>
                <span
                  onClick={() => {
                    document.body.classList.add("overflowhidden");
                    setprivacyIndex(j + 1);
                    popref.current?.showModal();
                  }}
                >
                  {item.menuName}
                </span>
              </dd>
            ))}
          </dl>
          <div className="box_biz_info">
            <div className="company">
              주식회사 고피자
              <br />
              대표이사. 임재원
            </div>
            <address>
              사업자 등록번호. 571-87-00783 <br />
              서울특별시 종로구 경희궁길15 고피자 글로벌 본사
              <br />
              T. 02-567-8972 E. gofficial@gopizza.kr <br />
            </address>
          </div>
          <dl className="box_global">
            <dt>GOPIZZA GLOBAL</dt>
            {Global.map((el) => (
              <dd key={el.menuName}>
                <a target="_blank" href={el.url} rel="noreferrer">
                  {el.menuName}
                </a>
              </dd>
            ))}
          </dl>
          <ul className="list_sns">
            {Sns.map((el) => (
              <li key={el.linkName} className={el.linkName}>
                <a target="_blank" href={el.url} rel="noreferrer">
                  <span className="hiddenZoneV">{el.linkName}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Privacy popref={popref} index={privacyIndex} />
    </FooterWrap>
  );
}

export default Footer;
