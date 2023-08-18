import { useMutation } from "@tanstack/react-query";
import { fetchInquiry } from "ApiFarm/home";
import { IInquiryReq } from "ApiFarm/interface/homeInterface";
import Modal from "ComponentsFarm/common/Modal";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import { FormWrap } from "ComponentsFarm/pageComp/order/Form";
import { Content } from "ComponentsFarm/pageComp/start/style";
import { ApplicationWrap } from "ComponentsFarm/popup/Application";
import { PrivacyWrap } from "ComponentsFarm/popup/Privacy";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import DOMPurify from "isomorphic-dompurify";
import { observer } from "mobx-react";
import { mobileHeader } from "MobxFarm/store";
import Head from "next/head";
import Script from "next/script";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const email = [
  "naver.com",
  "gmail.com",
  "nate.com",
  "yahoo.co.kr",
  "hanmail.net",
  "daum.net",
  "dreamwiz.com",
  "lycos.co.kr",
  "empas.com",
  "korea.com",
  "paran.com",
  "freechal.com",
  "hanmir.com",
  "hotmail.com",
];

const inflowArr = ["방송/기사", "온라인 광고", "앱 광고", "유튜브", "매장이용", "검색엔진", "지인/주변인", "기타"];

const Consulting = observer(function Consulting() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  //textarea fake placeholder
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  //요청 여러번 못하게.
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const [agree, setAgree] = useState(false);

  const [open, setOpen] = useState(false);
  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const [open2, setOpen2] = useState(false);
  const openStoreModal2 = useCallback(() => {
    setOpen2(true);
  }, []);
  const close2 = useCallback(() => {
    setOpen2(false);
  }, []);

  //단체주문
  const Inquiry = useMutation(["groupOrder"], (request: IInquiryReq) => fetchInquiry(request));

  const onSubmit = (data: Record<string, string>) => {
    handleClick();
    // 버튼 비활성화시 더이상 submit 되지 않도록
    if (submitDisabled) true;
    if (!agree) {
      return alert("개인정보취급방침에 동의해주세요.");
    }

    setSubmitDisabled(true); // 요청 시작 시 버튼을 비활성화합니다.

    const sendData: any = {
      ...data,
      email: data.email1 + "@" + data.email2,
    };

    Inquiry.mutate(sendData, {
      onSuccess: (data) => {
        openStoreModal2();
        reset();
        setSubmitDisabled(false); // 요청 완료 시 버튼을 다시 활성화합니다.
      },
      onError: (err) => {
        alert("문제가 발생하였습니다. 잠시 후 다시 신청해주시기 바랍니다.");
        console.log(err);
        setSubmitDisabled(false); // 요청 완료 시 버튼을 다시 활성화합니다.
      },
    });
  };

  const handleClick = () => {
    // gtag 함수 호출
    (window as any).gtag("event", "conversion", { send_to: "AW-10879228606/AVDaCLTK0dMYEL61z8Mo" });
  };

  return (
    <>
      <StartLayout className="wrap_inquiry">
        <Content className={mobileHeader.open ? "on" : ""}>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <h4>상담자 정보</h4>
            <p className="form_txt">정보 입력시, 동그라미 표시는 필수입력 항목입니다.</p>
            <div className="box_inp">
              <label htmlFor="name" className="req">
                이름
              </label>
              <input type="text" className="s" id="name" {...register("name", { required: true })} />
              {errors.name && <p className="error">이름을 입력해주세요.</p>}
            </div>
            <div className="box_inp">
              <label htmlFor="phone" className="req">
                연락처
              </label>
              <input
                type="tel"
                className="s"
                id="phone"
                {...register("phone", { required: true })}
                onChange={(e) => {
                  setValue("phone", e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
              {errors.phone && watch("phone") === "" && <p className="error">연락처를 입력해주세요.</p>}
            </div>
            <div className="box_inp box_email_area">
              <label htmlFor="email1" className="req">
                이메일
              </label>
              <input type="text" className="s" id="email1" {...register("email1", { required: true })} />
              <span className="str">@</span>
              <input type="text" className="s" id="email2" {...register("email2", { required: true })} />
              <select
                onChange={(e) => {
                  setValue("email2", e.target.value);
                }}
              >
                <option defaultValue="">직접입력</option>
                {email.map((el) => (
                  <option defaultValue={el} key={el}>
                    {el}
                  </option>
                ))}
              </select>
              {(errors.email1 || errors.email2) && <p className="error">이메일을 입력해주세요.</p>}
            </div>
            <div className="box_inp">
              <label htmlFor="hope_call_time" className="req">
                연락 가능 시간
              </label>
              <input type="text" className="s" id="hope_call_time" {...register("hope_call_time", { required: true })} placeholder="ex. 오전 10시 ~ 오후 4시" />

              {errors.hope_call_time && <p className="error">연락 가능 시간을 입력해주세요.</p>}
            </div>
            <div className="box_inp">
              <label htmlFor="inflow_path" className="req">
                유입경로
              </label>
              <select id="inflow_path" className="s" {...register("inflow_path", { required: true })}>
                <option defaultValue="">유입경로</option>
                {inflowArr.map((el) => (
                  <option defaultValue={el} key={el}>
                    {el}
                  </option>
                ))}
              </select>
              {errors.inflow_path && <p className="error">유입경로를 선택해주세요.</p>}
            </div>
            <div className="box_inp box_radio flex">
              <label htmlFor="is_experience" className="req">
                외식사업 경험
              </label>
              <div className="box_custom_radio two">
                <input type="radio" id="is_experience1" defaultValue="0" defaultChecked {...register("is_experience", { required: true })} />
                <label htmlFor="is_experience1">없음</label>
                <input type="radio" id="is_experience2" defaultValue="1" {...register("is_experience", { required: true })} />
                <label htmlFor="is_experience2">있음</label>
              </div>
            </div>
            {errors.is_experience && <div className="txt_error">외식사업 경험을 선택해주세요.</div>}
            <div className="box_inp flex box_detail_contents">
              <label htmlFor="detail_contents">문의내용</label>
              <div className="box_textarea">
                {showPlaceholder && (
                  <span className="fake-placeholder">
                    상담 전화를 드리기 전에 고피자 창업에 대해 궁금하신 점<br /> 혹은 창업 하려고 하시는 지역/상가의 정보를 알려주세요.
                  </span>
                )}
                <textarea
                  id="detail_contents"
                  className="l"
                  {...register("detail_contents")}
                  onFocus={() => setShowPlaceholder(false)}
                  onBlur={(e) => setShowPlaceholder(e.target.value === "")}
                />
              </div>
            </div>
            {errors.detail_contents && <div className="txt_error">문의내용을 입력해주세요.</div>}
            <div className="box_custom_chk">
              <input type="checkbox" name="privacy_agree" id="inp_agree_chk" onChange={({ target: { checked } }) => setAgree(checked)} />
              <label htmlFor="inp_agree_chk">개인정보취급방침을 읽었으며 이에 동의합니다.</label>
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
            <button className="submit" disabled={submitDisabled}>
              신청하기
            </button>
          </FormWrap>
        </Content>
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
        <Modal open={open2} onClose={close2}>
          <ApplicationWrap>
            <p className="tit">신청 완료</p>
            <p className="txt_success">정상적으로 접수 처리되었습니다.</p>
            <p className="txt_notice">
              추후 창업 프로모션에 관한 정보를 받아보시는데 동의하십니까?
              <br />
              다양한 창업 혜택 정보를 연락처 및 이메일로 받아보실 수 있습니다.
            </p>
            <button className="btn_agree" onClick={close2}>
              동의하기
            </button>
            <button className="btn_close" onClick={close2}>
              <span className="hiddenZoneV">닫기</span>
            </button>
          </ApplicationWrap>
        </Modal>
      </StartLayout>
    </>
  );
});

export default Consulting;
