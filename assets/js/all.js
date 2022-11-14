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

function correctTest(name) {
  return new Promise(function (resolve, reject) {
    console.log('目前正在批改中...');
    setTimeout(function () {
      var score = Math.round(Math.random() * 100);

      if (score >= 60) {
        resolve({
          name: name,
          score: score
        });
      } else {
        reject('你已達退學門檻');
      }
    }, 1000);
  });
} // 第二個 promise (檢查獎勵)


function checkReward(data) {
  return new Promise(function (resolve, reject) {
    console.log('檢查獎品中');
    setTimeout(function () {
      resolve(data.name);
    }, 1000);
  });
}

correctTest("小明").then(function (data) {
  return checkReward(data);
}).then(function (name) {
  return console.log("\u540D\u5B57\u662F".concat(name));
})["catch"](function (error) {
  return console.log(error);
});
//# sourceMappingURL=all.js.map
