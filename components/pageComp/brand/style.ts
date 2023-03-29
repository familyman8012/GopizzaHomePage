import styled from "@emotion/styled";
import { TopWrap } from "ComponentsFarm/layouts/style";

export const BrandWrap = styled.main`
  position: relative;
  padding: 12rem 0 0;

  .list_tab li:nth-child(2) {
    width: 26.7rem;
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
  background: url("/images/brand/${({ bgimg }) => bgimg}.webp") no-repeat center/cover;

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
`;

export const Content = styled.div``;
