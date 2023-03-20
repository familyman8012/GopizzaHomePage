import VisibilitySensorVideo from "ComponentsFarm/common/VisibilitySensorVideo";
import ZoomImg from "ComponentsFarm/common/ZoomImg";

import { useState } from "react";

function SignatureDough() {
  return (
    <div className="box_how_make1">
      <VisibilitySensorVideo src="img_make1_1" />
      <div className="box_how_make1_2">
        <div className="box_txt">
          <h4>
            <span className="titleNo">01</span>
            <span className="tit">
              CRISPY BASAK
              <br />
              DOUGH
            </span>
          </h4>
          <p className="txt1">
            겉은 바삭하고 속은 쫄깃한
            <br />
            크리스피 빠삭 도우의 탄생!
            <br />
            <br />
            수많은 고객의 반응과 의견을 바탕으로 <br />
            지속적인 테스트를 거쳐 <br />
            자신있는 식감과 맛을 구현해냈습니다.
            <br />
            <br />
            고피자 도우 이노베이션 센터에서 <br />
            직접 생산부터 배송까지, <br />
            늘 한결같은 퀄리티를 유지하여 <br />
            언제나 바삭한 식감과 풍부한 도우의 맛을 <br />
            느끼실 수 있습니다!
          </p>
        </div>

        <ZoomImg
          imgUrl="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make2_2.webp"
          imgWidth={754}
          imgHeight={502}
          zoomWidth={370}
          zoomHeight={370}
          initX={250}
          initY={0}
        />
      </div>
    </div>
  );
}

export default SignatureDough;
