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
  img {
    display: block;
  }
  .area_process {
    padding-bottom: 50px;
    background: url("/images/event/campaign/gopizza_go/bg_process.webp") no-repeat center bottom / auto 100%;

    .img_about {
      max-width: 1920px;
      margin: 0 auto;
    }

    @media (min-width: 1920px) {
      background-size: 100% 2720px;
      background-position: center top;
    }
  }

  .area_review {
    position: relative;
    padding-bottom: 110px;
    background: url("/images/event/campaign/gopizza_go/bg_review.webp") no-repeat center bottom / auto 100%;

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
    background: #000;

    .inner {
      width: fit-content;
      padding: 5rem;
      margin: 0 auto;

      h2 {
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 16px;
        color: #fff;
      }
      li {
        padding-left: 10px;
        font-size: 12px;
        color: #fff;
        line-height: 2;
        background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/dot.png") no-repeat left 12px;
      }
    }
  }

  .wrap_form {
    width: 60rem;
    margin: 10.6rem auto 0;

    label {
      padding: 0;
      margin-bottom: 1rem;
      font-size: 1.8rem;
      color: #fff;

      &:not(.label_agree) {
        display: block;
      }
    }

    input:not(#agree),
    textarea {
      width: 60rem;
      color: #fff;
      /* border: 1px solid #00ff29; */
      border: 1px solid rgb(0, 4, 100);
      border-radius: 0.4rem;
      background: rgb(0, 4, 100);
      padding: 0 1.4rem;

      font-size: 14px;
      &:focus {
        outline: 1px solid #00ff29;
      }
      @media (max-width: 800px) {
        font-size: 12px;
      }
      @media (max-width: 1200px) {
        font-size: 13px;
      }
    }
    input[type="text"] {
      height: 6rem;
    }
    input[type="checkbox"] {
      height: 1.6rem;
    }
    textarea {
      height: 15rem;
      padding: 0.8rem 1.4rem;
    }
  }

  .openPrivacy {
    width: auto;
    height: auto;
    font-size: 1.8rem;
    margin-left: 15px;
    padding: 0 10px;
    color: #fff;
    line-height: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    cursor: pointer;
    background: transparent;
  }
  .btn_apply {
    width: 100%;
    height: 7.2rem;
    margin-top: 2.8rem;
    cursor: pointer;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/event/campaign/infiltration/btn_apply.png") no-repeat center/cover !important;
  }

  //반응형
  @media (max-width: 799px) {
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
        height: 3.2rem;
      }
      textarea {
        width: 30rem !important;
        height: 10rem !important;
      }
    }
  }
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
          <img src="/images/event/campaign/gopizza_go/img_hero.webp" alt="고피자가 간다" />
        </div>
        <div className="area_about">
          <img src="/images/event/campaign/gopizza_go/img_about.webp" alt="사연 보내고 당첨되면 피자 90판을 고피자가 쏜다!" />
        </div>
        <div className="area_process">
          <img src="/images/event/campaign/gopizza_go/txt_process.webp" className="img_about" alt="초간단, 고피자가 간다 신청 방법" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tit_notice">
              <div className="hiddenZoneV">
                <h2>어디로든 찾아가는 고피자 사연들을 받습니다!</h2>
              </div>
            </div>
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
          <img src="/images/event/campaign/gopizza_go/txt_review.webp" className="img_txt_review" alt="놓치지 마세요. 생생한 포토리뷰" />
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
            <h2 className="tit_notice">유의사항 꼭 읽어주세요!</h2>
            <ul className="list_notice">
              <li>당첨소식은 사연에 남겨주신 연락처를 통해 유선연락 드리며, 연락이 닿지 않아 생긴 불이익에 대해 당사는 책임을 지지 않습니다.</li>
              <li>제공되는 혜택은 고피자 제품 중 ‘페퍼로니 피자‘ 단일품목으로 제공되며 그 외 제품으로는 변경 불가합니다.</li>
              <li>피자는 1인 1판으로 제공되며 중복수령은 불가합니다.</li>
              <li>각 사연당 피자는 90판 무료제공이 기준이나, 사연당첨자와의 논의를 통해 변경될 수 있습니다.</li>
              <li>90판 이후의 피자는, 취식 수와 행사 환경에 따라 할인협의가 가능합니다.</li>
              <li>피자는 푸드트럭의 타 일정으로 인해 푸드트럭 뿐만이 아닌 근처 고피자 매장에서 조리 후 전달될 수 있습니다.</li>
              <li>날씨에 따라 빨리 상할 수 있으므로 피자를 수령하신 후엔 가급적 빠른 시간 내 취식하시기를 바랍니다.</li>
              <li>
                당첨된 응모사연의 혜택제공 현장은 고피자 현장스케치 영상 혹은 사진에 사용될 수 있으며 모든 혜택 수령자는
                <br />
                ‘고피자 카카오톡 채널‘의 친구추가를 완료한 후에 수령 가능합니다.
              </li>
              <li>응모되는 사연의 경우, 순수 창작물이어야 하며 나중에라도 타 응모에 기사용된 사연임이 밝혀질 시 당첨에서 제외될 수 있습니다.</li>
              <li>응모되는 사연의 경우 모든 법적인 문제가 없어야 하며 법적인 문제 발생 시 모든 책임은 응모자에게 있습니다.</li>
              <li>푸드트럭 이동 시, 방문 희망장소 내 푸드트럭 주차장소에 대한 협의를 요청할 수 있습니다.</li>
              <li>당첨 후 당첨자와 논의 시 ‘푸드트럭 주차 및 조리‘ or ‘인근 매장 조리 불가‘의 경우 당첨이 취소될 수 있습니다.</li>
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
