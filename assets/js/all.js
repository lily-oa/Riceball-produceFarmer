"use strict";

//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)

// data
var API = 'https://hexschool.github.io/js-filter-data/data.json';
var data;
var lists = [];
var filteredLists = [];

// DOM Element
var form = document.querySelector('[data-priceNet-form]'); //讀取文字的方式綁定
var input = document.querySelector('[data-priceNet-input]');
var resetBtn = document.querySelector('[data-priceNet-reset]');
var searchInfo = document.querySelector('[data-priceNet-searchInfo]');
var info = document.querySelector('[data-priceNet-info]');
var order = document.querySelector('[data-priceNet-order]');
var type = document.querySelector('[data-priceNet-type]');
var table = document.querySelector('[data-priceNet-table]');
var advanceSort = document.querySelector('[data-priceNet-advanceSort]');

// State
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
getData();

// ---------------------學習 Promise Async Await----------
// fetch
var url = 'https://raw1.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.onload = () => console.log(xhr.responseText); //載入若是成功，回傳文字資料
// xhr.onerror = () => console.log(xhr.statusTest);  //載入失敗，回傳狀態的 code
// xhr.send(); //把它送出去

// 試著將它改寫為非定步的寫法
function getURL(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      return resolve(xhr.responseText);
    }; //載入若是成功，回傳文字資料
    xhr.onerror = function () {
      return reject(xhr.statusTest);
    }; //載入失敗，回傳狀態的 code 
    xhr.send(); //把它送出去
  });
}

getURL(url);
//# sourceMappingURL=all.js.map
