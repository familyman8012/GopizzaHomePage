import styled from "@emotion/styled";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

const CapmpaignWrap = styled.div`
  img {
    display: block;
  }
  .box_1 {
    height: 108rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/1.webp") no-repeat center / auto 100%;
  }
  .box_2 {
    height: 108rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/2.webp") no-repeat center / auto 100%;
  }
  .box_3 {
    position: relative;
    height: 108rem;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/3_2.webp") no-repeat center / auto 100%;
    .box_inp {
      max-width: 480px;
      position: absolute;
      left: 50%;
      width: 31%;
      transform: translateX(-50%);

      &.box_inp1 {
        top: 28.2%;
      }
      &.box_inp2 {
        top: 39.7%;
      }
      &.box_inp3 {
        top: 51.2%;
      }
      &.box_inp4 {
        top: 62.7%;
        button {
          width: 100%;
          height: 7.2rem;
          margin-top: 2.8rem;
          cursor: pointer;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/btn_apply.png") no-repeat center / auto 100%;
        }
      }

      label {
        padding: 0;
        margin-bottom: 2.4%;
        font-size: 14px;
        color: #fff;
      }

      input,
      textarea {
        max-width: 480px;
        width: 100%;
        color: #fff;
        /* border: 1px solid #00ff29; */
        border: 1px solid rgb(0, 4, 100);
        border-radius: 0.4rem;
        background: rgb(0, 4, 100);
        padding: 0 1.4rem;
        @media (max-width: 800px) {
          font-size: 12px;
        }
        @media (max-width: 1200px) {
          font-size: 13px;
        }
        font-size: 14px;
        &:focus {
          outline: 1px solid #00ff29;
        }
      }
      input {
        height: 6rem;
      }
      textarea {
        height: 15rem;
        padding: 0.8rem 1.4rem;
      }
    }
  }
  .box_notice {
    width: 100%;
    background: #202020;
    .inner {
      width: fit-content;
      padding: 5rem 0;
      margin: 0 auto;
      h2 {
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 16px;

        color: #00ff29;
      }
      ul {
        li {
          padding-left: 10px;
          font-size: 12px;
          color: #b0b0b0;
          line-height: 2;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/dot.png") no-repeat left 8px;
        }
      }
      @media (max-width: 800px) {
        h2 {
          font-size: 1.6rem;
        }
        ul li {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

function Campaign() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // 신청하기
  // const GropuOrder = useMutation(["groupOrder"], (request: IGroupOrderReq) => fetchGroupOrder(request));

  const onSubmit = (data: Record<string, string>) => {
    // GropuOrder.mutate(sendData, {
    //   onSuccess: (data) => {
    //     document.body.classList.add("overflowhidden");
    //     popref.current?.showModal();
    //     console.log("data", data);
    //     reset();
    //     setStartDate(null);
    //     setAddressDetail({ address: "", buildingName: "" });
    //   },
    //   onError: (err) => {
    //     alert("문제가 발생하였습니다. 잠시 후 다시 신청해주시기 바랍니다.");
    //     console.log(err);
    //   },
    // });
  };

  return (
    <CapmpaignWrap>
      <div className="box_1">
        <div className="hiddenZoneV">
          <h1>GOPIZZA</h1>
          <p>2023 전국! 고피자 침투!</p>
        </div>
      </div>
      <div className="box_2">
        <div className="hiddenZoneV">사연 보내고 당첨되면 매주 한 팀씩, 피자 90판 공짜로 쏜다!</div>
      </div>
      <form className="box_3" onSubmit={handleSubmit(onSubmit)}>
        <div className="hiddenZoneV">
          <h2>사연들을 받습니다!</h2>
          <p>
            단 한명을 위한 사연부터 여러명을 위한 단체 사연까지!
            <br />
            고피자가 필요한 곳이라면 어디든 찾아갑니다. 지금 사연을 남겨주세요
          </p>
        </div>
        <div className="box_inp box_inp1">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            className={`inp1 ${errors.name ? "on" : ""}`}
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div className="box_inp box_inp2">
          <label htmlFor="phone">연락처</label>
          <input
            type="tel"
            id="phone"
            autoComplete="off"
            className={`inp1 ${errors.phone ? "on" : ""}`}
            {...register("phone", {
              required: true,
            })}
          />
        </div>
        <div className="box_inp box_inp3">
          <label htmlFor="area">방문장소</label>
          <input
            type="text"
            id="area"
            autoComplete="off"
            className={`inp1 ${errors.area ? "on" : ""}`}
            {...register("area", {
              required: true,
            })}
          />
        </div>
        <div className="box_inp box_inp4">
          <label htmlFor="content">사연</label>
          <textarea
            id="content"
            autoComplete="off"
            className={`inp1 ${errors.content ? "on" : ""}`}
            {...register("content", {
              required: true,
            })}
          ></textarea>
          <button type="submit">
            <div className="hiddenZoneV">신청하기</div>
          </button>
        </div>
      </form>
      <div className="box_notice">
        <div className="inner">
          <h2 className="tit_notice">유의사항 꼭 읽어주세요!</h2>
          <ul className="list_notice">
            <li>당첨소식은 사연에 남겨주신 연락처를 통해 유선연락 드리며, 연락이 되지 않아 생긴 불이익에 대해 당사는 책임을 지지 않습니다.</li>
            <li>제공되는 혜택은 고피자 제품 중 ‘페퍼로니 피자’로 제공되며 그 외 제품으로는 변경 불가합니다.</li>
            <li>최대 1인 1판으로 제공되며 중복수령은 불가합니다.</li>
            <li>90판 이후 피자는 고피자 매장 기준의 현장가로 판매되나, 취식 수와 행사 환경에 따라 할인 협의가 가능합니다.</li>
            <li>피자는 푸드트럭 뿐만이 아닌 근처 고피자 매장에서 조리 후 전달될 수 있습니다.</li>
            <li>날씨에 따라 빨리 상할 수 있으므로 피자를 수령하신 후 가급적 빠른 시간내에 취식하시기를 바랍니다.</li>
            <li>
              당첨된 응모사연의 혜택제공 현장은 고피자 현장스케치 영상에 사용될 수 있으며 모든 혜택 수령자는
              <br />
              ‘초상권 동의서’와 ‘고피자 카카오톡 플러스 친구’의 친구추가가 완료된 후 수령 가능합니다.
            </li>
            <li>응모되는 사연의 경우, 순수 창작물이어야 하며 나중에라도 타 응모에 기사용된 사연임이 밝혀질 시 당첨에서 제외될 수 있습니다.</li>
            <li>응모되는 사연의 경우 모든 법적인 문제가 없어야 하며 법적인 문제 발생 시 모든 책임은 응모자에게 있습니다.</li>
            <li>푸드트럭 이동 시, 방문 희망장소 내 푸드트럭 주차장소에 대해 협의를 요청할 수 있습니다.</li>
            <li>당첨 후 논의 시 푸드트럭 주차 및 조리가 불가피 한 경우, 당첨이 취소될 수 있습니다.</li>
            <li>보내주신 사연은 내부 논의와 오퍼레이션 가능여부를 검토 후 선정됩니다.</li>
          </ul>
        </div>
      </div>
    </CapmpaignWrap>
  );
}

export default Campaign;

Campaign.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
