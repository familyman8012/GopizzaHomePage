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
      <TodayPopup href="https://youtu.be/Dwa4zg-tC0s" src="/images/start/info/pop_guide.png" alt="국내최초 창업비 네고!!! 1500만원 네고! 선착순 프로모션 혜택 보러가기" />
    </>
  );
}

export const getStaticProps = async () => {
  const [mainVisual, youtube, feed] = await Promise.all([fetchMainVisual(), fetchYoutubeVisual(), fetchInstaFeed()]);

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
