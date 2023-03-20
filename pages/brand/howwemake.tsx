import BrandLayout from "ComponentsFarm/layouts/pageLayouts/BrandLayout";
import { HowWeMakeWrap, RedBox } from "ComponentsFarm/pageComp/brand/howwemake/style";
import SignatureDough from "ComponentsFarm/pageComp/brand/howwemake/SignatureDough";
import Fresh from "ComponentsFarm/pageComp/brand/howwemake/Fresh";
import Goven1 from "ComponentsFarm/pageComp/brand/howwemake/Goven1";
import Goven2 from "ComponentsFarm/pageComp/brand/howwemake/Goven2";
import AiSmart from "ComponentsFarm/pageComp/brand/howwemake/AiSmart";
import GobotStation from "ComponentsFarm/pageComp/brand/howwemake/GobotStation";
import EasyBanner from "ComponentsFarm/pageComp/brand/howwemake/EasyBanner";

function Index() {
  return (
    <BrandLayout index={1}>
      <HowWeMakeWrap>
        <SignatureDough />
        <Fresh />
      </HowWeMakeWrap>
      <Goven1 />
      <RedBox>
        <Goven2 />
        <AiSmart />
        <GobotStation />
      </RedBox>
      <EasyBanner />
    </BrandLayout>
  );
}

export default Index;
