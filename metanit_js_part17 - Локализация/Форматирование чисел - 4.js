
// В разных культурах используются различные подходы к отображению чисел. Например, в одних культурах (в частности, в США, Великобритании)
// в качестве разделителя целой и дробной части применяется точка, а в других культурах - запятая.
// Аналогично разделителем между разрядами может служить как точка, так и запятая.
// И объект Intl.NumberFormat позволяет нам локализовать числительные под нужную культуру.

// Конструктор Intl.NumberFormat может принимать два параметра:

// Локализуем число 5500,67 на разные языки:
console.log("\nФорматироване числа 5500.67")


// По умолчанию для форматирования чисел применяется параметр {style: "decimal"}
const number = 5500.67;

const en = new Intl.NumberFormat("en").format(number);
const ru = new Intl.NumberFormat("ru").format(number);
const de = new Intl.NumberFormat("de").format(number);
console.log(en);
console.log(ru);
console.log(de);



// Форматирование процентов
// В разных культурах может отличаться написание процентов. Для локализации процентов применяется значение

console.log("\nФорматироване числа 0.851 в проценты");
const percentNumber = 0.851;

const enPercent = new Intl.NumberFormat("en", { style: "percent" }).format(percentNumber);
const ruPercent = new Intl.NumberFormat("ru", { style: "percent" }).format(percentNumber);
const trPercent = new Intl.NumberFormat("tr", { style: "percent" }).format(percentNumber);

console.log(enPercent);    // 85%
console.log(ruPercent);    // 85 %
console.log(trPercent);    // %85


// Вывод дробной части
// Однако в примере выше мы видим, что теряется дробная часть. 
// Чтобы исправить положение, мы можем использовать параметр minimumFractionDigits, который задает количество знаков в дробной части:

console.log("\nФорматироване числа 0.851 в проценты с дробной частью");
const percentNumber2 = 0.851;

const enPercent2 = new Intl.NumberFormat("en", { style: "percent", minimumFractionDigits: 2 }).format(percentNumber2);
const ruPercent2 = new Intl.NumberFormat("ru", { style: "percent", minimumFractionDigits: 2 }).format(percentNumber2);

console.log(enPercent2);    // 85.10%
console.log(ruPercent2);    // 85,10 %


// Форматирование валют
console.log("\nФорматироване валют");


// По умолчанию выводится символ валюты, однако значение currencyDisplay: "name" позволяет вывести локализованное название валюты: 85,00 евро или 85 долларов США
const currencyValue = 85.1;

const enCurrency = new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(currencyValue);
const ruCurrency = new Intl.NumberFormat("ru", { style: "currency", currency: "USD" }).format(currencyValue);
const trCurrency = new Intl.NumberFormat("tr", { style: "currency", currency: "USD" }).format(currencyValue);

console.log(enCurrency);    // $85.10
console.log(ruCurrency);    // 85,10 $
console.log(trCurrency);    // $85,10