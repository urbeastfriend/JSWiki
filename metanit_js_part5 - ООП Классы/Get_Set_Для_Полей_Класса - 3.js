
// С последними стандартами в JS была добавлена поддержка методов доступа get set
// Там где раньше мы писали отдельные функции по работе с полями, теперь можно сделать это проще

class Human {
    #name = "Artem";
    set name(value) {
        if (typeof value === 'string' || value instanceof String)
            this.#name = value;
    }
    get name() {
        return this.#name;
    }
    constructor(pName) {
        this.#name = pName;
    };
    #retireAge = 65;
    get retireAge() {
        return this.#retireAge
    }

}

let testHuman = new Human("testHumanName");
console.log(testHuman.name)
testHuman.name = 123;  // не изменилось
console.log(testHuman.name)
testHuman.name = "Andrew";  // стало равным Andrew
console.log(testHuman.name)
console.log(testHuman.retireAge)
testHuman.retireAge = 1;   // не изменилось
console.log(testHuman.retireAge)


// Геттеры и сеттеры также могут быть вычисляемыми свойствами, а не атрибутами приватных свойств
class Human2 {
    constructor(firstname, secondname) {
        this.firstname = firstname;
        this.secondname = secondname;
    };
    get fullName() {
        return `${this.secondname} ${this.firstname}`
    }
    // Разбиваем входную строку с помощью сплит и устанавливаем значения свойств класса
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

let testHuman2 = new Human2("Daniil", "Bandenkov");
console.log(testHuman2.fullName);