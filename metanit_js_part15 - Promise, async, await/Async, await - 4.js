
// Внедение стандарта ES2017 в JavaScript привнесло два новых оператора: async и await, который призваны упростить работу с промисами.

// Оператор async определяет асинхронную функцию, в которой будет выполняться одна или несколько асинхронных задач

async function functionName() {
    // асинхронные операции
}

// Внутри асинхронной функции мы можем применить оператор await.
// Он ставится перед вызовом асинхронной операции, которая представляет объект Promise:
// Оператор await приостанавливает выполнение асинхронной функции, пока объект Promise не возвратит результат.

// Сравним реализацию функции суммирования с использованием Promise и async/await

// Реализация через Promise
function sum(x, y) {
    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    });
}
sum(5, 3).then(function (value) {
    console.log("Результат асинхронной операции:", value);
}); // Результат асинхронной операции: 8

// Реализация через Async/await
function sum(x, y) {
    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    });
}

async function calculate() {
    const value = await sum(5, 3);
    console.log("Результат асинхронной операции:", value);
}
//  Благодаря оператору await больше нет надобности вызывать у промиса метод then(). 
// А результат Promise мы можем получить напрямую из вызова функции sum и, например, присвоить константе или переменной:
calculate();    // Результат асинхронной операции: 8


// Выполнение последовательности асинхронных операций
// Асинхронные функции могут содержать множество асинхронных операций, к которым применяется оператор await.
// В этом случае все асинхронные операции будут выполняться последовательно

async function calculate2() {
    const value1 = await sum(5, 3);
    console.log("Результат 1 асинхронной операции:", value1);
    const value2 = await sum(6, 4);
    console.log("Результат 2 асинхронной операции:", value2);
    const value3 = await sum(7, 5);
    console.log("Результат 3 асинхронной операции:", value3);
}

calculate2();
// Результат 1 асинхронной операции: 8
// Результат 2 асинхронной операции: 10
// Результат 3 асинхронной операции: 12


// Обработка ошибок
// Для обработки ошибок, которые могут возникнуть в процессе вызова асинхронной операции применяется конструкция try..catch..finally.

function square(str) {
    return new Promise((resolve, reject) => {
        const n = parseInt(str);
        if (isNaN(n)) reject("Not a number");
        else resolve(n * n);
    })
};

async function calculate3(str) {

    try {
        const value = await square(str);
        console.log("Result: ", value);
    }
    catch (error) {
        console.log(error);
    }
}

calculate3("g8");    // Not a number 
calculate3("4");     // Result:  16