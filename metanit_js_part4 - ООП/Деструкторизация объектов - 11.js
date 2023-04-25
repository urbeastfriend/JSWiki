
// Деструктуризация (destructuring) позволяет извлечь из объекта отдельные значения в переменные или константы:

const user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com",
    account: {
        login: "tom555",
        password: "qwerty"
    }
};
let { name, email } = user;
console.log(name);      // Tom
console.log(email);     // tom@gmail.com

// ИЛИ МОЖНО ТАК, в том числе задать значение по умолчанию если каких-то свойств не найдёт
let { name: username, email: userEmail, sex: userSex = "male" } = user
console.log(username);
console.log(userEmail);
console.log(userSex);

// В том числе можно получать сложные объекты
let { account } = user
console.log(account);

// Можно получать сложные объекты по частям
let { account: { login } } = user;
console.log(login);

// Оператор rest или ... позволяет получить оставшиеся свойства объекта
let { name: pName, age: page, ...pRest } = user
console.log(pRest)

// Также можно разложить массивы
// Если переменных/констант меньше, чем элементов массива, то оставшиеся элементы массива просто опускаются.
// Если переменных/констант больше, чем элементов массива, то несопоставленные переменные/константы получают значение undefined:
// С помощью оператора ... можно получить все оставшиеся элементы массива в виде другого массива:
let testArray = [1, 2, 3, 4];
let [first, second, ...restItems] = testArray;
console.log(`${first} and ${second} and ${restItems}`)

//Можно пропустить ряд элементов массива
let [firstItem, , , fourthItem] = testArray
console.log(`first item - ${firstItem} and fourth item - ${fourthItem}`)

// Можно совместить получение данных из массива и объекта
let people = [
    { name: "Tom", age: 34 },
    { name: "Bob", age: 23 },
    { name: "Sam", age: 32 }
];
let [, { name: secondName, age: secondAge }] = people

console.log(secondName)

// Можно деструкторизовать входные параметры функций
function sum([a, b, c]) {
    const result = a + b + c;
    return result
}

let numbers = [1, 2, 3, 4, 5];
let sumResult = sum(numbers);
console.log(sumResult);

// Благодаря деструкторизации можно легко проводить обмен значениями
let firstName = "Tom";
let thirdName = "Bob";
[firstName, thirdName] = [thirdName, firstName];

console.log(firstName);     // Bob
console.log(thirdName);    // Tom

//Что упрощает решение ряда задач. Например, используем деструктуризацию для простейшей сортировки массива:
let nums = [9, 3, 5, 2, 1, 4, 8, 6];
for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
        if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];

console.log(nums);  // [1, 2, 3, 4, 5, 6, 8, 9]