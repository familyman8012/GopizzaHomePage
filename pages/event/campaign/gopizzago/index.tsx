import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { fetchInfiltration } from "ApiFarm/home";
import { IInfiltration } from "ApiFarm/interface/homeInterface";
import Modal from "ComponentsFarm/common/Modal";
import { PrivacyWrap } from "ComponentsFarm/popup/Privacy";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DOMPurify from "isomorphic-dompurify";
import { NextSeo } from "next-seo";
import { CampSeo } from "ComponentsFarm/Seo";
import { SwiperSlide } from "swiper/react";
import VisibilitySensorSwiper from "ComponentsFarm/pageComp/event/campaign/VisibilitySensorSwiper";

const CapmpaignWrap = styled.div`
  h2 {
    display: block !important;
  }
  label {
    width: fit-content;
  }
  img {
    display: block;
  }
  .box_inp {
    margin-bottom: 0;
  }
  .area_about {
    background: #131663;
  }

  .area_review {
    position: relative;
    padding-bottom: 110px;
    background: #ff4600;

    h2 {
      padding: 12.7rem 0 7.2rem;
    }

    @media (min-width: 1920px) {
      background-size: 100% 712px;
      background-position: center top;

      .img_txt_review {
        max-width: 1920px;
        margin: 0 auto;
      }
    }
    .wrap_swiper {
      max-width: 1008px;
      width: 80%;
      margin: 0 auto;
    }

    .swiper-slide {
      overflow: hidden;
    }
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
      width: var(--swiper-navigation-size);
      height: var(--swiper-navigation-size);
      margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
      &:after {
        font-size: 0;
      }
    }

    .swiper_btns {
      position: absolute;
      top: 63%;
      width: 100%;
      transform: translateY(-63%);

      .swiper-button-prev {
        left: 3%;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_slide_left.svg") center / 100%;
      }

      .swiper-button-next {
        left: auto !important;
        right: 3%;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/arrow_slide_right.svg") center / 100%;
      }
    }
  }

  .box_notice {
    width: 100%;
    background: #ff4600;
    .inner {
      width: fit-content;
      padding: 6rem;
      margin: 0 auto;

      h2 {
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 16px;
        color: #000;
      }
      li {
        font-size: 12px;
        color: #000;
        line-height: 2;
      }
    }
  }

  .area_register {
    background: #131663;

    h2 {
      padding: 12.7rem 0 0;
    }
  }

  .wrap_form {
    width: 600px;
    padding: 11.3rem 0 12.4rem;
    margin: 0 auto;

    label {
      padding: 0;
      margin-bottom: 8px;
      font-size: 14px;
      color: #e3e5ff;

      &:not(.label_agree) {
        display: block;
      }
    }

    input:not(#agree),
    textarea {
      width: 100%;
      color: #fff;
      /* border: 1px solid #00ff29; */
      border: 1px solid #151972;
      border-radius: 4px;
      background: #151972;
      padding: 0 14px;

      font-size: 14px;
      &:focus {
        outline: 1px solid #00ff29;
      }
    }
    input[type="text"],
    input[type="tel"] {
      height: 60px;
      margin-bottom: 32px;
    }
    input[type="checkbox"] {
      height: 1.6rem;
    }
    textarea {
      height: 15rem;
      padding: 0.8rem 1.4rem;
      margin-bottom: 3.2rem;
    }
    .box_aree {
      display: flex;
      label {
        margin-bottom: 0;
      }
    }
  }

  .openPrivacy {
    width: auto;
    height: auto;
    font-size: 14px;
    margin-left: 15px;
    padding: 0 10px;
    color: #e3e5ff;
    line-height: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    cursor: pointer;
    background: transparent;
  }
  .btn_apply {
    width: 100%;
    height: 72px;
    margin-top: 10px;
    cursor: pointer;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/btn_apply.webp") no-repeat center/cover !important;
  }

  //반응형

  @media (max-width: 600px) {
    .img_pc {
      display: none !important;
    }
    .area_register {
      h2 {
        padding: 4.8rem 0 4.55rem;
      }
    }
    .wrap_form {
      width: 80%;
      padding: 0 0 50px;
      .btn_apply {
        width: 280px;
        height: 50px;
      }
    }
    .area_review {
      padding-bottom: 35px;
      h2 {
        padding: 49px 0 41.55px;
      }
    }
    .box_notice .inner {
      padding: 30px 40px;
      h2,
      .list_notice li {
        color: #fff;
      }
    }
  }
  @media (min-width: 601px) {
    .img_mobile {
      display: none !important;
    }
  }

  /* @media (max-width: 799px) {
    .wrap_form {
      width: 30rem !important;
      margin-top: 50px;

      label,
      .openPrivacy {
        font-size: 14px !important;
      }
      .label_agree {
        width: fit-content;
      }

      .btn_apply {
        height: 36px;
      }
      input[type="text"],
      input[type="tel"] {
        width: 30rem !important;
      }
      textarea {
        width: 30rem !important;
      }
    }
  } */
`;

