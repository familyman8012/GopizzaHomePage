import Tab from "ComponentsFarm/layouts/Tab";
import { orderTab } from "ComponentsFarm/pageComp/order/constant";
import { LocationWrap } from "ComponentsFarm/pageComp/order/style";
import { useState } from "react";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

function Group() {
  const [pos, setPos] = useState({
    lat: 37.5714,
    lng: 126.9715,
  });

  return (
    <LocationWrap>
      <h2 className="tit">단체/제휴문의</h2>
      <Tab data={orderTab} />
      <div className="wrap_location">
        <div className="box_info">
          <div>
            <h4>찾아오시는 길</h4>
            <ul className="list">
              <li>
                서울특별시 종로구 경희궁길 15
                <br />
                고피자 글로벌 본사
              </li>
              <li>
                02-567-8972
                <br />
                gofficial@gopizza.kr
              </li>
            </ul>
          </div>
        </div>
        <div className="area_map">
          <Map center={{ lat: pos.lat, lng: pos.lng }} level={4}>
            <MapMarker position={{ lat: pos.lat, lng: pos.lng }}></MapMarker>
            <CustomOverlayMap
              position={{
                lat: pos.lat,
                lng: pos.lng,
              }}
            >
              <div className="info_label">
                <span className="left"></span>
                <span className="center">고피자 글로벌 본사</span>
                <span className="right"></span>
              </div>
            </CustomOverlayMap>
          </Map>
        </div>
      </div>
    </LocationWrap>
  );
}

export default Group;
