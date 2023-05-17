
// Функция fetch() может дополнительно принимать опции запроса в виде второго необязательного параметра:

// Параметр init представляет сложный объект, который может имеет большой набор опций:

//  - method: метод запроса, например, GET, POST, PUT и т.д.
//  - headers: устанавливаемые в запросе заголовки
//  - body: тело запроса - данные, которые добавляются в запрос.
//  - mode: режим запроса, например, cors, no-cors и same-origin
//  - credentials: определяет действия с учетными данными (куки, данные HTTP-аутентификации и сертификаты клиента TLS). Принимает одно из следующих значений:
//     omit: учетные данные исключаются из запроса, а любые учетные данные, присланные в ответе от сервера, игнорируются
//     same-origin: учетные данные включаются только в те запросы и принимаются в ответах только на те запросы, адрес которых принадлежит к тому же домену, что и адрес клиента.
//     include: учетные данные включаются в любые запросы и принимаются в ответах на любые запросы
//  - cache: устанавливает принцип взаимодействия с кэшем браузера. Возможные значения: default, no-store, reload, no-cache, force-cache и only-if-cached
//  - redirect: устанавливает, как реагировать на редиректы. Может принимать следующие значения:
//     follow: автоматически применять редирект
//     error: при редиректе генерировать ошибку
//     manual: обрабатывать ответ в другом контексте
//  - referrer: определяет реферера запроса
//  - referrerPolicy: определяет политику реферера - как информация о реферере будет передаваться в запросе. Может принимать следующие значения: no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin и unsafe-url
//  - integrity: содержит контрольное значение ресурса
//  - keepalive: позволяет запросу существовать дольше, чем время жизни веб-страницы.
//  - signal: предоставляет объект AbortSignal и позволяет отменить выполнение запроса.


// Пример настройки опций:
// В данном случае устанавливаем метод запроса - "GET" и заголовок "Accept" - его значение "application/json" говорит, что клиент принимает данные в формате json.
fetch("http://metanitjstest/user", {
    method: "GET",
    headers: { "Accept": "application/json" }
})
    .then(response => response.json())
    .then(user => console.log(user));

// Стоит отметить, что свойство headers представляет объект Headers. Мы можем применять методы данного объекта для установки заголовков:
// Также можно использовать метод set() для установки заголовка, а если заголовок уже ранее добавлен, то метод set() заменяет его значение. 
// Если же надо удалить ранее добавленный заголовок, то можно использовать метод delete(), который получает имя удаляемого заголовка:

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
fetch("http://metanitjstest/user", {
    method: "GET",
    headers: myHeaders
})
    .then(response => response.json())
    .then(user => console.log(user));


// Отправка данных в запросе
// Для отправки данных в запросе в функции fetch() применяется в рамках второго параметра применяется опция body

// Эти данные могут представлять типы Blob, BufferSource, FormData, URLSearchParams, USVString и ReadableStream.
// Стоит учитывать, что в запросах с методом GET и HEAD для запроса нельзя установить эту опцию.

async function postData() {
    let user = {
        name: "Tom",
        lastName: "LastName"
    };
    const userJson = JSON.stringify(user);
    const postResponse = await fetch("http://metanitjstest/postRequestsConsumer.php", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: userJson })

    const responseText = await postResponse.text()

    console.log(responseText)
}

postData();