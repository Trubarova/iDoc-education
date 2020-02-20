Написать функцию заполнения двумерного массива. Имя произвольное.

написать функцию, которая примет как аргумент(параметр) два массива и сравнить суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.

Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной знак может быть: +, -, *, /, %, ^. Вывести результат математического действия, указанного в переменной znak.

Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом.

'func("hello world", ['l', 'd'])' вернет нам "heo wor"

напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

 var input = [1, 2, 3, 4, 5, 6];
 function isEven(x) { return x % 2 == 0; } // проверяет на четность
 console.log(filter(input, isEven)); // [2, 4, 6]
 
 //Task 1
var n = 4;
var m = 4;
A = new Array(n);

for (i = 0; i < A.length; i++) {
A[i] = new Array(m);
}
console.log(fillArray(A));
 
 function fillArray (A) {
    for (var i = 0; i < A.length; i++) {
        for(var j = 0; j < A[i].length; j++){
     A[i][j] = Math.floor(Math.random()*10);
   }
  }
return A;
 }
 
 
 //Task 2
function Mass (Arr1, Arr2) {
    var sum1 = 0;
    var sum2 = 0;

    for(var i = 0; i < Arr1.length; i++){
        Arr1[i]= Math.floor(Math.random()*10);
        if(typeof Arr1[i] == 'number'){
    sum1+= Arr1[i];
   }
}

for (var j = 0; j < Arr2.length; j++){
    Arr2[j]= Math.floor(Math.random()*10);
    if(typeof Arr2[j] == 'number'){
        sum2 += Arr2[j];

}

}
if (sum1 > sum2) {
    return function Mass(Arr1) {
} else if ( sum1 < sum2) {
} return function Mass (Arr2);
 
