import Tab from "ComponentsFarm/layouts/Tab";
import { menuItem, menuTab } from "ComponentsFarm/pageComp/menu/constant";
import { MenuList, MenuVisual, MenuWrap } from "ComponentsFarm/pageComp/menu/style";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useRef } from "react";
import Tip from "ComponentsFarm/popup/Tip";
import Head from "next/head";

function Menu() {
  const router = useRouter();
  const popref = useRef<any>(null);
  const category = ["/pizza", "/pasta", "/tteokbokki", "/sides", "/set", "/powertime"];
  const categoryNav = useMemo(() => category.indexOf(router.asPath.split("/menu")[1]), [router.asPath]);

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
        <h2 className="tit">메뉴</h2>
        <Tab data={menuTab} />
        <MenuVisual bgimg={categoryNav === -1 ? 1 : categoryNav + 1} />
        <div className="wrp_tip">
          <button
            className="tip"
            onClick={() => {
              document.body.classList.add("overflowhidden");
              popref.current?.showModal();
            }}
          >
            더 맛있게 먹는 TIP
          </button>
          <Tip popref={popref} />
        </div>
        <MenuList>
          {menuItem[categoryNav === -1 ? 0 : categoryNav].map((el, i: number) => (
            <li key={el.idx}>
              <Link href={`/menu/detail/${el.idx}`}>
                <div className={`thumb ${el.badge === "best" ? "badge best" : el.badge === "new" ? "badge new" : ""}`}>
                  <img
                    src={
                      categoryNav === -1
                        ? `https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/pizza/img_item${i + 1}x2.webp`
                        : `https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu${router.asPath.split("/menu")[1]}/img_item${i + 1}x2.webp`
                    }
                    alt="메뉴배경이미지"
                  />
                </div>
                <div className="ko_name">{el.name}</div>
                <div className={el.enName.length >= 25 ? "en_name long" : "en_name"}>{el.enName}</div>
              </Link>
            </li>
          ))}
        </MenuList>
      </MenuWrap>
    </>
  );
}

export default Menu;

// export const getServerSideProps = async (context: any) => {
//   const { index } = context.query;
//   const menu = ["pasta", "tteokbokki", "sides", "set"];
//   return {
//     props: { seo: index === undefined ? MenuSeo[0] : MenuSeo[menu.indexOf(index[0]) + 1] },
//   };
// };
