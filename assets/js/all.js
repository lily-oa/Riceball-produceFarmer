"use strict";

//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)
// 抓取資料上 - 採用原生語法 fetch。 Async / Await 做非同步處裡。

// data
var API = 'https://hexschool.github.io/js-filter-data/data.json';
var data = fetch(API).then(function (response) {
  if (!response.OK) throw Error(response.statusText);
  return response.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (error) {
  return console.log(error);
});
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

// 初始化
// async function init() {
//   lists = await data
//   filteredLists = lists
//   render()
// }

// function render(showData = lists, dataType="不分類", dataOrder="無排序"){
// // render
//   let newTable = [];
//   showData.forEach((item)=>{
//     newTable += `
//       <tr class="">
//         <td class="p-2">${item.作物名稱}</td>
//         <td class="p-2">${item.市場名稱}</td>
//         <td class="p-2">${item.上價}</td>
//         <td class="p-2">${item.中價}</td>
//         <td class="p-2">${item.下價}</td>
//         <td class="p-2">${item.平均量}</td>
//         <td class="p-2">${item.交易量}</td>
//       </tr>
//     `
//   })
// display
//   table.innerHTML = newTable;
//   searchInfo.innerHTML = createSearchInfo(dataType, dataOrder, showData.length);

// }

// init();
// render();
//# sourceMappingURL=all.js.map
