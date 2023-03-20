import BnrOpen from "ComponentsFarm/pageComp/start/guide/BnrOpen";
import Cost from "ComponentsFarm/pageComp/start/guide/Cost";
import Process from "ComponentsFarm/pageComp/start/guide/Process";
import RequireTime from "ComponentsFarm/pageComp/start/guide/RequireTime";
import { Content } from "ComponentsFarm/pageComp/start/style";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import BtnInquiry from "ComponentsFarm/pageComp/start/BtnInquiry";

function Info() {
  return (
    <StartLayout className="info">
      <Content>
        <Cost />
        <BnrOpen />
        <Process />
        <RequireTime />
        <BtnInquiry />
      </Content>
    </StartLayout>
  );
}

export default Info;
