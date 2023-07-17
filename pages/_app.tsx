//@ts-nocheck
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import reset from "ComponentsFarm/common";
import Layout from "ComponentsFarm/layouts";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import type { NextPage } from "next/types";
import { QueryClient, QueryClientProvider, QueryCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CookiesProvider } from "react-cookie";
import { findStore } from "MobxFarm/store";
import { GoogleAnalytics } from "nextjs-google-analytics";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";
import "react-ig-feed/dist/index.css";
import { CommonSeo, menu, Seo } from "ComponentsFarm/Seo";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  const router = useRouter();

  // function setScreenSize() {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }
  // useEffect(() => {
  //   setScreenSize();
  // }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (router.asPath === "/start/inquiry") {
  //       if (window.wcs) {
  //         var _nasa = window._nasa || {};
  //         _nasa["cnv"] = wcs.cnv("5", "0");
  //       }
  //       if (!wcs_add) var wcs_add = {};
  //       wcs_add["wa"] = "s_dc8a2375cf2";
  //       if (!_nasa) var _nasa = {};
  //       if (window.wcs) {
  //         wcs.inflow("gopizza.kr");
  //         wcs_do(_nasa);
  //       }
  //     } else {
  //       if (!wcs_add) var wcs_add = {};
  //       wcs_add["wa"] = "s_dc8a2375cf2";
  //       if (!_nasa) var _nasa = {};
  //       if (window.wcs) {
  //         wcs.inflow("gopizza.kr");
  //         wcs_do(_nasa);
  //       }
  //     }
  //   }
  // }, [router.asPath]);

  const [currentPath, setCurrentPath] = useState(router.pathname);

  // 원하는 스크립트를 실행하는 함수
  const runScript = () => {
    if (!window.wcs_add) window.wcs_add = {};
    window.wcs_add["wa"] = "s_dc8a2375cf2";
    if (!window._nasa) window._nasa = {};

    // 특정 경로인 '/start/inquiry'에서만 실행되어야 하는 코드
    if (currentPath === "/start/inquiry") {
      if (window.wcs) {
        var _nasa = window._nasa || {};
        _nasa["cnv"] = wcs.cnv("5", "0");
      }
    }

    if (window.wcs) {
      wcs.inflow("gopizza.kr");
      wcs_do(window._nasa);
    }
  };

  // 컴포넌트가 렌더링될 때 스크립트 실행
  useEffect(() => {
    runScript();
  }, [currentPath]); // currentPath가 바뀔 때마다 스크립트를 다시 실행합니다.

  // 컴포넌트가 업데이트될 때 pathname 갱신
  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    if (findStore.latitude === null && !router.asPath.includes("campaign")) {
      findStore.getPosition();
    }
  }, [router.asPath]);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },

      mutations: {
        onError: (error) => console.error(error),
      },
    },
    queryCache: new QueryCache({
      onError: ({ message, code, status, response }: any) => {
        console.error(`Something went wrong: ${message}`);
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <CommonSeo />
      <NextSeo {...Seo[menu.indexOf(router.asPath)]} />
      <GoogleAnalytics trackPageViews />
      <CookiesProvider>{getLayout(<Component {...pageProps} />)}</CookiesProvider>
      <ReactQueryDevtools />
      <Analytics />
    </QueryClientProvider>
  );
}
