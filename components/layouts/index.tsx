import React from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
import FooterMobile from "./FooterMobile";
import Header from "./Header";
import Top from "./Top";

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
    </>
  );
}

export default Layout;
