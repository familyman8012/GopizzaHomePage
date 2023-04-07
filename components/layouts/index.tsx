import React from "react";
import Copyright from "./Copyright";
import Footer from "./Footer";
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
      <Copyright />
    </>
  );
}

export default Layout;
