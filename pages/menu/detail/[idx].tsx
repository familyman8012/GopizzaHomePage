import Link from "next/link";
import { Ingredients, menuDetail, menuItem, menuTab } from "ComponentsFarm/pageComp/menu/constant";
import { BtnConfirm, Detail, Info, MenuWrap, Nav } from "ComponentsFarm/pageComp/menu/style";
import { useRouter } from "next/router";
import React, { useCallback, useRef } from "react";
import Image from "next/image";
import { useMemo } from "react";
import Nutrient from "ComponentsFarm/popup/Nutrient";
import { NextSeo } from "next-seo";
import Head from "next/head";

function DetailView({ seo }: any) {
  const router = useRouter();
  const popref = useRef<any>(null);
  const { idx } = router.query;

  const currentMenu = useMemo(() => menuDetail[`${idx}`], [idx]);
  const category = ["pizza", "pasta", "tteokbokki", "sides", "set", "powertime"];

  const PrevHandler = useCallback(() => {
    if (currentMenu?.id > 1) {
      return `/menu/detail/${currentMenu?.category}${currentMenu?.id - 1}`;
    }
    switch (currentMenu?.category) {
      case "pizza":
        return `powertime${menuItem[5].length}`;
      case "pasta":
        return `pizza${menuItem[0].length}`;
      case "tteokbokki":
        return `pasta${menuItem[1].length}`;
      case "sides":
        return `tteokbokki${menuItem[2].length}`;
      case "set":
        return `sides${menuItem[3].length}`;

      default:
        return `set${menuItem[4].length}`;
    }
  }, [currentMenu?.category, currentMenu?.id]);

  const NextHandler = useCallback(() => {
    if (menuItem[category.indexOf(currentMenu?.category)]?.length > currentMenu?.id) {
      return `/menu/detail/${currentMenu?.category}${currentMenu?.id + 1}`;
    }

    switch (currentMenu?.category) {
      case "pizza":
        return `pasta1`;
      case "pasta":
        return `tteokbokki1`;
      case "tteokbokki":
        return `sides1`;
      case "sides":
        return `set1`;
      case "set":
        return `powertime1`;

      default:
        return `pizza1`;
    }
  }, [currentMenu?.category, currentMenu?.id]);

  return (
    <>
      <Head>
        <title>MENU | 고피자</title>
        <meta name="twitter:site" content="@gopizza" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="고피자에서는 다양한 종류의 맛있는 피자와 함께 파스타, 떡볶이, 다양한 사이드들과 함께하는 즐거운 시간을 제공합니다. 치킨앤콘 반반 피자, 슈퍼 콤비네이션 피자, K-불고기 피자 등 다양한 메뉴를 만나보세요."
        />
        <meta property="og:title" content="MENU | 고피자" />
        <meta
          property="og:description"
          content="고피자에서는 다양한 종류의 맛있는 피자와 함께 파스타, 떡볶이, 다양한 사이드들과 함께하는 즐거운 시간을 제공합니다. 치킨앤콘 반반 피자, 슈퍼 콤비네이션 피자, K-불고기 피자 등 다양한 메뉴를 만나보세요."
        />
        <meta property="og:url" content="https://gopizzahometest.vercel.app/menu" />
        <meta property="og:image" content="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual1x2.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@gopizza" />
        <meta name="twitter:site" content="@gopizza" />
        <meta name="twitter:title" content="MENU | 고피자" />
        <meta name="twitter:url" content="https://gopizzahometest.vercel.app/menu" />
        <meta
          name="twitter:description"
          content="고피자에서는 다양한 종류의 맛있는 피자와 함께 파스타, 떡볶이, 다양한 사이드들과 함께하는 즐거운 시간을 제공합니다. 치킨앤콘 반반 피자, 슈퍼 콤비네이션 피자, K-불고기 피자 등 다양한 메뉴를 만나보세요."
        />
        <meta name="twitter:image" content="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/img_menu_visual1x2.webp"></meta>
      </Head>
      <MenuWrap>
        <Detail>
          <h2 className="tit">메뉴</h2>
          <ul className="list_tab en">
            {menuTab.map((el) => (
              <li
                key={el.menuName}
                className={router.asPath.split("/menu/detail")[1].includes(el.menuName === "POWER TIME" ? "powertime" : el.menuName.toLowerCase()) ? "on" : ""}
              >
                <Link href={el.link}>
                  <span>{el.menuName}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Nav>
            <h2>메뉴</h2>
            <span className="bar">/</span>
            <h3>{currentMenu?.category === "powertime" ? "POWER TIME" : currentMenu?.category.toUpperCase()}</h3>
            <span className="bar">/</span>
            <h4>{currentMenu?.name}</h4>
          </Nav>
          <Info>
            <Link className="prev" href={PrevHandler()}>
              <span className="hiddenZoneV">이전</span>
            </Link>

            <Link className="next" href={NextHandler()}>
              <span className="hiddenZoneV">다음</span>
            </Link>

            <div className={`thumb ${currentMenu?.badge === "best" ? "badge best" : currentMenu?.badge === "new" ? "badge new" : ""}`}>
              <img
                src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/${currentMenu?.category}/${idx}x2.webp`}
                alt={currentMenu?.name}
              />
            </div>
            <dl className="box_ingredients">
              <dt>
                <span className="ko">{currentMenu?.name}</span>
                <span className="en">{currentMenu?.enName.toUpperCase()}</span>
              </dt>
              <dd className="txt">
                {currentMenu?.txt?.split("\n").map((txt: string, i: number) => {
                  return (
                    <React.Fragment key={`line${i}`}>
                      {txt}
                      <br />
                    </React.Fragment>
                  );
                })}
              </dd>
              <dd>
                <ul className="list">
                  {currentMenu?.ingredients.map((el: string, i: number) => (
                    <li key={i}>
                      <span className="img">
                        <img
                          src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/img_ingredients${Ingredients.indexOf(el)}x2.webp`}
                          alt={currentMenu?.name}
                        />
                      </span>
                      <span className="desc">{el}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
          </Info>
          {/* <BtnConfirm
          onClick={() => {
            document.body.classList.add("overflowhidden");
            popref.current?.showModal();
          }}
        >
          영양성분 / 알레르기 / 원산지 확인하기
        </BtnConfirm> */}
          <Nutrient popref={popref} />
        </Detail>
      </MenuWrap>
    </>
  );
}

export default DetailView;

// export const getServerSideProps = async (context: any) => {
//   const { idx } = context.query;

//   const menuSeoData = {
//     canonical: `https://gopizzahometest.vercel.app/menu/detail/${idx}`,
//     title: `${menuDetail[`${idx}`].name} | 고피자`,
//     description: `${menuDetail[`${idx}`].txt}, 고피자의 ${menuDetail[`${idx}`].name}`,

//     openGraph: {
//       type: "website",
//       title: `${menuDetail[`${idx}`].name} | 고피자`,
//       description: `${menuDetail[`${idx}`].txt}, 고피자의 ${menuDetail[`${idx}`].name}`,
//       url: `https://gopizzahometest.vercel.app/menu/detail/${idx}`,
//       images: [
//         {
//           url: `https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/${menuDetail[`${idx}`]?.category}/${idx}x2.webp`,
//           alt: `${menuDetail[`${idx}`].name}`,
//         },
//       ],
//       site_name: "고피자",
//     },
//     twitter: {
//       card: "summary_large_image",
//       site: "@gopizza",
//       title: `${menuDetail[`${idx}`].name} | 고피자`,
//       description: `${menuDetail[`${idx}`].txt}, 고피자의 ${menuDetail[`${idx}`].name}`,
//       image: {
//         url: `https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/${menuDetail[`${idx}`]?.category}/${idx}x2.webp`,
//       },
//     },
//   };

//   return {
//     props: { seo: menuSeoData },
//   };
// };
