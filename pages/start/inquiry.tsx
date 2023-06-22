import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { fetchInquiry } from "ApiFarm/home";
import { IInquiryReq } from "ApiFarm/interface/homeInterface";
import { mq } from "ComponentsFarm/common";
import Modal from "ComponentsFarm/common/Modal";
import Copyright from "ComponentsFarm/layouts/Copyright";
import Footer from "ComponentsFarm/layouts/Footer";
import Header from "ComponentsFarm/layouts/Header";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import { CopyrightWrap, FooterWrap, HeaderWrap, TopWrap } from "ComponentsFarm/layouts/style";
import Top from "ComponentsFarm/layouts/Top";
import { Content, RegionWrap } from "ComponentsFarm/pageComp/start/style";
import { ApplicationWrap } from "ComponentsFarm/popup/Application";
import { PrivacyWrap } from "ComponentsFarm/popup/Privacy";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import DOMPurify from "isomorphic-dompurify";
import { observer } from "mobx-react";
import { mobileHeader } from "MobxFarm/store";
import { ReactElement, useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const FormWrap = styled.div`
  margin: 11rem 0 0 0;
  padding-bottom: 11.95rem;
  border-bottom: 1px solid #e6e6e6;

  &:last-of-type {
    border-bottom: none;
  }

  h4 {
    margin-bottom: 5.6rem;
    font-size: 4.8rem;
    color: #000;

    &.tit2 {
      margin-bottom: 3.2rem;
    }
  }
  .txt_notice {
    margin-bottom: 5.6rem;
  }
  p.form_txt {
    margin-bottom: 8rem;
    font-size: 2.4rem;
    text-align: center;
  }
  input::placeholder {
    color: #ddd;
  }
  .box_custom_chk {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 6.4rem 0 0;

    button {
      margin-left: 0.8rem;
      font-size: 2rem;
      color: #7b7b7b;
      text-decoration: underline;
      background: none;
    }
  }
  .box_inp .error,
  .txt_error {
    padding: 1rem 0 0 22.5rem;
    font-size: 14px;
    color: var(--color-orange);
  }
  .txt_error {
    margin-top: -0.6rem;
    padding-top: 0;
    padding-bottom: 1.6rem;
  }

  .box_detail_contents {
    align-items: start;
    label {
      margin-top: 10px;
    }
  }
  .box_textarea {
    position: relative;
    .fake-placeholder {
      position: absolute;
      top: 2.4rem;
      left: 2.4rem;
      pointer-events: none;
      font-size: 1.6rem;
      line-height: 1.5;
      color: #aaa;
    }
    #detail_contents {
      line-height: 1.5;
    }
  }
`;

const PageInquiry = styled.div`
  ${mq[0]} {
    ${HeaderWrap} {
      height: 60px;

      .inner {
        width: 100vw;
        padding: 0 30px 0 30px;

        h1 {
          width: 63.3px;
          height: 35.25px;
        }
        nav,
        aside {
          display: none !important;
        }
      }

      .btn_mobile_menu {
        display: block !important;
        width: 28px;
        height: 22px;
        margin-left: auto;
        background: url("/images/start/inquiry/btn_head_menu.svg") no-repeat left top / 100%;

        &.on {
          width: 23px;
          background: url("/images/start/inquiry/btn_head_close.svg") no-repeat left top;
          background-size: contain;
        }
      }
    }
    .layer_mobile_menu.on {
      display: block !important;
      position: absolute;
      z-index: 10;
      top: 60px;
      left: 0;
      width: 100vw;
      height: calc(100vh - 60px);
      background: #2c2c2c;

      .link_start {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 59px;
        background: #fff;

        .txt {
          font-size: 16px;
          font-weight: bold;
          color: var(--color-orange);

          &:after {
            content: "";
            display: inline-block;
            width: 10.5px;
            height: 13.5px;
            margin-left: 12px;
            vertical-align: middle;
            background: url("/images/start/inquiry/arrow_go_start.svg") no-repeat left top / 100%;
          }
        }
      }
      .menuBox {
        padding: 30px 0;
        text-align: center;
        border-bottom: 1px solid #6a6a6a;
        background: #2c2c2c;

        dt a,
        dd a {
          color: #fff;
        }

        dt {
          margin-bottom: 14.5px;
          font-size: 16px;
          font-weight: bold;
        }
        dd {
          font-size: 13px;
          &:not(:last-of-type) {
            margin-bottom: 11px;
          }
        }
      }
    }

    .list_tab,
    h2 {
      display: none;
    }

    ${Content} {
      width: 100vw;
      padding: 0 30px;

      &.on {
        display: none;
      }
    }

    ${FormWrap} {
      margin-top: 36px;
      h4 {
        margin-bottom: 28px;
        font-size: 24px;
      }
      .form_txt {
        margin-bottom: 50px;
        font-size: 12px;
        color: var(--color-orange);
      }
      .box_inp {
        margin-bottom: 20px;
        .req::before {
          width: 5.5px;
          height: 5.5px;
        }
        input,
        select {
          height: 35px;
          padding: 0 9px;
          font-size: 13px;
          vertical-align: middle;
        }
        label:not(.req) {
          padding-left: 0;
        }
        &:not(.box_radio) {
          label {
            display: block;
            width: 100%;
            font-size: 13px;
            margin-bottom: 8px;
            line-height: 1;
          }
        }
        &:not(.box_email_area) {
          input,
          select,
          textarea {
            width: 100%;

            border-radius: 2px;
          }
        }
        &.box_email_area {
          * {
            margin: 0;
          }
          .str {
            display: inline-block;
            width: 7%;
            font-size: 13px;
            text-align: center;
          }
          input,
          select {
            width: 30%;
            box-sizing: border-box;
          }
          input:nth-of-type(1) {
            width: 33%;
          }
        }
      }
      .box_inp.box_radio,
      .box_detail_contents {
        display: block;
        label.req {
          display: block;
          width: 100%;
          margin-bottom: 8px;
          font-size: 13px;
          line-height: 1;
        }
      }
      .box_detail_contents {
        .fake-placeholder {
          top: 12px;
          left: 12.5px;
          font-size: 12px;
          color: #bababa;
        }
        textarea {
          height: 180px;
          font-size: 12px;
        }
      }
      .box_custom_radio {
        position: relative;
        height: 40px;
        input,
        label {
          width: 50% !important;
          height: 40px;
          margin: 0;
          padding: 0;
          font-size: 12px;
        }
      }
      .box_custom_chk {
        label,
        input[type="checkbox"]:checked + label {
          height: 20px;
          padding-left: 30px;
          font-size: 11px;
          line-height: 20px;
          background-size: 20px;
          letter-spacing: -1px;
        }
        .openPrivacy {
          margin-left: 10px;
          font-size: 11px;
          line-height: 20px;
        }
      }
      .submit {
        width: 100%;
        height: 50px;
        margin: 53px 0 75px;
        font-size: 16px;
        border-radius: 25px;
      }
    }
    ${TopWrap} {
      display: none;
    }
    ${FooterWrap} {
      .inner {
        width: 100vw;
        padding: 0 30px;
        .top {
          padding-top: 22px;
          border-bottom: none;
          h1 {
            width: 63.3px;
            height: 35.25px;
            margin: 0 auto 32px;
          }
          .menuArea {
            display: none;
          }
        }
        .bottom {
          display: none;
        }
      }
      .mobile_bottom {
        display: block;

        .menuArea {
          font-size: 16px;
          text-align: center;
          font-weight: bold;

          li {
            padding: 15px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.29);

            &:last-of-type {
              border-bottom: 1px solid rgba(255, 255, 255, 0.29);
            }
          }
        }
      }
      .inner .list_sns {
        position: static;
        margin-left: auto;
        padding: 47px 0 50px;
        justify-content: center;

        li:not(:last-of-type) {
          margin-right: 15px;
        }

        li:not(.youtube) a {
          width: 26.5px;
          height: 26.5px;
        }
        li.youtube a {
          width: 28.25px;
          height: 22px;
        }
      }
    }
    ${CopyrightWrap} {
      height: 30px;
      font-size: 11px;
    }
  }
`;

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
    console.log(data, data.email1 + "@" + data.email2);
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

  return (
    <StartLayout className="wrap_inquiry">
      <Content className={mobileHeader.open ? "on" : ""}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormWrap>
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
        </form>
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
  );
});

export default Consulting;

//@ts-ignore
Consulting.getLayout = function getLayout(children: ReactElement) {
  return (
    <PageInquiry>
      <Header />
      {children}
      <Top />
      <Footer />
      <Copyright />
    </PageInquiry>
  );
};
