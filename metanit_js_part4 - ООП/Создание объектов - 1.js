// Можно объявлять новый объект с использованием - new Object(); или фигурных скобок {}
// После чего можно определить свойства объекта через точку

// let user = new Object();
 let user = {};
user.name = "Tom";
user.age = 20;

// Существует также сокращённый способ определения свойств из переменных

let username = "Artem";
let age = "23";
let userInfo = {username,age}
console.log(user.name, user.age)

// Можно создавать более сложные конструкции.

let teacher = {userInfo, course: "Javascript"}
console.log(teacher.userInfo)   // {username: "Artem", age:23}
console.log(teacher.course)    // Javascript

// Можно добавить методы для объекта

let userWithMethods = {}  // empty object
userWithMethods.name = "userWithMethods";
userWithMethods.age = 23;
userWithMethods.logNameFx = function () {
    console.log(`Имя пользователя с методами - ${this.name}`)
}
userWithMethods.logNameFx();


// Можно определить методы при создании объекта
let userWithPreinstalledMethods = {
    name:"anotherUserWithMethods",
    lognameFx: function(){
        console.log(`Имя пользователя с предустановленными методами - ${this.name}`)
    }
    // ,lognameFx(){
    //     console.log(`Имя пользователя с предустановленными методами - ${this.name}`)
    // }
    // Сокращённая запись методов объекта где двоеточие и function можно опустить
}

userWithPreinstalledMethods.lognameFx();


// В качестве имени свойств мы можем использовать слова, включающие пробелы, только тогда
// мы должны заключить имя свойства в ковычки, так как в любом случае все имена свойств являются строками

// let user = {
//     name: "Tom",
//     age: 26,
//     "full name": "Tom Johns",
//     "display info": function(){
     
//         console.log(this["full name"]);
//         
//     }
// };

// Только обращение к свойствам в таком случае осуществляется с помощью фигурных скобок [" "] - см функцию display info
