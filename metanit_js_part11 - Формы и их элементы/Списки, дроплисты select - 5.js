
// Для создания списка используется html-элемент select.
// Причем с его помощью можно создавать как выпадающие списки,
// так и обычные с одинарным или множественным выбором.

// Все элементы списка в javascript доступны через коллекцию options.
// А каждый объект HtmlOptionElement имеет свойства:
//  - index (индекс в коллекции options),
//  - text (отображаемый текст)
//  - value (значение элемента).

let languagesList = document.getElementById("list1");
console.log(languagesList.options)

// languages.options не является Array, а значит мы не можем бахнуть forEach.
// Поэтому сначала конвертим в массив

Array.from(languagesList.options).forEach(option => {
    console.log(option.text);
})

let editListForm = document.listEdit

function addLanguage(event) {
    let text = editListForm.languageText.value
    let value = editListForm.languageValue.value

    let newOption = new Option(text, value)

    languagesList.add(newOption);
    editListForm.reset();
}

function removeSelectedLanguage(event) {
    let selectedIndex = languagesList.options.selectedIndex;
    languagesList.remove(selectedIndex)
}

editListForm.addLanguageBtn.addEventListener("click", addLanguage);
editListForm.removeLanguageBtn.addEventListener("click", removeSelectedLanguage);


// Элемент select (список) поддерживает три события
//   - blur (потеря фокуса)
//   - focus (получение фокуса)
//   - change (когда выделился новый объект)