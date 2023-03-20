import VisibilitySensorVideo from "ComponentsFarm/common/VisibilitySensorVideo";
import { Goven1Wrap } from "./style";

function Goven1() {
  return (
    <Goven1Wrap>
      <div className="box_goven">
        <img
          src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/bg_make1.jpg"
          className="bgimg"
          alt=""
        />
        <span className="goven_wrap">
          {/* <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make3_1.webp" className="govenimg" alt="Goven" /> */}
          <VisibilitySensorVideo src="img_make3_1" />
          <span className="titleNo">03</span>
        </span>
      </div>
    </Goven1Wrap>
  );
}

export default Goven1;
