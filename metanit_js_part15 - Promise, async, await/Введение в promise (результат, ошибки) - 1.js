
// Promise это способ запустить какие-то операции асинхронно, не блокируя поток,
// в котором эти операции были вызваны.

// Promise - это объект, представляющий результат УСПЕШНОГО или НЕУДАЧНОГО завершения АСИНХРОННОЙ ОПЕРАЦИИ.

// Promise может находиться в одном из следующих состояний:
//   - Pending (состояние ожидания): Начальное состояние, промис создан, но выполнение ещё не завершено
//   - Fulfilled (исполнено, завершено): операция, которую представляет промис, успешно завершена
//   - Rejected (отказ, завершено с ошибкой): при выполнении операции произошла ошибка

// Для создания используется конструктор типа Promise:
// В качестве параметра конструктор принимает функцию, которая выполняется при создании промиса.
// Промис достаточно быстро переходит в исполнение из начального состояния Pending.
let myPromise = new Promise(function () {
    console.log(`Асинхронная операция promise создана и запущена`)
})

let input1 = "Промис должнен вернуть ошибку";
// Как правило функция, которая передаётся в конструктор принимает два параметра.
// Оба этих параметра - resolve и reject также представляют функции. 
// И каждая из этих функций принимает параметр любого типа.
let myFullfiledPromise = new Promise(function (resolve, reject) {
    console.log("Выполнение асинхронной операции и возвращение результата");
    if (input1 != "Промис должнен вернуть ошибку") {
        // Функция reject вызывается при возникновении ошибки. 
        reject({ errorCode: 1337, message: "Неизвестная ошибка" })
    }
    else {
        // Функция resolve() вызывается в конце выполняемой операции после всех действий.
        resolve("Результат промиса") // resolve используется, чтобы вернуть результат выполнения промиса
        // Вернуть можно любой объект
    }
});

// Для получения РЕЗУЛЬТАТА промиса используется функция then() объекта promise.
// then(onFulfilled, onRejected);
//   - Первый параметр функции onFulfilled представляет функцию, которая выполнится при успешном завершении промиса
// и в качестве параметра получает переданные в resolve() данные
//   - Второй параметр функции onRejected представляет функцию, которая выполнится при возникновении ошибки
// и в качестве параметра получает переданные в reject() данные

// Функция then() возвращает также объект Promise
// Где value - результат, который передали в resolve()
myFullfiledPromise.then(function (value) {
    console.log(value);
})

// Иногда требуется просто ВЕРНУТЬ из промиса некоторое значение. 
// Для этого можно использовать метод Promise.resolve()
let returnValuePromise = Promise.resolve("Просто значение в resolve")
returnValuePromise.then(function (value) {
    console.log(value)
})

// Нередко промис определяется ЧЕРЕЗ ФУНКЦИЮ, которая ВОЗВРАЩАЕТ ОБЪЕКТ PROMISE
function sumReturnsPromise(x, y) {
    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    })
}
// Здесь функция sum() принимает два числа и возвращает промис, который инкапсулирует операцию сумму этих чисел.
// Определение промиса через функцию позволяет нам, с одной стороны, при вызове функции передавать разные значения.
// А с другой стороны, работать с результатом этой функции как с промисом и 
// настроить при каждом конкретном вызове обработку полученного значения.
sumReturnsPromise(3, 4).then(function (value) { console.log("Результат операции:", value) })
sumReturnsPromise(25, 4).then(function (value) { console.log("Результат операции:", value); });

// В этом случае логика обработки будет повторяться. 
// Но поскольку метод then() также возвращает объект Promise, то мы можем сделать следующим образом:

function sumReturnsPromise2(x, y) {
    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    }).then(function (value) { console.log("Результат операции:", value); });
}
sumReturnsPromise2(3, 5);
sumReturnsPromise2(25, 4);


// ГИБКАЯ НАСТРОЙКА ФУНКЦИИ
// Мы можем определить функцию обработчика в качестве параметра функции, а если он не передан, 
// то устанавливать обработчик по умолчанию:
function sumReturnsPromise3(x, y, func) {
    // если обработчик не установлен, то устанавливаем обработчик по умолчанию
    if (func === undefined) func = function (value) { console.log("Результат операции:", value); };

    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    }).then(func);
}
sumReturnsPromise3(3, 5);
sumReturnsPromise3(25, 4, function (value) { console.log("Сумма:", value); });


// ОБРАБОТКА ОШИБОК в Promise

let myBrokenPromise = new Promise(function (resolve, reject) {
    // Функция reject вызывается при возникновении ошибки. 
    reject({ errorCode: 1337, message: "Неизвестная ошибка" })
});

// Для получения и обработки ошибки мы можем использовать функцию catch() объекта Promise
myBrokenPromise.catch(function (error) {
    console.log("Обработка ошибок Promise");
    console.log(error)
});

// Ошибка может возникнуть и без вызова функции reject(). 
myBrokenPromise = new Promise(function (resolve) {
    getSomeWork();      // вызов не существующей функции
    resolve("Hello world!");
});
// ReferenceError: getSomeWork is not defined 
// отловится блоком catch() даже если промис не завершит своё выполнение

myBrokenPromise.catch(function (error) {
    console.log(error);
});

// Можно отлавливать ошибки, вызванные с помощью throw
// Может показаться, что это бесполезно, но throw может применяться во внешней функции, которую мы вызываем в коде
function getNumber(str) {
    const parsed = parseInt(str);
    if (isNaN(parsed)) throw "Not a number throw in fx";            // Генерируем ошибку
    else return parsed;
}

myBrokenPromise = new Promise(function (resolve, reject) {
    const parsed = parseInt("Hello");
    const result = getNumber("hello");
    if (isNaN(parsed)) {
        throw "Not a number";           // Генерируем ошибку
    }
    resolve(parsed);
});

myBrokenPromise.catch(function (error) {
    console.log(error);
});


// Обработка ошибки в TRY..CATCH
// Как и в общем случае, операции, которые могут генерировать ошибку, можно помещать в try catch
// а при возникновении исключения в блоке catch вызывать функцию reject

myBrokenPromise = new Promise(function (resolve, reject) {
    try {
        console.log("Выполнение асинхронной операции");
        getSomeWork();      // вызов не существующей функции
        resolve("Hello world!");
    }
    catch (err) {
        reject(`Произошла ошибка: ${err.message}`);
    }
});
myBrokenPromise.catch(function (error) {
    console.log(error);
});


// Обработка ошибки с помощью функции then
// Кроме функции catch для получения информации об ошибке и ее обработки также можно использовать функцию then()
// ее второй параметр представляет обработчик ошибки и получает на вход значение, переданное через reject
function generateNumber(str) {
    return new Promise(function (resolve, reject) {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("значение не является числом")
        else resolve(parsed);
    })
        .then(function (value) { console.log("Результат операции:", value); },
            function (error) { console.log("Возникла ошибка:", error); });
}

generateNumber("23"); // Результат операции: 23
generateNumber("hello"); // Возникла ошибка: значение не является числом