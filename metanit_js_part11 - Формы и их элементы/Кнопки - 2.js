
// Для отправки введенных данных на форме используются кнопки. 
// Для создания кнопки используется либо элемент button:

// <button name="send">Отправить</button> 
// Генерируется событие click, но отправка формы не происходит

// Либо элемент input:
// <input type="submit" name="send" value="Отправить" /> 
// При нажатии на кнопку submit, происходит отправка формы по адресу, который указан
// у формы в атрибуте action либо по адресу веб-страницы, если атрибут action не указан.

// Однако мы можем перехватить отправку, обрабатывая событие click

function sendSearchForm(event) {

    let searchText = document.search.searchText
    let searchTextValue = searchText.value

    if (searchTextValue < 5) {
        alert("Длина строки должна быть больше пяти символов")
        event.preventDefault();
    }
    else {
        alert("Строка соответствует условию, производится отправка")
        searchText.value = "";

    }
}

let searchSubmit = document.search.searchSubmit
searchSubmit.addEventListener("click", sendSearchForm)

// Мы можем динамически указать адрес, на который отправляются данные
// С использованием свойства form.action

document.search.action = "PostForm"