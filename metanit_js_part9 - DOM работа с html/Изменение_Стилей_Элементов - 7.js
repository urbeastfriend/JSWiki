
// Для работы со стилевыми свойствами в JS применяются главным обьразом два подхода:
//  - Изменение свойства style
//  - Изменение значения атрибута class


// Свойство style
// Свойство style представляет собой сложный объект для управления стилем
// и напрямую сопоставляется с атрибутом style html-элемента

let root = document.documentElement
root.style.color = "blue";
console.log(root.style.color);
root.style.color = "";

// Мы точно также могли бы установить цвет с помощью css
// html{
//     color:blue;
// }

// Однако ряд свойств css имеют в названии дефис, например font-family.
// в JS для этих свойств дефис не употребляется

root.style.fontFamily = "Verdana"
// Можно также установить атрибут class элемента html с помощью свойства className
root.className = root.className + " purpleStyle"
// Но нужно учитывать, что прежнее значение атрибута class удаляется.
// Поэтому если нам надо добавить класс, то стоит объединить его название со старым
// А если нужно удалить все классы, то можно присвоить свойству пустую строку


// Для управления множеством классов удобнее использовать свойство classList
// // Это свойство представляет объект, реализующий следующие методы:
//  - add(className): добавляет класс className
//  - remove(className): удаляет класс className
//  - toggle(className): переключает у элемента класс на className. Если класса нет, то он добавляется, если есть, то удаляется

root.classList.remove("purpleStyle");
root.classList.add("purpleStyle");
root.classList.toggle("purpleStyle")