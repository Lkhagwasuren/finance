// Delgetstei ajillah controller
var uiController = (function () {
  // DOM-oos awsan  ogogdolvvdiig end hadgaliy
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
// sanhuutei  ajillah controller

var financeController = (function () {
  var Income = function (id, decription, value) {
    this.id = id;
    this.decription = decription;
    this.value = value;
  };
  var Expense = function (id, decription, value) {
    this.id = id;
    this.decription = decription;
    this.value = value;
  };

  var data = {
    allitems: {
      inc: [],
      exp: [],
    },
    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

//programmiin holbogch controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    //1. oruulah ogogdoliiig delgetsees olj awna
    console.log(uiController.getInput());
    //2. olj awsan ogogdliig sanhuutei ajillah controller luu damjuulna
    //3. olj awsan ogogdliig delgetsend ni gargana
    //4. tolowiig tootsoolno
    //5. etsesiin vldegdel tootsoog delgetsend gargana
  };
  var setupEventListener = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("Application ehllee...");
      setupEventListener();
    },
  };
})(uiController, financeController);

appController.init();
