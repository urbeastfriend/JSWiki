
// Асинхронные итераторы объединяют возможности итераторов и операторов async/await
// Асинхронные итераторы прежде всего предназначены для обращения к источникам данных, которые используют асинхронный API
// Это могут быть какие-то данные, загружаемые по частям, например по сети, из файловой системы или из базы данных

// Если обычный итератор при вызове метода next() возвращает объект с двумя свойствами (value, done)
// То next() асинхронного итератора возвращает объект Promise, а уже из него в свою очередь возвращается объект (value,done)

// Цикл for-await-of
// Для получения данных с помощью асинхронных итераторов применяется цикл for-await-of:

// В цикле for-await-of после оператора of идет некоторый набор данных, который можно перебрать по элементам.
// Это может асинхронный источник данных, но также может быть и синхронный источник данных, как массивы или,
// например, встроенные объекты String, Map, Set и т.д.

// !! Стоит отметить, что данная форма цикла может использоваться только в функциях, определенных с оператором async.

let dataSource = ["Tom", "Sam", "Bob"];
async function readData() {
    // Неявно создаётся асинхронный итератор [Symbol.asyncIterator]()
    for await (const item of dataSource) {
        // Неявно возвращается объект Promise при каждом обращении к элементу
        console.log(item);
    }
}
readData(); // Tom Sam Bob

// Создание асинхронного итератора
// Как и в случае с обычными итераторами, мы можем явно создать его для любого объекта
const generatePerson = {
    [Symbol.asyncIterator]() {
        return {
            index: 0,
            people: ["Tom", "Sam", "Bob"],
            // В методе next возвращаем объект Promise.
            next() {
                if (this.index < this.people.length) {
                    return Promise.resolve({ value: this.people[this.index++], done: false });
                }

                return Promise.resolve({ done: true });
            }
        };
    }
};

// Как и с обычным итератором, мы можем обратиться к асинхронному итератору
generatePerson[Symbol.asyncIterator]().next().then(data => {
    console.log(data);
})

// Поскольку метод next() возвращает Promise, то мы можем использовать оператор await для получения значений:
async function printPeople() {
    const peopleIterator = generatePerson[Symbol.asyncIterator]();

    while (!(personData = await peopleIterator.next()).done) {
        console.log(personData.value);
    }
}
printPeople();

// Однако для перебора объекта асинхронного итератора гораздо проще использовать выше рассмотренный цикл for-await-of:

async function printPeople2() {

    for await (const person of generatePerson) {
        console.log(person);
    }
}

printPeople2();