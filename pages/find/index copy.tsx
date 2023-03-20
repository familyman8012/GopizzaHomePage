import React, { useState, useEffect, useCallback } from "react";
import { hangjungdong, storeInfo } from "ComponentsFarm/pageComp/find/constants";
import { FindWrap } from "ComponentsFarm/pageComp/find/style";
import Paging from "ComponentsFarm/Paging";

interface Store {
  id: string;
  subject: string;
  phone: string;
  address: string;
  geocode: {
    lat: string;
    lng: string;
  };
  addrCheck: string;
}

interface StoreListProps {}

interface CurrentLocation {
  latitude: number;
  longitude: number;
}

const StoreList: React.FC<StoreListProps> = () => {
  const { sido, sigugun } = hangjungdong;
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [storeInfoSorted, setStoreInfoSorted] = useState<Store[]>([]);
  const [store, setStore] = useState<any[]>([]);

  useEffect(() => {
    // Check if the user's current location is already stored in local storage
    const storedLocation = localStorage.getItem("currentLocation");
    if (storedLocation) {
      setCurrentLocation(JSON.parse(storedLocation));
    }
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.log("newLocation", newLocation);
        setCurrentLocation(newLocation);
        // Compare the new location with the stored location
        if (storedLocation) {
          const oldLocation = JSON.parse(storedLocation);
          if (oldLocation.latitude !== newLocation.latitude || oldLocation.longitude !== newLocation.longitude) {
            // Update the stored location if it's different
            localStorage.setItem("currentLocation", JSON.stringify(newLocation));
          }
        } else {
          // Store the location if it's not already stored
          localStorage.setItem("currentLocation", JSON.stringify(newLocation));
        }
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  // useEffect(() => {
  //   console.log(storeInfo, storeInfo.length);
  //   setStore(storeInfo);
  // }, [currentLocation]);

  useEffect(() => {
    console.log("currentLocation", currentLocation);

    if (currentLocation.latitude !== 0 && currentLocation.longitude !== 0) {
      setStore(storeInfo);
      if (Object.keys(currentLocation).length === 0) {
        return;
      }
      const sortedStoreInfo = store.sort((a, b) => {
        const aDistance = getDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          parseFloat(a.geocode.lat),
          parseFloat(a.geocode.lng)
        );
        const bDistance = getDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          parseFloat(b.geocode.lat),
          parseFloat(b.geocode.lng)
        );
        return aDistance - bDistance;
      });
      setStoreInfoSorted(sortedStoreInfo);
    }
  }, [currentLocation, store]);

  const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI / 180);
  };

  // paging
  const [page, setPage] = useState(1);
  const [storesPerPage] = useState(10);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const indexOfLastStore = page * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = storeInfoSorted.slice(indexOfFirstStore, indexOfLastStore);
  const renderStores = currentStores.map((store) => {
    return (
      <li key={store.id}>
        <dl>
          <dt className="storeName">{store.subject}</dt>
          <dd className="address">{store.address}</dd>
          <dd className="info">
            <span className="tel">{store.phone}</span>
            <span className="time">08:30 - 16:30</span>
          </dd>
          <dd>
            {getDistance(
              currentLocation.latitude,
              currentLocation.longitude,
              parseFloat(store.geocode.lat),
              parseFloat(store.geocode.lng)
            ).toFixed(2)}{" "}
            km
          </dd>
        </dl>
      </li>
    );
  });

  // paging

  const handlerSetVal = useCallback((e: any) => {
    setVal1(e.target.value);
    setVal2("");
  }, []);

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
      <ul className="list_store">{renderStores}</ul>
      <Paging page={page} count={store.length} setPage={handlePageChange} />
    </FindWrap>
  );
};

export default StoreList;
