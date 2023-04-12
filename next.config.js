/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/board/index.php",
        destination: "/start/inquiry",
        permanent: true,
      },

      {
        source: "/html/brand.html",
        destination: "/brand",
        permanent: true,
      },
      {
        source: "/html/com_1.html",
        destination: "/brand",
        permanent: true,
      },
      {
        source: "/html/com_2.html",
        destination: "/brand",
        permanent: true,
      },
      {
        source: "/html/com_5.html",
        destination: "/start/inquiry",
        permanent: true,
      },
      {
        source: "/html/story.html",
        destination: "/start",
        permanent: true,
      },
      {
        source: "/html/use.html",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/html/menu.html",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/html/make.html",
        destination: "/brand/howwemake",
        permanent: true,
      },
      {
        source: "/html/lab.html",
        destination: "/start/technology",
        permanent: true,
      },
      {
        source: "/html/menu_view.html",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/html/global.html",
        destination: "/brand/goglobal",
        permanent: true,
      },
      {
        source: "/html/order.html",
        destination: "/order",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    imageSizes: [64, 128, 384],
    deviceSizes: [1080, 1920, 3840],
    domains: ["dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com", "gopizza-homepage.s3.ap-northeast-2.amazonaws.com"],
  },
  compiler: {
    emotion: {
      // default is true. It will be disabled when build type is production.
      sourceMap: true,
      // default is 'dev-only'.
      autoLabel: "always",
      // default is '[local]'.
      // Allowed values: `[local]` `[filename]` and `[dirname]`
      // This option only works when autoLabel is set to 'dev-only' or 'always'.
      // It allows you to define the format of the resulting label.
      // The format is defined via string where variable parts are enclosed in square brackets [].
      // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
      labelFormat: "[local]",
      // default is undefined.
      // This option allows you to tell the compiler what imports it should
      // look at to determine what it should transform so if you re-export
      // Emotion's exports, you can still use transforms.
    },
  },
};

module.exports = nextConfig;

// module.module.exports = {
//   images: {
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//   },
// };
