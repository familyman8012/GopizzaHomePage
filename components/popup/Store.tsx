import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "ComponentsFarm/common/Modal";
import { IStoreSearch } from "ApiFarm/interface/homeInterface";
import { StoreWrap } from "ComponentsFarm/pageComp/order/style";

interface CityGroup {
  city: string;
  data: IStoreSearch[];
}

interface StoreProps {
  storeInfo: CityGroup[];
  setUseStore: (storeId: number) => void;
  open: boolean;
  close: () => void;
}

function Store({ storeInfo, setUseStore, open, close }: StoreProps) {
  const [searchValue, setSearchValue] = useState("");
  const [selectRadio, setSelectRadio] = useState(0);

  const handleSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const submitFunc = () => {
    setUseStore(selectRadio);
    close();
  };

  const filterStoreInfo = (): CityGroup[] => {
    return storeInfo.map((cityGroup: CityGroup) => ({
      ...cityGroup,
      data: cityGroup.data.filter((store: IStoreSearch) => store.name.toLowerCase().includes(searchValue.toLowerCase())),
    }));
  };

  const filteredStoreInfo = filterStoreInfo();

  const highlightSearchValue = (name: string) => {
    const searchIndex = name.toLowerCase().indexOf(searchValue.toLowerCase());
    if (searchIndex === -1) {
      return name;
    }

    const before = name.slice(0, searchIndex);
    const match = name.slice(searchIndex, searchIndex + searchValue.length);
    const after = name.slice(searchIndex + searchValue.length);

    return (
      <>
        {before}
        <OrangeSpan>{match}</OrangeSpan>
        {after}
      </>
    );
  };
  return (
    <Modal open={open} onClose={close}>
      <StoreWrap>
        <div className="content">
          <h2>매장검색</h2>
          <button className="btn_close" onClick={close}>
            <span className="hiddenZoneV">닫기</span>
          </button>
          <div className="box_search">
            <input type="text" value={searchValue} onChange={handleSearchValueChange} />
          </div>
          <div className="box_store_info">
            {filteredStoreInfo.map(
              (el) =>
                el.data.length > 0 && (
                  <div key={el.city}>
                    <h3>{el.city}</h3>
                    <ul className="list_store">
                      {el.data.map((item: IStoreSearch) => (
                        <li key={item.id}>
                          <input
                            type="radio"
                            id={String(item.id)}
                            onChange={() => setSelectRadio(item.id)}
                            checked={item.id === selectRadio}
                            value={item.name}
                            name="store"
                          />
                          <label htmlFor={String(item.id)}>{highlightSearchValue(item.name)}</label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="box_btn">
          <button className="btn_submit" onClick={submitFunc}>
            선택
          </button>
        </div>
      </StoreWrap>
    </Modal>
  );
}

export default Store;

const OrangeSpan = styled.span`
  color: var(--color-orange);
`;
