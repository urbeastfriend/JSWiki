
// Один из способов взаимодействия с пользователями представляют html-формы.
// Например, если нам надо получить от пользователя некоторую информацию, мы можем разместить
// форму, которая будет содержать текстовые поля для ввода и кнопку для отправки.

// Для работы с формами исползуется элемент <form>

// <form name="search">
// </form>

// В JS форма представлена объектов HtmlFormElement. И после её создания мы можем обратиться к ней разными способами.
//  - Первый способ заключается в прямом обращении по имени формы.
let searchForm = document.search

// Второй способ состоит в обращении к коллекции форм документа и поиске в ней нужной формы:
for (var i = 0; i < document.forms.length; i++) {

    if (document.forms[i].name === "search")
        searchForm = document.forms[i];
}

// Еще один способ сочетает оба подхода:
searchForm = document.forms["search"];

//И также можно применять стандартные способы для поиска элемента формы, например, по id, по тегу или по селектору. Например:
searchForm = document.getElementById("searchForm")
searchText = searchForm.elements["searchText"]

// Среди методов формы можно выделить методы submit(), который отправляет данные формы на сервер
// и reset(), который возвращает значения элементов форм к значениям по умолчанию
searchText.value = "Привет мир"   // Можно установить значение свойства value
console.log(`searchText value = ${searchText.value}`)
searchForm.reset()
console.log(`searchText value reset`)

// Можно получить родительский объект формы с помощью свойства form
console.log(searchText.form.name)

// Можно получить тип ввода поля - type у элементов input
console.log(searchText.type)

