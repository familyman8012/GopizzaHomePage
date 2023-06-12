import styled from "@emotion/styled";
import { mq } from "ComponentsFarm/common";
import { TopWrap } from "ComponentsFarm/layouts/style";

export const BrandWrap = styled.main`
  position: relative;
  padding: 12rem 0 0;

  .list_tab li:nth-child(2) {
    width: 26.7rem;
  }

  ${mq[0]} {
    padding-top: 0;
  }
`;

export const SubMainVisualWrap = styled.div<{ bgimg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100vw; */
  height: 46rem;
  text-align: center;
  background: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/${({ bgimg }) => bgimg}.webp?v=2") no-repeat center/cover;

  &.brand .txt1,
  &.howwemake .txt1,
  &.goglobal .txt2 {
    font-size: var(--size-subMainVisualTxt1);
    font-family: "solano";
  }

  .subTxt {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
    font-weight: normal;
    font-style: normal;
    line-height: 1.38;
    color: var(--color-white);
  }

  ${mq[0]} {
    height: 230px;
    background: url("/images/brand/${({ bgimg }) => bgimg}_mob.webp?v=2") no-repeat center/cover;

    &.brand .txt1,
    &.howwemake .txt1,
    &.goglobal .txt2 {
      font-size: 36px;
    }
  }
`;

export const Content = styled.div``;
