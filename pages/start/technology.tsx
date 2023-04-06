import GopizzaTech from "ComponentsFarm/pageComp/start/technology/GopizzaTech";
import Need from "ComponentsFarm/pageComp/start/technology/Need";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import { css } from "@emotion/react";

function Technology() {
  return (
    <StartLayout>
      <div
        css={css`
          padding-bottom: 22.4rem;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/tech/bg_techx2.webp") no-repeat center bottom / 267.3rem 146.1rem;
          .btn_inquiry {
            margin: 16rem auto 0;
          }
        `}
      >
        <Need />
        <GopizzaTech />
      </div>
    </StartLayout>
  );
}

export default Technology;
