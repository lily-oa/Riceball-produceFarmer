"use strict";

//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)
// data
var API = 'https://hexschool.github.io/js-filter-data/data.json';
var data;
var lists = [];
var filteredLists = []; // DOM Element
//const form;

function getData() {
  axios.get(API).then(function (response) {
    data = response.data.filter(function (item) {
      return item.作物名稱;
    });
  });
}

getData();
//# sourceMappingURL=all.js.map
