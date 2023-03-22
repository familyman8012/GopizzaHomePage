import { hangjungdong, storeInfo } from "ComponentsFarm/pageComp/find/constants";
import { FindWrap } from "ComponentsFarm/pageComp/find/style";
import { useCallback, useEffect, useState } from "react";

function Find() {
  const { sido, sigugun } = hangjungdong;
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [store, setStore] = useState<any[]>([]);

  const handlerSetVal = useCallback((e: any) => {
    setVal1(e.target.value);
    setVal2("");
  }, []);

  useEffect(() => {
    setStore(storeInfo);
  }, []);

  function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
  }

  return (
    <FindWrap>
      <h2 className="tit">매장찾기 </h2>
      <div className="wrp_filter">
        {/* <h1>{`${val1}-${val2}`}</h1> */}
        <select onChange={handlerSetVal} value={val1}>
          <option value="">도/시를 선택하세요</option>
          {sido.map((el) => (
            <option key={el.sido} value={el.sido}>
              {el.codeNm}
            </option>
          ))}
        </select>
        <select onChange={(e) => setVal2(e.target.value)} value={val2}>
          <option value="">구/군을 선택하세요</option>
          {sigugun
            .filter((el) => el.sido === val1)
            .map((el) => (
              <option key={el.sigugun} value={el.sigugun}>
                {el.codeNm}
              </option>
            ))}
        </select>
        <div className="box_search_keyword">
          <input type="text" name="keyword" placeholder="검색어를 입력해주세요" />
          <button>검색</button>
        </div>
        {/* <ul>
          <li>가까운매장</li>
          <li>가까운 매장</li>
        </ul> */}
      </div>
      <ul className="list_store">
        {store.slice(0, 10).map((el) => (
          <li key={el.id}>
            <dt className="storeName">{el.subject}</dt>
            <dd className="address">{el.address}</dd>
            <dd className="info">
              <span className="tel">{el.phone}</span>
              <span className="time">08:30 - 16:30</span>
            </dd>
          </li>
        ))}
      </ul>
      <ul className="pagination">
        {Array.from({ length: 9 }).map((_, i) => (
          <li key={i}>{i + 1}</li>
        ))}
      </ul>
    </FindWrap>
  );
}

export default Find;
