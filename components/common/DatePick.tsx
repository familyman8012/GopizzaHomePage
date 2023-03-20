import React, { Dispatch, forwardRef, LegacyRef, SetStateAction } from "react";
import ko from "date-fns/locale/ko";
import DatePicker, { registerLocale } from "react-datepicker";
import { DatePickerWrap } from "./date";

registerLocale("ko", ko);

function DatePick({ startDate, setStartDate }: any) {
  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ value, onClick }: any, ref: LegacyRef<HTMLInputElement>) => (
    <input ref={ref} type="text" value={value} readOnly placeholder="배송일을 선택하세요." onClick={onClick} />
  ));

  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  return (
    <DatePickerWrap>
      <DatePicker
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        showPopperArrow={false}
        minDate={new Date()}
        maxDate={maxDate}
        onChange={(date: Date) => setStartDate(date)}
        customInput={<CustomInput />}
        locale="ko"
      />
    </DatePickerWrap>
  );
}

export default DatePick;
