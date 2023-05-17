
export function sayHello() {
    console.log("default export module");
}
class Messenger {
    send(text) {
        console.log("Sending message:", text);
    }
}

export default { sayHello, Messenger }