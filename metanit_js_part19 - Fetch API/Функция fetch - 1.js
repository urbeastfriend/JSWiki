
// Fetch API предоставляет упрощенный и в тоже время гибкий и мощный инструмент для обращения к сетевым ресурсам по сравнению со стандартным XMLHttpRequest.
// Ключевым элементом этого Fetch API является функция fetch(). Она реализована в различных контекстах. В частности, в браузере она реализована интерфейсом Windows.

// Функция fetch имеет следующий синтаксис:
// const fetchPromise = fetch(resource [, init])

// В качестве обязательного параметра - resource функция принимает параметры ресурса, к которому функция будет обращаться.
// В качестве необязательного параметра - init функция может принимать объект с дополнительными настройками запроса.
// Функция fetch() возвращает объект Promise, который получает ответ после завершения запроса к сетевому ресурсу
fetch("http://metanitjstest/hello.txt")
    .then(response => response.text())
    .then(responseText => console.log(responseText));



// fetch с async/await
// Поскольку функция fetch возвращает promise - вместо then могут использоваться операторы async/await для извлечения ответа
let response = await fetch("http://metanitjstest/hello.txt");
let responseText = await response.text();
console.log(responseText);