import React, { useMemo } from "react";
import { IInstarItem } from "ApiFarm/interface/homeInterface";
import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

function InstaFeed({ feed }: { feed: IInstarItem }) {
  const processCaption = useMemo(
    () => (caption: string) => {
      return (caption.length > 240 ? `${caption.substring(0, 240)}...` : caption)?.split("\n").map((txt: string, i: number) => {
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
        feed.data.map((media: any, i: number) => {
          return (
            <li key={media.id}>
              {media.media_type === "VIDEO" ? (
                <a target="_blank" href={media.permalink} rel="noreferrer">
                  <video src={media.media_url} width="100%" height="100%" />
                  <span className="txt">{processCaption(media.caption)}</span>
                </a>
              ) : (
                <a target="_blank" href={media.permalink} rel="noreferrer">
                  <img src={media.media_url} alt="고피자 인스타그램" />
                  <span className="txt">{processCaption(media.caption)}</span>
                </a>
              )}
            </li>
          );
        })}
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

    img {
      height: 100%;
    }

    .txt {
      display: none;
    }

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

  ${mq[0]} {
    li {
      &:nth-of-type(3) {
        display: none;
      }

      &:hover {
        .txt {
          font-size: 9px;
        }
      }
    }
  }
`;
