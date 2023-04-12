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

interface IMain {
  mainVisual: IMainVisual;
  youtube: IYoutube;
  feed: IInstarItem;
}

function Main({ mainVisual, youtube, feed }: IMain) {
  return (
    <main className="index">
      <MainVisual data={mainVisual} />
      <LinkBanner />
      <BestMenu />
      <Competitiveness />
      <Order />
      <Instagram feed={feed} />
      <Youtube data={youtube} />
    </main>
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
