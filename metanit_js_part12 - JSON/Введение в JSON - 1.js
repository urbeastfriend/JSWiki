
// JSON (JavaScript Object Notation) представляет легковесный формат хранения данных.
// JSON описывает структуру и организацию данных JavaScript.

// Json поддерживает три типа данных
//  - примитивы
//  - объекты
//  - массивы

// Для сериализация объекта Javascript в json применяется функция JSON.stringify()

let user = {
    name: "Artem",
    age: 23,
    married: false
}
console.log(`Объект user - ${user}`)
let serializedUser = JSON.stringify(user)
for (prop in user) {
    console.log(`${prop} - ${user[prop]}`)
}
console.log(`Сереализованный user - ${serializedUser}`)

// Для десериализации или парсинга применяется JSON.parse

let deserealizedUser = JSON.parse(serializedUser);
console.log(`Десереализованный user - ${deserealizedUser}`)