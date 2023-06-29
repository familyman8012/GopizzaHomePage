import React from "react";
import { SubMainVisualWrap } from "./style";
import { useRouter } from "next/router";

function SubMainVisual({ index, bgimg, txt1, txt2, subTxt }: { index: number; bgimg: string; txt1: string; txt2?: string; subTxt?: string }) {
  const router = useRouter();
  return (
    <SubMainVisualWrap bgimg={bgimg} className={`subMainVisual ${router.asPath.split("/")[2] === undefined ? "brand" : router.asPath.split("/")[2]}`}>
      {index === 0 ? (
        <span className="hiddenZoneV">THE PIZZA EVERYWHERE COMPANY - ESTD 2017</span>
      ) : (
        <>
          <span className="txt1">{txt1}</span>
          <span className="txt2">{txt2}</span>
        </>
      )}

      {subTxt && <em className="subTxt">{subTxt}</em>}
    </SubMainVisualWrap>
  );
}

export default SubMainVisual;
