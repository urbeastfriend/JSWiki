import defaultModule from "./moduleDefaultExport.js";

defaultModule.sayHello();

const telegram = new defaultModule.Messenger();
telegram.send("default module messenger")