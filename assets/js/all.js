"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
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

// promise
//批改作業

// promise
//批改作業
function correctHomework(name) {
  return new Promise(function (resolve, reject) {
    console.log('目前正在批改作業中');
    setTimeout(function () {
      var score = Math.round(Math.random() * 100);
      if (score >= 20) {
        resolve({
          name: name,
          score: score
        });
      } else {
        console.log(score);
        reject("準備退學吧!!");
      }
    }, 1000);
  });
}
function checkAward(data) {
  return new Promise(function (resolve, reject) {
    console.log('正在檢查獎品中');
    setTimeout(function () {
      if (data.score >= 90) {
        resolve("".concat(data.name, "\u7372\u5F97\u96FB\u5F71\u7968"));
      } else if (data.score >= 60 && data.score < 90) {
        resolve("".concat(data.name, "\u7372\u5F97\u5609\u734E"));
      } else {
        console.log(data.score);
        reject("\u4F60\u6C92\u6709\u734E\u54C1\uFF0C\u6253\u624B\u5FC310\u4E0B");
      }
    }, 1000);
  });
}
// correctHomework('小明')
//   .then(data => checkAward(data))
//   .then(reword => console.log(reword))
//   .catch(error => console.log(error));

// async 、 await 非同步的寫法
var init = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var studentA, rewardA;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return correctHomework('小明');
          case 3:
            studentA = _context.sent;
            _context.next = 6;
            return checkAward(studentA);
          case 6:
            rewardA = _context.sent;
            console.log(rewardA);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function init() {
    return _ref.apply(this, arguments);
  };
}();
init();

// const studentA = correctHomework('小明');
// const rewardA = checkAward(studentA);
//# sourceMappingURL=all.js.map
