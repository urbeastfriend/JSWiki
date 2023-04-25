let num1 = 5;
let num2 = 10;

let resultPlus = num1+num2

let num3 = 5;
let num4 = 5n;

// Сравнивается значение и тип
console.log(num3===num4)

// Сравнивается только значение
console.log(num3==num4)


let strNum = `1`
let strNum2 = `3`
let str = `string`
console.log(strNum + strNum2)

console.log(strNum * strNum2)

console.log(str.repeat(2))

let a = '5' * '2';
console.log(a)
a = (-'5') + (-'2');
console.log(a)
a = '' + 3 + 1;
console.log(a)
a = ``
console.log(typeof(a))
// Остальное как и во всех других языках

let a2 = `2`
let a3 = `3`
console.log(Number(a2) + Number(a3))
console.log(parseInt(a2) + parseInt(a3))
console.log('2' + Number('3') )


let num = `12px`

console.log(Number(num))   // вернёт NaN
console.log(parseInt(num))  // вернёт 12


let pix1 = `5.5px`
let pix2 = `6.25px`

console.log(parseFloat(pix1)+ parseFloat(pix2) + `px`)


let test = Boolean('');

console.log(test)
test = Boolean('0');
console.log(test)

test = 0.1 + 0.2
console.log(test)
console.log(test.toFixed(2))     // Возвращает строку
console.log(+test.toFixed(2))  // Возвращает число из за хитрого +


test = 0.3 - 0.1
console.log(test)
console.log(test.toFixed(1)) // Округлил до 0.2

test = 0.1 * 0.2
console.log(test)
console.log(test.toFixed(1)) // Округлил до 0


