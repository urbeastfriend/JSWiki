
import * as importedModule from "./moduleToImport.js"

importedModule.sayHello();

const telegram = new importedModule.Messenger();
telegram.send(importedModule.welcome);