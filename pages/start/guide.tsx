import BnrOpen from "ComponentsFarm/pageComp/start/guide/BnrOpen";
import Cost from "ComponentsFarm/pageComp/start/guide/Cost";
import Process from "ComponentsFarm/pageComp/start/guide/Process";
import RequireTime from "ComponentsFarm/pageComp/start/guide/RequireTime";
import { Content } from "ComponentsFarm/pageComp/start/style";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import BtnInquiry from "ComponentsFarm/pageComp/start/BtnInquiry";
import TodayPopup from "ComponentsFarm/popup/TodayPopup";

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
      <TodayPopup href="https://youtu.be/Dwa4zg-tC0s" src="/images/start/info/pop_guide.png" alt="국내최초 창업비 네고!!! 1500만원 네고! 선착순 프로모션 혜택 보러가기" />
    </StartLayout>
  );
}

export default Info;
