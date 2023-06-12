import VisibilitySensorVideo from "ComponentsFarm/common/VisibilitySensorVideo";
import { AiSmartWrap } from "./style";

function AiSmart() {
  return (
    <AiSmartWrap>
      <div className="inner">
        <h4 className="pc">
          <span className="titleNo">04</span>
          <span className="tit">
            AI SMART
            <br />
            <span className="txt_topping">TOPPING TABLE</span>
          </span>
        </h4>
        <div className="desc">
          <div className="thumb">
            {/* <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make4_1.webp" alt="AI SMART - TOPPING TABLE" /> */}
            <VisibilitySensorVideo src="img_make4_1" />
          </div>
          <h4 className="mobile">
            <span className="titleNo">04</span>
            <span className="tit">
              AI SMART
              <br />
              <span className="txt_topping">TOPPING TABLE</span>
            </span>
          </h4>
          <div className="thum2_txt">
            <div className="thumb2">
              <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make4_2.webp" alt="AI SMART - TOPPING TABLE" />
            </div>
            <p>
              스마트 토핑 테이블의 AI 기술은
              <br />
              모든 토핑 재료를 실시간으로 인식하고 <br />
              판단하여 초보자도 손쉬운 교육과
              <br />
              조리가 가능합니다.
              <br />
              <br />
              <strong>
                전세계 모든 지점에서 실패 없는 동일한 <br /> 양과 맛의 고피자를 맛볼수 있습니다!
              </strong>
            </p>
          </div>
        </div>
      </div>
    </AiSmartWrap>
  );
}

export default AiSmart;
