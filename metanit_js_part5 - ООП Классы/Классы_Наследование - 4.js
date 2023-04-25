// Одни классы могут наследоваться от других. Наследование позволяет сократить объем кода в классах-наследниках. Например, возьмем следующие классы:

class Human {
    name;
    age;
    printHumanInfo() {
        console.log(`name ${this.name} age ${this.age}`)
    }
}

class Employee extends Human {
    salary;
    company;
    printCompanyInfo() {
        console.log(`name ${this.name} works for salary ${this.salary} at ${this.company}`)
    }
}

// Ради примера создаём экземпляр базового класса
let tom = new Human();
tom.name = "Tom";
tom.age = "23";

// И экземпляр произвоидного класса
// устанавливаем значения свойств для обоих классов
let tomWorker = new Employee()
tomWorker.name = "TomWorker";
tomWorker.age = "23";
tomWorker.company = "Intel";
tomWorker.salary = "1000$"

tom.printHumanInfo();
tomWorker.printHumanInfo();
tomWorker.printCompanyInfo();


// Вместе со всем функционалом также наследуется конструктор базового класса.

class Human2 {
    constructor(pname, page) {
        this.name = pname;
        this.age = page;
    }
    printHumanInfo() {
        console.log(`name ${this.name} age ${this.age}`)
    }
}

class Employee2 extends Human2 {
    salary;
    company;
    printCompanyInfo() {
        console.log(`name ${this.name} works for salary ${this.salary} at ${this.company}`)
    }
}

let testEmployee2 = new Employee2("Tom2", 23) // унаследованный конструктор
testEmployee2.printHumanInfo()


// Можно также определить свой конструктор в производном классе, но нужно также будет вызвать конструктор базового класса с помощью ключевого слова super

class Human3 {
    constructor(pname, page) {
        this.name = pname;
        this.age = page;
    }
    printHumanInfo() {
        console.log(`name ${this.name} age ${this.age}`)
    }
}

class Employee3 extends Human3 {
    salary;
    company;
    constructor(pname, page, psalary, pcompany) {
        super(pname, page)
        this.salary = psalary;
        this.company = pcompany;
    }
    printCompanyInfo() {
        console.log(`name ${this.name} works for salary ${this.salary} at ${this.company}`)
    }
}

let testEmployee3 = new Employee3("Tom3", "23", "2000$", "Microsoft");
testEmployee3.printHumanInfo();
testEmployee3.printCompanyInfo();


// Можно также переопределить и методы базового класса
class Human4 {
    constructor(pname, page) {
        this.name = pname;
        this.age = page;
    }
    printHumanInfo() {
        console.log(`name ${this.name} age ${this.age}`)
    }
}

class Employee4 extends Human4 {
    salary;
    company;
    constructor(pname, page, psalary, pcompany) {
        super(pname, page)
        this.salary = psalary;
        this.company = pcompany;
    }
    printHumanInfo() {          // Переопределяем printHumanInfo
        super.printHumanInfo()
        // При этом также вызываем метод базового класса при необходимости
        console.log(`name ${this.name} works for salary ${this.salary} at ${this.company}`)
    }
}

let testEmployee4 = new Employee4("Tom3", "23", "2000$", "Microsoft");
testEmployee4.printHumanInfo();

// При наследовании стоит учитывать, что у производного класса есть доступ ко всему функционалу базового класса кроме приватных полей и методов
// Но если у базового класса определены геттеры и сеттеры, то можно пользоваться ими