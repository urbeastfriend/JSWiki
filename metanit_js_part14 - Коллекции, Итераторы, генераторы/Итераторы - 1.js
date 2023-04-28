
// Итераторы - это штука, благодаря которой мы можем итерировать (for of) через элементы какой-то коллекции, например через массив.
// Но конструкция (for of) по умолчанию применима не ко всем коллекциям (или объектам)

// Итератор - это функция - [Symbol.iterator](), возвращающая объект, содержащий метод next()
//
// Как раз получение этого итератора и использование метода next() помогает конструкции (for of) перебирать элементы коллекции
// 
// Как уже было отмечено, не все объекты по умолчанию обладают итератором, но это можно исправить, добавив его самому,
// определив в объекте метод [Symbol.iterator]()

let iterableObject = {

    [Symbol.iterator]() {
        return {
            current: 1,
            end: 3,
            next() {
                if (this.current <= this.end) {
                    return { value: this.current++, done: false };
                }
                return { done: true }
            },
            [Symbol.iterator]() {
                return this;
            }
        }

    }
}

let objectIterator = iterableObject[Symbol.iterator](); // Можно получить итератор
// и с его помощью получить значения
console.log(objectIterator.next()); // {value: 1, done: false}
console.log(objectIterator.next()); // {value: 2, done: false}
console.log(objectIterator.next()); // {value: 3, done: false}
console.log(objectIterator.next()); // {done: true}

// Но так как теперь наш объект обладает итератором, то можно просто перебрать элементы через for of
// Но тут нам вернутся только значения, а done опустится.

for (const obj of iterableObject) {
    console.log(obj)
}