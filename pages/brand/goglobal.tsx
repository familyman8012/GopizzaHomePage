import BrandLayout from "ComponentsFarm/layouts/pageLayouts/BrandLayout";
import { GlobalWrap } from "ComponentsFarm/pageComp/brand/goglobal/style";
import GlobalTxt from "ComponentsFarm/pageComp/brand/goglobal/GlobalTxt";
import GlobalList from "ComponentsFarm/pageComp/brand/goglobal/GlobalList";
import NextDestination from "ComponentsFarm/pageComp/brand/goglobal/NextDestination";
import { ReactElement } from "react";
import Header from "ComponentsFarm/layouts/Header";
import Footer from "ComponentsFarm/layouts/Footer";
import Copyright from "ComponentsFarm/layouts/Copyright";
import Top from "ComponentsFarm/layouts/Top";

function Index() {
  return (
    <BrandLayout index={2}>
      <GlobalWrap>
        <GlobalTxt />
        <GlobalList />
        <NextDestination />
      </GlobalWrap>
    </BrandLayout>
  );
}

export default Index;
