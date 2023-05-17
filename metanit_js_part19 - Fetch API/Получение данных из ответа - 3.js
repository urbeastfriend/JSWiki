
// Все данные, которые отправил сервер, доступны в объекте Response через свойство body, которое представляет объект ReadableStream, 
// но гораздо проще воспользоваться одним из методов объекта Response. 
// Интерфейс Response предоставляет следующие методы:
//  - arrayBuffer(): возвращает promise, который получает содержимое ответа в виде объекта ArrayBuffer
//  - blob(): возвращает promise, который получает содержимое ответа в виде объекта Blob
//  - clone(): возвращает копию текущего объекта Response
//  - error(): возвращает новый объект Response, который ассоциирован с возникшей ошибкой сети
//  - formData(): возвращает promise, который получает содержимое ответа в виде объекта FormData
//  - json(): возвращает promise, который получает содержимое ответа в виде объекта JSON
//  - redirect(): возвращает новый объект Response с другим адресом URL
//  - text(): возвращает promise, который получает содержимое ответа в виде строки текста

// Можно получить текст
async function getUserText() {
    const response = await fetch("http://metanitjstest/user");

    const responseText = await response.text()
    console.log(responseText);
}

// Можно получить объект json
async function getUserJson() {
    const response = await fetch("http://metanitjstest/user");

    const user = await response.json()
    console.log(`User name - ${user.name}, user age - ${user.age}`);
}

// Можно получить лист объектов
async function getUsersJson() {
    const response = await fetch("http://metanitjstest/users");


    const users = await response.json()
    users.forEach(user => {
        console.log(`User name - ${user.name}, user age - ${user.age}`);
    });
}

getUserText();
getUserJson();
getUsersJson();



// С помощью метода blob() можно получить бинарные данные (например изображения)
// Подобным образом можно получать и использовать другие типы файлов, например, аудио и видеофайлы.
async function getImage() {
    const response = await fetch("http://metanitjstest/img_dog.JPG");


    const imageData = await response.blob()
    document.write('<img id="imageFromServer" style="width: 500px; height: 600px;">');
    const img = document.getElementById("imageFromServer")
    img.src = URL.createObjectURL(imageData)
}

getImage();