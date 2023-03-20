import { useRouter } from "next/router";
import React, { useState } from "react";

function usePaging(data: any, pageView = 10) {
  const router = useRouter();
  const [page, setPage] = useState(router.asPath.includes("pageId") ? Number(router.asPath.split("?pageId=")[1]) : 1);
  const [storesPerPage] = useState(pageView);
  const [totalPage, setTotalPage] = useState(data?.length);

  const handlePageChange = (page: number) => {
    if (router.asPath.split("?pageId=")[0] !== "/find") {
      router.push(`?pageId=${page}`, undefined, { shallow: true });
    }
    setPage(page);
  };

  const indexOfLastStore = page * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentData = data?.slice(indexOfFirstStore, indexOfLastStore);

  return { setTotalPage, totalPage, page, setPage, currentData, storesPerPage, handlePageChange };
}

export default usePaging;
