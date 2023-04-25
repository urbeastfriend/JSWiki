
function Human(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = function () {
        console.log(this.name)
    }
}

Human.prototype.maxage = 110;

// Чтобы унаследовать поведение класса мы должны вызвать его конструктор с помощью ClassName.Call(this,args)

function Employee(name, age, company) {
    Human.call(this, name, age);
    this.company = company;
    this.printInfo = function () {
        console.log(this.name + " company " + this.company)
    }
}
// Чтобы унаследовать прототипные свойства нужно вызвать
Employee.prototype = Object.create(Human.prototype)

let human = new Human("artem", 23);
let employee = new Employee("artem", 23, "google");

human.printInfo()
employee.printInfo()


console.log(employee.maxage)