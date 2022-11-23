
//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)
// 抓取資料上 - 採用原生語法 fetch。 Async / Await 做非同步處裡。

// data
const API = 'https://hexschool.github.io/js-filter-data/data.json';
let data = fetch(API)
            .then(response => response.json())
            //.then(data => console.log(data))
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
let currentSearch = '';
let typeSearched = false;
let isDescending = false;

// 初始化
async function init() {
  lists = await data
  filteredLists = lists
  render()
}

// 排序
function changeOrder(orderName, isDescending){
  if(isDescending){
    filteredLists.sort((a, b) => b[orderName] - a[orderName])
      currentOrder = `${orderName}降序`
  }
  if(!isDescending){
    currentOrder = `${orderName}升序`
    filteredLists.sort((a, b) => a[orderName] - b[orderName])
  }
  render(filteredLists, currentType, currentOrder)  //看不懂，不明白參數部份
}

function createSearchInfo(dataNumber, dataType, dataOrder){
  if(!currentSearch){
    return currentSearch = '無搜尋';
  }else{
    return `
    一共有<span class="">${dataNumber}</span> 筆資料<br>(<span>${dataType} + ${dataOrder} + ${currentSearch}</span>)
    `
  }
}

function render(showData = lists, dataType="不分類", dataOrder="無排序"){
// render
  let newTable = [];
  showData.forEach((item)=>{
    newTable += `
      <tr class="">
        <td class="p-2">${item.作物名稱}</td>
        <td class="p-2">${item.市場名稱}</td>
        <td class="p-2">${item.上價}</td>
        <td class="p-2">${item.中價}</td>
        <td class="p-2">${item.下價}</td>
        <td class="p-2">${item.平均量}</td>
        <td class="p-2">${item.交易量}</td>
      </tr>
    `
  })
//display
  table.innerHTML = newTable;
  searchInfo.innerHTML = createSearchInfo(showData.length, dataType, dataOrder);
}

init();
render();

//清除
function reset(){
  input.value = '';
  type[0].selected = 'selected';
  order[0].selected = 'selected';
  currentType = undefined;
  currentOrder = undefined;
  currentSearch = '';
  typeSearched = false;
  filteredLists = lists;
  resetOrderIcon();
  isDescending = false;
  render();
}

function resetOrderIcon(){
  const upBtns = document.querySelectorAll('[data-priceNet-up]')
  upBtns.forEach(btn =>{
    btn.classList.add('sort--active');
    btn.nextElementSibling.classList.remove('sort--active')
  })
}

function search(){
  filteredLists = filteredLists.filter((item) =>{
    if(item.作物名稱 === null){
      return false;
    }else{
      return item.作物名稱.match(input.value);
    }
  })
}  

// Search lists by input
