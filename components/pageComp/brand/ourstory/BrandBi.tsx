import Image from "next/image";
import { BrandBiWrap } from "./style";

function BrandBi() {
  return (
    <BrandBiWrap>
      <h4>BRAND IDENTITY</h4>
      <p className="pc">
        고피자의 타원형 심볼은 기존 피자의 한계를 넘어 완전히 새로운 피자의 시작을 상징합니다.
        <br />
        ‘도우’라는 캔버스 위 토핑에 따라 무한히 변화하는 피자의 특성처럼 끝없이 혁신하고 발전하는
        <br />
        고피자의 기업 문화와 다양한 고객의 취향을 반영합니다.
      </p>
      <p className="mobile">
        고피자의 타원형 심볼은 기존 피자의 한계를 넘어
        <br /> 완전히 새로운 피자의 시작을 상징합니다.
        <br />
        ‘도우’라는 캔버스 위 토핑에 따라 무한히 변화하는
        <br /> 피자의 특성처럼 끝없이 혁신하고 발전하는 고피자의 <br /> 기업 문화와 다양한 고객의 취향을 반영합니다.
      </p>
      <div className="type_img_sample">
        <div className="banner_2area">
          <picture>
            <source media="(max-width: 599px)" srcSet="/images/brand/ourstory/mobile/img_brandbi1.svg" />
            <source media="(min-width: 600px)" srcSet="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi1.svg" />
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi1.svg" alt="BRAND LOGO_SYMBOL VER." />
          </picture>
          <picture>
            <source media="(max-width: 599px)" srcSet="/images/brand/ourstory/mobile/img_brandbi2.svg" />
            <source media="(min-width: 600px)" srcSet="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi2.svg" />
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi2.svg" alt="BRAND LOGO_SYMBOL VER." />
          </picture>
        </div>
        <div className="brand_slogan">
          <picture>
            <source media="(max-width: 599px)" srcSet="/images/brand/ourstory/mobile/img_brandbi3x2.webp" />
            <source media="(min-width: 600px)" srcSet="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi3x2.webp" />
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi3x2.webp" alt="BRAND LOGO_SYMBOL VER." />
          </picture>
        </div>
        <div className="brand_color">
          <picture>
            <source media="(max-width: 599px)" srcSet="/images/brand/ourstory/mobile/img_brandbi4.svg" />
            <source media="(min-width: 600px)" srcSet="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi4.webp?v=3" />
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/img_brandbi4.webp?v=3"
              alt="[BRAND COLOR] PRIMARY ORANGE - 고피자의 열정과 도전 (RGB : 255 70 0, CMYK : 0 80 95 0, PANTONE : 02IC), PRIMARY NAVY - 피자에 임하는 마음가짐 (RGB : 23 28 143, CMYK : 100 92 15 0, PANTONE : 2746C)"
            />
          </picture>
        </div>
      </div>
    </BrandBiWrap>
  );
}

export default BrandBi;
