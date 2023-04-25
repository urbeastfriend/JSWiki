// По умолчанию все свойства объектов являются публичными, общедоступными, и мы к ним можем обратиться из любого места программы.

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function () {
        console.log("Имя: " + this.name + "; возраст: " + this.age);
    };
};
var tom = new User("Том", 26);
tom.name = 34;
console.log(tom.name);

// Чтобы закрыть доступ к свойствам извне нужно определить свойство не через this, а через var
// и определить методы по работе с данным свойством

function User2(pName, pAge) {
    this.name = pName;
    var _age = pAge;
    this.displayInfo = function () {
        console.log("Имя: " + this.name + "; возраст: " + this.age);
    };
    this.getAge = function () {
        return _age;
    };
    this.setAge = function (age) {
        if (typeof age === "number" && age >= 0) {
            _age = age
        }
        else {
            console.log("Недопустимое значение для возраста")
        }
    }
};

var tom2 = new User2("Том", 26);
console.log(tom2.getAge());
console.log(tom2._age) // undefined