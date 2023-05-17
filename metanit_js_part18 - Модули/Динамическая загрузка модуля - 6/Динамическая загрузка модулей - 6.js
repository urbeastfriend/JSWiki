
// Модули можно загружать динамически в любом месте другого модуля. В этом случае надо помнить, что модуль загружается асинхронно, 
// а результат функции import будет представлять объект Promise, результатом которого собственно и будет загружаемый модуль.

import("путь_к_модулю").then((module) => {
  // действия с модулем
});

// Также можно использовать оператор await для получения объекта модуля:


let module = await import("путь_к_модулю");