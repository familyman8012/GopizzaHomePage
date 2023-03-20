import { ChangeEvent } from "react";
import router from "next/router";

const { observable } = require("mobx");

export const infoStore = observable({
  item: null,
  showGenre: [],
  showTitle: "소개 : ",
  InfoData(i: number, title: string) {
    this.showGenre = [];
    this.showGenre = JSON.parse(this.item[i]).elements[0].elements;
    this.showTitle = title;
  },
  // onApply(pageNum: number) {
  //   pageNum = 1;
  //   this.searchOption = {
  //     searchInput: this.searchInput,
  //     filterFind: this.filterFind
  //   };
  // }
});
