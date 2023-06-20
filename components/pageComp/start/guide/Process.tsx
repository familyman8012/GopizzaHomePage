import { useState, useEffect, FC } from "react";
import { ProcessWrap } from "./style";

interface ProcessItem {
  num: string;
  txt: string;
}

function Process() {
  const [windowWidth, setWindowWidth] = useState(0);

  const processArr = [
    { num: "01", txt: `창업문의\n가맹상담` },
    { num: "02", txt: `상권분석\n입지선정` },
    { num: "03", txt: `가맹계약\n상가계약` },
    { num: "04", txt: `인테리어 공사\n 본사 교육` },
    { num: "05", txt: `그랜드\n오픈` },
    { num: "06", txt: `사후\n관리` },
  ];

  const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    // Initial width set
    setWindowWidth(window.innerWidth);
    // Listen for window resize
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const endIndex = windowWidth > 599 ? 3 : 6;

  return (
    <>
      <h4>
        <span className="txt">창업 절차</span>
      </h4>
      <ProcessWrap>
        {processArr.slice(0, endIndex).map((el) => (
          <li key={el.num}>
            <div className="box_txt">
              <span className="num">{el.num}</span>
              <span className="txt">{el.txt}</span>
            </div>
          </li>
        ))}
      </ProcessWrap>
      <ProcessWrap className="line2">
        {processArr.slice(3, 6).map((el) => (
          <li key={el.num}>
            <div className="box_txt">
              <span className="num">{el.num}</span>
              <span className="txt">{el.txt}</span>
            </div>
          </li>
        ))}
      </ProcessWrap>
    </>
  );
}

export default Process;
