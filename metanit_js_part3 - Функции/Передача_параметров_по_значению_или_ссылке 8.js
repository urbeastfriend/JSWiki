//Строки, числа, логические значения передаются в функцию по значению.
// Тоесть функции получают копию значения

//Объекты и массивы передаются по ссылке. 
// То есть функция получает сам объект или массив, а не их копию.

function changeUserName(user,name = "tom"){
    user.name = name;
}
 
var bob ={ 
    name: "Bob"
};
console.log("before change:", bob.name);    // Bob
changeUserName(bob,"tom");
console.log("after change:", bob.name);     // Tom


// Но если мы попробуем переустановить объект или массив полностью,
// Оригинальное значение не изменится

function change(user){
    // полная переустановка объекта
    user= {
        name:"Tom"
    };
}
 
var bob2 ={ 
    name: "Bob"
};
console.log("before change:", bob2.name);    // Bob
change(bob2);
console.log("after change:", bob2.name);     // Bob