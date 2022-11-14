//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)

// data
const API = 'https://hexschool.github.io/js-filter-data/data.json';
let data; 
let lists = [];
let filteredLists = [];

// DOM Element
//const form;

function getData(){
  axios.get(API)
  .then(function(response){
    data = response.data.filter(item => item.作物名稱);
  });
}

getData();