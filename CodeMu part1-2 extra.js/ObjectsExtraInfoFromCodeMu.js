// фишки с объектами

// ключи-строки можно писать без кавычек, но только если они
// не начиются с числа, не содержат дефисы и пробелы
let obj = {
    key: 4,
    key2: 5,
    5: 6
};

// Обращение к ключам-цифрам производится через скобочки
// к другим ключам можно обращаться как к свойствам 
console.log(obj)
console.log(obj[5])
console.log(obj[`key2`])
console.log(obj[`key`])
console.log(obj.key)

// Можно динамически добавлять в объект новые значения
// даже если объект - const
const obj2 = {};

obj2['a'] = 1;
obj2['b'] = 2;
obj2['c'] = 3;

// можно получать массив ключей объекта, может быть полезно
// чтобы получить длинну объекта, так как по умолчанию нельзя
console.log(obj2)
console.log(Object.keys(obj2))
console.log(Object.keys(obj2).length)


// При создании объекта имена его свойств могут браться из переменных
// Тоесть быть вычисляемыми

let key = 'key';

// для этого переменную нужно взять в квадратные скобки
let obj4 = {
    [key + '1']: 1,
    [key + '2']: 2,
    [key + '3']: 3,
}

console.log(obj4)

console.log(typeof obj4)
console.log(typeof obj4['key1'])

// Массивы являются частным случаев объектов

console.log(typeof [])  // Выведет object
console.log(typeof [1,2,3])  // Выведет object

// Но иногда нам нужно отличить массивы от объектов
// В этом нам поможет Array.isArray()

console.log(Array.isArray([1,2,3])) // true
console.log(Array.isArray({a: 1}))  // false


// Объекты могут быть многомерными

let obj3 = {
	a: {
		key1: 'a1',
		key2: 'a2',
		key3: 'a3',
	},
	b: {
		key1: 'b1',
		key2: 'b2',
		key3: 'b3',
	},
	c: {
		key1: 'c1',
		key2: 'c2',
		key3: 'c3',
	},
}

console.log(obj['a']['key1']); // выведет 'a1'


// Можно также обращаться к элементам как к свойствам:
console.log(obj.a.key1); // выведет 'a1'



// Можно комбинировать массивы и объекты
let days = {
	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};

console.log(days['ru'][0]); // выведет 'пн'
console.log(days['en'][2]); // выведет 'wd'

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};

