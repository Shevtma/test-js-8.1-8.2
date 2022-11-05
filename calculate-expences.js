/*
Необходимо создать функцию, содержащую расчет суммы затрат, данных в массиве - в расчет берутся суммы только выше 1000.

Создать тестовую функцию, которая будет проверять, что расчет суммы затрат производится верно. 
Проверить расчет на тестовых объектах (используйте forEach()):

*/

let expenses = [
    { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ];

let filteredArray = []
for (let record of expenses){
    filteredArray.push(...record.expenses.filter((value) => {return value > 1000} ))
}

function calculate_expenses(arrayOfNumbers){
    let sum = 0;
    for (let value of arrayOfNumbers){
        sum += value;
    }
    return sum
}

let expSum = calculate_expenses(filteredArray);
console.log(`Сумма всех затрат за 3 года, превышающих 1000 руб, составляет ${expSum}`)

let sumTest = 0
for (let record of expenses){
    record.expenses.forEach( value => {
        if (value > 1000) {
            sumTest += value;
        }
    }) 
}

console.log(`Результат работы проверочной функции: ${sumTest}`);

sumTest === expSum
? console.log(`Проверка завершена успешно.`)
: console.log(`Проверка завершена ошибкой.`)
