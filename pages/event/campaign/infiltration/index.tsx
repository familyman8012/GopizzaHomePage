import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { fetchInfiltration } from "ApiFarm/home";
import { IInfiltration } from "ApiFarm/interface/homeInterface";
import Modal from "ComponentsFarm/common/Modal";
import { PrivacyWrap } from "ComponentsFarm/popup/Privacy";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import { ReactElement, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import DOMPurify from "isomorphic-dompurify";
import { NextSeo } from "next-seo";
import { CampSeo } from "ComponentsFarm/Seo";

const CapmpaignWrap = styled.div`
  .wrap_mobile {
    display: none;
  }

  .box_aree {
    display: flex;
    align-items: center;
    margin-top: 7px;
    input {
      width: 18px;
      height: 18px !important;
      accent-color: #00ff29;
    }
    label {
      width: fit-content;
      margin-left: 5px !important;
      margin-bottom: 0 !important;
      font-size: 16px;
      line-height: 18px;
      color: #00ff29 !important;
    }
    .openPrivacy {
      width: auto;
      height: auto;
      font-size: 1.8rem;
      margin-left: 15px;
      padding: 0 10px;
      line-height: 1;
      text-decoration: underline;
      cursor: pointer;
      background: transparent;
    }
  }

  .box_4 {
    &:after {
      content: "";
      position: absolute;
      right: 3%;
      bottom: 0;
      width: 44.2rem;
      height: 68.6rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/bg_person.webp") no-repeat left top / cover;
    }
  }

  img {
    display: block;
  }
  .box_4 {
    position: relative;
    .tit_notice {
      position: absolute;
      top: 4%;
      left: 50%;
      width: 80.6rem;
      height: 21.5rem;
      margin-left: -40rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/bg_txt.webp") no-repeat left top / cover;
    }

    .box_inp {
      max-width: 480px;
      position: absolute;
      left: 50%;
      width: 31%;
      transform: translateX(-50%);

      &.box_inp1 {
        top: 25.2%;
      }
      &.box_inp2 {
        top: calc(36.7% + 1.6rem);
      }
      &.box_inp3 {
        top: calc(48.2% + 3.2rem);
      }
      &.box_inp4 {
        top: calc(59.7% + 4.8rem);
        .btn_apply {
          width: 100%;
          height: 7.2rem;
          margin-top: 2.8rem;
          cursor: pointer;
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/btn_apply.png") no-repeat center / cover;
        }
      }

      label {
        padding: 0;
        margin-bottom: 1rem;
        font-size: 1.8rem;
        color: #fff;
      }

      input:not(#agree),
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
      padding: 5rem;
      margin: 0 auto;
      h2 {
        margin-bottom: 20px;
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
          background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/dot.png") no-repeat left 12px;
        }
      }
      @media (max-width: 800px) {
        .box_notice {
          padding: 0 10px;
          h2 {
            font-size: 14px !important;
          }
          .inner li {
            font-size: 12px !important;
            background-position: left 12px !important;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .wrap_mobile {
      display: block;
    }
    .wrap_pc {
      display: none;
    }
    label {
      font-size: 14px !important;
    }
    .box_aree {
      label {
        margin-left: 3px !important;
      }
      label,
      .openPrivacy {
        font-size: 12px !important;
      }
    }

    input {
      height: 6.5rem !important;
    }
    .box_4 {
      &:after {
        right: -2%;
      }
    }
  }
  @media (min-width: 600px) {
    .box_4 {
      .tit_notice {
        top: 6.75%;
      }
    }
    .wrap_form {
      position: absolute;
      top: 25.2%;
      left: 50%;
      width: fit-content;
      transform: translateX(-50%);

      .box_inp {
        position: static;
        width: 100%;
        margin-bottom: 20px;
        transform: none;
      }
    }
  }

  @media (max-width: 670px) {
    .box_4 {
      .wrap_mobile {
        display: none;
      }
      min-height: 572px;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/4_2mob.webp") no-repeat left top / cover;
      .tit_notice {
        width: 340px !important;
        margin-left: -170px !important;
      }
      label {
        margin-bottom: 5px !important;
      }
      input {
        height: 32px !important;
      }
      .box_inp {
        width: 250px !important;
      }
      textarea {
        height: 82px !important;
      }
      .btn_apply {
        min-height: 36px;
      }
    }
  }
  @media (max-width: 550px) {
    .box_4 .box_aree {
      margin: 10px 0 !important;
      input {
        height: auto !important;
      }
      label {
        margin-bottom: 0 !important;
      }
    }
    .openPrivacy {
      margin-left: 0 !important;
    }
    .box_4:after {
      right: -10% !important;
    }
    .box_4 .tit_notice {
      top: 31px;
      width: 320px !important;
      height: 70px;
      margin-left: -160px !important;
      transform: none;
    }
    .box_agree {
      margin: 20px 0px !important;
    }
  }
  @media (max-width: 500px) {
    .box_4:after {
      display: none;
    }
    .box_4 .box_inp.box_inp1 {
      top: 20.2%;
    }
    .box_4 .box_inp.box_inp2 {
      top: calc(31.7% + 1.6rem);
    }
    .box_4 .box_inp.box_inp3 {
      top: calc(43.2% + 3.2rem);
    }
    .box_4 .box_inp.box_inp4 {
      top: calc(54.7% + 4.8rem);
    }
    .box_4 .box_inp.box_inp4 .btn_apply {
      height: 36px;
      margin: 0;
    }
  }
`;

function Campaign() {
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // 신청하기
  const Infiltration = useMutation(["IInfiltration"], (request: IInfiltration) => fetchInfiltration(request));

  const onSubmit = (sendData: any) => {
    if (!agree) {
      return alert("개인정보 활용에 동의하신 후 신청가능합니다.");
    }
    console.log("sendData", sendData);
    Infiltration.mutate(sendData, {
      onSuccess: (data) => {
        alert("사연이 정상적으로 접수되었습니다.");
        console.log("data", data);
      },
      onError: (err) => {
        alert("문제가 발생하였습니다. 잠시 후 다시 신청해주시기 바랍니다.");
        console.log(err);
      },
    });
  };

  return (
    <>
      <NextSeo {...CampSeo[0]} />
      <CapmpaignWrap>
        <div className="box_1">
          <div className="wrap_pc">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/1.webp" alt="" />
          </div>
          <div className="wrap_mobile">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/1_mob.webp" alt="" />
          </div>
          <div className="hiddenZoneV">
            <h1>GOPIZZA</h1>
            <p>2023 전국! 고피자 침투!</p>
          </div>
        </div>
        <div className="box_2">
          <div className="wrap_pc">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/2.webp" alt="" />
          </div>
          <div className="wrap_mobile">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/2_mob.webp" alt="" />
          </div>
          <div className="hiddenZoneV">사연 보내고 당첨되면 매주 한 팀씩, 피자 90판 공짜로 쏜다!</div>
        </div>
        <div className="box_3">
          <div className="wrap_pc">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/3.webp" alt="" />
          </div>
          <div className="wrap_mobile">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/3_mob.webp" alt="" />
          </div>
          <div className="hiddenZoneV">
            전국 침투작전 소개 :
            <ol>
              <li>1. 사연접수 : 하단접수</li>
              <li>2. 사연선정 : 접수 후 30일 이내 확인</li>
              <li>3. 선정자 통보 : 문자로 메세지 발송</li>
              <li>4. 90판 배달 방법 조율 : (트럭 or 배달)</li>
              <li>5. 침투 D-day!</li>
            </ol>
          </div>
        </div>
        <form className="box_4" onSubmit={handleSubmit(onSubmit)}>
          <div className="wrap_pc">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/4_2.webp" alt="" />
          </div>
          <div className="wrap_mobile">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/4_2mob.webp" alt="" />
          </div>
          <div className="tit_notice">
            <div className="hiddenZoneV">
              <h2>사연들을 받습니다!</h2>
              <p>
                단 한명을 위한 사연부터 여러명을 위한 단체 사연까지!
                <br />
                고피자가 필요한 곳이라면 어디든 찾아갑니다. 지금 사연을 남겨주세요
              </p>
            </div>
          </div>
          <div className="wrap_form">
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
              <label htmlFor="place">방문장소</label>
              <input
                type="text"
                id="place"
                autoComplete="off"
                className={`inp1 ${errors.area ? "on" : ""}`}
                {...register("place", {
                  required: true,
                })}
              />
            </div>
            <div className="box_inp box_inp4">
              <label htmlFor="story">사연</label>
              <textarea
                id="story"
                autoComplete="off"
                className={`inp1 ${errors.content ? "on" : ""}`}
                {...register("story", {
                  required: true,
                })}
              ></textarea>
              <div className="box_aree">
                <input type="checkbox" id="agree" name="agree" onChange={() => setAgree((prev) => !prev)} checked={agree} />
                <label htmlFor="agree">개인 정보 활용에 동의합니다.</label>
                <button
                  type="button"
                  className="openPrivacy"
                  onClick={(e) => {
                    e.stopPropagation();
                    openStoreModal();
                  }}
                >
                  전문보기
                </button>
              </div>
              <button type="submit" className="btn_apply">
                <div className="hiddenZoneV">신청하기</div>
              </button>
            </div>
          </div>
        </form>
        <div className="box_5">
          <div className="wrap_pc">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/5.webp" alt="" />
          </div>
          <div className="wrap_mobile">
            <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/5_mob.webp" alt="" />
          </div>
          <div className="hiddenZoneV">침투 성공 후기! - 생생한 포토리뷰 확인하라구~</div>
        </div>
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
        <Modal open={open} onClose={close}>
          <PrivacyWrap>
            <p className="tit">{PrivacyArr[0].title}</p>
            <div className="box_info">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(PrivacyArr[0].txt) }} />
            </div>
            <button className="btn_close" onClick={close}>
              <span className="hiddenZoneV">닫기</span>
            </button>
          </PrivacyWrap>
        </Modal>
      </CapmpaignWrap>
    </>
  );
}

export default Campaign;

Campaign.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
