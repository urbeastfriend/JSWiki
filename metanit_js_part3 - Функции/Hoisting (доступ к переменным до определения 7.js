// Hoisting представляет процесс доступа к переменным до их определения.
// Возможно, данная концепция выглядит немного странно,
// но она связана с работой компилятора JavaScript. 
// Компиляция кода происходит в два прохода. 
// При первом проходе компилятор получает все объявления переменных, 
// все идентификаторы. При этом никакой код не выполняется, 
// методы не вызываются. 
// При втором проходе собственно происходит выполнение.


console.log(foo);
// Его выполнение вызовет ошибку ReferenceError: foo is not defined

// Добавим определение переменной:
// При первом проходе компилятор узнает про существование переменной foo. 
// Она получает значение undefined. 
// При втором проходе вызывается метод console.log(foo).
console.log(foo);   // undefined
var foo = "Tom";

var c = a * b;
var a = 7;
var b = 3;
console.log(c); // NaN

display();

function display(){
    console.log("Hello Hoisting");
}

// Здесь функция display благополучно отработает, 
// несмотря на то, что она определена после вызова.

// Но от этой ситуации надо отличать тот случай, 
// когда функция определяется в виде переменной:
//TypeError: display is not a function
//displayFx();

var displayFx = function(){
    console.log("Hello Hoisting")
}

// Процесс Hoistinga для let и constant будет отличаться -
// в отличие от var им не присваивается начальное значение undefined

console.log(foo2);   // Uncaught ReferenceError: Cannot access 'foo' before initialization
let foo2 = "Tom";
console.log(foo2);   // не выполнится, тк при прошлом обращении ошибка
