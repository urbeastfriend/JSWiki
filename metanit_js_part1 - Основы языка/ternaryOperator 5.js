
// В зависимости от условия в первом операнде тернарная операция
// возвращает второй или третий операнд
// Если условие в первом операнде равно true, 
// то возвращается второй операнд;
//  если условие равно false, то третий. Например:
const a = 1;
const b = 2;
const result = a < b ? a: b;
console.log(result); // 1  вернулось а