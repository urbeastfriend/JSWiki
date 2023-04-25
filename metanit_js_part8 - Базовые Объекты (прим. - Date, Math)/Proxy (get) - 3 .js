
//Прокси (Proxy) представляет объект, который позволяет перехватывать 
// выполнение операций по отношению к некотоому объекту и переопределять его поведение.

// Для создания объекта Proxy применяется конструктор Proxy():
// Конструктор Proxy принимает два параметра:
// target - цель создания прокси, это может быть любой объект, к которому применяется Proxy
// handler - другой объект, который определяет, какие именно операции объекта target будут перехватываться и переопределяться и как именно.

var proxy = new Proxy(target, handler);

// объект, к которому применяется прокси
var target = { name: "Tom" };
// объект, который определяет, как будет переопределяться target
var handler = {};     // пока что пустой
// объект прокси
var proxy = new Proxy(target, handler);

console.log(proxy.name);    // Tom    Мы можем обращаться к функционалу объекта Tom (target) через прокси

//Ключевым в данном случае является определение обработчика handler, 
// который может перехватывать обращения к свойствам проксированного объекта
// Этот обработчик может определять два метода: get и set.

// Метод get и получение свойств объекта
// Метод get имеет три параметра:
// target: сам проксированный объект. Благодаря этому параметру мы можем обратиться к функциональности оригинального объекта
// prop: название свойства, к которому идет обращение
// receiver: объект Proxy, через который выполняется проксирование

// var handler = {
//     get: function(target, prop, receiver) {
//       return некоторое_значение;
//     }
//   };

var target = { name: "Tom" };
// Здесь в обработчике handler в методе get возвращается строка "Tomas Smith":
var handler = {
    // Это приведет к тому, что при обращение к любому свойству прокси-объекта будет возвращаться данная строка:
    get: function (target, prop, receiver) {
        return "Tomas Smith";
    }
};
var proxy = new Proxy(target, handler);
console.log(proxy.name);    // Tomas Smith


// При этом мы можем обащаться и к оригинальному объекту, который проксируется:
// Здесь обработчик возвращает строку "Name: " + target.name, 
// где target.name представляет обращение к свойству name оригинального объекта
const target = { name: "Tom" };
const handler = {
    get: function (target, prop) {
        return "Name: " + target.name;
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);    // Name: Tom

// // Но возьмем более сложный объект - с двумя свойствами:
// Здесь целевой объект имеет два свойства: name и age. 
// В обработчике мы перехватываем обращение к ним, но никак его не переопределяем, 
// а просто возвращаем значения свойств оригинального объекта:
const target = { name: "Tom", age: 37 };
const handler = {
    get: function (target, prop) {
        return target[prop];     // Для обращения к свойствам целевого объекта применяется синтаксис массивов.
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);    // Tom
console.log(proxy.age);     // 37


// Но также мы можем проверить, к какому именно свойству идет обращение, и выполнить некоторое переопределение:
const target = { name: "Tom", age: 37 };
const handler = {
    get: function (target, prop) {
        if (prop === "name")
            return target.name.toUpperCase();
        else
            return target[prop];
    }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);    // TOM
console.log(proxy.age);     // 37