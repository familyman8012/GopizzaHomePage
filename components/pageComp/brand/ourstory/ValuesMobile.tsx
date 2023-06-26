import dynamic from "next/dynamic";
import { ValuesMobileWrap } from "./style";
const Carousel = dynamic(
  () => import("3d-react-carousal").then((mod) => mod.Carousel),
  { ssr: false } // This will make the component only loaded in client side
);

function ValuesMobile() {
  let slides = [
    <img key="1" src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/mobile/img_values1x2.webp" alt="1" />,
    <img key="2" src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/mobile/img_values2x2.webp" alt="2" />,
    <img key="3" src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/ourstory/mobile/img_values3x2.webp" alt="1" />,
  ];
  return (
    <ValuesMobileWrap>
      <h4>VALUES</h4>
      {/* @ts-ignore */}
      <Carousel slides={slides} />
    </ValuesMobileWrap>
  );
}

export default ValuesMobile;
