import Link from "next/link";
import { OrderItem, OrderWrap } from "./style";

const orderChannerl = [
  { idx: "bamin", name: "배달의 민족", linkUrl: "#" },
  { idx: "yogiyo", name: "요기요", linkUrl: "#" },
  { idx: "coupang", name: "쿠팡", linkUrl: "#" },
  { idx: "ddangyo", name: "땡겨요", linkUrl: "#" },
];

function Order() {
  return (
    <OrderWrap>
      <OrderItem className="order">
        <h2 className="subTitle">배달 주문</h2>
        <ul className="list_order">
          {orderChannerl.map((el) => (
            <li key={el.idx} className={el.idx}>
              <span className="hiddenZoneV">{el.name}</span>
            </li>
          ))}
        </ul>
        <span className="go_txt">가까운 고피자 매장을 찾아보세요</span>
      </OrderItem>
      <Link href="/order">
        <OrderItem className="group">
          <h2 className="subTitle">단체주문상담</h2>
          <p className="tel">1800-8972</p>
          <span className="go_txt go_link">상담신청 바로가기</span>
        </OrderItem>
      </Link>
    </OrderWrap>
  );
}

export default Order;
