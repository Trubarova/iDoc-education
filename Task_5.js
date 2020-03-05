Функция должна вернуть массив из центральных элементов переданных массивов.

Центральный элемент, это один центральный, если массив по длине непарный [1, 2, 3, 4, 5] -> 3

Центральный элемент, это пара центральных, если массив по длине парный: [1, 2, 3, 4, 5, 6] -> 3, 4

Написать функцию, которая получает 3 аргумента: два числа и функцию. Произвести вызов переданной функции с
двумя аргументами числами. doFunction(2, 3, power); в ответе должны получить 8, как 2 в степени 3.

Из п.2 реализовать функции sum, div, mul, power

doFunction(16, -23, mul); // 16*(-23)

Из п.2, если количество числовых аргументов равно единице и переданная функция factorial - реализовать расчет факторикала. 
doFunction(6, factorial);, в ответе поулчаем 6! = 720. // arguments.length и typeof


//Task 1
function returnArray() {
    var A = arguments;
    var B = [];

    for ( var i = 0; i < A.length; i++ ) {
        if ( A[i].length % 2 != 0 ) {
            B.push(A[i][Math.floor(A[i].length / 2)]);
        } else {
        	B.push(A[i][Math.floor(A[i].length / 2)- 1]);
            
        }
    }
    return B;
}


//Task 2
function pow(a, b) {
  return a ** b;
}

var result = pow(2, 3);
console.log( result );

//Task 3
function sum(x, y) {
    return x + y;
}
var result = sum(16, -23);
console.log(result);

function div(x, y) {
    if ( y != 0) {
        return x / y;
        var result = div(16, -23);
        console.log(result);
}

function mul(x, y){
    return x * y;
}
var result = mul(16, -23);
console.log(result);
    
    //Task 4
    function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log( factorial(6) );
