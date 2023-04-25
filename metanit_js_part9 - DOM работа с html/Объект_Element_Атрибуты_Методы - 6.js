
// Кроме методов Node в JS мы можем использовать свойства и методы объектов Element.
// Важно не путать эти два объекта. Node представляет все узлы веб страницы
// Element - в свою очередь представляет только html-элементы или элементы у которых nodeType возвращает = 1

// Одним из ключевых свойств объекта Element является свойство tagName, возвращающее тег элемента.

// получаем корневой элемент <html>
let root = document.documentElement

// Функция рекурсивного обхода всех вложенных элементов
function getChildren(elem) {

    for (const i in elem.childNodes) {

        if (elem.childNodes[i].nodeType === 1) {

            console.log(elem.childNodes[i].tagName);
            getChildren(elem.childNodes[i]);
        }
    }
}

console.log(root.tagName);
getChildren(root)

// Вывод
// HTML
// HEAD
// META
// TITLE
// BODY
// DIV
// P
// IMG
// DIV
// A
// H3
// P
// P
// SCRIPT

// У элементов есть свойства innerText и innerHtml
// Используются для получения или установки текстового содержимого или html кода

// var pElement = document.querySelector("div.pContainer p");
// // Надо отметить, что свойство innerText во многом аналогично свойству textContent. То есть следующие вызовы будут равноценны:
// pElement.innerText = "hello";
// pElement.textContent = "hello";

let pContainer = document.querySelector("div.pContainer");
// pContainer.innerHTML = "<h2>Hello World!!!</h2><p>bla bla bla</p>";


// Среди методов объекта Element можно отметить методы управления атрибутами:

// getAttribute(attr): возвращает значение атрибута attr
// setAttribute(attr, value): устанавливает для атрибута attr значение value. Если атрибута нет, то он добавляется
// removeAttribute(attr): удаляет атрибут attr и его значение

let pContainerStyle = pContainer.getAttribute("style");
console.log("До изменения атрибута: " + pContainerStyle);
pContainer.removeAttribute("style") // удаляем атрибут style
pContainer.setAttribute("style", "color:blue;")
pContainerStyle = pContainer.getAttribute("style");
console.log("После изменения атрибута " + pContainerStyle);


// РАЗМЕРЫ И ПОЗИЦИЯ ЭЛЕМЕНТОВ
// Элементы имеют ряд свойств, которые позволяют определить размер элемента

// Свойства offsetWidth и offsetHeight определяют ширину и высоту элемента в пикселях
// в ширину и высоту включаются границы элемента

// Свойства clientWidth и clientHeight также определяют высоту и ширину, но без учёта границ

let rect = document.getElementById("rect");
console.log("offsetHeight: " + rect.offsetHeight);
console.log("offsetWidth: " + rect.offsetWidth);
console.log("clientHeight: " + rect.clientHeight);
console.log("clientWidth: " + rect.clientWidth);

// Вывод
// Поскольку у блока div определена граница в 3 пикселя,
// то по сравнению с clientHeight/clientWidth к offsetHeight/offsetWidth добавляет по 6 пикселей.
// offsetHeight: 106
// offsetWidth: 106
// clientHeight: 100
// clientWidth: 100

// Для определения позиции элемента наиболее эффективным способом является метод getBoundingClientRect().

rect = document.getElementById("rect");
let clientRect = rect.getBoundingClientRect();
console.log("top: " + clientRect.top);
console.log("bottom: " + clientRect.bottom);
console.log("left: " + clientRect.left);
console.log("right: " + clientRect.right);
