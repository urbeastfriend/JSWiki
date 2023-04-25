let array1 = [1,2,3]

array1[6] = 6

array1.forEach(num => {
    console.log(num)
});


let array2 = [[0,1,2],[3,4,5]];

array2.forEach(subarray => {
    console.log(subarray)
});


let array3 = [0,1,2,3];
array3.push(4);
console.log(array3);
array3.pop();
console.log(array3);
delete array3[3];
console.log(array3);

let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]);
