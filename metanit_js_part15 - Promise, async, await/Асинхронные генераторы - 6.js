
// Асинхронные итераторы открывают нам путь к созданию асинхронных генераторов.
// Асинхронные генераторы позволяют нам использовать оператор await и получать и возвращать данные асинхронным образом

// Для определения асинхронного генератора перед функцией генератора ставится оператор async

async function* asyncNumGenerator() {
    yield 1;
}

// При обращении к свойству next() асинхронный генератор возвращает объект Promise, а у того можно запросить объект { value, done }

let numGenerator = asyncNumGenerator();
numGenerator.next().then(value => {
    console.log(value);
})

// С помощью оператора await из метода next() генератора мы можем получить данные:
async function* generatePersonAsync() {
    yield "Tom";
    yield "Sam";
    yield "Bob";
}
async function printPeopleAsync() {
    const personGenerator = generatePersonAsync();
    while (!(person = await personGenerator.next()).done) {
        console.log(person.value);
    }
}

printPeopleAsync(); // Tom Sam Bob

// Поскольку асинхронный генератор представляет асинхронный итератор, то данные генератора также можно получить через цикл for-await-of:
async function printPeopleAsyncForAwait() {
    const personGenerator = generatePersonAsync();
    for await (person of personGenerator) {
        console.log(person);
    }
}

printPeopleAsyncForAwait(); // Tom Sam Bob


// Главным преимуществом асинхронным генераторов является то, что мы можем использовать в них оператор await 
// и соответственно получать данные из источников данных, которые используют асинхронный API.
// Здесь для имитации получения данных из асинхронного источника данных применяется промис, 
// который через 2000 секуд возвращает один из элементов массива, который передается в функцию генератора:
async function* generatePersonAsync3(people) {
    for (const person of people)
        yield await new Promise(resolve => setTimeout(() => resolve(person), 2000));
}
async function printPeopleAsync3(people) {
    for await (const item of generatePersonAsync3(people)) {
        console.log(item);
    }
}
printPeopleAsync3(["Tom", "Sam", "Bob"]);