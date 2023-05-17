
// Объект Intl.DisplayNames позволяет локализовать названия, в частности, названия стран и регионов, языков, некоторых других наименований.
// Его конструктор может принимать два параметра:

// Intl.DisplayNames([locales[, options]])
// Параметр locales представляет код языка в формате BCP 47 или набор языковых кодов.

// Параметр options представляет дополнительный набор опций:
//  - localeMatcher: алгоритм поиска соответствий. Может принимать два значения: "lookup" и "best fit". Значение по умолчанию - "best fit".
//  - style: длина форматируемой строки. Возможные значения: "long", "short" и "narrow" (например, A, B,C). Значение по умолчанию - "long"
//  - type: тип названий, которые будут локализованы. Возможные значения: "language": возвращает название языка, "region": возвращает название страны/региона, "script": возвращает название письменного скрипта, "currency": возвращает название валюты
//  - fallback: задает альтернативнй вариант. Возможные значения: "code" и "none". "code" задает код, который определяет локализуемое название.

// Какое именно название будет локализоваться, задается с помощью метода of(). В этот метод передается код названия. Метод возвращает локализованное наименование.


// Получение названия стран
console.log("\nПолучение названия стран")

const USAInEnglish = new Intl.DisplayNames("en", { type: "region" }).of("US");
console.log(USAInEnglish); // United States

const USAInRussian = new Intl.DisplayNames("ru", { type: "region" }).of("US");
console.log(USAInRussian); // Соединённые штаты

const GermanyInEnglish = new Intl.DisplayNames("en", { type: "region" }).of("DE");
const GermanyInRussian = new Intl.DisplayNames("ru", { type: "region" }).of("DE");
const GermanyInGerman = new Intl.DisplayNames("de", { type: "region" }).of("DE");

console.log(GermanyInEnglish);  // Germany
console.log(GermanyInRussian);  // Германия
console.log(GermanyInGerman);   // Deutschland

// Получение названия языка
console.log("\nПолучение названия языка")

const enRussian = new Intl.DisplayNames("en", { type: "language" }).of("ru");
const ruRussian = new Intl.DisplayNames("ru", { type: "language" }).of("ru");
const deRussian = new Intl.DisplayNames("de", { type: "language" }).of("ru");

console.log(enRussian); // Russian
console.log(ruRussian); // русский
console.log(deRussian); // Russisch

// Получение названия языка
console.log("\nПолучение названия языка с кодом региона")

const ruLang = new Intl.DisplayNames("ru", { type: "language" });
const enUS = ruLang.of("en-US");
const enGB = ruLang.of("en-GB");

console.log(`enUS -  ${enUS}`);  // американский английский
console.log(`enGB -  ${enGB}`);  // британский английский

// Получение названия валюты
console.log("\nПолучение названия валюты")

const RuLangCurrency = new Intl.DisplayNames("ru", { type: "currency" });
const usd = RuLangCurrency.of("USD");
const euro = RuLangCurrency.of("EUR");
const ruble = RuLangCurrency.of("RUB");

console.log(usd);       // доллар США
console.log(euro);      // евро
console.log(ruble); // российский рубль