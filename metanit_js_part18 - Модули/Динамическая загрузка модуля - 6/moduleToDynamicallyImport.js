
// Динамически подключим этот модуль в другой модуль main.js:

export const message = "dynamic module message string";

export default function printModuleMessage() {
    console.log("dynamically imported module message")
}

export function printHello() {
    console.log("Hello because hour < 17")
}