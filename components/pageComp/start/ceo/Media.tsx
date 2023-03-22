import { INews, NewsList } from "ApiFarm/interface/homeInterface";
import Paging from "ComponentsFarm/Paging";
import usePaging from "HookFarm/usePaging";
import dayjs from "dayjs";
import { MediaWrap } from "../style";
import { useRouter } from "next/router";

function Media({ news }: { news: INews }) {
  // 페이징
  const { totalPage, page, currentData, storesPerPage, handlePageChange } = usePaging(news.list, 5);

  return (
    <MediaWrap>
      <h4>언론보도 속 고피자</h4>
      <ul className="list">
        {currentData.map((el: NewsList) => (
          <li key={el.startup_press_idx}>
            <a target="_blank" href={el.landing_url} rel="noreferrer">
              <dl>
                <dt>{el.subject}</dt>
                <dd>
                  {/* <span className="date">{dayjs(el.created_date).format(`YYYY-MM-DD`)}</span> */}
                  <span className="cp">{el.company}</span>
                </dd>
              </dl>
            </a>
          </li>
        ))}
      </ul>
      {currentData.length !== 0 && <Paging page={page} PerPage={storesPerPage} count={totalPage} setPage={handlePageChange} />}
    </MediaWrap>
  );
}

export default Media;
