
// Хотя куки позволяют сохранять информацию, они имеют ряд ограничений.
// Например, браузер имеет ограничения на размер куков - каждая кука не может превышать 4 кб.
// Куки имеют срок действия, после которого удаляются.
// Куки являются неотъемлемой чертой протокола HTTP и при каждом запросе к серверу передаются вместе с запросом на сервер

// Поэтому в HTML5 была внедрена новая концепция для хранения данных - web storage.
// Web storage состоит из двух компонентов: session storage и local storage.

//  - Session storage представляет временное хранилище информации, которая удаляется после закрытия браузера.
//  - Local storage представляет хранилище для данных на постоянной основе.
// Данные из local storage автоматически не удаляются и не имеют срока действия. Эти данные не передаются на сервер в запросе HTTP.
// Размер local storage - от 5 до 10 мб для каждого домена в зависимости от браузера

// Все данные в web storage представляют набор пар ключ-значение.

// Для работы с local storage в javascript используется объект localStorage, а для работы с session storage - объект sessionStorage.
// Для сохранения данных нужно передать их в метод setItem() объекта localStorage:
//Если в localStorage уже есть объект с ключом "login", то его значение заменяется новым.
localStorage.setItem("login", "urbeastfriend");

// Для получения сохраненных данных надо вызвать метод getItem():
let login = localStorage.getItem("login");
console.log(`Login from localStorage = ${login}`)

// Для удаления данных используется метод removeItem
localStorage.removeItem("login");

// Для удаления всех данных можно использовать метод clear()
localStorage.clear();

// Все данные в localStorage хранятся в виде строки, поэтому например если мы хотим получить int
// То перед последующей работой с ним нужно будет привести его к нужному типу

// Для того чтобы сохранять объекты - нужно прибегать к их сериализации

let localStorageUser = {
    name: "Artem",
    age: 23,
    married: false
}

localStorage.setItem("user", JSON.stringify(localStorageUser));

let userFromLocalStorage = localStorage.getItem("user");
console.log(`Serialized user from local storage - ${userFromLocalStorage}`)

let parsedUser = JSON.parse(userFromLocalStorage)