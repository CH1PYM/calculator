const one = document.getElementById('1');
const buttons = document.getElementById('buttons');
const text = document.getElementById('inputDis');
const firstLine = document.getElementById('firstLine');
const  secondLine = document.getElementById('secondLine');
const clear = document.getElementById('clear')
let numbersArr = [];
let numberArrSec = [];
let result = 0;
let lastClick;
let operator;
const operators = ["+","-","*","/"];

function prevadeni (kodCisla){
    if(kodCisla == 96)
    return 0;
    else if(kodCisla == 97)
    return 1;
    else if(kodCisla == 98)
    return 2;
    else if(kodCisla == 99)
    return 3;
    else if(kodCisla == 100)
    return 4;
    else if(kodCisla == 101)
    return 5;
    else if(kodCisla == 102)
    return 6;
    else if(kodCisla == 103)
    return 7;
    else if(kodCisla == 104)
    return 8;
    else if(kodCisla == 105)
    return 9;
    else if(kodCisla == 107)
    return "+";
    else if(kodCisla == 109)
    return "-";
    else if(kodCisla == 106)
    return "*";
    else if(kodCisla == 111)
    return "/";
    else if(kodCisla == 187)
    return "=";

    
}
function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1/num2;
}
function operate(operator, num1, num2){
    if(operator == "+"){
        return add(num1,num2);
    }
    else if(operator == "-"){
        return substract(num1,num2);
    }
    else if(operator == "*"){
        return multiply(num1,num2);
    }
    else if(operator == "/"){
        return divide(num1,num2);
    }
}


function plus(plus,number,keyCode,key){
    if ( /*operators.indexOf(e.key)*/ keyCode == number & operator !== plus) {
        operator = key;
        if(result !==0){
            firstLine.textContent = operator+result;
        }
        else{
            firstLine.textContent = operator+numbersArr.join("");
        }
        numberArrSec = numbersArr;
        numbersArr = [];
     }

    else if(keyCode == number & operator == plus & lastClick !== number){
        if (result !== 0 ){
            result = operate(operator,result,parseInt(numbersArr.join(""),10));
            firstLine.textContent = operator+result
            numbersArr = [];
        }
        else {
            result = operate(operator,parseInt(numberArrSec.join(""),10),parseInt(numbersArr.join(""),10));
            firstLine.textContent= operator+result
            numbersArr = [];
        }
        lastClick = keyCode;
     }
}

window.addEventListener('keydown', function(e) {
    // const number = document.querySelector(`[data-key="${e.key}"]`);
     //brani pouze klaves co potrebuju
     if(e.keyCode <112 & e.keyCode > 95 || e.keyCode == 8 || e.keyCode == 187){
     if (e.key == "Backspace"){
        numbersArr.pop();
        secondLine.textContent = numbersArr;
     }
     else if (e.keyCode <105 & e.keyCode > 95 ) {
        numbersArr.push(parseInt(e.key, 10));
        lastClick = e.keyCode;
        secondLine.textContent = numbersArr.join("");
     }
     else if (e.keyCode == 107){
        plus("+",107,e.keyCode,e.key);
     }
     else if (e.keyCode == 109){
        plus("-",109,e.keyCode,e.key);
        console.log("minus");
     }
     else if (e.keyCode == 106){
        plus("*",106,e.keyCode,e.key);
     }
     else if (e.keyCode == 111){
        plus("/",111,e.keyCode,e.key);
     }

     else if (e.keyCode == 187 & lastClick !== 187){
        if (result !== 0 ){
            result = operate(operator,result,parseInt(numbersArr.join(""),10));
            secondLine.textContent = result;
            numbersArr = [];
            operator=0;
        }  
        else{
            result = operate(operator,parseInt(numberArrSec.join(""),10),parseInt(numbersArr.join(""),10));
            secondLine.textContent = result;
            operator=0;
        }
        lastClick = e.keyCode;
     }



 }
 });

 buttons.addEventListener('click', function(e) {
    //console.log(e.target.hovno);
    // const number = document.querySelector(`[data-key="${e.key}"]`);
     //brani pouze klaves co potrebuju
     if(e.target.id <112 & e.target.id > 95 || e.target.id == 8 || e.target.id == 187){
     if (e.key == "Backspace"){
        numbersArr.pop();
        secondLine.textContent = numbersArr;
     }
     else if (e.target.id <105 & e.target.id > 95 ) {
        numbersArr.push(parseInt(prevadeni(e.target.id), 10));
        lastClick = e.target.id;
        secondLine.textContent = numbersArr.join("");
     }
     else if (e.target.id == 107){
        plus("+",107,e.target.id,prevadeni(e.target.id));
     }
     else if (e.target.id == 109){
        plus("-",109,e.target.id,prevadeni(e.target.id));
        console.log("minus");
     }
     else if (e.target.id == 106){
        plus("*",106,e.target.id,prevadeni(e.target.id));
     }
     else if (e.target.id == 111){
        plus("/",111,e.keyCode,prevadeni(e.target.id));
     }

     else if (e.target.id == 187 & lastClick !== 187){
        if (result !== 0 ){
            result = operate(operator,result,parseInt(numbersArr.join(""),10));
            secondLine.textContent = result;
            numbersArr = [];
            operator=0;
        }  
        else{
            result = operate(operator,parseInt(numberArrSec.join(""),10),parseInt(numbersArr.join(""),10));
            secondLine.textContent = result;
            operator=0;
        }
        lastClick = e.target.id;
     }



 }
 });

 clear.onclick = function(){
    numbersArr = [];
    numberArrSec = [];
    result = 0;
    lastClick = 0;
    operator = 0;
    firstLine.textContent = "";
    secondLine.textContent = "";

 }
 
