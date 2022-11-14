"use strict";

//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)
// data
var API = 'https://hexschool.github.io/js-filter-data/data.json';
var data;
var lists = [];
var filteredLists = []; // DOM Element

var form = document.querySelector('[data-priceNet-form]'); //讀取文字的方式綁定

var input = document.querySelector('[data-priceNet-input]');
var resetBtn = document.querySelector('[data-priceNet-reset]');
var searchInfo = document.querySelector('[data-priceNet-searchInfo]');
var info = document.querySelector('[data-priceNet-info]');
var order = document.querySelector('[data-priceNet-order]');
var type = document.querySelector('[data-priceNet-type]');
var table = document.querySelector('[data-priceNet-table]');
var advanceSort = document.querySelector('[data-priceNet-advanceSort]'); // State

var currentType = undefined;
var currentOrder = undefined;
var currentSearched = '';
var typeSearched = false;
var isDescending = false;

function getData() {
  axios.get(API).then(function (response) {
    data = response.data.filter(function (item) {
      return item.作物名稱;
    });
  });
}

getData(); // ---------------------學習 Promise Async Await----------
// promise
//檢查成績分數
//第一個 promise

var checkScore = function checkScore(score) {
  return new Promise(function (resolved, reject) {
    console.log('正在觀察是否及格');
    setTimeout(function () {
      if (score >= 60) {
        resolved(score);
      } else {
        console.log('不及格');
      }
    }, 3000);
  });
};

checkScore(60).then(function (data) {
  return console.log(data);
}); // .catch(error => console.log(error));
//# sourceMappingURL=all.js.map
