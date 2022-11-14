//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)

// data
const API = 'https://hexschool.github.io/js-filter-data/data.json';
let data; 
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

function getData(){
  axios.get(API)
  .then(function(response){
    data = response.data.filter(item => item.作物名稱);
  });
}

getData();

// ---------------------學習 Promise Async Await----------
// promise

//批改作業

function correctTest(name){
  return new Promise((resolve, reject) => {
    console.log('目前正在批改中...');
    setTimeout(() => {
      const score = Math.round(Math.random()*100);
      resolve(
        {
          name,
          score
        }
      )
    },2000);
  });
}

correctTest("小明")
  .then(data => console.log(data));


