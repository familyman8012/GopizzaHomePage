import React, { useMemo } from "react";
import { IInstarItem } from "ApiFarm/interface/homeInterface";
import styled from "@emotion/styled";

function InstaFeed({ feed }: { feed: IInstarItem }) {
  const processCaption = useMemo(
    () => (caption: string) => {
      return (
        caption.replace(/#[\wㄱ-ㅎㅏ-ㅣ가-힣]+/g, "").length > 250
          ? `${caption.replace(/#[\wㄱ-ㅎㅏ-ㅣ가-힣]+/g, "").substring(0, 250)}...`
          : caption.replace(/#[\wㄱ-ㅎㅏ-ㅣ가-힣]+/g, "")
      )
        ?.split("\n")
        .map((txt: string, i: number) => {
          return (
            <React.Fragment key={`line${i}`}>
              {txt}
              <br />
            </React.Fragment>
          );
        });
    },
    []
  );

  return (
    <InstarWrap>
      {feed &&
        feed.data.map((image: any, i: number) => (
          <li key={image.id}>
            <a target="_blank" href={image.permalink} rel="noreferrer">
              <img src={image.media_url} alt="고피자 인스타그램" />
              <span className="txt">{processCaption(image.caption)}</span>
            </a>
          </li>
        ))}
    </InstarWrap>
  );
}

export default InstaFeed;

export const InstarWrap = styled.ul`
  display: flex;
  justify-content: center;
  li {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 40rem;
    height: 40rem;
    border-radius: 3rem;

    &:hover {
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
      }

      .txt {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        font-size: 1.4rem;
        line-height: 1.56;
        text-align: center;
        color: var(--color-white);
      }
    }
  }
`;
