// При первом срабатывании функции действует
// основной блок операторов функции, в частности, 
// в данном случае выводится сообщение "Доброе утро". 
// И при первом срабатывании функции display также 
// происходит ее переопределение. 
// Поэтому при всех последующих вызовах функции 
// срабатывает ее переопределенная версия,
// а на консоль будет выводиться сообщение "Добрый день".

function display(){
    console.log("Доброе утро");
    display = function(){
        console.log("Добрый день");
    }
}
 
// Но если мы положим функцию в переменную до её переопределения
// она не изменится даже после переопределения

let displayFx = display;
displayFx(); // Доброе утро

display(); // Доброе утро
display(); // Добрый день

displayFx(); // Доброе утро

