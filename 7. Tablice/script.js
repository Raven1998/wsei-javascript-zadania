//Zadanie 1

const Array = [2, 4, 6, "Polska", "Warszawa", 'Pakistan'];
console.log('my array is', Array)



//Zadanie 2

let Array = [2, 4, 6, "Krakow", "Warszawa", 'Poznan']

// 1. Pierszy i drugi element
console.log("my first and second elements are:", 
            Array[0] + ' and ' + Array[1])
// 2. Ostatni element
console.log("my last element is: ", Array[Array.length-1])
// 3. Wszystkie elementy
console.log("All elements in the array: ", Array)
// 4. Co drugi element
newArr = Array.filter(function(value, index, Arr) {
    return index % 2 == 0;
});
console.log("Every second elements are", Array)
// 5. Wszystkie stringi
let Array = [2, 4, 6, "Krakow", "Warszawa", "Poznan"];
emptyArr = []
var i;
for (i = 0; i < Array.length; i++) {
    if (typeof Array[i] === "string") {
        emptyArr.push(Array[i])
    }
}
console.log(emptyArr)
// 6. Wszystkie numbery
Array = [2, 4, 6, "Krakow", "Warszawa", "Poznan"];
emptyArr = []
var i;
for (i = 0; i < Array.length; i++) {
    if (typeof Array[i] === "number") {
        emptyArr.push(Array[i])
    }
}
console.log(emptyArr)


//Zadanie 3

let myArr = [1, 2, 7, 8, 11, 16, 10, 19, 15];
// 1. sumę wszystkich elementów
const sum = myArr.reduce((a, b) => a + b, 0);
console.log(`The sum is: ${sum}.`);

// 2. różnicę wszystkich elementów
console.log("my last element is: ", myArr[myArr.length-1])

// 3. średnią wszystkich elementów
const avg = (sum / myArr.length) || 0;
console.log(`The average is: ${avg}.`);

// 4. elementy parzyste
let evenArr = [];
for (var i = 0; i < myArr.length; i++) {
    if(myArr[i] % 2 === 0) { // value is even
        evenArr.push(myArr[i]);
    }
}
console.log(`The even numbers are: ${evenArr}.`);

// 5. elementy nieparzyste
let oddArr = []
for (var i = 0; i < myArr.length; i++) { 
    if(myArr[i] % 2 === 1) { // value is odd
        oddArr.push(myArr[i]);
    }
}
console.log(`The odd numbers are: ${oddArr}.`);

// 6. największą liczbę
var max_num = Math.max.apply(Math, myArr);
console.log(`The max number is: ${max_num}.`);

// 7. najmniejszą liczbę
var min_num = Math.min.apply(Math, myArr);
console.log(`The min number is: ${min_num}.`);

// 8. wypisz tablicę od tyłu
var reverse_myArr = myArr.reverse();
console.log(`The reverse array is: ${reverse_myArr}.`);


//Zadanie 4

let Array = [1, 2, 3 4, 5]
var sumArray = Array.reduce(function(a, b){return a+b;})
console.log(sumArray)

//ZADANIE 5

let array = [1, 2, 3, 4, 5, 6, 8, 16, 11];

function multiArr(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    const avg = (sum / array.length) || 0;
    
    newArray = array.map(x => x * avg);
    
    return newArray
}
console.log(multiArr(array));


//ZADANIE 6

let array = [1, 2, 3, 4, 5, 6, 8, 16, 11];

function evenNumAvg(array) {
    let evenArray = [];
    for (var i = 0; i < array.length; i++) {
        if (myArr[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
    }
    const sum = evenArray.reduce((a, b) => a + b, 0);
    const avg = sum / evenArray.length || 0;

    return avg;
}
console.log(evenNumAvg(array));


//Zadanie 7

let array = [12, 5, 22, 6, 11, 12, 24, 19, 9];
array.sort(function (a, b) {return a - b;});
console.log(array);


//Zadanie 8


function SumArray(...arrays) {
  const n = arrays.reduce((max, xs) => Math.max(max, xs.length), 0);
  const result = Array.from({ length: n });
  return result.map((_, i) => arrays.map(xs => xs[i] || 0).reduce((sum, x) => sum + x, 0));
}


let tab1 = [2, 4, 6, 8];
let tab2 = [7, 5, 3, 1];
console.log(arrSum(tab1, tab2));


//Zadanie 10


let array = [1, 2, 3, 4];
let array2 = [];

array.forEach(function (item, index) {
    negNum = -Math.abs(item)
    array2.push(negNum); 
});

console.log(array2)
