"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//搜尋(currentSearch)、排序(currentOrder)、種類(currentType)之間的交叉搜尋
//清除查詢按鈕 (resetBtn)
//搜尋結果現況展示 (info)
// 抓取資料上 - 採用原生語法 fetch。 Async / Await 做非同步處裡。

// data
var API = 'https://hexschool.github.io/js-filter-data/data.json';
var data = fetch(API).then(function (response) {
  return response.json();
})
//.then(data => console.log(data))
["catch"](function (error) {
  return console.log(error);
});
var lists = [];
var filteredLists = [];

// DOM Element
var form = document.querySelector('[data-priceNet-form]'); //讀取文字的方式綁定
var input = document.querySelector('[data-priceNet-input]');
var resetBtn = document.querySelector('[data-priceNet-reset]');
var searchInfo = document.querySelector('[data-priceNet-searchInfo]');
var info = document.querySelector('[data-priceNet-info]'); //儲存格
var order = document.querySelector('[data-priceNet-order]');
var type = document.querySelector('[data-priceNet-type]');
var table = document.querySelector('[data-priceNet-table]'); //tbody
var advanceSort = document.querySelector('[data-priceNet-advanceSort]'); //thead 標頭

// State
var currentType = undefined;
var currentOrder = undefined;
var currentSearch = '';
var typeSearched = false; //有沒有搜尋過種類回初始值
var isDescending = false; //是否降序

// 初始化
function init() {
  return _init.apply(this, arguments);
} // 排序
function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return data;
          case 2:
            lists = _context.sent;
            filteredLists = lists;
            render();
          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}
function changeOrder(orderName, isDescending) {
  //依降序
  if (isDescending) {
    filteredLists.sort(function (a, b) {
      return b[orderName] - a[orderName];
    });
    currentOrder = "".concat(orderName, "\u964D\u5E8F"); //上價、中價、下價
  }
  //依升序
  if (!isDescending) {
    currentOrder = "".concat(orderName, "\u5347\u5E8F"); //上價、中價、下價
    filteredLists.sort(function (a, b) {
      return a[orderName] - b[orderName];
    });
  }
  //預設的參數中，先設定的可提供之後設定的使用
  //這裡的currentType 及 currentOrder 暫時先給它undefined 是為了等等有值時可以給它代入
  //undefined 為js參數的預設值
  render(filteredLists, currentType, currentOrder);
}

// 創建搜索信息
function createSearchInfo(dataType, dataOrder, dataNumber) {
  if (!currentSearch) {
    currentSearch = '無搜尋';
  } //當沒有內容(空字串)時再轉為布林值翻轉一次就會得到 true 的結果，有字串時才為false，會代入字串
  return "\n    \u4E00\u5171\u6709<span class=\"\">".concat(dataNumber, "</span> \u7B46\u8CC7\u6599<br>(<span>").concat(dataType, " + ").concat(dataOrder, " + ").concat(currentSearch, "</span>)\n    ");
}
function render() {
  var showData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lists;
  var dataType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "不分類";
  var dataOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "無排序";
  // render
  var newTable = [];
  showData.forEach(function (item) {
    newTable += "\n      <tr class=\"Table-hover\">\n        <td class=\"p-2\">".concat(item.作物名稱, "</td>\n        <td class=\"p-2\">").concat(item.市場名稱, "</td>\n        <td class=\"p-2\">").concat(item.上價, "</td>\n        <td class=\"p-2\">").concat(item.中價, "</td>\n        <td class=\"p-2\">").concat(item.下價, "</td>\n        <td class=\"p-2\">").concat(item.平均價, "</td>\n        <td class=\"p-2\">").concat(item.交易量, "</td>\n      </tr>\n    ");
  });
  //display
  table.innerHTML = newTable;
  searchInfo.innerHTML = createSearchInfo(dataType, dataOrder, showData.length);
}

//清除
function reset() {
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
function resetOrderIcon() {
  var upBtns = document.querySelectorAll('[data-priceNet-up]');
  upBtns.forEach(function (btn) {
    btn.classList.add('sort--active');
    btn.nextElementSibling.classList.remove('sort--active');
  });
}

// 傳入值重新依if條件篩選出符合條件的內容，組合後回傳新陣列
function search() {
  filteredLists = filteredLists.filter(function (item) {
    if (item.作物名稱 === null) {
      return false;
    } else {
      return item.作物名稱.match(input.value); //輸入值 必須和 item.作物名稱 一樣
    }
  });
}

render();
init();

// Search lists by input
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (input.value.trim() === '') {
    reset();
    return;
  }
  currentSearch = input.value;
  search();
  render(filteredLists);
});

// Active reset
resetBtn.addEventListener('click', function (e) {
  reset();
});

//Render selected order
order.addEventListener('change', function (e) {
  changeOrder(e.target.value); //需要問一下~changeOrder的函式有兩個參數但這裡的目標值只有一個，如何帶入？
});

// Render selected type
type.addEventListener('change', function (e) {
  currentType = e.target.options[e.target.selectedIndex].text; //Current selected option item's Text
  if (e.target.value === 'none') {
    filteredLists = lists;
    search();
    render(filteredLists, undefined, currentOrder); //為什麼undefined 會變成"無排序"
    return;
  }
  if (currentSearch != '' && !typeSearched) {
    filteredLists = lists.filter(function (item) {
      return item.種類代碼 === e.target.value;
    });
    typeSearched = true;
  }
  filteredLists = lists.filter(function (item) {
    return item.種類代碼 === e.target.value;
  });
  if (typeSearched) {
    search();
  }
  render(filteredLists, currentType, currentOrder);
});

// thead
// Asecending &Descending order toggler
// 升序和降序切換器
advanceSort.addEventListener('click', function (e) {
  var orderType = '';
  var orderName = '';
  if (!(e.target.nodeName === 'LABEL')) {
    return;
  }
  var upBtn = e.target.parentNode.querySelector('[data-priceNet-up]');
  var downBtn = e.target.parentNode.querySelector('[data-priceNet-down]');

  // Already sort by descending 已經降序排列

  isDescending = !isDescending;
  orderName = e.target.parentNode.innerText;

  //Toggle icon appearance 切換圖標外觀
  resetOrderIcon();
  if (isDescending) {
    upBtn.classList.remove('sort--active');
    downBtn.classList.add('sort--active');
  } else {
    upBtn.classList.add('sort--active');
    downBtn.classList.remove('sort--active');
  }
  changeOrder(orderName, isDescending);
});

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
//# sourceMappingURL=all.js.map
