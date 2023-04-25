
// Кроме обычных полей и методов класс может определять статические поля и методы. В отличие от обычных полей/свойств и методов они относятся ко всему классу, а не к отдельному объекту.

// Такие переменные помечаются словом Static
class Human {
    name = "Artem";
    static retireAge = 65;
    static printClassInfo() {
        console.log("Класс Human представляет человека")
    }
    static printHumanName(pHuman) {
        console.log(`Human по имени ${pHuman.name}`)
    }
}

console.log(Human.retireAge);
Human.retireAge = 62;
console.log(Human.retireAge);

// К статическим полям нельзя обратиться в методах и конструкторе класса через this
Human.printClassInfo();

// Поскольку статический метод относится классу в целом, а не к объекту, то мы НЕ можем обращаться в нем к нестатическим полям/свойствам и методам объекта, наподобие следующего:

// Но мы можем определить в статическом методе параметр, через который будет передаваться конкретный объект
let testHuman = new Human();
Human.printHumanName(testHuman);