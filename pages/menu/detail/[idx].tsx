import Link from "next/link";
import { Ingredients, menuDetail, menuItem, menuTab } from "ComponentsFarm/pageComp/menu/constant";
import { BtnConfirm, Detail, Info, MenuWrap, Nav } from "ComponentsFarm/pageComp/menu/style";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useMemo } from "react";
import Nutrient from "ComponentsFarm/popup/Nutrient";
import { NextSeo } from "next-seo";
import Modal from "ComponentsFarm/common/Modal";
import { useMediaQuery } from "react-responsive";
import { useSwipeable } from "react-swipeable";
import styled from "@emotion/styled";

function DetailView({ seo }: any) {
  const router = useRouter();
  const popref = useRef<any>(null);
  const { idx } = router.query;

  const [open, setOpen] = useState(false);
  const [fade, setFade] = useState(false);

  const openStoreModal = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (isMobile) {
        setFade(true);
        router.push(PrevHandler());
      }
    },
    onSwipedRight: () => {
      if (isMobile) {
        setFade(true);
        router.push(NextHandler());
      }
    },
  });

  useEffect(() => {
    if (isMobile && fade) {
      setFade(false);
    }
  }, [idx, isMobile]);

  const currentMenu = useMemo(() => menuDetail[`${idx}`], [idx]);
  const category = ["pizza", "pasta", "topokki", "sides", "set", "powertime", "special"];

  const PrevHandler = useCallback(() => {
    if (currentMenu?.id > 1) {
      return `/menu/detail/${currentMenu?.category}${currentMenu?.id - 1}`;
    }
    switch (currentMenu?.category) {
      case "pizza":
        return `special${menuItem[6].length}`;
      case "pasta":
        return `pizza${menuItem[0].length}`;
      case "topokki":
        return `pasta${menuItem[1].length}`;
      case "sides":
        return `topokki${menuItem[2].length}`;
      case "set":
        return `sides${menuItem[3].length}`;
      case "powertime":
        return `set${menuItem[4].length}`;

      default:
        return `powertime${menuItem[5].length}`;
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
        return `topokki1`;
      case "topokki":
        return `sides1`;
      case "sides":
        return `set1`;
      case "set":
        return `powertime1`;
      case "powertime":
        return `special1`;

      default:
        return `pizza1`;
    }
  }, [currentMenu?.category, currentMenu?.id]);

  return (
    <>
      <NextSeo {...seo} />
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
          <Fade style={{ opacity: fade ? "0" : "1" }}>
            <Info>
              <div {...handlers} className={`thumb ${currentMenu?.badge === "best" ? "badge best" : currentMenu?.badge === "new" ? "badge new" : ""}`}>
                <img
                  src={`https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/${currentMenu?.category}/${idx}x2.webp?v=3`}
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
                  <div className="box_btn">
                    <Link className="prev" href={PrevHandler()} scroll={false}>
                      <span className="hiddenZoneV">이전</span>
                    </Link>

                    <Link className="next" href={NextHandler()} scroll={false}>
                      <span className="hiddenZoneV">다음</span>
                    </Link>
                  </div>
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
          </Fade>
          <Modal open={open} onClose={close}>
            <NutrientWrap>
              <p className="tit">영양성분 / 알레르기 / 원산지</p>
              <div className="box_info">
                <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/popup/info_nutrientx2.webp" alt="고피자 영양분석표" />
              </div>
              <button className="btn_close" onClick={close}>
                <span className="hiddenZoneV">닫기</span>
              </button>
            </NutrientWrap>
          </Modal>
          {/* <BtnConfirm
          onClick={() => {
           openStoreModal();
          }}
        >
          영양성분 / 알레르기 / 원산지 확인하기
        </BtnConfirm> */}
        </Detail>
      </MenuWrap>
    </>
  );
}

export default DetailView;

export const getStaticProps = async (context: any) => {
  const { idx } = context.params;

  const menuSeoData = {
    canonical: `https://gopizza.kr/menu/detail/${idx}`,
    title: `${menuDetail[`${idx}`].name} | 고피자`,
    description: `${menuDetail[`${idx}`].txt}, 고피자의 ${menuDetail[`${idx}`].name}`,

    openGraph: {
      type: "website",
      title: `${menuDetail[`${idx}`].name} | 고피자`,
      description: `${menuDetail[`${idx}`].txt}, 고피자의 ${menuDetail[`${idx}`].name}`,
      url: `https://gopizza.kr/menu/detail/${idx}`,
      images: [
        {
          url: `https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/${menuDetail[`${idx}`]?.category}/${idx}x2.webp`,
          alt: `${menuDetail[`${idx}`].name}`,
        },
      ],
      site_name: "고피자",
    },
    twitter: {
      card: "summary_large_image",
      site: "@gopizza",
      title: `${menuDetail[`${idx}`].name} | 고피자`,
      description: `${menuDetail[`${idx}`].txt}, 고피자의 ${menuDetail[`${idx}`].name}`,
      image: {
        url: `https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/menu/detail/${menuDetail[`${idx}`]?.category}/${idx}x2.webp`,
      },
    },
  };

  return {
    props: { seo: menuSeoData },
  };
};

export const getStaticPaths = async () => {
  const allMenuDetails = Object.keys(menuDetail);

  const paths = allMenuDetails.map((menuIdx) => ({
    params: { idx: menuIdx },
  }));

  return {
    paths,
    fallback: false, // 이 페이지에 대해 존재하지 않는 경로는 404 페이지를 표시합니다.
  };
};

const Fade = styled.div`
  transition: opacity 0.5s ease-in-out;
`;

export const NutrientWrap = styled.div`
  position: relative;
  width: 132rem;
  padding: 6.4rem 0 6.6rem;
  border-radius: 3rem;
  background: #fff;

  .box_info {
    overflow-y: scroll;
    width: 112.5rem;
    height: 57.8rem;
    margin: 5.6rem auto 0;
    padding-right: 4.5rem;
  }
`;
