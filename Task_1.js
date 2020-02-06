Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
проверить все числа на простоту, и найденные простые числа сохранить в массив B.
найти максимальное число и минимальное число.
Элементы массива между min -- max записать в массив B. Массив взять из 1го задания

В массиве A поменять местами min и max. Массив взять из 2го задания

Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).
Определить количество элементов в заданном массиве, отличающихся от минимального на 5.





//First task
var A = [21,5,87,13,6,47,2];
var B = [];
var Mass = true;
for(var i = 0; i < A.length; i++) {
	for (var j = 2; j < A[i]; j++) {
	if (A[i] % j == 0){
	Mass = false;
	break;
	}
	
}
if (Mass == true) {
	B.push(A[i]);
} else.Mass = true;
}
console.log (B);


console.log(Math.max(A[i]);
  console.log(Math.min(A[i]);

  //Second task
  var min = A[0],
    max = A[0];
  var pos_min = 0,
    pos_max = 0;


for (i = 1; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
        pos_min = i;
    }
    if (A[i] > max) {
        max = A[i];
        pos_max = i;
    }
}

var B = [];

if (pos_min < pos_max) {
    for (i = pos_min; i <= pos_max; i++) {
        B[B.length] = A[i];
    }
} else {
    for (i = pos_max; i <= pos_min; i++) {
        B[B.length] = A[i];
    }
}

console.log(B);

//Third task
var swap = A[pos_min];
A[pos_min] = A[pos_max];
A[pos_max] = swap;

console.log(swap);

//Fourth task
for (i = 0, j = A.length - 1; i <= j; i++, j--) {
    var rev = A[j]
    A[j] = A[i];
    A[i] = rev;
}

console.log(A);

//Fifth task
var min = A[0];

for (i = 0; i < A.length; i++) {
    if (min > A[i]) {
        min = A[i];
    }
}

var count = 0;
for (i = 0; i < A.length; i++) {
    if (A[i] > min && A[i] <= min + 5) {
        count++;
    }
}

console.log(count);
