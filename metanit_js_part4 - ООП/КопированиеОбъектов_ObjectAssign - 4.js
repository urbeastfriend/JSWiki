
// // По умолчанию объекты передаются по ссылке
// const tom = { name: "Tom" };
// const bob = tom;
// // проверяем свойство name у обоих констант
// console.log(tom.name);  // Tom
// console.log(bob.name);  // Tom

// // меняем свойство name у константы bob
// bob.name = "Bob";
// // повторно проверяем свойство name у обоих констант
// console.log("После изменения")
// console.log(tom.name);  // Bob
// console.log(bob.name);  // Bob

// Если мы хотим скопировать свойства объекта, но чтобы объекты указывали на разную область памяти (создать новый экземпляр)
// то мы должны использовать Object.assign(target, ...sources)

let tom = {
    name: "Tom"
}
let sam = {
    name: "Sam",
    age: 24
}
let bob = Object.assign({}, tom) // Копируем свойства объекта Tom в пустой объект и присваиваем этот объект в Bob

bob.name = "Bob";
console.log(`Объект tom. Name: ${tom.name} `);
console.log(`Объект bob. Name: ${bob.name} `);

// Можем копировать из нескольких объектов
const from1 = { name: "Tom", age: 37 };
const from2 = { age: 45 };
const person = { height: 170 };
Object.assign(person, from1, from2)    // Копируем свойства 
console.log(person); // {height: 170, name: 'Tom', age: 45}    Возраст 45 тк из from2 копируем в последнюю очередь



// Копирование с помощью Object.assign() хорошо работает если свойства объектов являются примитивами,
// но если свойством будет являться другой объект, то мы получим не копию значения, а ссылку на этот объект

const tomMicrosoft = { name: "Tom", company: { title: "Microsoft" } };
const bobGoogle = Object.assign({}, tom);
bob.name = "Bob";
bob.company.title = "Google";
console.log(tom.name);      // Tom
console.log(tom.company.title);     // Google  
// Изменение свойства company повлияло не только на Bob, но и на Tom

