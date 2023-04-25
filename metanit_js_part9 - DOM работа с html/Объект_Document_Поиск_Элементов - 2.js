
// Для работы со структурой DOM в JS предназначен объект document, который определён в глобальном объекте window (BOM).
// Объект document представляет ряд свойств и методов для управления элементами страницы

// Для поиска элементов на странице применяются следующие методы:

// getElementById(value): выбирает элемент, у которого атрибут id равен value
// . Если элемента с таким идентификатором нет, то возвращается null

// getElementsByTagName(value): выбирает все элементы, у которых тег равен value
// getElementsByClassName(value): выбирает все элементы, которые имеют класс value
// querySelector(value): выбирает первый элемент, который соответствует css-селектору value
// querySelectorAll(value): выбирает все элементы, которые соответствуют css-селектору value


var headerElement = document.getElementById("headerElement");
// Получил текст заголовка по id и добваил его на страницу
document.write(`Добавил текст с помощью документа ${headerElement.innerText} <br/>`)

// Можно получить все элементы по заданному тегу
var paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    document.write(`Текст параграфа №${i} = ${paragraphs[i].innerText} <br/>`)
}

// Поиск по имени класса
var elementsByClass = document.getElementsByClassName("text")
console.log(elementsByClass);

//Поиск по селектору css - найдёт первый элемент, соответвующий селектору
var elementsByCssQuery = document.querySelector(".annotation p")
document.write("Текст селектора: " + elementsByCssQuery.innerText);
// В данном случае Текст селектора: Аннотация статьи

// Можно получить все элементы по селектору, только в этот раз использовать querySelectorAll
var allElementsByCssQuery = document.querySelector(".pContainer p")