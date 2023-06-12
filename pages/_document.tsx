import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
        {/* <link rel="stylesheet" href="https://use.typekit.net/kfw2qcs.css" /> */}
        <script defer src="https://www.youtube.com/player_api"></script>
        <Script src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_APIKEY}&libraries=services,clusterer&autoload=false`} strategy="beforeInteractive" />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'AW-11121440258');
        `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11121440258" strategy="afterInteractive" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
