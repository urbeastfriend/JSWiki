
// Для взаимодействия с пользователем в JavaScript определен механизм событий.
// Например, когда пользователь нажимает кнопку, то возникает событие нажатия кнопки.
// В коде JavaScript мы можем определить возникновение события и как-то его обработать.

// В JS есть следующие типы событий:

//  - События мыши (перемещение курсора, нажатие мыши и т.д.)
//  - События клавиатуры (нажатие или отпускание клавиши клавиатуры)
//  - События жизненного цикла элементов (например, событие загрузки веб-станицы)
//  - События элементов форм (нажатие кнопки на форме, выбор элемента в выпадающем списке и т.д.)
//  - События, возникающие при изменении элементов DOM
//  - События, возникающие при касании на сенсорных экранах
//  - События, возникающие при возникновении ошибок

function onRectangleClick(element) {
    //alert(`Нажали на кубик`)
    element.style.background = getRandomColor()
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}