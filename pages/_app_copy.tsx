import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import reset from "ComponentsFarm/common";
import Layout from "ComponentsFarm/layouts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [currentNav, setcurrentNav] = useState("");

  useEffect(() => {
    setcurrentNav(router.asPath.split("/")[1]);
  }, [router.asPath, router.events]);

  return (
    <>
      <Global styles={reset} />
      {/* <Layout curNav={currentNav}>
        <Component {...pageProps} />
      </Layout> */}
    </>
  );
}
