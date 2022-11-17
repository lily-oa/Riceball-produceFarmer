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
//批改作業

function correctHomework(name) {
  return new Promise(function (resolved, reject) {
    console.log('目前正在批改作業中');
    setTimeout(function () {
      var score = Math.round(Math.random() * 100);

      if (score >= 20) {
        resolved({
          name: name,
          score: score
        });
      } else {
        console.log(score);
        reject("準備退學吧!!");
      }
    }, 1000);
  });
}

function checkAward(data) {
  return new Promise(function (resolved, reject) {
    console.log('正在檢查獎品中');
    setTimeout(function () {
      if (data.score >= 90) {
        resolved("".concat(data.name, "\u7372\u5F97\u96FB\u5F71\u7968"));
      } else if (data.score >= 60 && data.score < 90) {
        resolved("".concat(data.name, "\u7372\u5F97\u5609\u734E"));
      } else if (data.score >= 40 && data.score < 60) {
        console.log(data.score);
        reject("\u4F60\u6C92\u6709\u734E\u54C1\uFF0C\u6253\u624B\u5FC310\u4E0B");
      }
    }, 1000);
  });
}

correctHomework('小明').then(function (data) {
  return checkAward(data);
}).then(function (reword) {
  return console.log(reword);
})["catch"](function (error) {
  return console.log(error);
});
//# sourceMappingURL=all.js.map
