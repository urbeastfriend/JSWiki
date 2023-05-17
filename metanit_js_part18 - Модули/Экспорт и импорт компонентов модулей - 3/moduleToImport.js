
let welcome = "Welcome";

const message = "Hello";

function sayHello() {
    console.log(message);
}

class Messenger {
    send(text) {
        console.log("Sending message:", text)
    }
}

export { welcome, message, sayHello, Messenger }