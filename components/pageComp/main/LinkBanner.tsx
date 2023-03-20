import Link from "next/link";
import { LinkBannerItem, LinkBannerWrap } from "./style";

function LinkBanner() {
  return (
    <LinkBannerWrap>
      <Link href="/find">
        <LinkBannerItem className="find">
          <span className="txt">가까운 매장찾기</span>
        </LinkBannerItem>
      </Link>
      <Link href="/start/inquiry">
        <LinkBannerItem className="inquiry">
          <span className="txt">가맹 문의하기</span>
        </LinkBannerItem>
      </Link>
    </LinkBannerWrap>
  );
}

export default LinkBanner;
