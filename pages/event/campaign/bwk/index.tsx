import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { fetchBwk } from "ApiFarm/home";
import { IBwk } from "ApiFarm/interface/homeInterface";
import { CampSeo, CampSeo2 } from "ComponentsFarm/Seo";
import Modal from "ComponentsFarm/common/Modal";
import { PrivacyWrap } from "ComponentsFarm/popup/Privacy";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import DOMPurify from "isomorphic-dompurify";
import { NextSeo } from "next-seo";
import React, { ReactElement, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { BwkPromotionBeforeModal, BwkWrap, Dimm } from "../../../../components/pageComp/event/campaign/bwk/style";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";

const Bwk = () => {
  const [agree, setAgree] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
  const Bwk = useMutation(["IInfiltration"], (request: IBwk) => fetchBwk(request));

  const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  const onSubmit = (sendData: any) => {
    if (isLoading) return;
    // if (!phoneRegex.test(sendData.phone)) {
    //   alert("휴대폰 번호를 정확하게 입력하지 않았습니다. 예시: 01012341234 또는 010-1234-1234");
    //   return;
    // }

    if (!agree) {
      return alert("개인정보 활용에 동의하신 후 신청가능합니다.");
    }

    setIsLoading(true);
    reset();

    Bwk.mutate(sendData, {
      onSuccess: (data) => {
        localStorage.setItem("bwk_campaign_reg", "yes");
        router.push("/event/campaign/bwk/coupon");
        //alert("사연이 정상적으로 접수되었습니다.");
        console.log("data", data);
      },
      onError: (err) => {
        alert("쿠폰 발급에 문제가 발생하였습니다.");
        console.log(err);
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };

  const today = dayjs().format("YYYY-MM-DD");
  const eventStart = "2023-11-02";

  if (dayjs(today).isBefore(dayjs(eventStart))) {
    return (
      <>
        <Dimm />
        <BwkPromotionBeforeModal>
          <h2>이벤트 안내</h2>
          <p>
            11월 07일부터
            <br />
            쿠폰을 받으실 수 있습니다
          </p>
          <Link href="/main" className="btn_submit">
            확인
          </Link>
          <Link href="/main" className="btn_close">
            <span className="hiddenZoneV">닫기</span>
          </Link>
        </BwkPromotionBeforeModal>
      </>
    );
  }

  return (
    <>
      <NextSeo {...CampSeo2[0]} />
      <BwkWrap>
        <div>
          <img src="/images/event/campaign/bwk/bwk2_1.png" />
          <div className="screen_out">
            <h1>GOPIZZA</h1>
            <h2>FREE COUPON</h2>
            <p>단 7일간! 매일 선착순 100명</p>
          </div>
        </div>
        <div>
          <img src="/images/event/campaign/bwk/bwk2_2.png" />
          <div className="screen_out">
            <h3>날마다 다른 혜택</h3>
            <h4>오픈 기념 SPECIAL 혜택 안내</h4>
            <ol>
              <li>크리스피 빠삭 치킨 11/22 - 11/23</li>
              <li>코코넛 슈림프 11/24 - 11/25</li>
              <li>버팔로윙 11/26 - 11/28</li>
            </ol>
          </div>
        </div>
        <div>
          <img src="/images/event/campaign/bwk/bwk2_3.webp" />

          <h3 className="screen_out">개인 정보 입력</h3>
          <p className="screen_out">
            아래 정보를 기입하시면 <strong>무료 쿠폰을 발급</strong> 해드립니다.
          </p>
          <div className="area_form">
            <div className="wrap_form">
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  <label htmlFor="phone">휴대폰</label>
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
                    <div className="hiddenZoneV">바로 쿠폰받기</div>
                  </button>
                </div>
              </form>
            </div>
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
      </BwkWrap>
    </>
  );
};

export default Bwk;

Bwk.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
