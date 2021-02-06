let money, time;

function start() {
     money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
} 

start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

let i = 0; 

//  //cycle
// // while ( i < 2) {
// //     i++; 
// //     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
// //     let b = prompt("Во сколько обойдется?", '');
// //     console.log (i);

    
//     if ( (typeof (a)) === "string" && (typeof (a)) != null && 
//     (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else  {

//     }
// }

function chooseExpensions () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof (a)) === "string" && (typeof (a)) != null && 
        (typeof (b)) != null && a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else  {                            
            console.log ("Что-то не так");
            i--;
        }
        
    }
}
chooseExpensions ();

function chooseOptExpenses () {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", '');
    
        if ( (typeof (a)) === "string" && (typeof (a)) != null && a != ""  && a.length < 50) {
            console.log("done");
            appData.optionalExpenses = a;
            alert("1:" + appData.optionalExpenses);
            alert("2:" + appData.optionalExpenses);
            alert("3:" + appData.optionalExpenses);
        } else  {                            
            console.log ("Что-то не так");
            i--;
        }
        
    }
}
chooseOptExpenses ();



// cycle "do"
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

// }
// while (i < 2);
// console.log(i);

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Ежедневный доход:" + appData.moneyPerDay);

function detectDayBudget () {
    if (appData.moneyPerDay < 100) {
        console.log ("Низкий уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log ("Средний уровень достатка");
    } else if ( appData.moneyPerDay > 2000  ) {
        console.log ("Высокий уровень достатка");
    } else {
        console.log ("Произошла ошибка");
    } 
}
detectDayBudget ();




function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений");
        let percent = +prompt ("Какой процент депозита");

        appData.monthInCome = (save/100/12*percent).toFixed(2);
        alert ("Ваш доход по депозиту:" + appData.monthInCome );
    }
}
checkSavings ();


