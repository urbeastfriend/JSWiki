
// Для отправки данных в JavaScript с помощью объекта XMLHttpRequest в его метод send() передаются отправляемые данные.


let user = {
    name: "Tom",
    lastName: "LastName"
};

let xhrPost = new XMLHttpRequest();

xhrPost.onload = () => {
    if (xhrPost.status == 200) {
        console.log(xhrPost.responseText)
    }
    else {
        console.log(`Server response: ${xhrPost.statusText}`)
    }
}

xhrPost.head
xhrPost.open("POST", "http://metanitjstest/postRequestsConsumer.php")
xhrPost.setRequestHeader("Content-Type", "application/json");
xhrPost.send(JSON.stringify(user));