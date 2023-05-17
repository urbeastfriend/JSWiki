
// Для локализации дат и времени в JavaScript применяется объект Intl.DateTimeFormat. Его конструктор может принимать два параметра:

// Intl.DateTimeFormat([locales[, options]])
// Параметр locales представляет код языка в формате BCP 47 или набор языковых кодов.
// Параметр options представляет дополнительный набор опций:
//  - dateStyle: определяет стиль форматирования даты. Возможные значения: "full", "long", "medium" ,"short"
//  - timeStyle: определяет стиль форматирования времени. Возможные значения: "full", "long", "medium", "short"
//  - calendar: задает календарь. Возможные значения: "buddhist", "chinese", " coptic", "ethiopia", "ethiopic", "gregory" ...
//  - numberingSystem: задает применяемую систему чисел. Возможные значения: "arab", "arabext", " bali", "beng", "deva", "fullwide", " gujr" ...
//  - dayPeriod: формат периода суток. Возможные значения: "narrow", "short", " long".
//  - timeZone: временная зона.
//  - hour12: указывает, будет ли использоваться 12-часовой формат (значение true) или 24-часовой формат (значение false) .
//  - hourCycle: часовой цикл. Возможные значения: "h11", "h12", "h23", "h24".
//  - formatMatcher: устанавливает алгоритм сопоставления формата даты/времени. Возможные значения: "basic" и "best fit" (значение по умолчанию).
//  - weekday: определяет формат дня недели. Возможные значения:"long" (например, Thursday) ,"short" (например, Thu) ,"narrow" (например, T - сокращение от Thursday)
//  - era: определяет формат вывода эры. Возможные значения: "long" (например, Anno Domini) , "short" (например, AD) , "narrow" (например, A)
//  - year: определяет формат года. Возможные значения: "numeric" (число полностью, например, 2021), "2-digit" (выводит только две последних цифры)
//  - month: определяет формат месяца. Возможные значения: "numeric" (например, 2), "2-digit" (например, 02), "long" (March), "short" ( Mar), "narrow" (M)
//  - day: определяет, как выводится номер дня. Возможные значения: "numeric" (например, 2), "2-digit" (в виде двухцифрового кода, например, 02)
//  - hour: задает формат вывода часа. Возможные значения: "numeric" и "2-digit"
//  - minute: задает формат вывода минуты. Возможные значения: "numeric" и "2-digit"
//  - second: задает формат вывода секунды. Возможные значения: "numeric" и "2-digit"
//  - fractionalSecondDigits: определяет формат вывода долей секунды. Возможные значения:
//     0 (доли секунды не выводятся)
//     1 (выводится только первая цифра долей секунды, например, при значении 736 выводится 7)
//     2 (выводятся только две первых цифра долей секунды, например, при значении 736 выводится 73)
//     3 (выводятся три цифры долей секунды, например, при значении 736 выводится 736)
//  - timeZoneName: определяет представление наименования часового пояса. Возможные значения:
//     "long" (полное название, например, "Pacific Standard Time, Nordamerikanische Westküsten-Normalzeit")
//     "short" (короткое название, например, PST, GMT-8)
//     "longOffset" (полное название в формате GMT, например, "GMT-8")
//     "shortOffset" (короткое название в формате GMT , например, "GMT-0800")
//     "longGeneric" (полный обобщенный формат, например, "Pacific Time, Nordamerikanische Westküstenzeit")
//     "shortGeneric" (короткий обобщенный формат, например, "PT, Los Angeles Zeit")


// Несколько примеров форматирования даты

const currentDate = new Date();

const ruDate = new Intl.DateTimeFormat("ru").format(currentDate);
console.log(ruDate);  // 17.05.2023

const enDate = new Intl.DateTimeFormat("en").format(currentDate);
console.log(enDate); // 5/17/2023

// По умолчанию метод format возвращает дату в сокращённом формате - {datestyle: "short"}
console.log("\nТестируем разные dateStyle")

const shortDate = new Intl.DateTimeFormat("ru", { dateStyle: "short" }).format(currentDate);
console.log(shortDate); // 17.05.2023

const mediumDate = new Intl.DateTimeFormat("ru", { dateStyle: "medium" }).format(currentDate);
console.log(mediumDate); // 17 мая 2023 г.

const longDate = new Intl.DateTimeFormat("ru", { dateStyle: "long" }).format(currentDate);
console.log(longDate); // 17 мая 2023 г.   - могло бы быть длиннее, например сентября, а не сент

const fullDate = new Intl.DateTimeFormat("ru", { dateStyle: "full" }).format(currentDate);
console.log(fullDate); // среда, 17 мая 2023 г.


// Форматирование времени

// По умолчанию время не выводится. Нужно модифицировать параметр timeStyle

console.log("\nФорматирование времени")
const currentTime = new Date();

const mediumTime = new Intl.DateTimeFormat("ru", { timeStyle: "medium" }).format(currentTime)
console.log(mediumTime); // 10:46:41

const lonfTime = new Intl.DateTimeFormat("ru", { timeStyle: "long" }).format(currentTime)
console.log(lonfTime); // 10:46:41 GMT+3


// Объединение даты и времени
console.log("\nОбъединение даты и времени")
const currentDateTime = new Date();

const mediumDateTime = Intl.DateTimeFormat("ru", { dateStyle: "medium", timeStyle: "medium" }).format(currentDateTime);
console.log(mediumDateTime);  // 17 мая 2023 г., 10:49:25


// Остальные настройки
// При необходимости мы можем использовать остальные настройки.
// Например, если необходимо применить арабскую систему чисел, то мы можем настроить вывод чисел с помощью параметра numberingSystem:
console.log("\nИзменение системы чисел")
const now = new Date();
const arDateTime1 = new Intl.DateTimeFormat("ar", { dateStyle: "short", timeStyle: "short" }).format(now);
console.log(arDateTime1);   