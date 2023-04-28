
// Генераторы представляют собой особый тип функции, которые используются для генерации значений.
// Кстати - генераторы являются итераторами
// Для определения генераторов используется символ звездочки *, который ставится после ключевого слова function

function* getNumber() {
    yield 5;
}

// Создаём объект итератора(генератора)
let numberGenerator = getNumber();

// Получаем значение
let number = numberGenerator.next();
console.log(number)  // {value: 5, done: false}
number = numberGenerator.next()
console.log(number)  // {value: undefined, done: true}

// Генератор может создавать множество значений
function* getNumber2() {
    yield 5;
    yield 25;
    yield 125;
}
numberGenerator = getNumber2();
console.log(numberGenerator.next()); //{value: 5, done: false}
console.log(numberGenerator.next()); //{value: 25, done: false}
console.log(numberGenerator.next()); //{value: 125, done: false}
console.log(numberGenerator.next()); //{value: undefined, done: true}

// Генераторы могут также использовать сложную логику
function* points() {

    let x = 0;
    let y = 0;
    while (true) {
        yield { x: x, y: y };
        x += 2;
        y += 1;
    }
}
let pointGenerator = points();

console.log(pointGenerator.next().value); // {x: 0, y: 0}
console.log(pointGenerator.next().value); // {x: 2, y: 1}
pointGenerator.return(); // можно завершить работу генератора
console.log(pointGenerator.next().value); // {value: undefined, done: true}

// Можно получать значения генератора в цикле
numberGenerator = getNumber2();

for (const num of numberGenerator) {
    console.log(num);
}


// Функция генератора может принимать параметры, как и другие функции
function* getNumber3(start, end, step) {
    for (let n = start; n <= end; n += step) {
        yield n;
    }
}
numberGenerator = getNumber3(0, 8, 2);

for (num of numberGenerator) {
    console.log(num);    // 0 2 4 6 8

}

// Или можно генеровать значения из массива
function* generateFromArray(items) {
    for (item of items)
        yield item;
}
let people = ["Tom", "Bob", "Sam"];
let personGenerator = generateFromArray(people);
for (person of personGenerator)
    console.log(person);


// Можно передать параметры в генератор с помощью next и получать их с помощью оператора yield
function* getNumber4() {
    const n = yield 5;      // получаем значение numberGenerator.next(2).value
    console.log("n:", n);
    const m = yield 5 * n;  // получаем значение numberGenerator.next(3).value
    console.log("m:", m);
    yield 5 * m;
}
numberGenerator = getNumber4();

console.log(numberGenerator.next().value);      // 5
console.log(numberGenerator.next(2).value);     // 10
console.log(numberGenerator.next(3).value);     // 15


// Мы можем генерировать исключения в генераторе с помощью функции throw(),
// Переданное в эту функцию значение представляет информацию об ошибке
function* generateData() {
    try {
        yield "Tom";
        yield "Bob";
        yield "Hello Work";
    }
    catch (error) {
        console.log("Error:", error);
    }
}
personGenerator = generateData();
console.log(personGenerator.next());        // {value: "Tom", done: false}
personGenerator.throw("Something wrong");   // Error: Something wrong
console.log(personGenerator.next());        // {value: undefined, done: true}

// После вызова throw генератор завершает работу, поэтому последующий вызов next()
// будет возвращать {value: undefined, done: true}