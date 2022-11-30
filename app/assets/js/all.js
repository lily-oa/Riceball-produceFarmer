
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
const table = document.querySelector('[data-priceNet-table]'); //tbody
const advanceSort = document.querySelector('[data-priceNet-advanceSort]'); // table thead 標頭

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
  //依降序
  if(isDescending){
    filteredLists.sort((a, b) => b[orderName] - a[orderName])
      currentOrder = `${orderName}降序`
  }
  //依升序
  if(!isDescending){
    currentOrder = `${orderName}升序`
    filteredLists.sort((a, b) => a[orderName] - b[orderName])
  }
  render(filteredLists, currentType, currentOrder)  
}

function createSearchInfo(dataType, dataOrder, dataNumber){
  if(!currentSearch){ currentSearch = '無搜尋';}  //當沒有內容(空字串)時再轉為布林值翻轉一次就會得到 true 的結果，有字串時才為false，會代入字串
    return `
    一共有<span class="">${dataNumber}</span> 筆資料<br>(<span>${dataType} + ${dataOrder} + ${currentSearch}</span>)
    `
}

function render(showData = lists, dataType="不分類", dataOrder="無排序"){
// render
  let newTable = [];
  showData.forEach((item)=>{
    newTable += `
      <tr class="Table-hover">
        <td class="p-2">${item.作物名稱}</td>
        <td class="p-2">${item.市場名稱}</td>
        <td class="p-2">${item.上價}</td>
        <td class="p-2">${item.中價}</td>
        <td class="p-2">${item.下價}</td>
        <td class="p-2">${item.平均價}</td>
        <td class="p-2">${item.交易量}</td>
      </tr>
    `
  })
//display
  table.innerHTML = newTable;
  searchInfo.innerHTML = createSearchInfo(dataType, dataOrder, showData.length);
}

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

// 呼叫函式將所有畫面上的升降序按鈕返回初始值
function resetOrderIcon(){
  const upBtns = document.querySelectorAll('[data-priceNet-up]')
  upBtns.forEach(btn =>{
    btn.classList.add('sort--active');
    btn.nextElementSibling.classList.remove('sort--active')
  })
}

// 傳入值重新依if條件篩選出符合條件的內容，組合後回傳新陣列
function search(){
  filteredLists = filteredLists.filter((item) =>{
    if(item.作物名稱 === null){
      return false;
    }else{
      return item.作物名稱.match(input.value); //輸入值 必須和 item.作物名稱 一樣
    }
  })
}  

init();
render();

// Search lists by input
form.addEventListener('submit', e => {
  e.preventDefault();
  if(input.value.trim() === ''){
    reset();
    return;
  }
    currentSearch = input.value;
    search();
    render(filteredLists);
  
});



// Active reset
resetBtn.addEventListener('click', e => {
  reset();
})

//Render selected order
order.addEventListener('change', e => {
  changeOrder(e.target.value);
})

// Render selected type
type.addEventListener('change', e => {
  currentType = e.target.options[e.target.selectedIndex].text //Current selected option item's Text
  if(e.target.value === 'none'){
    filteredLists = lists
    search();
    render(filteredLists, undefined, currentOrder);
    return;
  }

  if(currentSearch != '' && !typeSearched){
    filteredLists = lists.filter((item) => item.種類代碼 === e.target.value)
    typeSearched = true;
  }

  filteredLists = lists.filter((item) => item.種類代碼 === e.target.value)
  if(typeSearched){ search()}
  render(filteredLists, currentType, currentOrder)
  
})

// thead
// Asecending &Descending order toggler
// 升序和降序切換器
advanceSort.addEventListener('click', e =>{
  let orderType = '';
  let orderName = '';
  if(!(e.target.nodeName === 'LABEL')){ return }
  const upBtn = e.target.parentNode.querySelector('[data-priceNet-up]');
  const downBtn = e.target.parentNode.querySelector('[data-priceNet-down]');
  // Already sort by descending 已經降序排列

  isDescending = !isDescending;
  orderName = e.target.parentNode.innerText;


//Toggle icon appearance 切換圖標外觀
resetOrderIcon();
if(isDescending){
  upBtn.classList.remove('sort--active');
  downBtn.classList.add('sort--active');
}else{
  upBtn.classList.add('sort--active');
  downBtn.classList.remove('sort--active');
}
changeOrder(orderName, isDescending);
})

// Riceball 寫的

// advanceSort.addEventListener("click", e => {
//   let orderType = ""
//   let orderName = ""
//   if (!(e.target.nodeName === "LABEL")) { return }
//   const upBtn = e.target.parentNode.querySelector('[data-priceNet-up]')
//   const downBtn = e.target.parentNode.querySelector('[data-priceNet-down]')
//   // Already sort by descending



//   isDescending = !isDescending
//   orderName = e.target.parentNode.innerText
  
//   // Toggle icon appearance
//   resetOrderIcon()
//   if (isDescending) {
//     upBtn.classList.remove('sort--active')
//     downBtn.classList.add('sort--active')
//   } else {
//     upBtn.classList.add('sort--active')
//     downBtn.classList.remove('sort--active')
//   }
//   changeOrder(orderName, isDescending)
// })


