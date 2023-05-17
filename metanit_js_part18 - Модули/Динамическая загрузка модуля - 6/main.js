

// Динамически подключим модуль

console.log("\nMain module starts, dynamically calling another module")

import("./moduleToDynamicallyImport.js").then((module) => {

    module.default();
    console.log(module.message);
});

console.log("Main module ends")


// Здесь функция в методе then() в качестве параметра получает загруженный модуль.
// Далее мы можем обращаться к компонентам модуля по имени. Например, обращение к константе hello
// Однако если какой-то компонент экспортируется по умолчанию, то для обращения к нему применяется ключевое слово default.
// Так, поскольку функция sayHello() экспортируется по умолчанию, то выражение: module.default(); фактически будет представлять вызов данной функции.

// Динамическая загрузка модулей позволяет нам загружать модули в разных ситуациях: в функциях, циклических и условных конструкциях и в других частях пограммы. 
// Например, мы могли бы загружать модуль в зависимости от условия:

const hour = new Date().getHours();
if (hour < 17) {
    const module = await import("./moduleToDynamicallyImport.js");
    module.printHello()
}
else {
    console.log("Hours is more than 17");
}