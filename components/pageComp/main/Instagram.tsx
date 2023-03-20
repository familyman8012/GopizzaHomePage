import { css } from "@emotion/react";
import { IInstarItem } from "ApiFarm/interface/homeInterface";
import InstaFeed from "ComponentsFarm/common/InstaFeed";
import React from "react";
import { InstagramWrap } from "./style";

function Instagram({ feed }: { feed: IInstarItem }) {
  return (
    <InstagramWrap>
      <div className="tit_box">
        <h3>INSTAGRAM</h3>
        <em>@GOPIZZA.KR</em>
      </div>
      <InstaFeed feed={feed} />
    </InstagramWrap>
  );
}

export default Instagram;
