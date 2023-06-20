import React from "react";
import { NeedWrap } from "./style";

function Need() {
  return (
    <NeedWrap>
      <h4>
        <span className="txt">고피자의 기술, 왜 필요할까요?</span>
      </h4>
      <ul>
        <li>
          <dl>
            <dt>Q. 크리스피 빠삭도우를 왜 개발하게 되셨나요?</dt>
            <dd>
              <span className="hiddenZoneV">상품팀 박종인 팀장</span>
              <strong>
                &quot;일정 시간이 지나도 도우의 바삭함과 풍미를 유지하여
                <br className="mobileline" /> 소비자들이
                <br className="pcline" />더 만족할 수 있는 제품을 제공하고자
                <br className="mobileline" /> 크리스피 빠삭도우를 개발하게 되었습니다.&quot;
                <br className="mobileline" />
              </strong>
              <br className="pcline" /> 도우를 생산하는 공정이 많은 부분 개선되고 새로운
              <br className="mobileline" /> 공정을 도입하면서 도우의 일정한 모양 뿐만 아니라
              <br className="mobileline" />
              <br className="pcline" /> 제품의 퀄리티가 상향 평준화 되어 매장을 운영하시는
              <br className="mobileline" /> 점주님들에게 안정적인 도우를 공급함으로써
              <br className="mobileline" />
              <br className="pcline" />
              제품에 대한 신뢰와 소비자들에게도 만족스런 제품을
              <br className="mobileline" /> 공급 할 수 있을것으로 생각 됩니다.
              <br className="mobileline" />
              <br className="pcline" />
              지속적으로 소비자들의 의견을 모니터링 하면서 니즈에 <br className="mobileline" /> 맞는 도우에 대한 연구/개발을 할 예정입니다.
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>Q1. 고븐을 왜 개발하게 되셨나요?</dt>
            <dd>
              <span className="hiddenZoneV">미래기술연구소 이범진 소장</span>
              고븐은 고피자의 모든 제품을 만들어내는 고피자의
              <br className="mobileline" />
              심장과도 같은 핵심 제품입니다.
              <br className="mobileline" />
              창업 이래로 맛있는 피자를 만들기
              <br className="pcline" />
              위해 굉장히 많은
              <br className="mobileline" />
              업그레이드를 시도하였고, 그 결과 최고의 우리 피자를
              <br className="mobileline" />
              생산할 수 있는 고븐이 탄생하게 되었습니다. <br />
              쉽지 않은 여정이었지만 이제 드디어 우리의 고븐이
              <br className="mobileline" />
              날개를 달고 국내, 해외까지 날아다니고 있습니다.
            </dd>
            <dt>Q2. 고봇을 왜 개발하게 되셨나요?</dt>
            <dd>
              주방에서의 크루 및 점주님들의 어려움을 알게되면서,
              <br className="mobileline" />
              이에 대한 도움을 드리기 위해 고봇은 발전해왔습니다.
              <br />
              피자 컷팅부터 소스 드리즐링, 파우더링, <br className="mobileline" />
              그리고 고객에게 전달되기 전까지 온열보관 등의 <br className="mobileline" /> 반복 작업으로 인한 고생을
              <br className="pcline" />
              덜어주고 있습니다. <br className="mobileline" /> 추후에는 포장과 더불어 손님에게 제품을 <br className="mobileline" /> 제공해주는 것까지 업그레이드를
              계획하고 있습니다.
            </dd>
            <dt>Q3. AI스마트 토핑 테이블을 왜 개발하게 되셨나요?</dt>
            <dd>
              레시피 미숙지 등으로 토핑 작업에서 <br className="mobileline" /> 생기는 문제들을 AI기술로 해결하기 위해, <br className="mobileline" /> AI스마트 토핑{" "}
              <br className="pcline" />
              테이블을 개발하게 되었습니다. <br className="mobileline" /> 현재는 실시간 모니터링을 통해 만들어지는 <br className="mobileline" /> 피자의 Life-Cycle{" "}
              <br className="pcline" />
              을 확인할 뿐만 아니라, <br className="mobileline" /> 몇가지 피자에 대한 가이딩도 지원하고 있습니다. <br className="mobileline" /> 근 미래에는 모든 메뉴{" "}
              <br className="pcline" />
              더불어 개인화된 메뉴를 <br className="mobileline" /> 만들때도 척척 도움을 주는 AI 스마트 토핑 테이블 <br className="mobileline" /> 기대해주세요.
            </dd>
          </dl>
        </li>
      </ul>
    </NeedWrap>
  );
}

export default Need;
