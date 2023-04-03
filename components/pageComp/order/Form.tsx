import styled from "@emotion/styled";
import DatePick from "ComponentsFarm/common/DatePick";
import DaumPost from "ComponentsFarm/common/DaumPost";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { IContactUsReq, IGroupOrderReq } from "ApiFarm/interface/homeInterface";
import { fetchContactUs, fetchGroupOrder } from "ApiFarm/home";
import Application from "ComponentsFarm/popup/Application";
import Privacy from "ComponentsFarm/popup/Privacy";

import Modal from "ComponentsFarm/common/Modal";
import DOMPurify from "isomorphic-dompurify";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";

const FormWrap = styled.form`
  position: relative;
  margin: 11rem 0 0 11rem;

  .txt_error {
    padding: 1rem 0 0 22.5rem;
    font-size: 14px;
    color: var(--color-orange);
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

function Form({ type }: { type?: string }) {
  const popref = useRef<any>(null);
  const popref2 = useRef<any>(null);
  //요청 여러번 못하게.
  const [submitDisabled, setSubmitDisabled] = useState(false);

  //배송희망날짜
  const [agree, setAgree] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [addressDetail, setAddressDetail] = useState({ address: "", buildingName: "" }); // 상세주소 - api에 사용
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

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (type === "group") {
      setValue("address1", addressDetail.address);
      setValue("address2", addressDetail.buildingName);
      setValue("hope_order_date", dayjs(startDate).format("YYYY-MM-DD"));
    }
  }, [addressDetail.address, addressDetail.buildingName, startDate]);

  //단체주문
  const GropuOrder = useMutation(["groupOrder"], (request: IGroupOrderReq) => fetchGroupOrder(request));

  const ContactUs = useMutation(["groupOrder"], (request: IContactUsReq) => fetchContactUs(request));

  const onSubmit = (data: Record<string, string>) => {
    if (!agree) {
      return alert("개인정보취급방침에 동의해주세요.");
    }
    if (type === "group" && !startDate) {
      return alert("배송희망날짜를 지정해주세요.");
    }

    setSubmitDisabled(true); // 요청 시작 시 버튼을 비활성화합니다.

    const { name, phone, email1, email2, hope_order_date, hope_order_time1, hope_order_time2, address1, address2, detail_contents } = data;

    let sendData;
    if (type === "group") {
      sendData = {
        name,
        phone,
        email: `${email1}@${email2}`,
        hope_order_date,
        hope_order_time: `${hope_order_time1}${hope_order_time2}`,
        address: `${address1} ${address2}`,
        detail_contents,
      };
      GropuOrder.mutate(sendData, {
        onSuccess: (data) => {
          openStoreModal2();
          reset();
          setStartDate(null);
          setAddressDetail({ address: "", buildingName: "" });
          setSubmitDisabled(false); // 요청 완료 시 버튼을 다시 활성화합니다.
        },
        onError: (err) => {
          alert("문제가 발생하였습니다. 잠시 후 다시 신청해주시기 바랍니다.");
          console.log(err);
          setSubmitDisabled(false); // 요청 완료 시 버튼을 다시 활성화합니다.
        },
      });
    } else {
      sendData = { name, phone, email: `${email1}@${email2}`, detail_contents };
      ContactUs.mutate(sendData, {
        onSuccess: (data) => {
          openStoreModal2();
          reset();
          setStartDate(null);
          setAddressDetail({ address: "", buildingName: "" });
          setSubmitDisabled(false); // 요청 완료 시 버튼을 다시 활성화합니다.
        },
        onError: (err) => {
          alert("문제가 발생하였습니다. 잠시 후 다시 신청해주시기 바랍니다.");
          console.log(err);
          setSubmitDisabled(false); // 요청 완료 시 버튼을 다시 활성화합니다.
        },
      });
    }
  };

  return (
    <>
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <div className="box_inp">
          <label htmlFor="name" className="req">
            이름
          </label>
          <input
            type="text"
            id="name"
            className="s"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && <div className="txt_error">이름을 입력해주세요.</div>}
        </div>
        <div className="box_inp">
          <label htmlFor="phone" className={type === "customer" ? "" : "req"}>
            연락처
          </label>
          <input
            type="tel"
            id="phone"
            className="s"
            {...register("phone", {
              required: type === "customer" ? false : true,
            })}
            onChange={(e) => {
              setValue("phone", e.target.value.replace(/[^0-9]/g, ""));
            }}
          />
          {errors.phone && watch("phone") === "" && <div className="txt_error">연락처를 입력해주세요.</div>}
        </div>
        <div className="box_inp">
          <label htmlFor="email1" className={type === "customer" ? "req s" : "s"}>
            이메일
          </label>
          <input
            type="text"
            className="s"
            id="email1"
            {...register("email1", {
              required: type === "customer" ? true : false,
            })}
          />
          <span className="str">@</span>
          <input
            type="text"
            className="s"
            id="email2"
            {...register("email2", {
              required: type === "customer" ? true : false,
            })}
          />
          <select
            onChange={(e) => {
              setValue("email2", e.target.value);
            }}
          >
            <option value="">직접입력</option>
            {email.map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
          {(errors.email1 || errors.email2) && <div className="txt_error">이메일을 입력해주세요.</div>}
        </div>
        {type === "customer" && (
          <>
            <div className="box_inp flex">
              <label htmlFor="use_store" className="req">
                이용하신 매장
              </label>
              <select
                id="use_store"
                className="s"
                style={{ marginRight: 4 }}
                {...register("use_store", {
                  required: true,
                })}
              >
                <option value="">선택</option>
              </select>
            </div>
          </>
        )}
        {type === "group" && (
          <>
            <div className="box_inp flex">
              <label className="req">배송희망날짜</label>
              <DatePick startDate={startDate} setStartDate={setStartDate} />
              <em className="txt_desc">*당일 및 익일 주문은 매장으로 문의하세요.</em>
            </div>
            <div className="box_inp flex">
              <label htmlFor="hope_order_time1" className="req">
                배송희망시간
              </label>
              <select
                id="hope_order_time1"
                className="s"
                style={{ marginRight: 4 }}
                {...register("hope_order_time1", {
                  required: true,
                })}
              >
                <option value="">시간선택</option>
                <optgroup label="오전">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option value={`오전${i}시`} key={i}>
                      오전 {i}시
                    </option>
                  ))}
                </optgroup>
                <optgroup label="오후">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option value={`오후${i}시`} key={i}>
                      오후 {i}시
                    </option>
                  ))}
                </optgroup>
              </select>
              <select
                id="hope_order_time2"
                className="s"
                {...register("hope_order_time2", {
                  required: true,
                })}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <option value={`${i}0분`} key={i}>
                    {i}0분
                  </option>
                ))}
              </select>
            </div>
            {errors.hope_order_time1 && (
              <div className="txt_error" style={{ margin: "-1.6rem 0 1.6rem " }}>
                시간을 입력해주세요.
              </div>
            )}
            {errors.hope_order_time2 && <div className="txt_error">도메인을 입력해주세요2.</div>}
            <div className="box_inp flex baseline" style={{ position: "relative" }}>
              <DaumPost isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} setAddressDetail={setAddressDetail} />
              <label htmlFor="address1" className="req">
                상세주소
              </label>
              <div>
                <div style={{ marginBottom: 4 }}>
                  <input
                    type="text"
                    className="m"
                    id="address1"
                    name="address1"
                    placeholder="기본주소"
                    value={addressDetail.address ? `${addressDetail.address}` : ``}
                    style={{ marginRight: 4 }}
                    readOnly
                    onFocus={() => setIsOpenPost(true)}
                  />
                  <button
                    type="button"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      e.stopPropagation();
                      setIsOpenPost(true);
                    }}
                  >
                    열기
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="상세주소"
                    id="address2"
                    className="m"
                    {...register("address2", {
                      required: true,
                    })}
                    readOnly={addressDetail.address ? false : true}
                  />
                </div>
                {errors.address2 && (
                  <div className="txt_error" style={{ paddingLeft: "0.5rem" }}>
                    주소를 입력해주세요.
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        <div className="box_inp flex baseline" style={{ marginBottom: 0 }}>
          <label htmlFor="detail_contents" className="req">
            문의내용
          </label>
          <textarea
            id="detail_contents"
            className="l"
            {...register("detail_contents", {
              required: true,
            })}
          />
        </div>
        {errors.detail_contents && (
          <div className="txt_error" style={{ marginBottom: "1.6rem" }}>
            문의내용을 입력해주세요.
          </div>
        )}
        {type === "group" && (
          <div className="list_form_notice">
            <dl>
              <dt> &lt;이용 방법 및 유의사항&gt; </dt>
              <dd>
                ・ 단체 주문은 희망 배달일로부터 최대 30일 ~ 최소 3일(영업일 기준) 전까지 접수 가능합니다.
                <br />
                ・ 단체 주문이 불가한 지역이 있을 수 있습니다.
                <br />
                ・ 단체 주문은 피자 최소 20판부터 가능합니다.
                <br />・ 고객의 사유로 배달되지 못한 제품은 회수 후 폐기되며, 재배달/취소는 불가합니다.
                <br />
                <span style={{ opacity: 0 }}>・</span> (예시 : 배송 주소 및 연락처 등 정보 오입력, 수령자 부재 등)
                <br />
                ・ 접수된 주문 내역은 상담을 통해 최종 확정되며, 진행 단계에서 상황에 따라 주문이 불가할 수 있습니다.
                <br />・ 단체 주문 접수 시 기입하신 이메일 또는 전화번호로 상담을 진행합니다.
              </dd>
            </dl>
          </div>
        )}
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
        <button type="submit" className="submit" disabled={submitDisabled}>
          신청하기
        </button>
      </FormWrap>
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
          <p className="tit">신청이 완료되었습니다.</p>
          <p className="txt_success">정상적으로 접수 처리되었습니다. 감사합니다.</p>
          <p className="txt_notice">
            추후 본사에서 진행하는 창업 프로모션에 관한 정보를 받아보시는데 동의하십니까?
            <br />
            동의 시 다양한 창업 혜택 정보를 기입하신 연락처 및 이메일로 받아보실 수 있습니다.
          </p>
          <button className="btn_agree" onClick={close2}>
            동의하기
          </button>
          <button className="btn_close" onClick={close2}>
            <span className="hiddenZoneV">닫기</span>
          </button>
        </ApplicationWrap>
      </Modal>
    </>
  );
}

export default Form;

export const ApplicationWrap = styled.div`
  position: relative;
  width: 72.9rem;
  padding: 6.4rem 0 6.6rem;
  text-align: center;
  border-radius: 3rem;
  background: #fff;

  .txt_success {
    margin: 0.8rem 0 5.1rem;
    font-size: 2.4rem;
  }

  .txt_notice {
    font-size: 1.6rem;
  }

  .btn_agree {
    margin-top: 3.6rem;
    width: 36rem;
    height: 8rem;
    color: #fff;
    font-size: 2.4rem;
    font-weight: 500;
    border-radius: 4rem;
    background-color: var(--color-bluedark);
  }
  .btn_close {
    top: auto;
    bottom: -11.2rem;
    left: 50%;
    right: auto;
    margin-left: -4rem;
  }
`;

export const PrivacyWrap = styled.div`
  position: relative;
  width: 90%;
  max-width: 132rem;
  padding: 6.4rem 0 6.6rem;
  border-radius: 3rem;
  background: #fff;

  .box_info {
    overflow-y: scroll;
    width: 95%;
    height: 57.8rem;
    margin: 5.6rem auto 0;
    padding-right: 4.5rem;
    font-size: 1.6rem;
  }
`;
