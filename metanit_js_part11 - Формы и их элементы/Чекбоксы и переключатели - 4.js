
// Особую группу элементов ввода составляют чекбоксы и переключатели

// Нажатие на чекбокс генерирует событие click.
// Также чекбокс обладает свойством checked, которое в отмеченном состоянии принимает значение true

function onChecked(event) {
    console.log(`Тыркнул на чекбокс`);
}

let checkBox = document.search.searchCheck;
checkBox.addEventListener("click", onChecked);


// Переключатели (radiobutton) представляют собой группу переключателей, из которых можно выбрать только один
// Выбор или нажатие на один из них также представляет событие click


function onRadioChanged(event) {
    console.log(`Выбрал ${event.target.value}`);
}
let searchFormRadioBtns = document.search.searchRadio

// Так как переключателей у нас много, устанавливать листенер нужно
// Для каждого отдельно
searchFormRadioBtns.forEach(element => {
    element.addEventListener("click", onRadioChanged)

});