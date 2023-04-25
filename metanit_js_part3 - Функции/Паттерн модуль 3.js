// Паттерн "Модуль" базируется на замыканиях и состоит из двух компонентов: 
// внешняя функция, которая определяет лексическое окружение, 
// и возвращаемый набор внутренних функций, 
// которые имеют доступ к этому окружению.

// Пример модуля
// Переменная foo, предоставляющая результат анонимной функции
// Внутри функции определён объект obj с некоторыми данными
// Сама функция возвращает объект, который определяет функцию display
// Возвращаемый объект определяет общедоступный интерфейс API
// Через который мы можем обращаться к данным, определённым внутри модуля

let foo = (function(){
    let obj = {greeting: "hello"};
     
    return {
        display: function(){
            console.log(obj.greeting);
        }
    }
}());

foo.display();  // hello


// Можно например ебануть калькулятор

let calculator = (function(){
    let data = {number: 0};

    return {
        plus: function(n){
            data.number+= n;
            console.log(`Plus ${n}`);
        },
        minus: function(n){
            console.log(`Minus ${n}`);
        },
        showresult: function(){
            console.log(`Result = ${data.number}`);
        }
    }
}())

calculator.plus(5)
calculator.showresult()