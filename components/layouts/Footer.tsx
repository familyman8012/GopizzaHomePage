import Privacy from "ComponentsFarm/popup/Privacy";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { FooterMenu, FooterPrivacy, Global, Sns } from "./constant";
import { FooterWrap } from "./style";

import styled from "@emotion/styled";
import Modal from "ComponentsFarm/common/Modal";
import DOMPurify from "isomorphic-dompurify";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import { mq } from "ComponentsFarm/common";

export const PrivacyWrap = styled.div`
  position: relative;
  width: 90%;
  max-width: 132rem;
  padding: 6.4rem 0 6.6rem;
  border-radius: 3rem;
  background: #fff;

  .box_info {
    overflow-y: scroll;
    width: 95%;
    height: 57.8rem;
    margin: 5.6rem auto 0;
    padding-right: 4.5rem;
    font-size: 1.6rem;
  }

  ${mq[0]} {
    width: calc(100vw - 40px);
    height: 438px;
    padding: 30px 0;
    border-radius: 10px;

    .tit {
      margin: 0 0 21px !important;
      font-size: 27px !important;
    }
    .box_info {
      overflow-y: auto;
      width: 100%;
      max-height: calc(100% - 60px);
      height: auto;
      margin: 0 auto;
      padding: 0 30px;
      font-size: 12px;
    }
  }
`;

function Footer() {
  const popref = useRef<any>(null);
  const [privacyIndex, setprivacyIndex] = useState(0);

  const [open, setOpen] = useState(false);
  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

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
                  setprivacyIndex(0);
                  openStoreModal();
                }}
              >
                {FooterPrivacy.depth1}
              </span>
            </dt>
            {FooterPrivacy.depth2?.map((item, j) => (
              <dd key={j}>
                <span
                  onClick={() => {
                    setprivacyIndex(j + 1);
                    openStoreModal();
                  }}
                >
                  {item}
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
        <div className="mobile_bottom">
          <ul className="menuArea">
            {FooterMenu.map((el, i) => (
              <li key={i}>
                <Link href={el.url}>{el.depth1}</Link>
              </li>
            ))}
            <li>
              <Link href="/start">가맹문의</Link>
            </li>
          </ul>
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
      <Modal open={open} onClose={close}>
        <PrivacyWrap>
          <p className="tit">{PrivacyArr[privacyIndex].title}</p>
          <div className="box_info">
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(PrivacyArr[privacyIndex].txt) }} />
          </div>
          <button className="btn_close" onClick={close}>
            <span className="hiddenZoneV">닫기</span>
          </button>
        </PrivacyWrap>
      </Modal>
      <Privacy popref={popref} index={privacyIndex} />
    </FooterWrap>
  );
}

export default Footer;
