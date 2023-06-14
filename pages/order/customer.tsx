import Form from "ComponentsFarm/pageComp/order/Form";
import OrderLayout from "ComponentsFarm/layouts/pageLayouts/OrderLayout";
import { fetchStoreSearch } from "ApiFarm/home";
import { IStoreSearch } from "ApiFarm/interface/homeInterface";
import { useEffect } from "react";

export interface ICustomer {
  storeInfo: { city: string; data: IStoreSearch[] }[];
}

function Cusomer({ storeInfo }: ICustomer) {
  return (
    <OrderLayout>
      <h2 className="tit tit2">고객문의</h2>
      <p className="txt">
        고피자 매장을 이용하시다가 불편함을 겪으셨나요?
        <br />
        저희가 다음부터 더 잘할 수 있도록 문의 글을 남겨주세요.
        <br />
        C/S 담당자가 내용을 확인하고
        <br className="mobile_line" /> 최대한 빠르게 연락드리도록 하겠습니다.
      </p>
      <Form type="customer" storeInfo={storeInfo} />
    </OrderLayout>
  );
}

export const getStaticProps = async () => {
  let storeInfoData = await fetchStoreSearch();

  storeInfoData.forEach((store: any) => {
    store.address = store.address
      .replace(/전라남도/g, "전남")
      .replace(/전라북도/g, "전북")
      .replace(/경상남도/g, "경남")
      .replace(/경상북도/g, "경북");
  });

  // 지역별 매장 개수를 계산합니다.
  const regionCountMap = storeInfoData.reduce((acc: any, curr: any) => {
    const region = curr.address.split("\n")[0].substring(0, 2); // 앞의 2글자만 사용합니다.
    if (acc[region]) {
      acc[region]++;
    } else {
      acc[region] = 1;
    }
    return acc;
  }, {});

  // 매장 개수를 기준으로 지역을 정렬합니다.
  const sortedRegions = Object.entries(regionCountMap)
    .sort((a: any, b: any) => {
      if (a[0] === "서울") return -1;
      if (b[0] === "서울") return 1;
      return b[1] - a[1];
    })
    .map((entry) => entry[0]);

  // 정렬된 지역 순서에 따라 데이터를 정렬합니다.
  const sortStore = [...storeInfoData].sort((a, b) => {
    const aRegion = a.address.split("\n")[0].substring(0, 2); // 앞의 2글자만 사용합니다.
    const bRegion = b.address.split("\n")[0].substring(0, 2); // 앞의 2글자만 사용합니다.

    const aPriority = sortedRegions.indexOf(aRegion);
    const bPriority = sortedRegions.indexOf(bRegion);

    if (aPriority === bPriority) {
      return a.name.localeCompare(b.name, "ko-KR");
    } else {
      return aPriority - bPriority;
    }
  });

  const groupDataByCity = (sortedData: any) => {
    const groupedData = sortedData.reduce((acc: any, curr: any) => {
      const city = curr.address.split("\n")[0].substring(0, 2); // 앞의 2글자만 사용합니다.

      const cityIndex = acc.findIndex((item: any) => item.city === city);
      if (cityIndex !== -1) {
        acc[cityIndex].data.push(curr);
      } else {
        acc.push({ city, data: [curr] });
      }

      return acc;
    }, []);

    return groupedData;
  };

  const storeInfoData2 = groupDataByCity(sortStore);

  const storeInfo = [{ city: "매장선택안함", data: [{ id: 0, name: "선택안함" }] }, ...storeInfoData2];

  return {
    props: {
      storeInfo,
    },
    revalidate: 10,
  };
};

export default Cusomer;
