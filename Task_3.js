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
var n = 6;
var m = 6;
var Arr =  [[n], [m]];
var mass = 0;
for (var n = 0; n < Arr.length; n++) {
    Arr[n] = Math.floor(Math.random()*10);
}
for (var m = 0; m < Arr.length; m++) {
	Arr[m] = Math.floor(Math.random()*10);

}
console.log(Arr)
		
	function arraySum() {
var sum = 0;
for(var i = 0; i < Arr.length; i++){
    sum += Arr[i];
    }
console.log(sum);
}

arraySum(Arr);
