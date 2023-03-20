import Tab from "ComponentsFarm/layouts/Tab";
import { menuItem, menuTab } from "ComponentsFarm/pageComp/menu/constant";
import { MenuList, MenuVisual, MenuWrap } from "ComponentsFarm/pageComp/menu/style";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import Dialog from "ComponentsFarm/common/Dialog";
import styled from "@emotion/styled";
import Tip from "ComponentsFarm/popup/Tip";
import Head from "next/head";
import { MenuSeo, Seo } from "ComponentsFarm/Seo";
import { NextSeo } from "next-seo";

function Menu({ seo }: { seo: object }) {
  const router = useRouter();
  const popref = useRef<any>(null);
  const category = ["/pizza", "/pasta", "/tteokbokki", "/sides", "/set", "/powertime"];
  const categoryNav = useMemo(() => category.indexOf(router.asPath.split("/menu")[1]), [router.asPath]);

  return (
    <>
      <NextSeo {...seo} />
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

export const getServerSideProps = async (context: any) => {
  const { index } = context.query;
  const menu = ["pasta", "tteokbokki", "sides", "set"];
  return {
    props: { seo: index === undefined ? MenuSeo[0] : MenuSeo[menu.indexOf(index[0]) + 1] },
  };
};
