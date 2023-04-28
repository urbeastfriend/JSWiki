
// Множества (sets) представляют структуру данных, хранящую только уникальные значения.
// В JS функционал множества определяет объект Set.
// Для создания множества применяется конструктор этого объекта

let mySet = new Set();

// Также можно передать в конструктор массив значений, которыми будет инициализировано множество:
let arr = [1, 1, 2, 3, 4, 5, 2, 4];
let numbers = new Set(arr);
console.log(numbers);           // Set(5) {1, 2, 3, 4, 5}

// Добавление
// Для добавления применяется метод add(). Его результатом является измененное множество:
numbers = new Set();
numbers.add(1);
numbers.add(3);
numbers.add(5);
numbers.add(3);     // не добавляется
numbers.add(1);     // не добавляется
console.log(numbers);       // Set(3) {1, 3, 5}

// Так как метод add возвращает ссылку на это же множество, то мы можем вызывать методы по цепочке:
numbers = new Set();
numbers.add(1).add(3).add(5);
console.log(numbers);       // Set(3) {1, 3, 5}

// Удаление
// Для удаления элементов применяется метод delete():
// Причем данный метод возвращает булевое значение: true - если элемент удален и false - если удаление не произошло
numbers = new Set();
numbers.add(1).add(3).add(5);
numbers.delete(3);
console.log(numbers);       // Set(2) {1, 5}

// Если необходимо удалить вообще все элементы из множества, то применяется метод clear():
numbers = new Set();
numbers.add(1).add(3).add(5);
numbers.clear();
console.log(numbers);           // Set(0) {}

// Проверка наличия элемента
// Если нужно проверить, если ли элемент в множестве, то используется метод has(). 
// Если элемент есть, то метод возвращает true, иначе возвращает false:
numbers = new Set();
numbers.add(1).add(3).add(5);
console.log(numbers.has(3));    // true
console.log(numbers.has(32));   // false

// Перебор множества
// Для перебора элементов множества применяется метод forEach():
arr = [1, 2, 3, 5];
numbers = new Set(arr);

// Для совместимости с массивами, которые тоже имеют метод forEach, 
// в данный метод передается функция обратного вызова, которая принимает три параметра.
// Непосредственно для множества первый и второй параметры представляют текущий перебираемый элемент, а третий параметр - перебираемое множество.
numbers.forEach(function (value1, value2, set) {
    // console.log(value1);
})

// Также для перебора множества можно использовать цикл for...of:
numbers = new Set([1, 2, 3, 5]);

for (n of numbers) {
    // console.log(n);
}


// Получение итератора
// Также у объекта Set есть ряд методов, которые возвращают итератор, а точнее объект SetIterator.
// Это методы values(), keys(), entries():
people = new Set(["Tom", "Bob", "Sam"]);

iterator = people.values();

console.log(iterator.next());   // {value: "Tom", done: false}
console.log(iterator.next());   // {value: "Bob", done: false}
console.log(iterator.next());   // {value: "Sam", done: false}
console.log(iterator.next());   // {value: undefined, done: true}

// Ограничения объекта Set - хранения уникальных значений позволяет эффективно его применять в ряде операций. 
// Например, удаление из массива повторяющихся элементов:
peopleArray = ["Tom", "Bob", "Sam", "Alice", "Sam", "Kate", "Tom"];
peopleSet = new Set(peopleArray);
newPeopleArray = Array.from(peopleSet);

console.log(newPeopleArray);    // ["Tom", "Bob", "Sam", "Alice", "Kate"]