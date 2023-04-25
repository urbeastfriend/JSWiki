

// В стрелочных функциях объект, передаваемый через this, 
// берется из родительского контекста, в котором определена стрелочная функция.
let name = "Artem"
let lambdaFx = () => console.log(`Значение переменной name - ${this.name}`)

lambdaFx();

let testObject = {
    name: "Artem",
    lambdaFx: () => console.log(`Значение переменной name - ${this.name}`)
}
let testObject2 = {
    name: "Artem2",
    lambdaFx: function () {
        console.log(`Значение переменной name - ${this.name}`)
    }
}

testObject.lambdaFx();
testObject2.lambdaFx();