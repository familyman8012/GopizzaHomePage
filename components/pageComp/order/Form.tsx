import styled from "@emotion/styled";
import DatePick from "ComponentsFarm/common/DatePick";
import DaumPost from "ComponentsFarm/common/DaumPost";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { IContactUsReq, ICustomerReq, IGroupOrderReq, IStoreSearch } from "ApiFarm/interface/homeInterface";
import { fetchContactUs, fetchCustomer, fetchGroupOrder } from "ApiFarm/home";
import Application from "ComponentsFarm/popup/Application";
import Privacy from "ComponentsFarm/popup/Privacy";
import Store from "ComponentsFarm/popup/Store";
import { ICustomer } from "PagesFarm/order/customer";
import { folder, mq } from "ComponentsFarm/common";

export const FormWrap = styled.form`
  position: relative;
  margin: 11rem 0 0 11rem;

  h4 {
    color: var(--color-black);
  }

  .txt_error {
    padding: 1rem 0 0 22.5rem;
    font-size: 14px;
    color: var(--color-orange);

    ${mq[0]} {
      padding: 5px 0 0;
      font-size: 12px;
    }
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

  .style_radio {
    width: var(--size-inputS);
    height: var(--size-inputHeight);
    line-height: 5.4rem;

    margin-right: 4px;
    padding: 0 1.6rem;
    font-size: 1.6rem;
    border: 1px solid var(--color-inputBorder);
    border-radius: 2px;
    background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_sel_arrow.svg") no-repeat #fff 95% 50%;
  }

  ${mq[0]} {
    margin: 36px 20px 0 !important;

    .style_radio {
      width: 100%;
      height: 35px;
      margin-right: 0;
      padding: 0 9px;
      font-size: 13px;
      line-height: 35px;
    }
  }
  ${folder} {
    margin: 36px 10px 0 !important;

    .box_custom_chk {
      padding-left: 0;
      label {
        padding-left: 20px;
        font-size: 11px;
        background-size: 14px 14px;
        background-position: 0 5px;
      }
      button {
        margin-left: 5px;
        font-size: 11px !important;
      }
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
interface IFormProps {
  type?: string;
  storeInfo?: { city: string; data: IStoreSearch[] }[];
}

function Form({ type, storeInfo }: IFormProps) {
  //요청 여러번 못하게.
  const [submitDisabled, setSubmitDisabled] = useState(false);

  //customer - 이용하신 매장
  const [usedStore, setUsedStore] = useState(0);

  //배송희망날짜
  const [agree, setAgree] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [addressDetail, setAddressDetail] = useState({ address: "", buildingName: "" }); // 상세주소 - api에 사용
  const [open, setOpen] = useState({ modal1: false, modal2: false, modal3: false }); //modal1 -> 개인정보, modal2 는 동의팝업, modal3는 매장검색
  const openStoreModal = useCallback(
    (modalIdx: string) => {
      if (modalIdx === "modal1") {
        setOpen({ ...open, modal1: true });
      } else if (modalIdx === "modal2") {
        setOpen({ ...open, modal2: true });
      } else if (modalIdx === "modal3") {
        setOpen({ ...open, modal3: true });
      }
    },
    [open]
  );
  const close = useCallback(() => {
    setOpen({ modal1: false, modal2: false, modal3: false });
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

  // 고객문의 - 이용하신 매장
  const usedStoreName = useMemo(() => storeInfo?.flatMap((region) => region.data).find((store) => store.id === usedStore), [storeInfo, usedStore]);

  //단체주문
  const GropuOrder = useMutation(["groupOrder"], (request: IGroupOrderReq) => fetchGroupOrder(request));
  const ContactUs = useMutation(["contatUs"], (request: IContactUsReq) => fetchContactUs(request));
  const Cusomer = useMutation(["customer"], (request: ICustomerReq) => fetchCustomer(request));

  const onSubmit = (data: Record<string, string>) => {
    // 버튼 비활성화시 더이상 submit 되지 않도록
    if (submitDisabled) true;
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
        address: `${address1}${" "}${address2}`,
        detail_contents,
      };
      GropuOrder.mutate(sendData, {
        onSuccess: (data) => {
          openStoreModal("modal2");
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
    } else if (type === "partner") {
      sendData = { name, phone, email: `${email1}@${email2}`, detail_contents };
      ContactUs.mutate(sendData, {
        onSuccess: (data) => {
          openStoreModal("modal2");
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
    } else if (type === "customer") {
      sendData = { name, phone, email: `${email1}@${email2}`, detail_contents, store_id: Number(usedStoreName?.id) };
      Cusomer.mutate(sendData, {
        onSuccess: (data) => {
          openStoreModal("modal2");
          reset();
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
          <label htmlFor="phone" className="req">
            연락처
          </label>
          <input
            type="tel"
            id="phone"
            className="s"
            {...register("phone", {
              required: true,
            })}
            onChange={(e) => {
              setValue("phone", e.target.value.replace(/[^0-9]/g, ""));
            }}
          />
          {errors.phone && watch("phone") === "" && <div className="txt_error">연락처를 입력해주세요.</div>}
        </div>
        <div className="box_inp box_email_area">
          <label htmlFor="email1" className="s">
            이메일
          </label>
          <input
            type="text"
            className="s"
            id="email1"
            {...register("email1", {
              required: false,
            })}
          />
          <span className="str">@</span>
          <input
            type="text"
            className="s"
            id="email2"
            {...register("email2", {
              required: false,
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
        </div>
        {type === "customer" && (
          <>
            <div className="box_inp flex">
              <label htmlFor="use_store">이용하신 매장</label>
              <div
                className="style_radio"
                onClick={(e) => {
                  e.stopPropagation();
                  openStoreModal("modal3");
                }}
              >
                {usedStoreName?.name}
              </div>
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
                <div className="box_address1">
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
                ・ 단체 주문은 희망 배달일로부터 최대 30일 ~ 최소 3일
                <br className="mobile_line" />
                (영업일 기준) 전까지 접수 가능합니다.
                <br />
                ・ 단체 주문이 불가한 지역이 있을 수 있습니다.
                <br />
                ・ 단체 주문은 피자 최소 20판부터 가능합니다.
                <br />・ 고객의 사유로 배달되지 못한 제품은 회수 후 폐기되며,
                <br className="mobile_line" />{" "}
                <span className="mobile_span" style={{ opacity: 0 }}>
                  ・
                </span>{" "}
                재배달/취소는 불가합니다.
                <br />
                <span style={{ opacity: 0 }}>・</span> (예시 : 배송 주소 및 연락처 등 정보 오입력, 수령자 부재 등)
                <br />
                ・ 접수된 주문 내역은 상담을 통해 최종 확정되며,
                <br className="mobile_line" />
                <span className="mobile_span" style={{ opacity: 0 }}>
                  ・
                </span>{" "}
                진행 단계에서 상황에 따라 주문이 불가할 수 있습니다.
                <br />・ 단체 주문 접수 시 기입하신 이메일 또는 전화번호로 <br className="mobile_line" />{" "}
                <span className="mobile_span" style={{ opacity: 0 }}>
                  ・
                </span>{" "}
                상담을 진행합니다.
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
              openStoreModal("modal1");
            }}
          >
            전문보기
          </button>
        </div>
        <button type="submit" className="submit" disabled={submitDisabled}>
          신청하기
        </button>
      </FormWrap>
      <Privacy open={open.modal1} close={close} />
      <Application open={open.modal2} close={close} />
      {storeInfo && <Store storeInfo={storeInfo} setUseStore={setUsedStore} open={open.modal3} close={close} />}
    </>
  );
}

export default Form;
