import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Dialog from "ComponentsFarm/common/Dialog";
import { useRef } from "react";

export const NutrientWrap = styled.div`
  position: relative;
  width: 132rem;
  padding: 6.4rem 0 6.6rem;
  border-radius: 3rem;
  background: #fff;

  .box_info {
    overflow-y: scroll;
    width: 112.5rem;
    height: 57.8rem;
    margin: 5.6rem auto 0;
    padding-right: 4.5rem;
  }
`;

function Nutrient({ popref }: any) {
  return (
    <Dialog ref={popref}>
      <NutrientWrap>
        <p className="tit">영양성분 / 알레르기 / 원산지</p>
        <div className="box_info">
          <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/info_nutrientx2.webp" alt="고피자 영양분석표" />
        </div>
        <button
          className="btn_close"
          onClick={() => {
            document.body.classList.remove("overflowhidden");
            popref.current?.close();
          }}
        >
          <span className="hiddenZoneV">닫기</span>
        </button>
      </NutrientWrap>
    </Dialog>
  );
}

export default Nutrient;
