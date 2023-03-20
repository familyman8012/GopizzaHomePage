import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Dialog from "ComponentsFarm/common/Dialog";
import React, { useRef } from "react";

export const ApplicationWrap = styled.div`
  position: relative;
  width: 72.9rem;
  padding: 6.4rem 0 6.6rem;
  text-align: center;
  border-radius: 3rem;
  background: #fff;

  .txt_success {
    margin: 0.8rem 0 5.1rem;
    font-size: 2.4rem;
  }

  .txt_notice {
    font-size: 1.6rem;
  }

  .btn_agree {
    margin-top: 3.6rem;
    width: 36rem;
    height: 8rem;
    color: #fff;
    font-size: 2.4rem;
    font-weight: 500;
    border-radius: 4rem;
    background-color: var(--color-bluedark);
  }
  .btn_close {
    top: auto;
    bottom: -11.2rem;
    left: 50%;
    right: auto;
    margin-left: -4rem;
  }
`;

function Application({ popref }: any) {
  return (
    <Dialog ref={popref}>
      <ApplicationWrap>
        <p className="tit">신청이 완료되었습니다.</p>
        <p className="txt_success">정상적으로 접수 처리되었습니다. 감사합니다.</p>
        <p className="txt_notice">
          추후 본사에서 진행하는 창업 프로모션에 관한 정보를 받아보시는데 동의하십니까?
          <br />
          동의 시 다양한 창업 혜택 정보를 기입하신 연락처 및 이메일로 받아보실 수 있습니다.
        </p>
        <button
          className="btn_agree"
          onClick={() => {
            document.body.classList.remove("overflowhidden");
            popref.current?.close();
          }}
        >
          동의하기
        </button>
        <button
          className="btn_close"
          onClick={() => {
            document.body.classList.remove("overflowhidden");
            popref.current?.close();
          }}
        >
          <span className="hiddenZoneV">닫기</span>
        </button>
      </ApplicationWrap>
    </Dialog>
  );
}

export default Application;
