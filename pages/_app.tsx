import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import reset from "ComponentsFarm/common";
import Layout from "ComponentsFarm/layouts";
import { ReactElement, ReactNode, useEffect } from "react";
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

  useEffect(() => {
    if (findStore.latitude === null && !router.asPath.includes("campaign")) {
      findStore.getPosition();
    }
  }, [router.asPath]);

  function setScreenSize() {
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vw", `${vw}px`);
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
