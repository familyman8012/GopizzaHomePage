import styled from "@emotion/styled";
import Dialog from "ComponentsFarm/common/Dialog";
import Modal from "ComponentsFarm/common/Modal";
import DOMPurify from "isomorphic-dompurify";
import { useCallback, useState } from "react";
import { PrivacyArr } from "./PrivacyContent";

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
`;

function Privacy({ popref, index }: any) {
  // store 팝업
  const [open, setOpen] = useState(false);
  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Modal open={open} onClose={close}>
      <PrivacyWrap>
        <p className="tit">{PrivacyArr[index].title}</p>
        <div className="box_info">
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(PrivacyArr[index].txt) }} />
        </div>
        <button
          className="btn_close"
          onClick={() => {
            close();
          }}
        >
          <span className="hiddenZoneV">닫기</span>
        </button>
      </PrivacyWrap>
    </Modal>
  );
}

export default Privacy;
