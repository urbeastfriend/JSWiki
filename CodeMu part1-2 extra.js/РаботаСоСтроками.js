let str1 = "abcdef";
let str2 = str1.substring(1,4) // bcd

let strStartsWith = str1.startsWith("a") // true
let strStartsWith2 = str1.startsWith("b") // false

// Аналогично EndsWith
let splitStr = "a b c d"
let splitStr2 = "abcd"
let arr1 = splitStr.split(" ")
let arr2 = splitStr2.split("")
console.log(arr1)
console.log(arr2)

let arrToString = arr1.join("-")
console.log(arrToString)