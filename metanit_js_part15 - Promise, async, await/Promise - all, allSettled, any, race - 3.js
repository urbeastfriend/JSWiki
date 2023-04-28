
// Функции Promise.all(), Promise.allSettled() и Promise.race() позволяют сгруппировать выполнение нескольких промисов.

// Функция Promise.all
// Функция Promise.all() возвращает единый объект Promise, который объединяет набор промисов.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hello");
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "World")
})
promise1.then(value => console.log(value));  // Hello
promise2.then(value => console.log(value));  // World

// Функция Promise.all() позволяет объединить несколько промисов и выполнять их параллельно, но как единое целое.
// Promise.all([промис1, промис2, ... прромисN]);

// Возвращаемым результатом функции является новый объект Promise.
// Значения всех промисов возвращаются только если все они завершились успешно, без ошибок
// Вызванных throw, try, rejected() и тд
Promise.all([promise1, promise2])
    .then(values => {
        let [promise1data, promise2data] = values;
        console.log(promise1data, promise2data)  // Hello World
    }).catch(error => console.log(error));


// Функция Promise.allSettled
// Функция Promise.allSettled также принимает набор промисов и выполняет их как единое целое,
// но возвращает объект со статусом и результатом промиса
// Результат работы промисов НЕОБЯЗАТЕЛЬНО ДОЛЖЕН БЫТЬ УСПЕШНЫМ

promise1 = new Promise((resolve, reject) => {
    reject("Непредвиденная ошибка");
    setTimeout(resolve, 500, "Hello");
});
promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "World");
});

Promise.allSettled([promise1, promise2])
    .then(values => {
        let [promise1data, promise2data] = values;
        console.log(promise1data);  // {status: "rejected", reason: "Непредвиденная ошибка"}
        console.log(promise2data);  // {status: "fulfilled", value: "World"}
    });


// Функция Promise.race() принимает несколько промисов, но возвращает только первый ЗАВЕРШЁННЫЙ (независимо от результата)

promise1 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Hello");
});
promise2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});
Promise.race([promise1, promise2])
    .then(value => console.log(value))       // Hello
    .catch(error => console.log(error));


// Функция Promise.any() принимает несколько промисов, но возвращает только первый УСПЕШНО ЗАВЕРШЁННЫЙ
// Если же все промисы завершились с ошибкой, то генерируется исключение типа AggregateError:

promise1 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});
promise2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});

// В данном случае первым выполненным будет промис promise1, однако он завершается с ошибкой.
//  Поэтому в метод then в качестве value передаст "World" - результат промиса promise2, который успешно завершается.
Promise.any([promise1, promise2])
    .then(value => console.log(value))
    .catch(error => console.log(error));

// Aggregate error если все промисы завершились с ошибкой
promise1 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});
promise2 = new Promise((resolve, reject) => {
    reject("error in promise2");
    setTimeout(resolve, 1000, "World");
});
Promise.any([promise1, promise2])
    .then(value => console.log(value))
    .catch(error => {
        console.log(error) // AggregateError: All promises were rejected
        return error;
    }).then(errorArray => {
        // С помощью свойства errors типа AggregateError можно получить в виде массива все ошибки, которые возникли в промисах:
        console.log(errorArray.errors) // // ["error in promise1", "error in promise2"]
    });
