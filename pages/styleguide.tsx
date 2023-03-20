import DatePick from "ComponentsFarm/common/DatePick";
import React, { useState } from "react";

function Styleguide() {
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      <h2>h2</h2>
      <h4>h3</h4>
      <main>
        <p>main p</p>
      </main>
      <p className="subTitle">subTitle</p>
      <p className="desc">desc</p>
      <ul className="list_tab">
        <li>tab1</li>
        <li>tab2</li>
      </ul>
      <p className="titleNo">01</p>

      <div className="box_inp">
        <label htmlFor="text">이메일</label>
        <input type="text" className="s" name="email1" />
        <span className="str">@</span>
        <input type="text" className="s" name="email2" />
      </div>
      <div>
        <input type="text" className="s" value="inputS" />
        <input type="text" className="m" value="inputM" />
        <input type="text" className="l" value="inputL" />
        <select className="s">
          <option>텍스트1</option>
          <option>텍스트2</option>
          <option>텍스트3</option>
        </select>
      </div>
      <DatePick startDate={startDate} setStartDate={setStartDate} />
      <div className="box_custom_chk">
        <input type="checkbox" name="privacy_agree" id="inp_agree_chk" />
        <label htmlFor="inp_agree_chk">개인정보취급방침을 읽었으며 이에 동의합니다.</label>
      </div>
    </div>
  );
}

export default Styleguide;
