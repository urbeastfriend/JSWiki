
// Синтаксис массивов открывает нам другую возможность - определение имени свойства вне объекта:

function createObject(propName, propValue) {
    return {
        [propName]: propValue,
        printFx() {
            console.log(`${propName}: ${propValue}`);
        }
    }
}

let user2 = createObject("name", "Artem");

user2.printFx();

// Можно удалять свойства и методы с помощью оператора delete.

delete user2.name;
console.log(user2.name)  // undefined
delete user2.printFx;
console.log(user2.printFx)  // undefined

//По умолчанию даже если мы используем const - мы всёравно сможем изменять
// свойства объекта. Если мы действительно хотим сделать объект неизменяемым
// мы должны использовать специальный метод Object.freeze()

let user3 = createObject("name", "Tom");
Object.freeze(user3);
user3.name = "Bob";
console.log(user3.name)    // Значение имени (Tom) не изменилось


// Объект можно создать из набора пар ключ-значение

let userData = [["name", "Artem"], ["age", 23], ["sex", "male"]];
let userFromKeyValuePair = Object.fromEntries(userData);
console.log(userFromKeyValuePair);
console.log(userFromKeyValuePair.name)

