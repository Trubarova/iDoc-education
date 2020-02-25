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
var Arr1 = [6,2,13,65,54,2];
		var Arr2 = [31,5,9,78,4,21,3];
		function arraySum (Array1, Array2) {
			var sum1 = 0; 
			
			for ( i = 0; i < Arr1.length; i++){
				sum1 += Arr1[i];
			}
			console.log(sum1);
			var sum2 = 0;

			for(i = 0; i < Arr2.length; i++) {
				sum2 += Arr2[i];
			}
			console.log(sum2);
		


		if (sum1 > sum2) {
			console.log(Arr1);
		} else {
			console.log(Arr2);
		}
}
arraySum(Arr1,  Arr2);
 
 
 //Task 3
 function doMath(x,znak,y) {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var znak = [];
     
     switch (znak) {
        case '+':
        console.log(x + y);
        break;
        case '-':
        console.log(x - y);
        break;
        case '*':
        console.log(x * y);
        break;
        case '/':
        console.log(x / y);
        break;
        case '%':
        console.log(x % y);
        break;
        default:
        console.log('Ошибка');

     }
 }


//Task 4
let str = 'Hello world';
        function showMessage(str) {
        console.log('Hello world'.replace(/l|d/g,''));
        }
        showMessage(str);






Написать функцию вывода одномерного массива через разделитель в документ. (без разделителя)
//Lection1
function Mass(Arr) {   
    var n = 8;
var Arr = new Array (n);
var mass = 0;

for (var i = 0; i < Arr.length; i++) {
    Arr[i] = Math.floor(Math.random()*10);
}
     }
document.write(Mass);
