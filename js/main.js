let buttonStart = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  dayBudget = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalexpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  inputExpenses = document.getElementsByClassName("expenses-item"),
  expensesItemBtn = document.getElementsByTagName("button")[0],
  optionalexpensesBtn = document.getElementsByTagName("button")[1],
  countBudgetBtn = document.getElementsByTagName("button")[2],
  optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  chooseIncome = document.querySelector(".choose-income"),
  savings = document.querySelector("#savings"),
  chooseSum = document.querySelector(".choose-sum"),
  choosePercent = document.querySelector(".choose-percent"),
  yearValue = document.querySelector(".year-value"),
  monthValue = document.querySelector(".month-value"),
  dayValue = document.querySelector(".day-value");

let money, time;
expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

buttonStart.addEventListener("click", function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц???", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц???", "");
  }
  appData.money = money;
  appData.timeDate = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesItemBtn.disabled = false;
  optionalexpensesBtn.disabled = false;
  countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener("click", function () {
  let sum = 0;

  for (let i = 0; i < inputExpenses.length; i += 2) {
    let question1 = inputExpenses[i].value;
    let question2 = inputExpenses[i + 1].value;

    if (
      typeof question1 === "string" &&
      typeof question1 !== null &&
      typeof question2 !== null &&
      question1 != "" &&
      question2 != "" &&
      question1.length < 50
    ) {
      console.log("Корректные данные");
      appData.expenses[question1] = question2;
      sum += +question2;
    } else {
      console.log("Некорректные данные");
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener("click", function () {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let a = optionalexpensesItem[i].value;
    appData.optionalExpenses[i] = a;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBudgetBtn.addEventListener("click", function () {
  if (appData.money != undefined) {
    appData.moneyPerDay = (
      (appData.money - +expensesValue.textContent) /
      30
    ).toFixed();
    dayBudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudget.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener("input", function () {
  let items = chooseIncome.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

savings.addEventListener("click", function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener("input", function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener("input", function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  money: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
