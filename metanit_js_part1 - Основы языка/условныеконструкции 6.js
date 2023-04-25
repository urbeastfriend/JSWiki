
let number = 100;

if (number >= 100) {
    console.log(`number >100  ${number >= 100}`)
}


// Можно проверить наличие значения с помощью if
if (number) {
    console.log(`Перменная number имеет значение ${number}`)
}

number = 0;
console.log(`Установили значение number =  ${number}`)
// Но если значение 0 или NaN, то вернётся false и иф не отработает
// Тоже самое справедливо для переменных содержащих null или
// undefined, а также для строк с длиной 0 символов
if (number) {
    console.log(`Перменная number имеет значение ${number}`)
}

//Исключение Object - всегда возвращает true

let user = {
    name: "Artem"        //true
}

let user2 = {       //true
}


// SWITCH CASE

let switchNumber = 300;

switch (switchNumber) {
    case 200:
        console.log("Число равно 200");
        break; 
    case 300:
        console.log("Число равно 300");
        break;
    default:    // если совпадения не найдено
        break;
}

// также можно не использовать брейк если хотим
// выполнить сразу несколько условий