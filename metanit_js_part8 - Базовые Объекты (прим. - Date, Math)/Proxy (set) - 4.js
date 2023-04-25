
// Установка свойства и метод set
// Метод set перехватывает обращения к свойству при установке его значения:

// Метод set имеет четыре параметра:

// target: оригинальный объект, к которому идет проксирование
// property: название свойства, к которому идет обращение
// value: устанавливаемое значение
// receiver: объект Proxy, через который выполняется проксирование

var handler = {
    set: function (target, property, value, receiver) {

    }
};

// Рассмотрим на примере

var target = { name: "Tom", age: 37 };
const handler = {
    set: function (target, prop, value) {
        console.log(value);
        target[prop] = value;
    }
};
const proxy = new Proxy(target, handler);
proxy.name = "Tomas";
console.log(proxy.name);    // Tomas
proxy.age = 22;
console.log(proxy.age);     // 22


//Немного изменим пример:
//Здесь в методе set обработчика проверяем, если идет установка свойства age и значение меньше 1, 
// то просто выводим сообщение о некорректности данных
const target = { name: "Tom", age: 37 };
const handler = {
    set: function (target, prop, value) {
        if (prop === "age" && value < 1)
            console.log("Некорректный возраст");
        else
            return target[prop] = value;
    }
};
const proxy = new Proxy(target, handler);
proxy.name = "Tomas";
console.log(proxy.name);    // Tomas
proxy.age = -199;           // Некорректный возраст
console.log(proxy.age);     // 37
proxy.age = 22;
console.log(proxy.age);     // 22