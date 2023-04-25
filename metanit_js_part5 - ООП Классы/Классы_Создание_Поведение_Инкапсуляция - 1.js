
// С внедрением стадарта ES6 в Javascript появился новый способ определения объектов - с помощью классов.
// Класс представляет собой описание объекта, его состояния и поведения. А объект - конкретным воплощением класса или его экземпляром.

// Для определения класса используется ключевое слово: class
class Human { }
// 1- class 2- имя класса 3- тело класса

// Можно определять анонимные классы и присваивать их переменной
let propClass = class { };

// Можно создать и не анонимный класс
let proprClass2 = class testClass { }

// У класса можно определить поля и свойства, которые фактически просто представляет их название
class HumanWithProperties {
    name = "Artem";
    age = 18;
    sex = "Male";
    changeName(strName) {
        if (typeof strName === 'string' || strName instanceof String) {
            this.name = strName
        }
        else {
            console.log("Not a string");
        }
    }
}

let humanProp = new HumanWithProperties(); // вызываем конструктор класса
console.log(humanProp.name);
humanProp.changeName(123);
console.log(humanProp.name);
humanProp.changeName("Correct string as name");
console.log(humanProp.name);

// В классах можно определить свои конструкторы
// Причём определение полей класса будет избыточным, потому что использование this будет равноценно их определению
class HumanWithDiffConstructor {
    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
        console.log(`Name = ${this.name} Age = ${this.age}`)
    }
}
let humanWithConstructor = new HumanWithDiffConstructor("Artem2", 23);

class HumanWithPrivateProps {
    #name;
    #age;
    constructor(pName, pAge) {
        this.#name = pName;
        this.#age = pAge;
    }
    print() {
        console.log(`Name = ${this.#name} Age = ${this.#age}`)
    }
}

let tom = new HumanWithPrivateProps("Tom", "23");
tom.print();
