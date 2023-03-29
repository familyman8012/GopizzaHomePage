import React, { useRef } from "react";
import { css } from "@emotion/react";
import Dialog from "ComponentsFarm/common/Dialog";
import styled from "@emotion/styled";

export const TipWrap = styled.div`
  position: relative;
  width: 132rem;
  padding: 6.4rem 13.6rem 6.6rem;
  border-radius: 3rem;

  background: #fff;

  h2 {
    display: flex;
    width: 18.9rem;
    height: 4.8rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--color-orange);
    background-color: #ffece5;
  }
  ul {
    display: grid;
    gap: 1.4rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TipArr = [
  "1인 피자를 즐길 줄 아는 진정한 피자러버인 당신을 위해 - 피자 1판 + 프렌치 프라이 + 음료 1잔",
  "2인 각자 원하는 맛 골라서 나눠먹자! 양과 가성비 둘 다 챙기기 - 피자 2판 + 파스타 1개 + 음료2잔",
  "3인 ~  여럿이도 문제없GO! 취향존중 - 피자 2판 + 파스타 1개 + 떡볶이 1개 + 음료 3잔",
];

function Tip({ popref }: any) {
  return (
    <Dialog ref={popref}>
      <TipWrap>
        <div className="box_txt">
          <h2>더 맛있게 먹는 TIP</h2>
          <p className="tit">
            혼자서도, 다 같이도
            <br /> 항상 즐겁고 맛있는 고피자!
          </p>
        </div>
        <ul>
          {TipArr.map((el, i) => (
            <li key={i}>
              <img key={i} src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/tip${i + 1}x2.webp?v=2`} alt={el} />
            </li>
          ))}
        </ul>
        <button
          className="btn_close"
          onClick={() => {
            document.body.classList.remove("overflowhidden");
            popref.current?.close();
          }}
        >
          <span className="hiddenZoneV">닫기</span>
        </button>
      </TipWrap>
    </Dialog>
  );
}

export default Tip;
