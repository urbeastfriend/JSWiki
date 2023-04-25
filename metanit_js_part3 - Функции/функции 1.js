// Синтаксис определения функции:
// function имя_функции([параметр [, ...]]){

//     // Инструкции
// }

// Определим простейшую функцию
function helloMetanit() {

    console.log("Hello Metanit.com");
}

// функции можно хранить в перменных
let helloFx = helloMetanit;

// функции могут быть анонимными
const anonFx = function () {
    console.log("Анонимная функция")
}


// Функции с параметрами
function print(message) {
    console.log(message)
}

function sum(a = 1, b = 1 + a) {
    console.log(a + b)
}

// Можно передавать параметры и получать их через массив arguments
function sumArguments() {
    let result = 0;
    for (let n of arguments) {
        result += n
    }
    console.log(result)
}

// Можно передавать неопределённое количество значений
function seasonWeatherList(season, ...temperature) {
    console.log(season)
    let temperaturesStr = '';
    for (index in temperature) {
        temperaturesStr += temperature[index];
    }
    console.log(temperaturesStr);
}

// Можно передать функции в качестве параметра функций
function sum(x, y) {
    return x + y;
}
function inlineOperation(a, b, fx) {
    let result = fx(a, b);
    console.log(`inline sum fx result = ${result}`);
}

// Функции могут возвращать результат с помощью return
function sumReturnResult(a, b) {
    const result = a + b;
    return result;
}

// Можно возвращать функции КЕК
function menu(n) {

    if (n == 1) return function (x, y) { return x + y; }
    else if (n == 2) return function (x, y) { return x - y; }
    else if (n == 3) return function (x, y) { return x * y; }
    return function () { return 0; }
}



print("zalupa");
sum(4, 5);
sum();
sum(3);
sumArguments(1, 2, 3, 4, 5);
sumArguments();
seasonWeatherList("Весна", -2, -3, -4, -5);
inlineOperation(1, 2, sum);
console.log(`Вернули результат функции =  ${sumReturnResult(1, 4)}`);

const action = menu(1);         // выбираем первый пункт - сложение
const result = action(2, 5);    // выполняем функцию и получаем результат в константу result
console.log(result);            // 7
