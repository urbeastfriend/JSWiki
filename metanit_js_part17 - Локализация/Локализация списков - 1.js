
// Внедрение стандарта ES2021 добавило в язык JavaScript встроенные возможности локализации. Эти возможности представлены главным образом следующими объектами:

// - Intl.ListFormat: применяется для форматирования списков
// - Intl.DisplayNames: применяется для форматирования некоторых наименований
// - Intl.DateTimeFormat: применяется для форматирования дат и времени
// - Intl.NumberFormat: применяется для форматирования чисел

// Рассмотрим применение этих объектов

// *** Локализация списков и Intl.ListFormat
// Объект Intl.ListFormat позволяет форматировать списки в соответствии с некоторыми локализационными настройками. Его конструктор может принимать два параметра:

// Intl.ListFormat([locales[, options]]) :
// Параметр locales представляет код языка в формате BCP 47 или набор языковых кодов.
// Параметр options представляет дополнительный набор опций:

//  - localeMatcher: алгоритм поиска соответствий. Может принимать два значения: "lookup" и "best fit". Значение по умолчанию - "best fit".
//  - style: длина форматируемой строки. Возможные значения: "long" (например, A, B, and C), "short" или "narrow" (например, A, B,C). Значение по умолчанию - "long"
//  - type: формат выходной строки. Возможные значения: "conjunction" (предпоследний и последний элементы в списке соединяются союзом "и" ("and") - A, B и C),
// "disjunction" (предпоследний и последний элементы в списке соединяются союзом "или" ("or") - A, B или C),
// "unit" (применяется для списков с числовыми значениями и добавляет к ним единицы измерения).
// Значение по умолчанию - "conjunction"

let peopleArray = ["Tom", "Artem", "Max"];
console.log(peopleArray);  // (3) ['Tom', 'Artem', 'Max']
let arrayFormatToList = new Intl.ListFormat("ru").format(peopleArray); // {style:"long", type:"conjunction"} default options
console.log(arrayFormatToList); // Tom, Artem и Max
arrayFormatToList = new Intl.ListFormat("ru", { style: "short", type: "disjunction" }).format(peopleArray)
console.log(arrayFormatToList) // Tom, Artem или Max

// Можно локализовать в другие языки

// китайский язык
arrayFormatToList = new Intl.ListFormat("zh", { style: "long", type: "conjunction" }).format(peopleArray);
console.log(arrayFormatToList);    // Tom、Artem和Max


