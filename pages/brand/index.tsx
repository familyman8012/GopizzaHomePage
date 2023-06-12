import BrandLayout from "ComponentsFarm/layouts/pageLayouts/BrandLayout";
import dynamic from "next/dynamic";
import BrandBi from "ComponentsFarm/pageComp/brand/ourstory/BrandBi";
import KeepGoing from "ComponentsFarm/pageComp/brand/ourstory/KeepGoing";
import Values from "ComponentsFarm/pageComp/brand/ourstory/Values";
import YouWantPizza from "ComponentsFarm/pageComp/brand/ourstory/YouWantPizza";
import { Content } from "ComponentsFarm/pageComp/brand/style";
import ValuesMobile from "ComponentsFarm/pageComp/brand/ourstory/ValuesMobile";

const Carousel = dynamic(
  () => import("3d-react-carousal").then((mod) => mod.Carousel),
  { ssr: false } // This will make the component only loaded in client side
);

function Index() {
  let slides = [
    <img key="1" src="/images/brand/ourstory/mobile/img_values1x2.webp" alt="1" />,
    <img key="2" src="/images/brand/ourstory/mobile/img_values2x2.webp" alt="2" />,
    <img key="3" src="/images/brand/ourstory/mobile/img_values3x2.webp" alt="1" />,
  ];
  return (
    <BrandLayout index={0}>
      <Content>
        <YouWantPizza />
        <Values />
        <ValuesMobile />
        <KeepGoing />
        <BrandBi />
      </Content>
    </BrandLayout>
  );
}

export default Index;
