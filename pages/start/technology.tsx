import GopizzaTech from "ComponentsFarm/pageComp/start/technology/GopizzaTech";
import Need from "ComponentsFarm/pageComp/start/technology/Need";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import { css } from "@emotion/react";
import { TechWrap } from "ComponentsFarm/pageComp/start/technology/style";

function Technology() {
  return (
    <StartLayout>
      <TechWrap>
        <Need />
        <GopizzaTech />
      </TechWrap>
    </StartLayout>
  );
}

export default Technology;
