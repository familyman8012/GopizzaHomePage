import styled from "@emotion/styled";

export const Dimm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

export const BwkPromotionBeforeModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28rem;
  height: 20.7rem;
  border-radius: 1.2rem;
  background: #fff;
  padding: 4.4rem 0 2.4rem;

  h2 {
    display: block !important;
    margin-bottom: 1.5rem;
    color: var(--color-neutral10);
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
  }
  p {
    color: var(--color-neutral30);
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.68rem;
  }
  a.btn_submit {
    display: flex;
    height: 4.4rem;
    margin: 2.4rem;
    padding: 1.2rem 1.6rem;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    align-self: stretch;
    border-radius: 0.4rem;
    background: #ff4600;

    color: var(--White, #fff);
    /* $button-label */
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem; /* 142.857% */
  }
  a.btn_close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    background: url("/images/event/campaign/bwk/ico_cross.svg") no-repeat center / 100%;
  }
`;

export const CouponWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;

  img {
    width: auto;
    height: 100%;
  }
`;

export const BwkWrap = styled.div`
  img {
    display: block;
  }
  .area_form {
    padding-top: 3.5rem;
    background: url("/images/event/campaign/bwk/bwk2_4.webp") no-repeat left top / 100%;
  }
  .wrap_form {
    width: 600px;
    padding: 2.5rem 0;
    margin: 0 auto;

    .box_inp {
      display: flex;
      align-items: center;
      height: 2.75rem;
    }

    input,
    select,
    textarea {
      height: 2.75rem;
    }

    label {
      margin-bottom: 0;
      padding: 0;

      font-size: 14px;

      &:not(.label_agree) {
        width: 5.6rem;
        display: block;
        color: #e7ad52;
        font-weight: bold;
      }
    }

    input[type="text"],
    input[type="tel"] {
      border: 1px solid #e7ad52;
      background: #e7ad52;
      border-radius: 0.4rem;

      &:focus {
        outline: 1px solid #ab6800;
      }
    }
    input[type="checkbox"] {
      height: 1.6rem;
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
    padding: 0 0;
    color: #e3e5ff;
    line-height: 1;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    cursor: pointer;
    background: transparent;
    color: #000;
  }
  .btn_apply {
    width: 100%;
    height: 72px;
    margin-top: 25px;
    cursor: pointer;
    background: url("/images/event/campaign/bwk/button.png") no-repeat center / contain;
  }
  @media (max-width: 600px) {
    .area_register {
      h2 {
        padding: 4.8rem 0 4.55rem;
      }
    }
    .wrap_form {
      width: 85%;
      padding: 0 0 25px;

      .btn_apply {
        height: 67px;
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
    .openPrivacy {
      margin-left: auto;
    }
  }
`;