function Campaign() {
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  function getSpaceBetween(width: number): number {
    if (width <= 1000) {
      return 10;
    } else if (width > 1000 && width <= 1400) {
      return 20;
    } else {
      return 20;
    }
  }

  const [spaceBetween, setSpaceBetween] = useState<number>(getSpaceBetween(windowWidth));

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout | null;
    return (...args: any[]) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const handleResize = useCallback(
    debounce(() => {
      setWindowWidth(window.innerWidth);
      setSpaceBetween(getSpaceBetween(window.innerWidth));
    }, 200),
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [handleResize]);

  // 신청하기
  const Infiltration = useMutation(["IInfiltration"], (request: IInfiltration) => fetchInfiltration(request));

  const onSubmit = (sendData: any) => {
    if (isLoading) return;
    if (!agree) {
      return alert("개인정보 활용에 동의하신 후 신청가능합니다.");
    }

    setIsLoading(true); // Set loading state to true
    reset();

    Infiltration.mutate(sendData, {
      onSuccess: (data) => {
        alert("사연이 정상적으로 접수되었습니다.");
        console.log("data", data);
      },
      onError: (err) => {
        alert("문제가 발생하였습니다. 잠시 후 다시 신청해주시기 바랍니다.");
        console.log(err);
      },
      onSettled: () => {
        setIsLoading(false); // Set loading state to false after request is completed
      },
    });
  };

  return (
    <>
      <NextSeo {...CampSeo[0]} />
      <CapmpaignWrap>
        <div className="area_hero">
          <div className="img_pc">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/img_hero.webp"
              alt="전국 곳곳 고피자 간다. 행운의 선을 넘다."
            />
          </div>
          <div className="img_mobile">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/mobile/img_hero.webp"
              alt="전국 곳곳 고피자 간다. 행운의 선을 넘다."
            />
          </div>
        </div>
        <div className="area_process">
          <div className="img_pc">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/txt_process.webp"
              alt="초간단, 고피자가 간다 신청 방법"
            />
          </div>
          <div className="img_mobile">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/mobile/txt_process.webp"
              alt="초간단, 고피자가 간다 신청 방법"
            />
          </div>
          <ul className="hiddenZoneV">
            <li>사연접수 - 하단 사연 신청 폼 작성</li>
            <li>사연선정 - 접수 후 30일 이내 확인</li>
            <li>사연접수 - 문자메세지로 당첨 안내</li>
            <li>배달 조율 - 배달 방법 (트럭 or 배달)</li>
            <li>D-DAY - 고피자가 간다! 행사 당일</li>
          </ul>
        </div>
        <div className="area_about">
          <div className="img_pc">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/img_about.webp"
              className="img_about"
              alt="고피자 찐팬 모여라! 피자 90판 쏜다!"
            />
          </div>
          <div className="img_mobile">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/mobile/img_about.webp"
              className="img_about"
              alt="고피자 찐팬 모여라! 피자 90판 쏜다!"
            />
          </div>
        </div>
        <div className="area_register">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="img_pc">
              <img
                src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/title_register.webp"
                className="title_register"
                alt="당첨되면 무조건 드림! 사연신청하기"
              />
            </h2>
            <h2 className="img_mobile">
              <img
                src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/mobile/title_register.webp"
                className="title_register"
                alt="당첨되면 무조건 드림! 사연신청하기"
              />
            </h2>
            <div className="wrap_form">
              <div className="box_inp box_inp1">
                <label htmlFor="name">이름*</label>
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
                <label htmlFor="phone">연락처*</label>
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
                <label htmlFor="place">방문희망장소*</label>
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
                <label htmlFor="story">사연*</label>
                <textarea
                  id="story"
                  autoComplete="off"
                  className={`inp1 ${errors.content ? "on" : ""}`}
                  {...register("story", {
                    required: true,
                  })}
                ></textarea>
              </div>
              <div className="">
                <div className="box_aree">
                  <input type="checkbox" id="agree" name="agree" onChange={() => setAgree((prev) => !prev)} checked={agree} />
                  <label htmlFor="agree" className="label_agree">
                    개인 정보 활용에 동의합니다.
                  </label>
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
                <button type="submit" className="btn_apply" disabled={isLoading}>
                  <div className="hiddenZoneV">신청하기</div>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="area_review">
          <h2 className="img_pc">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/title_review.webp"
              className="img_txt_review"
              alt="어디든 찾아가는 고피자! 생생한 포토리뷰"
            />
          </h2>
          <h2 className="img_mobile">
            <img
              src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/gopizza_go2/mobile/title_review.webp"
              className="img_txt_review"
              alt="어디든 찾아가는 고피자! 생생한 포토리뷰"
            />
          </h2>
          <VisibilitySensorSwiper view={4} viewBetween={spaceBetween}>
            {Array.from({ length: 7 }).map((el, i) => (
              <SwiperSlide key={i}>
                <img src={`/images/event/campaign/infiltration/review_${i + 1}.webp`} alt="리뷰사진" />
              </SwiperSlide>
            ))}
            {Array.from({ length: 7 }).map((el, i) => (
              <SwiperSlide key={i}>
                <img src={`/images/event/campaign/infiltration/review_${i + 1}.webp`} alt="리뷰사진" />
              </SwiperSlide>
            ))}
          </VisibilitySensorSwiper>
        </div>
        <div className="box_notice">
          <div className="inner">
            <h2 className="tit_notice">이벤트 유의사항</h2>
            <ul className="list_notice">
              <li>- 당첨소식은 사연에 남겨주신 연락처를 통해 유선연락 드리며, 연락이 닿지 않아 생긴 불이익에 대해 당사는 책임을 지지 않습니다.</li>
              <li>- 제공되는 혜택은 고피자 제품 중 ‘페퍼로니 피자‘ 단일품목으로 제공되며 그 외 제품으로는 변경 불가합니다.</li>
              <li>- 피자는 1인 1판으로 제공되며 중복수령은 불가합니다.</li>
              <li>- 각 사연당 피자는 90판 무료제공이 기준이나, 사연당첨자와의 논의를 통해 변경될 수 있습니다.</li>
              <li>- 90판 이후의 피자는, 취식 수와 행사 환경에 따라 할인협의가 가능합니다.</li>
              <li>- 피자는 푸드트럭의 타 일정으로 인해 푸드트럭 뿐만이 아닌 근처 고피자 매장에서 조리 후 전달될 수 있습니다.</li>
              <li>- 날씨에 따라 빨리 상할 수 있으므로 피자를 수령하신 후엔 가급적 빠른 시간 내 취식하시기를 바랍니다.</li>
              <li>
                - 당첨된 응모사연의 혜택제공 현장은 고피자 현장스케치 영상 혹은 사진에 사용될 수 있으며 모든 혜택 수령자는
                <br />
                ‘고피자 카카오톡 채널‘의 친구추가를 완료한 후에 수령 가능합니다.
              </li>
              <li>- 응모되는 사연의 경우, 순수 창작물이어야 하며 나중에라도 타 응모에 기사용된 사연임이 밝혀질 시 당첨에서 제외될 수 있습니다.</li>
              <li>- 응모되는 사연의 경우 모든 법적인 문제가 없어야 하며 법적인 문제 발생 시 모든 책임은 응모자에게 있습니다.</li>
              <li>- 푸드트럭 이동 시, 방문 희망장소 내 푸드트럭 주차장소에 대한 협의를 요청할 수 있습니다.</li>
              <li>- 당첨 후 당첨자와 논의 시 ‘푸드트럭 주차 및 조리‘ or ‘인근 매장 조리 불가‘의 경우 당첨이 취소될 수 있습니다.</li>
              <li>- 보내주신 사연은 내부 논의와 오퍼레이션 가능여부를 검토 후 선정됩니다.</li>
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
