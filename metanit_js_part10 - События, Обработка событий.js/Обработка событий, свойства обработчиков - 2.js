
// Проблемы, которые возникают при использовании встроенных обработчиков, были призваны решить свойства обработчиков.

// При обработке события браузер автоматически передает в функцию обработчика в качестве параметра объект Event, 
// который инкапсулирует всю информацию о событии. И с помощью его свойств мы можем получить эту информацию:

//  - bubbles: возвращает true, если событие является восходящим. Например, если событие возникло на вложенном элементе, 
// то оно может быть обработано на родительском элементе.
//  - cancelable: возвращает true, если можно отменить стандартную обработку события
//  - currentTarget: определяет элемент, к которому прикреплен обработчик события
//  - defaultPrevented: возвращает true, если был вызван у объекта Event метод preventDefault()
//  - eventPhase: определяет стадию обработки события
//  - target: указывает на элемент, на котором было вызвано событие
//  - timeStamp: хранит время возникновения события
//  - type: указывает на имя события

function clickHandler1(event) {

    let date = new Date();
    let hour = date.getHours();
    console.log(hour);
    if (hour > 16) {
        // с помощью метода preventDefault мы можем остановить выполнение события
        // например при нажатии на ссылку мы можем запретить переход при каких-то условиях
        event.preventDefault();
        document.write("После 12 переход запрещен");
    }

    event.target.style.background = getRandomColor()
}

function clickHandler2() {
    alert("Нажали на квадратик ")
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// устанавливаем обработчик через свойство
// Несмотря на то, что свойства обработчиков решают ряд проблем, которые связаны с использованием атрибутов, в то же время это также не оптимальный подход.
//document.getElementById("rect2").onclick = onSecondRectangleClick

// Работа со слушателями с помощью объекта EventTarget. 
// Можно добавить несколько слушателей
let rect2 = document.getElementById("rect2");
rect2.addEventListener("click", clickHandler1)
rect2.addEventListener("click", clickHandler2)