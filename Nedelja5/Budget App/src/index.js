
var budgetController = (function () {
  var Expense = function (id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = (this.value / totalIncome) * 100
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (current_elem) {
      sum += current_elem.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      expenses: [],
      income: [],
    },
    totals: {
      expenses: 0,
      income: 0
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function (type, desc, value) {
      var newItem, id;

      if (data.allItems[type].length > 0) {
        id = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      }

      if (type === 'expenses') {
        newItem = new Expense(id, desc, value);
      } else if (type === 'income') {
        newItem = new Income(id, desc, value);
      }


      data.allItems[type].push(newItem);
      return newItem;
    },

    deleteItem: function (type, id) {
      var ids, index;
      ids = data.allItems[type].map(function (current) {
        return current.id;
      });
      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function () {

      calculateTotal('expenses');
      calculateTotal('income');

      data.budget = data.totals.income - data.totals.expenses;

      if (data.totals.income > 0) {
        data.percentage = Math.round((data.totals.expenses / data.totals.income) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function () {
      data.allItems.expenses.forEach(function (current) {
        current.calcPercentage(data.totals.income);
      });
    },

    getPercentages: function () {
      var allPerc = data.allItems.expenses.map(function (current) {
        return current.percentage;
      });
      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalIncome: data.totals.income,
        totalExpenses: data.totals.expenses,
        percentage: data.percentage,
      };
    },

    testing: function () {
      console.log(data);
    },
  };
})();

var UIController = (function () {
  var DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    itemsContainer: '.container',
    expensesPercLabel: '.item__percentage',
    dateLabel: '.budget__title--month',
  };

  var formatNumber = function (num, type) {
    var numSplit, int, dec, sign;
    console.log(sign);

    num = Math.abs(num);
    num = num.toFixed(2);
    numSplit = num.split('.');
    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 6) {
      int = int.substr(0, int.length - 6) + ',' + int.substr(int.length - 6, 3) + ',' + int.substr(int.length - 9, 3);
    } else if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    return (type === 'income' ? '+' : '-') + ' ' + int + '.' + dec;
  };

  var nodeListForEach = function (nodeList, callback) {
    for (var i = 0; i < nodeList.length; i++) {
      callback(nodeList[i], i);
    }
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value),
      };
    },

    addListItem: function (type, obj) {
      var html, newHtml, elem;

      if (type === 'income') {
        elem = DOMStrings.incomeContainer;

        html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      } else if (type === 'expenses') {
        elem = DOMStrings.expensesContainer;

        html = '<div class="item clearfix" id="expenses-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }


      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%desc%', obj.desc);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));


      document.querySelector(elem).insertAdjacentHTML('beforeend', newHtml);
    },

    removeListItem: function (selectorID) {
      var elem = document.getElementById(selectorID);
      elem.parentNode.removeChild(elem);
    },

    clearFields: function () {
      var fields, fieldsArry;
      console.log(fieldsArry);

      fields = document.querySelectorAll('.add__description' + ', ' + '.add__value');
      let fieldsArr;
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function (current_elem, index, current_arry) {
        current_elem.value = ''
        console.log(index, current_arry);
      });
      fieldsArr[0].focus();
    },

    displayPercentages: function (percentages) {
      var nodeList = document.querySelectorAll(DOMStrings.expensesPercLabel);

      nodeListForEach(nodeList, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = Math.round(percentages[index]) + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    displayBudget: function (obj) {
      var type;

      type = obj.budget > 0 ? 'income' : 'expenses';

      document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'income');
      document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExpenses, 'expenses');

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '--';
      }
    },

    displayDate: function () {
      var now, months, month, year;
      months = ['Januaru', 'Februaru', 'Martu', 'Aprilu', 'Maju', 'Junu', 'Julu', 'Avgustu', 'Septembru', 'Oktobru', 'Novembru', 'Decembru'];

      now = new Date();
      month = now.getMonth();
      year = now.getFullYear();

      document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
    },

    changedType: function () {
      var fields;

      fields = document.querySelectorAll(
        DOMStrings.inputType + ',' +
        DOMStrings.inputDesc + ',' +
        DOMStrings.inputValue);

      nodeListForEach(fields, function (current_elem) {
        current_elem.classList.toggle('red-focus');
      });

      document.querySelector(DOMStrings.inputButton).classList.toggle('red');
    },

    getDomStrings: function () {
      return DOMStrings;
    }
  };
})();


var controller = (function (budgetCtrlr, UICtrlr) {
  var setupEventListeners = function () {
    var dom = UIController.getDomStrings();

    document.querySelector(dom.inputButton).addEventListener('click', ctrlrAddItem);
    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlrAddItem();
      }
    });

    document.querySelector(dom.itemsContainer).addEventListener('click', ctrlrDeleteItem);
    document.querySelector(dom.inputType).addEventListener('change', UICtrlr.changedType);
  };

  var updateBudget = function () {
    var budget;

    budgetCtrlr.calculateBudget();

    budget = budgetCtrlr.getBudget();

    UIController.displayBudget(budget);
  };

  var updatePercentages = function () {

    budgetCtrlr.calculatePercentages();

    var percentages = budgetCtrlr.getPercentages();

    UICtrlr.displayPercentages(percentages);
  };

  var ctrlrAddItem = function () {
    var input, newItem;


    input = UICtrlr.getInput();


    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {

      newItem = budgetCtrlr.addItem(input.type, input.description, input.value);


      UIController.addListItem(input.type, newItem);


      UIController.clearFields();


      updateBudget();


      updatePercentages();
    }
  };

  var ctrlrDeleteItem = function (event) {
    var itemID, splitItem, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      splitItem = itemID.split('-');
      type = splitItem[0];
      ID = parseInt(splitItem[1]);

      budgetCtrlr.deleteItem(type, ID);

      UIController.removeListItem(itemID);

      updateBudget();

      updatePercentages();
    }
  };

  return {
    init: function () {

      UIController.displayDate();
      setupEventListeners();
      UIController.displayBudget(
        {
          budget: 0,
          totalIncome: 0,
          totalExpenses: 0,
          percentage: -1,
        }
      );
    },
  }
})(budgetController, UIController);

controller.init();