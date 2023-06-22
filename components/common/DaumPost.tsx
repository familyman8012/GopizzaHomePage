import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";
import { Dispatch, SetStateAction, useState } from "react";
import DaumPostcode from "react-daum-postcode";

interface IDaumPost {
  isOpenPost: boolean;
  setIsOpenPost: Dispatch<SetStateAction<boolean>>;
  setAddress?: Dispatch<SetStateAction<string>>;
  setAddressDetail: Dispatch<SetStateAction<{ address: string; buildingName: string }>>;
}

const DaumPost = ({ isOpenPost, setIsOpenPost, setAddress, setAddressDetail }: IDaumPost) => {
  const onCompletePost = (data: any) => {
    let fullAddress = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddressDetail({ address: data.address, buildingName: data.buildingName });
    setIsOpenPost(false);
  };

  return (
    <>
      {isOpenPost ? (
        <>
          <div
            css={css`
              position: fixed;
              z-index: 2;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background: rgba(0, 0, 0, 0.8);
            `}
          />
          <DaumPostPopWrap>
            <div className="head">
              <h1>우편번호 찾기</h1>
              <button onClick={() => setIsOpenPost(false)}>
                <span className="hiddenZoneV">닫기</span>
              </button>
            </div>
            <div className="body">
              <DaumPostcode autoClose onComplete={onCompletePost} />
            </div>
          </DaumPostPopWrap>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default DaumPost;

const DaumPostPopWrap = styled.div`
  position: fixed;
  z-index: 3;
  top: 50%;
  left: 50%;
  width: 40rem;
  margin: 3rem;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  .head {
    margin: 0;
    padding: 0;
    border: 0;
    position: relative;
    width: 100%;

    h1 {
      margin: 0;
      border: 0;
      padding: 9px 0;
      background: var(--color-orange);
      font-size: 16px;
      line-height: 22px;
      color: #fff;
      text-align: center;
    }

    button {
      padding: 0;
      border: 0;
      box-shadow: none;
      position: absolute;
      top: 50%;
      right: 0;
      width: 16px;
      height: 16px;
      margin: -8px 9px 0 0;
      font-size: 0;
      line-height: 0;
      cursor: pointer;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/btn_close_popup.svg") no-repeat left top / 100%;
    }
  }

  .body {
    border: 1px solid var(--color-orange);

    > div {
      display: block;
      position: relative;
      top: 0;
      width: 39.8rem;
      min-width: 300px;
      height: 46.8rem;
      min-height: 300px;
    }
  }

  @media (min-width: 200px) {
    width: 302px;
    .body > div {
      width: 300px;
      height: 468px !important;
    }
  }

  ${mq[0]} {
    margin: 0;
  }
`;
