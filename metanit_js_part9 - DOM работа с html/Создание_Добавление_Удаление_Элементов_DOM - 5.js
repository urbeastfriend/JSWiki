
// Для создания элементов объект document имеет следующие методы:

// createElement(elementName): создает элемент html, тег которого передается в качестве параметра. Возвращает созданный элемент
// createTextNode(text): создает и возвращает текстовый узел. В качестве параметра передается текст узла.

let elem = document.createElement("div");
// Создавать текстовый элемент необязательно, можно указать его через свойство textContent
let elemText = document.createTextNode("Привет метанит")

// Таким образом, переменная elem будет хранить ссылку на элемент div.
// Однако одного создания элементов недостаточно, их еще надо добавить на веб-страницу.

// Для добавления элементов мы можем использовать один из методов объекта Node:

// appendChild(newNode): добавляет новый узел newNode в конец коллекции дочерних узлов
// insertBefore(newNode, referenceNode): добавляет новый узел newNode перед узлом referenceNode

let elemZagolovok2 = document.createElement("h2")
elemZagolovok2.textContent = "Динамически добавленный заголовок"

// Получаем элемент в который хотим запихать новый элемент
let elemContainer = document.querySelector("div.pContainer")
// Получаем элемент перед которым будет происходить добавление
let beforeElem = elemContainer.firstChild.nextSibling;
// Добавляем элемент в блок div перед перывм узлом
elemContainer.insertBefore(elemZagolovok2, beforeElem)


// Можно копировать элементы, бывает полезно когда элементы сложные по составу
// Копирование имеющихся узлов осуществляется с помощью метода cloneNode()
// Если передать true - копируется всё содержимое дочерних узлов
// Если передать false - копируется без дочерних узлов
let copiedImage = document.getElementsByTagName("img")[0].cloneNode(true)
let copiedElemContainer = elemContainer.cloneNode(true);
document.body.appendChild(copiedElemContainer)
document.body.appendChild(copiedImage);


// Удаление элемента
// Для удаления элементов используется метод removeChild() объекта node
// Этот метод удаляет один из дочерних узлов
let nodeToRemove = elemContainer.querySelector("div.pContainer a")
elemContainer.removeChild(nodeToRemove)

// Замена элемента
// Для замены элемента используется метод replaceChild(newNode, oldNode)

let oldNode = document.querySelector("div.annotation");
let newNode = document.createElement("h2")
newNode.textContent = "Заменил аннотацию статьи на заголовок"
document.body.replaceChild(newNode, oldNode);

