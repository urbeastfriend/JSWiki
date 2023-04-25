// При динамическом определении в объекте новых свойств и методов перед их использованием бывает важно проверить, 
// а есть ли уже такие методы и свойства. Для этого в javascript может использоваться оператор in.

let user = {} // создаём пустой объект
user.name = "Artem";
user.printName = function () {
    console.log(this.name)
}

if ("name" in user) {
    console.log(user.name)
}

// проверка наличия метода
if ("printName" in user) {
    console.log(`Проверка с помощью "methodOrPropertyName" in objectName`)
    user.printName()
}

// Можно также осуществлять проверку с помощью Object.hasOwnProperty()

if (user.hasOwnProperty("printName")) {
    console.log("Проверка с помощью hasOwnProperty")
    user.printName()
}

console.log("Проверка с помощью for")
// Также можно перебрать свойства объекта как обычный массив
for (let property in user) {
    console.log(`${property}: ${user[property]}`)
}