import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { fetchInquiry } from "ApiFarm/home";
import { IInquiryReq } from "ApiFarm/interface/homeInterface";
import DaumPost from "ComponentsFarm/common/DaumPost";
import Modal from "ComponentsFarm/common/Modal";
import StartLayout from "ComponentsFarm/layouts/pageLayouts/StartLayout";
import { Content, RegionWrap } from "ComponentsFarm/pageComp/start/style";
import Application, { ApplicationWrap } from "ComponentsFarm/popup/Application";
import Privacy, { PrivacyWrap } from "ComponentsFarm/popup/Privacy";
import { PrivacyArr } from "ComponentsFarm/popup/PrivacyContent";
import DOMPurify from "isomorphic-dompurify";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player/lazy";

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
  }
  p.form_txt {
    margin-bottom: 8rem;
    font-size: 2.4rem;
    text-align: center;
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

function Consulting() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  //요청 여러번 못하게.
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const popref = useRef<any>(null);
  const popref2 = useRef<any>(null);
  const [agree, setAgree] = useState(false);
  const [addressDetail, setAddressDetail] = useState({ address: "", buildingName: "" }); // 주소
  const [shopAddressDetail, setShopAddressDetail] = useState({ address: "", buildingName: "" }); // 점포주소
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [isOpenShopPost, setIsOpenShopPost] = useState(false);

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

  useEffect(() => {
    setValue("address1", addressDetail.address);
    setValue("address2", addressDetail.buildingName);
  }, [addressDetail.address, addressDetail.buildingName]);

  useEffect(() => {
    setValue("shop_address1", shopAddressDetail.address);
    setValue("shop_address2", shopAddressDetail.buildingName);
  }, [shopAddressDetail.address, shopAddressDetail.buildingName]);

  //단체주문
  const Inquiry = useMutation(["groupOrder"], (request: IInquiryReq) => fetchInquiry(request));

  const onSubmit = (data: Record<string, string>) => {
    if (!agree) {
      return alert("개인정보취급방침에 동의해주세요.");
    }

    setSubmitDisabled(true); // 요청 시작 시 버튼을 비활성화합니다.

    const sendData: any = {
      ...data,
      email: data.email1 + "@" + data.email2,
      address: data.address1 + " " + data.address2,
      shop_address: data.shop_address1 + " " + data.shop_address2,
    };
    for (const key in sendData) {
      if (key === "address1" || key === "address2" || key === "email1" || key === "email2" || key === "shop_address1" || key === "shop_address2") {
        delete sendData[key];
      }
    }

    Inquiry.mutate(sendData, {
      onSuccess: (data) => {
        openStoreModal2();
        reset();
        setAddressDetail({ address: "", buildingName: "" });
        setShopAddressDetail({ address: "", buildingName: "" });
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
    <StartLayout>
      <Content>
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
            <div className="box_inp">
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
              <input type="text" className="s" id="hope_call_time" {...register("hope_call_time", { required: true })} />
              <span className="txt_desc">ex. 오전 10시 ~ 오후 4시</span>
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
            <div className="box_inp flex baseline" style={{ position: "relative" }}>
              <DaumPost isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} setAddressDetail={setAddressDetail} />
              <label htmlFor="address1" className="req">
                주소
              </label>
              <div>
                <div style={{ marginBottom: 4 }}>
                  <input
                    type="text"
                    className="m"
                    id="address1"
                    placeholder="기본주소"
                    style={{ marginRight: 4 }}
                    defaultValue={addressDetail.address ? `${addressDetail.address}` : ``}
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
                    주소검색
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="상세주소"
                    id="address2"
                    className="m"
                    {...register("address2", { required: true })}
                    readOnly={addressDetail.address ? false : true}
                  />
                </div>
              </div>
            </div>
            {errors.address2 && <div className="txt_error">주소를 입력해주세요.</div>}
            <div className="box_inp">
              <label htmlFor="expected_investment_amount" className="req">
                예상 투자금액
              </label>
              <input type="text" className="s" id="expected_investment_amount" {...register("expected_investment_amount", { required: true, pattern: /^[0-9]+$/ })} />
              <span className="txt_desc">만원 (숫자만 입력)</span>
              {errors.expected_investment_amount && <p className="error">예상 투자금액을 숫자로 입력해주세요.</p>}
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
          </FormWrap>
          <FormWrap>
            <h4>후보지 정보</h4>
            <div className="box_inp box_radio flex">
              <label htmlFor="is_building_ownership" className="req">
                소유여부
              </label>
              <div className="box_custom_radio two">
                <input type="radio" id="is_building_ownership1" defaultValue="1" defaultChecked {...register("is_building_ownership", { required: true })} />
                <label htmlFor="is_building_ownership1">예</label>
                <input type="radio" id="is_building_ownership2" defaultValue="0" {...register("is_building_ownership", { required: true })} />
                <label htmlFor="is_building_ownership2">아니오</label>
              </div>
            </div>
            {errors.is_building_ownership && <div className="txt_error">소유여부를 선택해주세요.</div>}
            <div className="box_inp flex baseline" style={{ position: "relative" }}>
              <DaumPost isOpenPost={isOpenShopPost} setIsOpenPost={setIsOpenShopPost} setAddressDetail={setShopAddressDetail} />
              <label htmlFor="shop_address1" className="req">
                점포주소
              </label>
              <div>
                <div style={{ marginBottom: 4 }}>
                  <input
                    type="text"
                    className="m"
                    id="shop_address1"
                    placeholder="기본주소"
                    style={{ marginRight: 4 }}
                    readOnly
                    defaultValue={shopAddressDetail.address ? `${shopAddressDetail.address}` : ``}
                    onFocus={() => setIsOpenShopPost(true)}
                  />
                  <button
                    type="button"
                    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      e.stopPropagation();
                      setIsOpenShopPost(true);
                    }}
                  >
                    주소검색
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="상세주소"
                    id="shop_address2"
                    className="m"
                    {...register("shop_address2", {
                      required: true,
                    })}
                    readOnly={shopAddressDetail.address ? false : true}
                  />
                </div>
              </div>
            </div>
            {errors.shop_address2 && <div className="txt_error">주소를 입력해주세요.</div>}
            <div className="box_inp">
              <label htmlFor="building_area" className="req">
                평형
              </label>
              <input type="text" className="s" id="building_area" {...register("building_area", { required: true })} />
              <span className="txt_desc">평형</span>
              {errors.building_area && <p className="error">평형을 입력해주세요.</p>}
            </div>
            <div className="box_inp">
              <label htmlFor="shop_name" className="req">
                현상호
              </label>
              <input type="text" className="s" id="shop_name" {...register("shop_name", { required: true })} />
            </div>
            {errors.shop_name && <div className="txt_error">현상호를 입력해주세요.</div>}
            <div className="box_inp box_radio flex">
              <label htmlFor="hope_area" className="req">
                희망지역
              </label>
              <RegionWrap className="box_custom_radio">
                <input type="radio" id="hope_area1" defaultValue="1" defaultChecked {...register("hope_area", { required: true })} />
                <label htmlFor="hope_area1">
                  수도권
                  <br />
                  (서울, 경기, 인천)
                </label>
                <input type="radio" id="hope_area2" defaultValue="2" {...register("hope_area", { required: true })} />
                <label htmlFor="hope_area2">
                  영남권
                  <br />
                  (부산.대구.울산.포항 외)
                </label>
                <input type="radio" id="hope_area3" defaultValue="3" {...register("hope_area", { required: true })} />
                <label htmlFor="hope_area3">
                  호남권
                  <br />
                  (여수.목포.전주 외)
                </label>
                <input type="radio" id="hope_area4" defaultValue="4" {...register("hope_area", { required: true })} />
                <label htmlFor="hope_area4">
                  중부.강원권
                  <br />
                  (대전.충남.충북.강릉 외)
                </label>
                <input type="radio" id="hope_area5" defaultValue="9" {...register("hope_area", { required: true })} />
                <label htmlFor="hope_area5">
                  그 외
                  <br />
                  (글로벌)
                </label>
              </RegionWrap>
            </div>
            {errors.hope_area && <div className="txt_error">희망지역을 선택해주세요.</div>}
            <div className="box_inp">
              <label htmlFor="detail_area" className="req">
                세부지역
              </label>
              <input type="text" className="s" id="detail_area" {...register("detail_area", { required: true })} />
              <span className="txt_desc"> (시/군, 구/동)</span>
              {errors.detail_area && <p className="error">세부지역을 입력해주세요.</p>}
            </div>
            <div className="box_inp flex baseline">
              <label htmlFor="detail_contents" className="req">
                문의내용
              </label>
              <textarea id="detail_contents" className="l" {...register("detail_contents", { required: true })} />
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
    </StartLayout>
  );
}

export default Consulting;
