
// При выполнении методов then и catch возвращается новый объект Promise,
// для которого мы также можем вызвать методы then() и catch()
// и таким образом построить цепочку промисов.

// Благодаря этому мы можем обрабатывать подряд несколько асинхронных операций - одна за другой
// promise.then(..).then(..).then(..)

// Здесь первый промис передаёт значение hello с помощью resolve, сигнализируя об успешном выполнении
// Далее каждый последующий промис будет получать новое значение как аргумент метода then
let helloPromise = new Promise(function (resolve) {
    resolve("Hello");
})

let worldPromise = helloPromise.then(function (value) {
    // возвращаем новое значение
    return value + " World";
});
let metanitPromise = worldPromise.then(function (value) {
    // возвращаем новое значение
    return value + " from METANIT.COM";
});
metanitPromise.then(function (finalValue) {
    // получаем финальное значение
    console.log(finalValue);    // Hello World from METANIT.COM
});

// Для большей краткости и наглядности мы можем упростить цепочку:
new Promise(resolve => resolve("Hello"))
    .then(value => value + " World")
    .then(value => value + " from METANIT.COM")
    .then(finalValue => console.log(finalValue));


// ОБРАБОТКА ОШИБОК
// Для обработки ошибок в конце цепочки добавляется метод catch(), который также возвращает объект Promise.

function generateNumber(str) {
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};

// Функция возвращает промис, который получает извне и слегка обрабатывает его, добавляя цепочку из then и catch
// Функция извне может вернуть либо число, либо ошибку, а функция printNumber обрабатывает входящее значение
function printNumber(str) {
    generateNumber(str)
        .then(value => console.log(value))
        .catch(error => console.log(error));

}
printNumber("rty"); // Not a number
printNumber("3");   // 3


// Обработка ошибок в цепочке промисов
// Теперь усложним цепочку. Пусть у нас в цепочке выполняется сразу несколько промисов:
function generateNumber3(str) {
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};
function printNumber2(str) {
    generateNumber3(str)
        .then(value => {
            if (value === 4) throw "Несчастливое число";
            return value * value;
        })
        .then(finalValue => console.log(`Result: ${finalValue}`))
        .catch(function (error) { console.log(error) })
        .finally(() => console.log("Work has been done"));
}

printNumber2("rty"); // Not a number
printNumber2("3");   // Result: 9
printNumber2("4");   // Несчастливое число
printNumber2("5");   // Result: 25