
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
// fetch
const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';
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
function getURL(url){
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText); //載入若是成功，回傳文字資料
    xhr.onerror = () => reject(xhr.statusTest);  //載入失敗，回傳狀態的 code 
    xhr.send(); //把它送出去
  })
}

getURL(url)
  .then(data => console.log(data))
  .catch(error => console.log(error));