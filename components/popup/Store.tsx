import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "ComponentsFarm/common/Modal";
import { IStoreSearch } from "ApiFarm/interface/homeInterface";

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

export const StoreWrap = styled.div`
  position: relative;
  width: 68rem;
  border-radius: 0.3rem;
  background: #fff;
  .btn_close {
    position: absolute;
    right: 1.4rem;
    top: 1.4rem;
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
    background: url("/images/common/ico_pop_close.svg") no-repeat left top / 100%;
  }
  .content {
    padding: 2.34rem 4.2rem 0;
    height: 62.1rem;

    h2 {
      font-size: 2.1rem;
      text-align: center;
    }
    .box_search {
      position: relative;
      height: 4rem;
      margin-top: 2.8rem;
      border: 1px solid #e0e0e0;
      border-radius: 0.25rem;
      background: #fff;

      input {
        width: 80%;
        height: 100%;
        border: none;
      }
      &::after {
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        content: "";
        width: 1.6rem;
        height: 1.6rem;
        background: url("/images/common/ico_search.svg") no-repeat left top / 100%;
        filter: invert(55%) sepia(0%) saturate(508%) hue-rotate(147deg) brightness(93%) contrast(87%);
      }
    }
    .noResult {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0;
      font-size: 1.6rem;
      height: 5rem;
    }
    .box_store_info {
      overflow-y: auto;
      max-height: 50rem;
    }
    h3 {
      margin-top: 3rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-size: 1.8rem;
      border-bottom: 1px solid #ddd;
    }
    .list_store {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      display: flex;
      align-items: center;
      width: 50%;
      padding-left: 2rem;

      input {
        height: 4rem;
      }

      label {
        padding-left: 1rem;
        font-size: 1.6rem;
        font-family: "Montserrat";
      }
    }
  }
  .box_btn {
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;

    button {
      display: inline-flex;
      position: relative;
      box-shadow: none;
      font-weight: 500;
      margin: 0;
      min-width: 8rem;
      height: 3.4rem;
      cursor: pointer;
      color: #fff;
      background: #2f80ed;
      appearance: none;
      border: 0;
      justify-content: center;
      align-items: center;
    }
  }
`;
