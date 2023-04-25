
// Попробуем записать эту функцию в сокращённом виде
function hello(){
    console.log("Hello");
}
hello();    // вызываем функцию

// лямбда без параметров
let helloFx = ()=> console.log("HelloFx")
helloFx();

// лямбда с одним параметром (можно опустить скобки)
let messageLambdaFx = mes=> console.log(mes)
messageLambdaFx("lambdafxMessage");

// лямбда с несколькими параметрами
let sumFx = (arg1,arg2)=> {
    console.log(`Sumfx result = ${arg1+arg2}`)
}
sumFx(5,5);


// Лямбдой можно вернуть объект
let createUserlamda =(userName,userAge)=> ({name:userName,age: userAge})

let artem = createUserlamda("artem",23)
console.log(artem.name,artem.age)

// Лямбда с несколькими инструкциями
let bigFX = (width,height)=>{
    let v = width*height;
    return `v = ${v}`
}

console.log(bigFX(3,4)); //12