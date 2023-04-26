
// Одну из возможностей сохранения данных в javascript представляет использование куки.
// Для работы с куками в объекте document предназначено свойство cookie.

//Для установки куков достаточно свойству document.cookie присвоить строку с куками:

// В данном случае устанавливается кук, который называется "login" и который имеет значение "urbeastfriend"
document.cookie = "login=urbeastfriend"

// // Куки может принимать до шести параметров
//   - имя куки
//   - значение
//   - срок окончания
//   - путь
//   - домен
//   - secure (SSL - SecureSockets Layer)

// По умолчанию кук имеет очень ограниченный срок жизни. Если явным образом не установить
// срок действия, то кук удалится при закрытии браузера.

document.cookie = "login=urbeastfriend;expires=Mon, 01 May 2023 00:00:00 GMT"

// Или можно сгенерировать срок удаления программно

let expireDate = new Date();
expireDate.setMonth(expireDate.getMonth() + 36)
console.log(expireDate.toUTCString())  // Sun, 26 Apr 2026 09:54:33 GMT
document.cookie = "login=urbeastfriend;expires" + expireDate.toUTCString()
// В данном случае срок действия куки будет составлять 3 года

// Если вдруг нам нужно установить куки для определённого эндпоинта,
// то можно использовать параметр path

// document.cookie = "login=tom32;expires=Mon, 31 Aug 2015 00:00:00 GMT;path=/home;";
// В этом случае для других путей на сайте, например, www.mysite.com/shop, эти куки будут недоступны.

// Если на нашем сайте есть несколько доменов, и мы хотим установить куки непосредственно
// для определенного домена, nогда можно использовать параметр domain.
// Например, у нас на сайте есть поддомен blog.mysite.com:

// document.cookie = "login=tom32;expires=Mon, 31 Aug 2015 00:00:00 GMT;path=/;domain=blog.mysite.com;";
// Параметр path=/ указывает, что куки будут доступны для всех директорий и путей поддомена blog.mysite.com.


// Последний параметр secure задает использование SSL (SecureSockets Layer)
// // и подходит для сайтов, использующих протокол https
// Если значение этого параметра равно true,
// то куки будут использоваться только при установке защищенного соединения ssl
// По умолчанию данный параметр равен false.

// Для извлечения куки из браузера достаточно обратиться к свойству document.cookie
// Извлечённые куки не включают лишние параметры, только имя и значение
// А также разделяются точкой с запятой

document.cookie = "password=qwerty"
document.cookie = "message=HelloWorld"

let cookies = document.cookie.split(";");
console.log("Cookies")
for (let cookie of cookies) {
    let [name, value] = cookie.split("=")
    console.log(`Name: ${name} - Value: ${value}`)
}