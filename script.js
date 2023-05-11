let money = prompt("Ваш бюджет на месяц???");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
  money: money,
  timeDate: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let question1 = prompt(
  "Введите обязательную статью расходов в этом месяце",
  ""
);
let question2 = prompt("Во сколько обойдется?", "");
let question3 = prompt(
  "Введите обязательную статью расходов в этом месяце",
  ""
);
let question4 = prompt("Во сколько обойдется?", "");

appData.expenses.question1 = question2;
appData.expenses.question3 = question4;

console.log(appData);

alert(`Бюджет на 1 день: ${appData.money / 30}`);
