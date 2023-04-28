import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const PopWrap = styled.div`
  &:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const popupStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

const contentStyle = css`
  img {
    display: block;
    width: 108.4rem;
  }
`;

const BtnBox = styled.div`
  display: flex;
  button {
    width: 50%;
    height: 9rem;
    line-height: 9rem;
    font-size: 2.4rem;
    text-align: center;
    cursor: pointer;

    &:first-of-type {
      color: #000;
      background: #fff;
      border-radius: 0 0 0 3rem;
    }
    &:last-of-type {
      color: #fff;
      background: var(--color-orange);
      border-radius: 0 0 3rem 0;
    }
  }
`;

const TodayPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const popupShownToday = localStorage.getItem("popupShownToday");
    const currentDate = new Date().toDateString();

    if (popupShownToday !== currentDate) {
      setVisible(true);
    }
  }, []);

  const closePopup = () => {
    setVisible(false);
  };

  const dontShowToday = () => {
    localStorage.setItem("popupShownToday", new Date().toDateString());
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <PopWrap>
      <div css={popupStyle}>
        <div css={contentStyle}>
          <a target="_blank" href="https://youtu.be/Dwa4zg-tC0s" rel="noreferrer">
            <img src="/images/start/info/pop_guide.png" alt="국내최초 창업비 네고!!! 1500만원 네고! 선착순 프로모션 혜택 보러가기" />
          </a>
        </div>
        <BtnBox>
          <button onClick={dontShowToday}>오늘 하루 동안 열지 않기</button>
          <button onClick={closePopup}>닫기</button>
        </BtnBox>
      </div>
    </PopWrap>
  );
};

export default TodayPopup;
