
// Конструктор объекта в JS представляет собой функцию.
// Только конструкторы объектов в отличии от функций принято начинать с большой буквы

function Human(pName, pAge) {
    this.name = pName,
        this.age = pAge,
        this.carInfo,
        this.printHumanInfo = function () {
            console.log(`${this.name} - ${this.age}`)
        },
        this.setCarInfo = function (pCarInfo) {
            this.carInfo = pCarInfo
            console.log(`${this.name} now drives ${this.carInfo.carName}`)
        }
}

function Car(pCarName) {
    this.carName = pCarName
}


let human1 = new Human("Artem", 23);
let human2 = new Human("Ilya", 24);

console.log(human1);
let car1 = new Car("Ferarri");
human1.setCarInfo(car1)
console.log(human1);


// Оператор instanceof позволяет проверить с помощью какого конструктора создан объект
if (human1 instanceof Human) {
    console.log(human1.name + " is instance of Human")
}


// Также можно расширить функционал классов объектов с использованием prototype - по типу extension функций в котлин

Human.prototype.humanExtensionFx = function () {
    console.log("Extension function call");
}

human1.humanExtensionFx();

