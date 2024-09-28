// module 6.6.1
//для слова Довод
let stringOfNumbers = 'Довод';
stringOfNumbers = stringOfNumbers.toLowerCase();
const numbers = Array.from(stringOfNumbers);
let lastIndex = stringOfNumbers.length-1;
let result=0;
for (let i = 0; i < stringOfNumbers.length / 2; i++) {
    if (numbers[i] !== numbers[lastIndex - i]) {
    result = 1;
    break;
    }
}
if (result == 0){
    console.log("Слово Довод полиндром!");
}
else {
    console.log("Слово Довод не полиндром!");
}

// для слова Сантимент 
let stringOfNumbers2 = 'Сантимент';
stringOfNumbers2 = stringOfNumbers2.toLowerCase();
const numbers2 = Array.from(stringOfNumbers2);
let lastIndex2 = stringOfNumbers2.length-1;
let result2=0;
for (let i = 0; i < stringOfNumbers2.length / 2; i++) {
    if (numbers2[i] !== numbers2[lastIndex - i]) {
    result2 = 1;
    break;
    }
}
if (result2 == 0){
    console.log("Слово Сантимент полиндром!");
}
else {
    console.log("Слово Сантимент не полиндром!");
}



//module 6.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
const uniqueSet = new Set (arr);
const uniqueArr = Array.from(uniqueSet)

 console.log(uniqueArr);


//module 6.6.3
const numberX = +prompt("Введите любое число");
const arr2=[];
for(let i=0; i <= numberX; i++){
    arr2.push(i);
}
    console.log (arr2);

//module 6.6.4

const TicTac = [
    "X", "O", "X",
    "O", "X", "O",
    "X", "0", "X",
]; // массив 
const quarterArray = []; 
let index = 0; 
for (let i = 0; i < 3; i += 1) { 
    quarterArray[i] = []; 
    for (let j = 0; j < 3; j += 1) { 
        quarterArray[i][j] = TicTac[index]; 
        index += 1; 
    }
}
console.log(quarterArray); 

let str = ""; 
for (let i = 0; i < quarterArray.length; i += 1) { 
    for (let j = 0; j < quarterArray[i].length; j += 1) { 
        str += `${quarterArray[i][j]} `; 
    }
    str += "\n"; 
}

console.log(str);

//module 6.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues =[];

    for (let key in obj) {
        // Проверяем, является ли значение массивом
        if (Array.isArray(obj[key])) {
          // Если значение - массив, добавляем каждый элемент в arrValues
          arrValues = arrValues.concat(obj[key]);
        } else {
          // Если значение не массив, добавляем его в arrValues
          arrValues.push(obj[key]);
        }
      }
      
      // Выводим получившийся массив в консоль
      console.log(arrValues);