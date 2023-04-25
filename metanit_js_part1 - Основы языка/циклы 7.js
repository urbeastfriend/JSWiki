// Виды циклов
// for
// for..in
// for..of
// while
// do..while


// Если объявить без let, то переменная будет глобальной
for(let i=0; i<10; i++){
    console.log(`Тест цикла for ${i}`)
}

// Можно опускать некоторые детали в цикле
let k = 5;
for(; k<10; ){
    k += 10;
}

// Можно использовать несколько счетчиков
// Должны выполняться сразу оба условия
// При i = 4 и j=4 цикл завершится
for(let i = 1, j = 1; i < 5, j < 4; i++, j++){
      
    console.log(i + j);
}

// FOR IN

// Массив
let array1 = [0,1,2,7,4,5]

for (let val in array1) {
    console.log(`Array member in for in block ${val}`);
}  // вернёт 1 2 3 4 5 - не подходит для перебора массивов
// надо использовать for of 

// Структура
let struct = {
    name: `artem`,
    age: 23
}

for (const prop in struct) {
    console.log(`property in object ${prop}`)
}

// Один из способов перебрать символы в строке
const website = "METANIT.COM"

for(let ch in website){
    console.log(website.charAt(ch))
}

// FOR OF

for(let ch of website){
    console.log(ch)
}

let array2 = [1,2,`string`,4,5]

for(let arrayItem of array2){
    console.log(arrayItem)
}

let object2 = {
    name: `Artem`,
    age: 23
}

for(let objProp of object2){ // Ошибка, так как object не iterable
    console.log(objProp)        
}