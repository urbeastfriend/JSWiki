let arr1 = [1, 2, 3, 4, 5]
arr1.push(4)
console.log(arr1)
arr1.unshift(0)
console.log(arr1)

// Shift - удалить и вернуть значение из начала массива
console.log(arr1.shift())
// Pop - удалить и вернуть значение из конца массива
console.log(arr1.pop())
console.log(arr1)


// slice Вырезает подмассив по указанным индексам
let arr2 = arr1.slice(0,4)
console.log(arr2)
arr2 = arr2.slice(1,3)
console.log(arr2)


// Splice удаляет или добавляет элементы в массив. 
// Можно только удалять элементы, только добавлять или делать и то и другое одновременно

// Давайте удалим элементы с первого, 3 штуки (это 'b', 'c' и 'd'):
let arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(1, 3);
console.log(arr);

// Не оставляет прореженных значений undefined, а возвращает модифицированный массив
console.log(arr[1]);

let arr3 = ['a', 'b', 'c', 'd', 'e'];
let del = arr3.splice(1, 3); // Можно получить список удалённых элментов

console.log(del);

// Давайте сначала удалим элемент с номером 2, 
// а потом вместо него вставим еще 3 новых элемента ('1', '2' и '3'):
let ar5 = ['a', 'b', 'c', 'd', 'e'];

ar5.splice(2, 1, '1', '2', '3');
console.log(ar5);


// Давайте теперь ничего не будем удалять, но на позицию 2 
// (это значит перед элементом с номером 2), вставим еще 3 новых элемента ('1', '2' и '3'):
let ar6 = ['a', 'b', 'c', 'd', 'e'];

ar6.splice(2, 0, '1', '2', '3');
console.log(ar6);


// Map
// Метод map позволяет применить заданную функцию для каждого элемента массива. 
// // При этом метод не изменяет исходный массив, а возвращает измененный.
// Метод в параметре получает функцию, которая выполнится для каждого элемента массива. 
// То, что вернет эта функция через return для элемента массива, 
// станет новым значением этого элемента (см. примеры).
// В функцию можно передавать 3 параметра.
// Если эти параметры есть (они не обязательны), то в первый автоматически попадет элемент массива, 
// во второй попадет его номер в массиве (индекс), а в третий - сам массив.

// let новый массив = массив.map(function(элемент, индекс, массив) {
// 	код
// 	return измененный элемент;
// })

// Создадим массив, каждый элемент которого вдвое больше соответствующего элемента начального массива:

let baseArr = [1,2,3,4,5]

let mappedArr = baseArr.map(function(it){
    return it*2
})

console.log(`array before mapping = ${baseArr}`)
console.log(`mapped array = ${mappedArr}`)


// Создадим массив, каждый элемент которого получается так - 
// значение элемента умножается на его порядковый номер в массиве:

let mappedArrUsingIndex = baseArr.map(function(it,index){
    return it*index
})

console.log(`array before mapping = ${baseArr}`)
console.log(`mapped array * index = ${mappedArrUsingIndex}`)


// // filter - фильтрует вещи где условие вернет тру    (например найти положительные значения)
// , every если для всех элементов тру,
//  some хотя бы одно тру работают похожим образом

// Метод reduce

// Метод reduce сворачивает массив к одному значению (редуцирует). 
// К примеру, с помощью reduce можно легко найти сумму элементов массива 
// (то есть массив сведется к одному значению - к сумме элементов).

let arrReduce = [1, 2, 3, 4, 5, 6];

let result = arrReduce.reduce(function(sum, elem) {
	return sum + elem;
}, 0);
// 0 это второй параметр метода reduce, означающий начальное значение промежуточного результата
// промежуточный результат в данном случае - это первый параметр функции под именем sum
console.log(result);


let arrFindAllPositive = [1, -2, -3, 4, 5, -6];

let result2 = arrFindAllPositive.reduce(function(sum, elem) {
	if (elem >= 0) {
		return sum + elem;
	} else {
		return sum;
	}
});

console.log(result2);