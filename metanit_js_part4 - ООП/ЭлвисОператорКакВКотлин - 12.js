
// Оператор ?. или optional chaning-оператор позволяет 
// проверить объект и его свойства и методы на null и undefined

// let tom = null;
// let bob = { name: "Bob" };

// function printName(person) {
//     console.log(person.name);
// }
// printName(tom); // Uncaught TypeError: Cannot read properties of null (reading "name")
// printName(bob);

// В данном случае переменная tom равна null, соответственно у ней нет свойства name.
//В этом случае мы можем перед обращением к объекту проверять его на null и undefined:
// С помощью операторы мы можем легко записать проверку на нулл и undefined

let tom = null;
let bob = { name: "Bob" };

function printName(person) {
    console.log(person?.name);
}

//Если же значение равно null/undefined, то обращения к свойству/методу не происходит. И на консоли мы увидим undefined.
printName(tom); // undefined
printName(bob); // Bob

