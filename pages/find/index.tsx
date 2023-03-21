import React, { useEffect, useCallback, useState } from "react";
import { hangjungdong, storeInfo } from "ComponentsFarm/pageComp/find/constants";
import { fetchStoreSearch } from "ApiFarm/home";
import { IStoreSearch } from "ApiFarm/interface/homeInterface";
import Paging from "ComponentsFarm/Paging";
import { FindWrap } from "ComponentsFarm/pageComp/find/style";
import { findStore } from "MobxFarm/store";
import { getDistance } from "src/util/geolocation";
import { observer } from "mobx-react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import usePaging from "HookFarm/usePaging";

function Index({ storeInfo2 }: { storeInfo2: IStoreSearch[] }) {
  const [timer, setTimer] = useState(0);
  const [distance, setDistance] = useState(true);
  const [load, setLoad] = useState(false);
  const [storeData, setStoreData] = useState<IStoreSearch[]>([]);
  const { sido, sigugun } = hangjungdong;

  //타이머
  useEffect(() => {
    if (1 > timer) {
      setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, 2000);
    }
  }, [timer]);

  //거리순으로 정렬
  useEffect(() => {
    if (findStore.latitude !== null) {
      let newStoreInfo = storeInfo2
        ?.map((el) => ({
          ...el,
          distance: getDistance(findStore.latitude, findStore.longitude, Number(el.store_location.lat), Number(el.store_location.lng), "K"),
        }))
        .sort(function (a: any, b: any) {
          if (a.distance > b.distance) {
            return 1;
          }
          if (a.distance < b.distance) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      setStoreData(newStoreInfo);
      setLoad(true);
    }
  }, [findStore.latitude]);

  const handlerTimeOut = useCallback(() => {
    setDistance(false);
    setStoreData(storeInfo2);
    setLoad(true);
  }, [storeInfo2]);

  // 페이징
  const { totalPage, setTotalPage, page, setPage, currentData, storesPerPage, handlePageChange } = usePaging(storeData);

  //필터
  const [filters, setFilters] = useState({
    name: "",
    address1: "",
    address2: "",
  });

  const handleFilterChange = (e: any) => {
    e.target.name === "address1"
      ? setFilters({
          ...filters,
          address2: "",
          [e.target.name]: e.target.value,
        })
      : setFilters({
          ...filters,
          [e.target.name]: e.target.value,
        });
  };

  useEffect(() => {
    handleSearch();
  }, [filters.address1, filters.address2]);

  const handleSearch = () => {
    let filteredData = [...storeInfo2];

    // filter by adress
    if (filters.name) {
      filteredData =
        filteredData.filter((item) => item.name.includes(filters.name)).length === 0
          ? filteredData.filter((item) => item.address.includes(filters.name))
          : filteredData.filter((item) => item.name.includes(filters.name));
    }

    // filter by age
    if (filters.address1) {
      filteredData = filteredData.filter((item) => item.store_location.district.city === filters.address1);
    }

    // filter by city
    if (filters.address2) {
      filteredData = filteredData.filter((item) => item.store_location.district.name === filters.address2);
    }

    setTotalPage(filteredData.length);
    setPage(1);

    setStoreData(
      filteredData
        ?.map((el) => ({
          ...el,
          distance: getDistance(findStore.latitude, findStore.longitude, Number(el.store_location.lat), Number(el.store_location.lng), "K"),
        }))
        .sort(function (a: any, b: any) {
          if (a.distance > b.distance) {
            return 1;
          }
          if (a.distance < b.distance) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
    );
  };

  return (
    <FindWrap>
      <h2 className="tit">매장찾기 </h2>
      <div className="wrp_filter">
        <select name="address1" onChange={handleFilterChange} value={filters.address1}>
          <option value="">도/시를 선택하세요</option>
          {sido.map((el) => (
            <option key={el.codeNm} value={el.codeNm}>
              {el.codeNm}
            </option>
          ))}
        </select>
        <select name="address2" onChange={handleFilterChange} value={filters.address2}>
          <option value="">구/군을 선택하세요</option>
          {sigugun
            .filter((el) => el.address1 === filters.address1)
            .map((el) => (
              <option key={el.codeNm} value={el.codeNm}>
                {el.codeNm}
              </option>
            ))}
        </select>
        <div className="box_search_keyword">
          <input type="text" name="name" placeholder="검색어를 입력해주세요" onChange={handleFilterChange} value={filters.name} />
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>

      <ul className={`list_store ${storeData.length === 0 || !load ? "off" : ""}`}>
        {storeData.length === 0 ? (
          <li>
            <div className="box_spinner">
              <div className="location_indicator"></div>
            </div>
            <p>{(filters.name || filters.address1 || filters.address2) && "해당 지역에는 매장이 존재하지 않습니다."}</p>
          </li>
        ) : load ? (
          currentData.map((store: IStoreSearch) => <ListItem key={store.id} store={store} distance={distance} />)
        ) : (
          <li>
            <div className="box_spinner">
              <div className="location_indicator"></div>
            </div>
            {timer > 0 ? (
              <div className="box_basicInfo">
                <p>현재 고객님의 위치정보를 가져올 수 없습니다.</p>
                <button onClick={handlerTimeOut}>기본목록 불러오기</button>
              </div>
            ) : (
              <p>가까운 매장 순으로 매장 정보를 불러오는 중입니다.</p>
            )}
          </li>
        )}
      </ul>
      {storeData.length !== 0 && <Paging page={page} PerPage={storesPerPage} count={totalPage} setPage={handlePageChange} />}
    </FindWrap>
  );
}

const ListItem = ({ distance, store }: { distance: boolean; store: IStoreSearch }) => {
  const [show, setShow] = useState(false);

  return (
    <li className={show ? "on" : ""}>
      <dl onClick={() => setShow(!show)}>
        <dt className="storeName">
          {store.name}
          {distance && <span className="distance">{Number(store.distance).toFixed(2)}km</span>}
        </dt>
        <dd className="address">{store.address}</dd>
        <dd className="info">
          <span className="tel">{store.store_phone_number}</span>
          <span className="time">{store.business_time}</span>
        </dd>
      </dl>
      <div>
        {show && (
          <Map center={{ lat: store.store_location.lat, lng: store.store_location.lng }} level={4}>
            <MapMarker position={{ lat: store.store_location.lat, lng: store.store_location.lng }}></MapMarker>
            <CustomOverlayMap // 커스텀 오버레이를 표시할 Container
              // 커스텀 오버레이가 표시될 위치입니다
              position={{
                lat: store.store_location.lat,
                lng: store.store_location.lng,
              }}
            >
              {/* 커스텀 오버레이에 표시할 내용입니다 */}
              <div className="info_label">
                <span className="left"></span>
                <span className="center">{store.name}</span>
                <span className="right"></span>
              </div>
            </CustomOverlayMap>
          </Map>
        )}
      </div>
    </li>
  );
};

export const getStaticProps = async () => {
  const storeInfo2 = await fetchStoreSearch();

  return {
    props: {
      storeInfo2,
    },
    revalidate: 10,
  };
};

export default observer(Index);
