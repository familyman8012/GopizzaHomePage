import BrandLayout from "ComponentsFarm/layouts/pageLayouts/BrandLayout";
import BrandBi from "ComponentsFarm/pageComp/brand/ourstory/BrandBi";
import KeepGoing from "ComponentsFarm/pageComp/brand/ourstory/KeepGoing";
import Values from "ComponentsFarm/pageComp/brand/ourstory/Values";
import YouWantPizza from "ComponentsFarm/pageComp/brand/ourstory/YouWantPizza";
import { Content } from "ComponentsFarm/pageComp/brand/style";

function Index() {
  return (
    <BrandLayout index={0}>
      <Content>
        <YouWantPizza />
        <Values />
        <KeepGoing />
        <BrandBi />
      </Content>
    </BrandLayout>
  );
}

export default Index;
