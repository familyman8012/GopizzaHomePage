import { useCallback, useRef, useState } from "react";
import Modal from "ComponentsFarm/common/Modal";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import DOMPurify from "isomorphic-dompurify";
import { FooterPrivacy, Global, Sns } from "./constant";
import { PrivacyWrap } from "./Footer";
import { FooterMobileWrap } from "./style";
import Privacy from "ComponentsFarm/popup/Privacy";

function FooterMobile() {
  const popref = useRef<any>(null);
  const [privacyIndex, setprivacyIndex] = useState(0);

  const [open, setOpen] = useState(false);
  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  console.log([FooterPrivacy.depth1, ...FooterPrivacy.depth2]);

  return (
    <FooterMobileWrap>
      <ul className="list_sns">
        {Sns.map((el) => (
          <li key={el.linkName} className={el.linkName}>
            <a target="_blank" href={el.url} rel="noreferrer">
              <span className="hiddenZoneV">{el.linkName}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="global">
        <div className="box_global">
          <h2>GOPIZZA GLOBAL</h2>
          <ul>
            {Global.map((el) => (
              <li key={el.menuName}>
                <a target="_blank" href={el.url} rel="noreferrer">
                  {el.menuName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="box_privacy">
        {[FooterPrivacy.depth1, ...FooterPrivacy.depth2]?.map((item, i) => (
          <li key={i}>
            <span
              onClick={() => {
                setprivacyIndex(i);
                openStoreModal();
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
      <address>
        주식회사 고피자 대표이사 임재원 사업자 등록번호. 571-87-00783
        <br />
        서울특별시 종로구 경희궁길15 고피자 글로벌 본사
        <br />
        T. 02-567-8972 E. gofficial@gopizza.kr
      </address>
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
    </FooterMobileWrap>
  );
}

export default FooterMobile;
