let money, time;
function start() {
  money = +prompt("Ваш бюджет на месяц???");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц???");
  }
}
start();

let appData = {
  money: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let question1 = prompt(
        "Введите обязательную статью расходов в этом месяце",
        ""
      );
      let question2 = prompt("Во сколько обойдется?", "");

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
      } else {
        console.log("Некорректные данные");
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.money / 30).toFixed();
    alert(`Бюджет на 1 день: ${appData.moneyPerDay} руб.`);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 4; i++) {
      let a = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = a;
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятую",
      ""
    );
    if (typeof items != "string" || items == "" || typeof items == null) {
      console.log("Некорректно введены данные!");
    } else {
      appData.income = items.split(", ");
      let addIncome = prompt("Может что-то еще?");
      if (addIncome == "" || addIncome == null) {
        appData.income.sort();
      } else {
        appData.income.push(addIncome);
      }
    }
    appData.income.forEach(function (element, i) {
      alert(`Способы доп. заработка: ${i + 1} - ${element}!`);
    });
  },
};

for (const key in appData) {
  console.log(
    `Наша программа включает в себя данные: ${key} - ${appData[key]}`
  );
}
