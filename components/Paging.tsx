import React, { useState } from "react";
import Pagination from "react-js-pagination";
import styled from "@emotion/styled";
import { mq } from "./common";

const PaginationWrap = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

  ul.pagination li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    font-size: 2.4rem;

    a {
      color: #7b7b7b;
      font-family: "Montserrat";
    }

    &.active {
      a,
      a:hover {
        color: #2c2c2c;
      }
    }
  }
  .page-selection {
    width: 4.8rem;
    height: 3rem;
    color: #337ab7;
  }
  .arrow-right,
  .arrow-left,
  .long-arrow-right,
  .long-arrow-left {
    display: block;
    margin: 30px auto;
    width: 1.3rem;
    height: 1.3rem;
    border-top: 2px solid #707070;
    border-left: 2px solid #707070;

    &:hover {
      border-top: 0.2rem solid #2c2c2c;
      border-left: 0.2rem solid #2c2c2c;
    }
  }
  .arrow-right,
  .long-arrow-right {
    transform: rotate(135deg);
  }

  .arrow-left,
  .long-arrow-left {
    transform: rotate(-45deg);
  }

  ${mq[0]} {
    ul.pagination {
      margin-top: 30px;

      li {
        font-size: 20px;
      }
    }
    .arrow-right,
    .arrow-left,
    .long-arrow-right,
    .long-arrow-left {
      width: 10px;
      height: 10px;
    }
  }
`;

const Paging = ({ page, PerPage, count, setPage }: any) => {
  return (
    <PaginationWrap>
      <Pagination
        activePage={page}
        itemsCountPerPage={PerPage}
        totalItemsCount={count}
        pageRangeDisplayed={5}
        prevPageText={<div className="arrow-left"></div>}
        nextPageText={<div className="arrow-right"></div>}
        firstPageText={""}
        lastPageText={""}
        onChange={setPage}
      />
    </PaginationWrap>
  );
};

export default Paging;
