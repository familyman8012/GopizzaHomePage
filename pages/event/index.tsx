import { GetStaticProps } from "next";
import EventLayout from "ComponentsFarm/layouts/pageLayouts/EventLayout";
import { promotionList } from "ComponentsFarm/pageComp/event/constant";
import Link from "next/link";
import { fetchPromotion } from "ApiFarm/home";
import { IPromotionRes, PromotionList } from "ApiFarm/interface/homeInterface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

function Promotion({ promotion }: { promotion: IPromotionRes }) {
  const [live, setLive] = useState(true);
  const [promotionData, setPromotionData] = useState<PromotionList[]>([]);

  useEffect(() => {
    live ? setPromotionData(promotion.list.filter((el) => el.is_processing === 1)) : setPromotionData(promotion.list.filter((el) => el.is_processing === 2));
  }, [live, promotion.list]);

  return (
    <EventLayout>
      <ul className="filter">
        <li className={live ? "on" : ""}>
          <span onClick={() => setLive(true)}>진행중인 이벤트</span>
        </li>
        <li className={live ? "" : "on"}>
          <span onClick={() => setLive(false)}>종료된 이벤트</span>
        </li>
      </ul>
      {/* <span onClick={() => router.push(`?pageId=2`)}>test</span> */}
      <ul className="list_event promotion">
        {promotionData.map((el) => (
          <li key={el.brand_promotion_idx}>
            <Link href={`/event/detail/${el.brand_promotion_idx}`}>
              <Image src={el.image_url} fill alt={el.subject} />
            </Link>
          </li>
        ))}
      </ul>
    </EventLayout>
  );
}

export default Promotion;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const promotion = await fetchPromotion({ current_page_number: 1, per_page_number: 99, is_processing: 0 });

  return {
    props: {
      promotion,
    },
    revalidate: 10,
  };
};
