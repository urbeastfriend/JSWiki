
// Пример 1 - Преобразование первой буквы в верхний регистр
let str = 'london';

let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result); // выведет 'London'          - OK

// Задача 1 - Преобразовать последнюю букву строки в верхний регистр

let result2 = str.slice(0, -1) + str[str.length - 1].toUpperCase()
console.log(result2); // выведет 'londoN'          - OK


// Задача 2 -  Преобразуйте первые 2 буквы строки в верхний регистр.

let result3 = str.slice(0, 2).toUpperCase() + str.slice(2)

console.log(result3); // выведет 'LOndon'          - OK


// Задача 3 -  Пусть у нас есть некоторая переменная с текстом, состоящим из нескольких слов
// напишем код, который преобразует первую букву каждого слова в верхний регистр

let str3 = 'word1 word2 word3';

let words = str3.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
}

let result4 = words.join(" ")
console.log(result4); // выведет правильный ответ'          - OK

// Задача 4 -  Преобразуйте строку 'var_test_text' в 'VarTestText'.

let str5 = "var_test_text"
let result5 = ""

for (str of str5.split("_")) {
    result5 += str.slice(0, 1).toUpperCase() + str.slice(1)
}

console.log(result5) // выведет правильный ответ'          - OK


// Задача 5 -  Перевернуть символы в строке
let str6 = '12345'
let result6 = str6.split('').reverse().join('');

console.log(result6) // выведет правильный ответ'          - OK


// Задача 6 - посчитать сумму чисел в строке
let num = 12345;
let arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
    sum += +digit;
}

console.log(sum);