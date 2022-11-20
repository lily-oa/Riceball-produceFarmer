
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

// promise
//批改作業
function correctHomework(name){
  return new Promise((resolve, reject) => {
    console.log('目前正在批改作業中');
    setTimeout(() => {
      const score = Math.round(Math.random()*100); 
      if(score >= 20){
        resolve(
          {
            name, 
            score
          }
        )
      }else{
        console.log(score)
        reject("準備退學吧!!")
      }
      
    }, 1000)    
  }) 
}

function checkAward(data){
  return new Promise((resolve, reject)=>{
    console.log('正在檢查獎品中');
    setTimeout(()=>{
      if(data.score >= 90){
          resolve(`${data.name}獲得電影票`)
      }else if(data.score >= 60 && data.score < 90){
        resolve(`${data.name}獲得嘉獎`)
      }else{
        console.log(data.score)
        reject(`你沒有獎品，打手心10下`)
      }
      
    }, 1000)
  })
}
// correctHomework('小明')
//   .then(data => checkAward(data))
//   .then(reword => console.log(reword))
//   .catch(error => console.log(error));

// async 、 await 非同步的寫法
// async 非同步的函式
const init = async function(){
  try{
    const studentA = await correctHomework('小明');
    // 過一秒後才執行下段語法
    const rewardA = await checkAward(studentA);
    console.log(rewardA);
  }catch(error){
    console.log(error);
  }
}

init();

// const studentA = correctHomework('小明');
// const rewardA = checkAward(studentA);
