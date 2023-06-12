import { YouWantPizzaWrap } from "./style";

function YouWantPizza() {
  return (
    <YouWantPizzaWrap>
      <h4>고피자의 시작을 만든 질문</h4>
      <p className="txt_want">&apos;고객이 원하는 피자는 무엇일까?&apos;</p>
      <div className="wrap_list">
        <ul className="list">
          <li>
            <span className="txt">
              <span className="inner">
                피자를 패스트푸드처럼
                <br /> 빠르고 간편하게
              </span>
            </span>
          </li>
          <li>
            <span className="txt">
              <span className="inner">
                {" "}
                혼자서도 여럿이서도
                <br /> 즐길 수 있도록{" "}
              </span>
            </span>
          </li>
          <li>
            <span className="txt">
              <span className="inner">
                고피자는 고객이 있는 곳<br /> 언제 어디서든 함께 합니다.
              </span>
            </span>
          </li>
        </ul>
      </div>
    </YouWantPizzaWrap>
  );
}

export default YouWantPizza;
