//module 5.10.1
let number = prompt (`Введите любое число!`);
alert( `Введенное число - ${number} `);
alert( `Квадрат числа - ${Math.pow(number,2)} `);
alert( `Куб числа - ${Math.pow(number,3)} `);

//module 5.10.2
let promotionalCode= prompt (`Введите промокод`);
if (promotionalCode.toLowerCase() == "скидка")
    {
    alert("Промокод применен");
}
else{
    alert("Промокод не работает!");
}

//module 5.10.3

const nameXX= prompt (`Введите имя`);
let ageX= prompt (`Введите год рождения`);
let todayX = new Date();
let yearX = todayX.getFullYear();
alert(`${nameXX}: ${yearX-ageX} `);

//module 5.10.4

const nameX= prompt (`Введите имя`);
let ageM= prompt (`Введите год рождения`);
let today = new Date();
let year = today.getFullYear();
let fullAge = year - ageM;
if (fullAge%10==1)
{
    alert(`${nameX}: ${fullAge} год`);
}
else if(fullAge%10==2 || fullAge%10==3 || fullAge%10==4)
{
    alert(`${nameX}: ${fullAge} года`);
}
else 
{
    alert(`${nameX}: ${fullAge} лет`);
}


//module 5.10.5
 let age= prompt (`Полное количество лет`);
 let sumCredit= prompt (`Введите желаемую сумму кредита`);
 let sumCreditx
 if (age<18){
    alert("Вам нет 18 лет");
 }
 else if (age>18 && age <=21 && sumCredit<=50000) {
    sumCreditx = Math.floor(sumCredit/1000);
    alert(`Мы можем вам выдать максимум - ${(sumCreditx*1000)}`);
 }
 else if(age>=22 && age<=35 && sumCredit<=400000)
 {
    sumCreditx = Math.floor(sumCredit/1000);
    alert(`Мы можем вам выдать максимум - ${(sumCreditx*1000)}`);
 }
 else if(age>=36 && age<=65 && sumCredit<=1000000){
    sumCreditx = Math.floor(sumCredit/1000);
    alert(`Мы можем вам выдать максимум - ${(sumCreditx*1000)}`);
 }
 else {
    alert(`К сожалению вам отказано!`);
 }