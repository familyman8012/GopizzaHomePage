import { DefaultSeo, NextSeo } from "next-seo";

export function CommonSeo() {
  const CommonSeoData = {
    additionalLinkTags: [
      {
        rel: "icon",
        href: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/seo/favicon3_32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/seo/favicon3_64.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        href: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/seo/favicon3_64.png",
        sizes: "120x120",
      },
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: "1인피자의 시작, 고피자",
      },
      {
        name: "msapplication-tooltip",
        content: "고피자",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no",
      },
    ],

    twitter: {
      handle: "@handle",
      site: "@gopizza",
      cardType: "summary_large_image",
    },
  };
  return <DefaultSeo {...CommonSeoData} />;
}

export const menu = [
  "/",
  "/main",
  "/brand",
  "/brand/howwemake",
  "/brand/goglobal",
  "/find",
  "/event",
  "/event/video",
  "/order",
  "/order/partner",
  "/order/location",
  "/start",
  "/start/guide",
  "/start/technology",
  "/start/media",
  "/start/inquiry",
];

export const Seo = [
  {
    canonical: "https://gopizza.kr",
    title: "1인피자의 시작, 고피자",
    description: "고피자에서는 다양한 맛의 피자와 함께 즐거운 시간을 제공합니다. 메뉴와 매장을 확인하고, 창업에 대한 정보를 얻으세요.",
    openGraph: {
      type: "website",
      title: "고피자 - 맛있는 피자와 함께하는 행복한 시간",
      description: "고피자에서는 다양한 맛의 피자와 함께 즐거운 시간을 제공합니다. 메뉴와 매장을 확인하고, 창업에 대한 정보를 얻으세요.",
      url: "https://gopizza.kr",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index1x2.webp",
          alt: "고피자",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "1인피자의 시작, 고피자",
      description: "고피자에서는 다양한 맛의 피자와 함께 즐거운 시간을 제공합니다. 메뉴와 매장을 확인하고, 창업에 대한 정보를 얻으세요.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index1x2.webp",
        alt: "고피자",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/main",
    title: "FAST, BUT DELICIOUS  | 고피자",
    description: "고피자는 혁신적인 1인 피자 브랜드로, 빠르고 맛있는 피자를 제공합니다. 다양한 취향을 반영한 맛있는 피자와 함께 즐거운 외식 경험을 선사해드립니다.",
    openGraph: {
      type: "website",
      title: "FAST, BUT DELICIOUS  | 고피자",
      description: "고피자는 혁신적인 1인 피자 브랜드로, 빠르고 맛있는 피자를 제공합니다. 다양한 취향을 반영한 맛있는 피자와 함께 즐거운 외식 경험을 선사해드립니다.",
      url: "https://gopizza.kr/main",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/brand_main_banner/202303/1678679118-31.webp",
          alt: "엣지까지 즐기는 빠-삭 도우!",
        },
      ],
      site_name: "FAST, BUT DELICIOUS",
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "FAST, BUT DELICIOUS | 고피자",
      description: "고피자는 혁신적인 1인 피자 브랜드로, 빠르고 맛있는 피자를 제공합니다. 다양한 취향을 반영한 맛있는 피자와 함께 즐거운 외식 경험을 선사해드립니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/brand_main_banner/202303/1678679118-31.webp",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/brand",
    title: "OUR STORY | 고피자",
    description: "당신이 원하던 1인 피자, GOPIZZA! 빠르고 간편하게 즐길 수 있는 고피자는 신선한 재료와 고피자만의 AI오븐으로 최고의 맛과 서비스를 제공합니다.",
    openGraph: {
      type: "website",
      title: "OUR STORY | 고피자",
      description: "당신이 원하던 1인 피자, GOPIZZA! 빠르고 간편하게 즐길 수 있는 고피자는 신선한 재료와 고피자만의 AI오븐으로 최고의 맛과 서비스를 제공합니다.",
      url: "https://gopizza.kr/brand",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/sub_visual1x2.webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "OUR STORY | 고피자",
      description: "당신이 원하던 1인 피자, GOPIZZA! 빠르고 간편하게 즐길 수 있는 고피자는 신선한 재료와 고피자만의 AI오븐으로 최고의 맛과 서비스를 제공합니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/sub_visual1x2.webp",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/brand/howwemake",
    title: "THE WAY WE MAKE | 고피자",
    description: "고피자의 최고의 맛을 자랑하는 피자를 만들기 위한 제조과정과 비결을 알려드립니다. 경험하세요, 고피자의 혁신과 맛의 차이를!",
    openGraph: {
      type: "website",
      title: "THE WAY WE MAKE | 고피자",
      description: "고피자의 최고의 맛을 자랑하는 피자를 만들기 위한 제조과정과 비결을 알려드립니다. 경험하세요, 고피자의 혁신과 맛의 차이를!",
      url: "https://gopizza.kr/brand/howwemake",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/sub_visual2x2.webp",
          alt: "고피자가 기술을 개발하는 중요한 이유",
        },
      ],
      site_name: "GoPizza",
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "THE WAY WE MAKE | 고피자",
      description: "고피자의 최고의 맛을 자랑하는 피자를 만들기 위한 제조과정과 비결을 알려드립니다. 경험하세요, 고피자의 혁신과 맛의 차이를!",
      image: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/sub_visual2x2.webp",
    },
  },
  {
    canonical: "https://gopizza.kr/brand/goglobal",
    title: "GO GLOBAL | 고피자",
    description: "한국을 시작으로 싱가포르, 인도, 홍콩, 인도네시아 등 전 세계적으로 인기 있는 고피자! 글로벌 시장에서 성장하고 있습니다.",
    openGraph: {
      type: "website",
      title: "GO GLOBAL | 고피자",
      description: "한국을 시작으로 싱가포르, 인도, 홍콩, 인도네시아 등 전 세계적으로 인기 있는 고피자! 글로벌 시장에서 성장하고 있습니다.",
      url: "https://gopizza.kr/brand/goglobal",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/sub_visual3x2.webp",
          alt: "고피자 글로벌",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "GO GLOBAL | 고피자",
      description: "한국을 시작으로 싱가포르, 인도, 홍콩, 인도네시아 등 전 세계적으로 인기 있는 고피자! 글로벌 시장에서 성장하고 있습니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/sub_visual3x2.webp",
        alt: "고피자 글로벌",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/find",
    title: "매장찾기 | 고피자",
    description:
      "가까운 고피자 매장을 찾아보세요! 자신의 위치를 기반으로 자동으로 찾아드립니다. 혹은 도/시와 구/군을 선택하거나 검색어를 입력하여 가장 가까운 고피자 매장을 찾을 수 있습니다.",
    openGraph: {
      type: "website",
      title: "매장찾기 | 고피자",
      description:
        "가까운 고피자 매장을 찾아보세요! 자신의 위치를 기반으로 자동으로 찾아드립니다. 혹은 도/시와 구/군을 선택하거나 검색어를 입력하여 가장 가까운 고피자 매장을 찾을 수 있습니다.",
      url: "https://gopizza.kr/find",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_revenue4.webp",
          alt: "GoPizza Store",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "매장찾기 | 고피자",
      description:
        "가까운 고피자 매장을 찾아보세요! 자신의 위치를 기반으로 자동으로 찾아드립니다. 혹은 도/시와 구/군을 선택하거나 검색어를 입력하여 가장 가까운 고피자 매장을 찾을 수 있습니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_revenue4.webp",
        alt: "GoPizza Store",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/event",
    title: "PROMOTION | 고피자",
    description: "고피자의 최신 이벤트 및 프로모션 정보를 확인하세요! 배달 주문 할인, 파워타임 프로모션, 배달의 민족 프로모션 등 다양한 이벤트가 진행 중입니다.",
    openGraph: {
      type: "website",
      title: "PROMOTION | 고피자",
      description: "고피자의 최신 이벤트 및 프로모션 정보를 확인하세요! 배달 주문 할인, 파워타임 프로모션, 배달의 민족 프로모션 등 다양한 이벤트가 진행 중입니다.",
      url: "https://gopizza.kr/event",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/brand_main_youtube/202303/1678686123-34.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "PROMOTION | 고피자",
      description: "고피자의 최신 이벤트 및 프로모션 정보를 확인하세요! 배달 주문 할인, 파워타임 프로모션, 배달의 민족 프로모션 등 다양한 이벤트가 진행 중입니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/brand_main_youtube/202303/1678686123-34.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/event/video",
    title: "VIDEO | 고피자",
    description: "고피자와 관련된 다양한 영상들을 보실 수 있습니다.",
    openGraph: {
      type: "website",
      title: "VIDEO | 고피자",
      description: "고피자와 관련된 다양한 영상들을 보실 수 있습니다.",
      url: "https://gopizza.kr/event/video",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/brand_ad_video/202302/1676367787-78.jpg",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "VIDEO | 고피자",
      description: "고피자와 관련된 광고 및 PPL, 소개 영상 등 다양한 영상들을 보실 수 있습니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/brand_ad_video/202302/1676367787-78.jpg",
        alt: "",
      },
    },
  },
  {
    canonical: "",
    title: "단체주문 | 고피자",
    description: "GoPizza에서 단체주문 및 제휴문의를 편리하게 진행하세요. 행사, 기업, 학교 등 다양한 단체행사를 위한 피자 주문과 제휴를 지원합니다.",
    openGraph: {
      type: "website",
      title: "단체주문 | 고피자",
      description: "GoPizza에서 단체주문 및 제휴문의를 편리하게 진행하세요. 행사, 기업, 학교 등 다양한 단체행사를 위한 피자 주문과 제휴를 지원합니다.",
      url: "https://gopizza.kr/order",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr1.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@goPizza",
      title: "단체주문 | 고피자",
      description: "GoPizza에서 단체주문 및 제휴문의를 편리하게 진행하세요. 행사, 기업, 학교 등 다양한 단체행사를 위한 피자 주문과 제휴를 지원합니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/order/group/img_group_bnr1.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/order/partner",
    title: "기업제휴 | 고피자",
    description: "기업 제휴 문의 작성. 필수 입력 항목을 작성하신 후 문의내용을 남겨주시면 빠르게 연락드리겠습니다.",
    openGraph: {
      type: "website",
      url: "https://gopizza.kr/order/partner",
      title: "기업제휴 | 고피자",
      description: "GoPizza에서 기업 제휴 문의를 손쉽게 진행하세요. 필수 입력 항목을 작성하신 후 문의내용을 남겨주시면 빠르게 연락드리겠습니다.",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp",
          alt: "GoPizza logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "기업제휴 | 고피자",
      description: "GoPizza에서 기업 제휴 문의를 손쉽게 진행하세요. 필수 입력 항목을 작성하신 후 문의내용을 남겨주시면 빠르게 연락드리겠습니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp",
        alt: "GoPizza logo",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/order/location",
    title: "찾아오시는길 | 고피자",
    description: "고피자 글로벌 본사에 찾아오시는 길을 안내합니다.",
    openGraph: {
      type: "website",
      url: "https://gopizza.kr/order/location",
      title: "찾아오시는길 | 고피자",
      description: "고피자 글로벌 본사에 찾아오시는 길을 안내합니다.",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp",
          alt: "GoPizza",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "찾아오시는길 | 고피자",
      description: "고피자 글로벌 본사에 찾아오시는 길을 안내합니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp",
        alt: "GoPizza",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/start",
    title: "창업경쟁력 | 고피자",
    description:
      "고피자의 창업경쟁력과 매출성장 전략을 확인하세요. 독보적인 1인 피자의 선두주자, 혁신적인 오퍼레이션, 소자본 창업 및 고매출 실현! 본사의 지원과 함께 성공적인 창업을 시작하세요.",
    openGraph: {
      type: "website",
      title: "창업경쟁력 | 고피자",
      description:
        "고피자의 창업경쟁력과 매출성장 전략을 확인하세요. 독보적인 1인 피자의 선두주자, 혁신적인 오퍼레이션, 소자본 창업 및 고매출 실현! 본사의 지원과 함께 성공적인 창업을 시작하세요.",
      url: "https://gopizza.kr/start",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing9.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "창업경쟁력 | 고피자",
      description:
        "고피자의 가맹안내에서 창업경쟁력과 매출성장 전략을 확인하세요. 독보적인 1인 피자의 선두주자, 혁신적인 오퍼레이션, 소자본 창업 및 고매출 실현! 본사의 지원과 함께 성공적인 창업을 시작하세요.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/competitive/img_marketing9.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/start/guide",
    title: "창업안내 | 고피자",
    description:
      "고피자 가맹안내에서 소자본 창업, 매출 향상 전략, 효율적인 오픈 절차를 확인하세요. 창업문의부터 인테리어 공사 및 본사 교육까지 일정 소요기간 내에 창업을 시작할 수 있습니다.",
    openGraph: {
      type: "website",
      title: "창업안내 | 고피자",
      description:
        "고피자 가맹안내에서 소자본 창업, 매출 향상 전략, 효율적인 오픈 절차를 확인하세요. 창업문의부터 인테리어 공사 및 본사 교육까지 일정 소요기간 내에 창업을 시작할 수 있습니다.",
      url: "https://gopizza.kr/start/guide",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview1x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "창업안내 | 고피자",
      description:
        "고피자 가맹안내에서 소자본 창업, 매출 향상 전략, 효율적인 오픈 절차를 확인하세요. 창업문의부터 인테리어 공사 및 본사 교육까지 일정 소요기간 내에 창업을 시작할 수 있습니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview1x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/start/technology",
    title: "혁신기술력 | 고피자",
    description:
      "고피자의 혁신 기술력과 창업 지원 시스템을 확인하고, 성공적인 피자 프랜차이즈 창업을 시작하세요. 크리스피 빠삭 도우, 고븐, 고봇 스테이션, AI 스마트 토핑 테이블 등 독보적인 기술력을 경험해보세요.",
    openGraph: {
      type: "website",
      title: "혁신기술력 | 고피자",
      description:
        "고피자의 혁신 기술력과 창업 지원 시스템을 확인하고, 성공적인 피자 프랜차이즈 창업을 시작하세요. 크리스피 빠삭 도우, 고븐, 고봇 스테이션, AI 스마트 토핑 테이블 등 독보적인 기술력을 경험해보세요.",
      url: "https://gopizza.kr/start/technology",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview6x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "혁신기술력 | 고피자",
      description:
        "고피자의 혁신 기술력과 창업 지원 시스템을 확인하고, 성공적인 피자 프랜차이즈 창업을 시작하세요. 크리스피 빠삭 도우, 고븐, 고봇 스테이션, AI 스마트 토핑 테이블 등 독보적인 기술력을 경험해보세요.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview6x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/media",
    title: "CEO & 언론보도 | 고피자",
    description:
      "고피자 가맹안내 페이지에서 CEO의 메시지와 언론보도를 통해 고피자의 혁신적인 기술과 성장 스토리를 확인하세요. 착한 마음으로 성실하게 고피자를 전 세계적인 피자 브랜드로 성장시키는 임재원 대표님의 철학을 만나보세요.",
    openGraph: {
      type: "website",
      title: "CEO & 언론보도 | 고피자",
      description:
        "고피자 가맹안내 페이지에서 CEO의 메시지와 언론보도를 통해 고피자의 혁신적인 기술과 성장 스토리를 확인하세요. 착한 마음으로 성실하게 고피자를 전 세계적인 피자 브랜드로 성장시키는 임재원 대표님의 철학을 만나보세요.",
      url: "https://gopizza.kr/start/media",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview3x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "CEO & 언론보도 | 고피자",
      description:
        "고피자 가맹안내 페이지에서 CEO의 메시지와 언론보도를 통해 고피자의 혁신적인 기술과 성장 스토리를 확인하세요. 착한 마음으로 성실하게 고피자를 전 세계적인 피자 브랜드로 성장시키는 임재원 대표님의 철학을 만나보세요.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/start/media/img_interview3x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/order/partner",
    title: "가맹문의 | 고피자",
    description: "가맹 문의 작성. 필수 입력 항목을 작성하신 후 문의내용을 남겨주시면 빠르게 연락드리겠습니다.",
    openGraph: {
      type: "website",
      url: "https://gopizza.kr/order/partner",
      title: "가맹문의 | 고피자",
      description: "가맹 문의 작성. 필수 입력 항목을 작성하신 후 문의내용을 남겨주시면 빠르게 연락드리겠습니다.",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp",
          alt: "GoPizza logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "가맹문의 | 고피자",
      description: "가맹 문의 작성. 필수 입력 항목을 작성하신 후 문의내용을 남겨주시면 빠르게 연락드리겠습니다.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/index/bg_index2x2.webp",
        alt: "GoPizza logo",
      },
    },
  },
];

export const MenuSeo = [
  {
    canonical: "https://gopizza.kr/menu",
    title: "PIZZA | 고피자",
    description:
      "고피자에서는 다양한 종류의 맛있는 피자와 함께하는 즐거운 시간을 제공합니다. 치킨앤콘 반반 피자, 슈퍼 콤비네이션 피자, K-불고기 피자 등 다양한 메뉴를 만나보세요.",
    openGraph: {
      type: "website",
      title: "PIZZA | 고피자",
      description:
        "고피자에서는 다양한 종류의 맛있는 피자와 함께하는 즐거운 시간을 제공합니다. 치킨앤콘 반반 피자, 슈퍼 콤비네이션 피자, K-불고기 피자 등 다양한 메뉴를 만나보세요.",
      url: "https://gopizza.kr/menu",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual1x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "PIZZA | 고피자",
      description:
        "고피자에서는 다양한 종류의 맛있는 피자와 함께하는 즐거운 시간을 제공합니다. 치킨앤콘 반반 피자, 슈퍼 콤비네이션 피자, K-불고기 피자 등 다양한 메뉴를 만나보세요.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual1x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/menu/pasta",
    title: "PASTA | 고피자",
    description:
      "고피자의 다양한 파스타 메뉴를 만나보세요! 토마토 치즈 파스타와 미트 치즈 파스타 등 고피자만의 특별한 맛을 경험해 보십시오. 혼자서도, 다 같이도 즐길 수 있는 맛있는 파스타!",
    openGraph: {
      type: "website",
      title: "PASTA | 고피자",
      description:
        "다양한 고피자 파스타 메뉴를 만나보세요! 혼자서도, 다 같이도 즐길 수 있는 토마토 치즈 파스타와 미트 치즈 파스타 등 맛있는 고피자 파스타를 경험해 보십시오.",
      url: "https://gopizza.kr/menu/pasta",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual2x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "PASTA | 고피자",
      description:
        "다양한 고피자 파스타 메뉴를 만나보세요! 혼자서도, 다 같이도 즐길 수 있는 토마토 치즈 파스타와 미트 치즈 파스타 등 맛있는 고피자 파스타를 경험해 보십시오.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual2x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/menu/tteokbokki",
    title: "TTEOKBOKKI | 고피자",
    description:
      "고피자의 맛있는 떡볶이 메뉴를 만나보세요! 화덕 떡볶이와 화덕 치즈 떡볶이 등 고피자만의 특별한 맛을 경험해 보십시오. 혼자서도, 다 같이도 즐길 수 있는 맛있는 떡볶이!",
    openGraph: {
      type: "website",
      title: "TTEOKBOKKI | 고피자",
      description: "다양한 고피자 떡볶이 메뉴를 만나보세요! 혼자서도, 다 같이도 즐길 수 있는 화덕 떡볶이와 화덕 치즈 떡볶이 등 맛있는 고피자 떡볶이를 경험해 보십시오.",
      url: "https://gopizza.kr/menu/tteokbokki",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual3x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "TTEOKBOKKI | 고피자",
      description: "다양한 고피자 떡볶이 메뉴를 만나보세요! 혼자서도, 다 같이도 즐길 수 있는 화덕 떡볶이와 화덕 치즈 떡볶이 등 맛있는 고피자 떡볶이를 경험해 보십시오.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual3x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/menu/sides",
    title: "SIDES | 고피자",
    description:
      "고피자의 다양한 사이드 메뉴를 만나보세요! 순살치킨, 프렌치 프라이, 버팔로 윙, 치즈스틱 등 고피자만의 특별한 사이드 메뉴를 즐겨보세요. 혼자서도, 다 같이도 즐길 수 있는 맛있는 사이드!",
    openGraph: {
      type: "website",
      title: "SIDES | 고피자",
      description:
        "다양한 고피자 사이드 메뉴를 만나보세요! 순살치킨, 프렌치 프라이, 버팔로 윙, 치즈스틱 등 혼자서도, 다 같이도 즐길 수 있는 맛있는 고피자 사이드 메뉴를 경험해 보십시오.",
      url: "https://gopizza.kr/menu/sides",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual4x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "SIDES | 고피자",
      description:
        "다양한 고피자 사이드 메뉴를 만나보세요! 순살치킨, 프렌치 프라이, 버팔로 윙, 치즈스틱 등 혼자서도, 다 같이도 즐길 수 있는 맛있는 고피자 사이드 메뉴를 경험해 보십시오.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual4x2.webp",
        alt: "",
      },
    },
  },
  {
    canonical: "https://gopizza.kr/menu/set",
    title: "SET | 고피자",
    description:
      "혼자서도, 다 같이도 즐겁고 맛있는 고피자 세트 메뉴! 1인 피자 세트부터 친구들과 함께 나눠 먹기 좋은 2.5인 피자 세트까지 다양한 메뉴와 조합으로 만나보세요.",
    openGraph: {
      type: "website",
      title: "SET | 고피자",
      description:
        "혼자서도, 다 같이도 즐겁고 맛있는 고피자 세트 메뉴! 1인 피자 세트부터 친구들과 함께 나눠 먹기 좋은 2.5인 피자 세트까지 다양한 메뉴와 조합으로 만나보세요.",
      url: "https://gopizza.kr/menu/set",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual5x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "SET | 고피자",
      description:
        "혼자서도, 다 같이도 즐겁고 맛있는 고피자 세트 메뉴! 1인 피자 세트부터 친구들과 함께 나눠 먹기 좋은 2.5인 피자 세트까지 다양한 메뉴와 조합으로 만나보세요.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual5x2.webp",
        alt: "",
      },
    },
  },

  {
    canonical: "https://gopizza.kr/menu/powertime",
    title: "POWER TIME | 고피자",
    description: "고피자 파워타임 메뉴를 즐겨보세요! 오리지널 페퍼로니 피자, 허니 고르곤졸라 피자, 이달의 피자 등 다양한 메뉴를 특별한 할인 가격으로 경험해 보십시오.",
    openGraph: {
      type: "website",
      title: "POWER TIME | 고피자",
      description: "고피자 파워타임 메뉴를 즐겨보세요! 오리지널 페퍼로니 피자, 허니 고르곤졸라 피자, 이달의 피자 등 다양한 메뉴를 특별한 할인 가격으로 경험해 보십시오.",
      url: "https://gopizza.kr/menu/powertime",
      images: [
        {
          url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual6x2.webp",
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: "POWER TIME | 고피자",
      description: "고피자 파워타임 메뉴를 즐겨보세요! 오리지널 페퍼로니 피자, 허니 고르곤졸라 피자, 이달의 피자 등 다양한 메뉴를 특별한 할인 가격으로 경험해 보십시오.",
      image: {
        url: "https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual6x2.webp",
        alt: "",
      },
    },
  },
];
