
//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)
// 抓取資料上 - 採用原生語法 fetch。 Async / Await 做非同步處裡。

// data
const API = 'https://hexschool.github.io/js-filter-data/data.json';
let data = fetch(API)
              .then((response) => {
                if(!response.OK) throw Error(response.statusText)
                  return response.json()
              })
              .catch(error => console.log(error))
let lists = [];
let filteredLists = [];

// DOM Element
const form = document.querySelector('[data-priceNet-form]'); //讀取文字的方式綁定
const input = document.querySelector('[data-priceNet-input]'); 
const resetBtn = document.querySelector('[data-priceNet-reset]'); 
const searchInfo = document.querySelector('[data-priceNet-searchInfo]'); 
const info = document.querySelector('[data-priceNet-info]'); 
const order = document.querySelector('[data-priceNet-order]'); 
const type = document.querySelector('[data-priceNet-type]'); 
const table = document.querySelector('[data-priceNet-table]'); 
const advanceSort = document.querySelector('[data-priceNet-advanceSort]'); 

// State
let currentType = undefined;
let currentOrder = undefined;
let currentSearched = '';
let typeSearched = false;
let isDescending = false;

// 初始化
async function init(){
  lists = await data
  filteredLists = lists
  // render()
}

function render(showData = lists, dataType="不分類", dataOrder="無排序"){
// render

}
