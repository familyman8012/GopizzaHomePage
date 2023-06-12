import { Goven2Wrap } from "./style";

function Goven2() {
  return (
    <Goven2Wrap>
      <div className="inner">
        <div className="box_txt">
          <h4>
            <span className="titleNo">03</span>
            <span className="tit">GOVEN</span>
          </h4>
          <p>
            고피자에서만 만나볼 수 있는 AI오븐
            <br className="mobile_line" /> ‘고븐’은 특별합니다.
            <br />
            맛있는 피자가 완성되는 최적의 온도를 유지하며
            <br className="mobile_line" /> <strong>가장 완벽한</strong>
            <br className="pc_line" />
            <strong>1인피자의 경험을 제공합니다.</strong>
          </p>
        </div>
        <div className="thumb">
          <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make3_2.webp" alt="Goven" />
        </div>
      </div>
    </Goven2Wrap>
  );
}

export default Goven2;
