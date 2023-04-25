// Одни объекты могут содержать в качестве свойств другие объекты.

let parent = {
    name: "Galina",
    sex: "Woman",
    languages: ["русский", "английский"],
    gorod: {
        name: "Navashino",
        oblast: "Nizhegorodskaya"
    },
    childrens: [
        { name: "Max", age: 30 },
        { name: "Artem", age: 23 }
    ]
};


console.log(parent);
console.log(`${parent.name} childrens`);
console.log(parent.gorod);

for (language of parent.languages) {
    console.log(`Разговаривает на - ${language}`)
}
for (children of parent.childrens) {
    console.log(`Children - ${children.name} ${children.age}`)
}