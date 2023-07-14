import React from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Top from "./Top";
import Script from "next/script";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Layout({ children, className }: Props) {
  return (
    <>
      <Header />
      {children}
      <Top />
      <Footer />
      <FooterMobile />
      <Copyright />
      <Script id="naver-common">
        {`
          if (!wcs_add) var wcs_add={};
          wcs_add["wa"] = "s_dc8a2375cf2";
          if (!_nasa) var _nasa={};
          if(window.wcs){
            wcs.inflow("gopizza.kr");
            wcs_do(_nasa);
          }
        `}
      </Script>
    </>
  );
}

export default Layout;
