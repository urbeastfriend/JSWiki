
// Массив представляет наиболее простой способ определения набора данных. Но иногда базовых возможностей массивов может быть недсотаточно. Например, определим массив, который представляет некоторую команду:

let team = ["Tom", "Sam", "Bob"];
for (const person of team) {
    console.log(person);
}

// Но что, если мы хотим добавить к команде какие-то доолнительные атрибуты - имя тренера, страну или город, где базируется команда, название, какие-то другие признаки? На первый взгляд, мы можем определить сложный объект:

team = {
    name: "Barcelona",              // название
    members: ["Tom", "Sam", "Bob"]  // игроки
};
for (const person of team.members) {
    console.log(person);
}

//Но есть и другое решение, которое позволяет нам определить свой тип коллекции: создать свой класс, который будет унаследован от Array.

class Team extends Array {

    constructor(name, ...members) {
        super(...members);
        this.name = name;
    }
}

// создаем объект команды
const barcelona = new Team("Barcelona", "Tom", "Sam", "Bob");

// перебор набора
for (const person of barcelona) {
    console.log(person);
}
barcelona.push("Tim");      // добавим один элемент
console.log(barcelona);     // Team(4) ["Tom", "Sam", "Bob", "Tim"]
barcelona.splice(1, 1);     // удалим второй элемент
console.log(barcelona);     // Team(3) ["Tom", "Bob", "Tim"]