import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

const PopWrap = styled.div`
  &:after {
    content: "";
    position: fixed;
    z-index: 10;
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

export const Content = styled.div<{ width: string; height: string }>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #ddd;
  border-radius: 3rem 3rem 0 0;
  img {
    display: block;
    width: ${({ width }) => width};
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

const TodayPopup = ({ href, src, alt, width, height }: { href: string; src: string; alt: string; width: string; height: string }) => {
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
        <Content width={width} height={height}>
          <a target="_blank" href={href} rel="noreferrer">
            <Image src={src} fill alt={alt} />
          </a>
        </Content>
        <BtnBox>
          <button onClick={dontShowToday}>오늘 하루 동안 열지 않기</button>
          <button onClick={closePopup}>닫기</button>
        </BtnBox>
      </div>
    </PopWrap>
  );
};

export default TodayPopup;
