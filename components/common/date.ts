import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";

export const DatePickerWrap = styled.div`
  .react-datepicker-popper {
    z-index: 2;
  }

  .react-datepicker-wrapper {
    display: inline-flex;
    position: relative;

    background: #fff;

    input {
      width: 29rem;
    }

    &::after {
      position: absolute;
      top: 50%;
      right: 1rem;
      content: "";
      width: 2.4rem;
      height: 2.4rem;
      margin-top: -1.2rem;
      background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/common/ico_date.webp") no-repeat left center #fff;
      background-size: 2.4rem 2.4rem;
    }
  }

  .react-datepicker {
    border-radius: 1rem;
    box-shadow: 0 0.2rem 0.4rem rgb(58 58 58 / 20%);
    border: 0;
    color: #333;
    background: #fff;
    font: inherit;
  }

  ${mq[0]} {
    .react-datepicker-wrapper,
    .react-datepicker__input-container,
    .react-datepicker__input-container input {
      width: 100%;
    }
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 0.2rem;
    padding: 0;
    border: none;
    z-index: 1;
    height: 3.2rem;
    width: 3.2rem;
    text-indent: -999rem;
    overflow: hidden;
  }
  .react-datepicker__navigation {
    height: 4rem;
    width: 4rem;
    top: 0;
    position: absolute;
  }
  .react-datepicker__header {
    text-align: center;
    background-color: #f0f0f0;
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 1.2rem;
    padding: 0.8rem 0;
    position: relative;
  }
  .react-datepicker__header {
    padding: 0;
    border-bottom: 0;
  }
  .react-datepicker__day-names {
    border-top: 1px solid #e0e0e0;
    margin-bottom: 0;
  }
  .react-datepicker__header .react-datepicker__day-names {
    padding: 0 1.6rem;
  }
  .react-datepicker__header {
    background: #fff;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 1.2rem;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    display: flex;
    flex-wrap: nowrap;
  }
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: #000;
    font-weight: bold;
    font-size: 1.4rem;
  }
  .react-datepicker__current-month {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.6rem;
    padding: 1.4rem 0.8rem 1.2rem;
    height: 3.9rem;
  }
  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }
  .react-datepicker__day-names {
    margin-bottom: -0.8rem;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: #000;
    display: inline-block;
    width: 2.68rem;
    line-height: 2.68rem;
    text-align: center;
    margin: 0.8rem;
    font-size: 1.4rem;
  }

  .react-datepicker__month {
    margin: 0 1.2rem;
    text-align: center;
  }
  .react-datepicker__day:not(.react-datepicker__day--disabled):focus,
  .react-datepicker__day:not(.react-datepicker__day--disabled):not(:disabled):hover {
    border-radius: 4.5rem;
    background-color: #f2f2f2;
  }
  .react-datepicker__day--disabled {
    color: #ddd !important;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: #ff6d00 !important;
    color: #fff;
    border-radius: 4.5rem;
  }
  .react-datepicker__navigation--prev {
    left: 0;
  }
  .react-datepicker__navigation--next {
    right: 0;
  }
  .react-datepicker__navigation-icon {
    display: block;
    margin: 30px auto;
    width: 11px;
    height: 11px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
  }
  .react-datepicker__navigation-icon--previous {
    transform: rotate(-45deg);
  }
  .react-datepicker__navigation-icon--next {
    transform: rotate(135deg);
  }
`;
