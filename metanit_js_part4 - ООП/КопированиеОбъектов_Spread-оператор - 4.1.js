
// spread-оператор ... позволяет разложить объект на различные пары свойство-значение, 
// которые можно передать другому объекту.

const tom = { name: "Tom", age: 37, company: "Google" };
const bob = { ...tom }
bob.name = "Bob";

console.log(tom);   // {name: "Tom", age: 37, company: "Google"}
console.log(bob);   // {name: "Bob", age: 37, company: "Google"}

const tom2 = { name: "Tom", age: 37, company: "Google" };
const bob2 = { ...tom2, name: "Bob" };         // Если хотим изменить некоторые значения, то записываем их в конце

console.log(bob);   // {name: "Bob", age: 37, company: "Google"}


// Тем не менее если объекты содержат вложенные объекты, то эти вложенные объекты при копировании
// снова будут представлять ссылки на один и тот же объект
