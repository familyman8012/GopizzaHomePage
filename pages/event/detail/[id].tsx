import { GetStaticProps } from "next";
import EventLayout from "ComponentsFarm/layouts/pageLayouts/EventLayout";
import { Board, EventWrap } from "ComponentsFarm/pageComp/event/style";
import { fetchPromotion, fetchPromotionDetail } from "ApiFarm/home";
import { IPromotionDetailRes } from "ApiFarm/interface/homeInterface";
import dayjs from "dayjs";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";

function EventDetail({ promotionDetail }: { promotionDetail: IPromotionDetailRes }) {
  return (
    <EventWrap>
      <h2 className="tit">이벤트</h2>
      <ul className="list_tab en">
        <li className="on">
          <Link href="/event">
            <span>PROMOTION</span>
          </Link>
        </li>
        <li>
          <Link href="/event/video">
            <span>VIDEO</span>
          </Link>
        </li>
      </ul>
      <Board>
        {promotionDetail && (
          <>
            <div className="box_tit">
              <div className="txt">
                <h4>{promotionDetail.subject}</h4>
                <div className="date">
                  {dayjs(promotionDetail.promotion_date_start).format(`YYYY-MM-DD`)} -{dayjs(promotionDetail.promotion_date_end).format(`YYYY-MM-DD`)}
                </div>
              </div>
              <button>
                <span className="hiddenZoneV">공유</span>
              </button>
            </div>
            <div className="contents" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(promotionDetail.contents) }} />
          </>
        )}
      </Board>
      <Link href="/event" className="btn_go_list">
        목록보기
      </Link>
    </EventWrap>
  );
}

export default EventDetail;

export async function getStaticPaths() {
  const promotion = await fetchPromotion({ current_page_number: 1, per_page_number: 99, is_processing: 0 });
  const paths = promotion.list.map(({ brand_promotion_idx }: { brand_promotion_idx: number }) => ({
    params: { id: `${brand_promotion_idx}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const promotionDetail = await fetchPromotionDetail(Number(ctx.params?.id));

  return {
    props: {
      promotionDetail,
    },
    revalidate: 10,
  };
};
