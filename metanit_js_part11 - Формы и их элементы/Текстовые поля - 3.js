
//Для ввода простейшей текстовой информации предназначены элементы <input type="text":

// <input type="text" name="kye" size="10" maxlength="15" value="hello world" />

// Данный элемент поддерживает ряд событий, в частности:
//  - focus: происходит при получении фокуса
//  - blur: происходит при потере фокуса
//  - change: происходит при изменении значения поля
//  - select: происходит при выделении текста в текстовом поле
//  - keydown: происходит при нажатии клавиши клавиатуры
//  - keypress: происходит при нажатии клавиши клавиатуры для печатаемых символов
//  - keyup: происходит при отпускании ранее нажатой клавиши клавиатуры
//  - input - походу новый эвент, возвращает актуальное значение, в отличие от keydown/press/up



function onTextChange(event) {
    console.log(`OnTextChanged - ${event.target.value}`)
}

function onGainedFocus(event) {

    event.target.style.borderColor = "blue"
    console.log(`OnGainedFocus - ${event.target.style.borderColor}`)
}

function onLostFocus(event) {

    let text = event.target.value.trim()
    if (text === "") {
        event.target.style.borderColor = "red"
    }
    else {
        event.target.style.borderColor = "green"
    }

    console.log(`OnLostFocus - ${event.target.style.borderColor}`)
}

let searchText = document.search.searchText
searchText.addEventListener("input", onTextChange)
searchText.addEventListener("focus", onGainedFocus)
searchText.addEventListener("blur", onLostFocus)


// Помимо типа text также существует много других специализированных полей ввода
//  - input type "password" - вместо вводимых символов используется маска
//  - input type "hidden" - если нужно скрыть значение от пользователя
//  - input type "textarea" - для многострочных текстовых полей
// Имеет такие свойства как rows, cols
