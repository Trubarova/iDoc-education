1.В одномерном массиве произвести такую замену: 1 элемент поменять с 2 3 элемент поменять с 4 5 элемент поменять с 6 и тд Если массив непарный - последний элемент не трогать.

было 1 2 3 4 5 6, должно стать: 2 1 4 3 6 5
2.В двумерном массиве A размером n на m. Заполнить случайными числами.
/Найти ряд, где сумма элементов наименьшая
/Найти ряд, где сумма элементов найбольшая
/Поменять ряды местами (1 и 2 пункт)

//Task 1
	var n = 25;
var Arr = new Array (n);
var mass = 0;
for (var i = 0; i < Arr.length; i++) {
    Arr[i] = Math.floor(Math.random()*10);
}
console.log(Arr);

for (var i = 0; i < Arr.length; i++) {
    if (i == 0 || i % 2 == 0) {
        mass = Arr[i];
    } else {
        Arr[i - 1] = Arr[i];
        Arr[i] = mass;
        mass = 0;
    }
}
console.log(Arr);


//Second task
var n = 5;
var m = 5;
A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*10);
    }
}
console.log(A);

var minSum = 0;
var minSumMass = 0;
var minSumPos = 0;
for (i = 0; i < 1; i++) {
    for (j = 0; j < A[i].length; j++) {
        minSum += A[i][j];
    }
}
for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        minSumMass += A[i][j];
    }
    if( minSumMass < minSum ) {
        minSum = minSumMass;
        minSumPos = i;
    }

    minSumMass = 0;
}
console.log('Минимальная сумма ряда ' + minSumPos + ' равняется :' + minSum);

//Third task
var n = 5;
var m = 5;
A = new Array(n);

for(i = 0; i < A.length; i++){
    A[i] = new Array(m);
}

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*10);
    }
}
console.log(A);
var maxSum = 0;
var maxSumMass = 0;
var maxSumPos = 0;

for (i = 0; i < 1; i++) {
    for (j = 0; j < A[i].length; j++) {
        maxSum += A[i][j];
    }
}

for (i = 0; i < 1; i++) {
    for (j = 0; j < A[i].length; j++) {
        maxSum += A[i][j];
    }
}

for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        maxSumMass += A[i][j];
    }
    if( maxSumMass < maxSum ) {
        maxSum = maxSumMass;
        maxSumPos = i;
    }

    maxSumMass = 0;
}
console.log('Максимальная сумма ряда ' + maxSumPos + ' равняется :' + maxSum);

//Fourth task
     var n = 5;
        var m = 4;
var a =  [];
        
        function randomArray() {
                for(var i = 0, c = 1; i < m; i++){
                        a[i] = [];
                        for(var j = 0; j < n; j++){
                            a[i][j] = Math.floor(Math.random()*10);
                                a[i][j] = c++;
                        }
                }
        }
        randomArray();
        console.log("Начальный массив: " + a);
        
        function invertElements() {
                var mass = 0;
                for(var i = 0; i < m; i++){
                        for(var j = 0; j < n; j+=2){
                                mass = a[i][j];
                   }
                }
        }
        invertElements()
        console.log("Инвертированный массив: " + a);
