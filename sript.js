let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
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

// cycle "do"
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');

// }
// while (i < 2);
// console.log(i);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный доход:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log ("Низкий уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log ("Средний уровень достатка");
} else if ( appData.moneyPerDay > 2000  ) {
    console.log ("Высокий уровень достатка");
} else {
    console.log ("Произошла ошибка");
} 


