import { fetchInstaFeed, fetchMainVisual, fetchYoutubeVisual } from "ApiFarm/home";
import { IInstarItem, IMainVisual, IYoutube } from "ApiFarm/interface/homeInterface";
import axios from "axios";
import BestMenu from "ComponentsFarm/pageComp/main/BestMenu";
import Competitiveness from "ComponentsFarm/pageComp/main/Competitiveness";
import Instagram from "ComponentsFarm/pageComp/main/Instagram";
import LinkBanner from "ComponentsFarm/pageComp/main/LinkBanner";
import MainVisual from "ComponentsFarm/pageComp/main/MainVisual";
import Order from "ComponentsFarm/pageComp/main/Order";
import Youtube from "ComponentsFarm/pageComp/main/Youtube";
import TodayPopup from "ComponentsFarm/popup/TodayPopup";

interface IMain {
  mainVisual: IMainVisual;
  youtube: IYoutube;
  feed: IInstarItem;
}

function Main({ mainVisual, youtube, feed }: IMain) {
  return (
    <>
      <main className="index">
        <MainVisual data={mainVisual} />
        <LinkBanner />
        <BestMenu />
        <Competitiveness />
        <Order />
        <Instagram feed={feed} />
        <Youtube data={youtube} />
      </main>
      {/* <TodayPopup
        href="https://gopizza.kr/event/campaign/infiltration"
        src="/images/event/campaign/infiltration/pop_531.png"
        alt="GOPIZZA 2023 전국! 고피자 침투!"
        width="74rem"
        height="74rem"
      /> */}
    </>
  );
}

export const getStaticProps = async () => {
  const [mainVisual, youtube, feed] = await Promise.all([fetchMainVisual(), fetchYoutubeVisual(), fetchInstaFeed()]);

  console.log("mainVisual", mainVisual);

  return {
    props: {
      mainVisual,
      youtube,
      feed,
    },
    revalidate: 10,
  };
};

export default Main;
