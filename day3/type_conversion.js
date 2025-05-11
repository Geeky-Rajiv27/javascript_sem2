// program test in console of browser
/*
let a = 1 ;
function var1 ()
{
    if(a === 1){
        console.log("this is true");
    }else{
        console.log("this is false");
    }
}
var1();
*/


// exception implicit conversion
/*
var var1 = 1 ;
let var2 = "1" ;
let add = var1 + var2 ;
console.log(add);     // this prints 11


// explicit conversion

 let c = "10" ;
 let d = 20 ;
 let sum2 = Number(c)+d;  // this will convert 10 which is given as string to a number
 // but if any string is given then it can't convert in number obiously and shows Nan(not a number) in a console
 console.log(sum2);

*/


/*
// this will create button named "newbutton"

let newbutton = document.createElement("button");
 newbutton.innerText="click me";

 */

/*

 const num1 = prompt("Enter first number :");
 const num2 = prompt("enter the second number :");

 console.log(typeof num1);   // this checks what is the type of num1 and num2. It will show
 // string since prompt always take string.
 console.log(typeof num2);  

const sum3 = Number(num1) + Number(num2); // number is used to convert string to number.
// Also another method to convert    sum2 = parseInt(num1) + parseInt(num2) 
console.log(sum3);

*/


/* NOTE: important Rules 

NOte: if we give 1 and 1 it's through prompt then it's type will be string but while
 subtracting without expicit conversion it will subtract this is exception while it 
 concatenate will adding


const num$1 = prompt("Enter first number :");
 const num$2 = prompt("enter the second number :");

 console.log(typeof num$1);   // this checks what is the type of num1 and num2. It will show
 // string since prompt always take string.
 console.log(typeof num$2);  

const sumfinal = Number(num$1) + Number(num$2); 
const sumfinaldas = (num$1) - (num$2); // number is used to convert string to number.
// Also another method to convert    sum2 = parseInt(num1) + parseInt(num2) 
console.log(sumfinal);
console.log(sumfinaldas);

*/

 
 // string  + number =  concatenation
/*

const number1 = prompt("Enter first number :");
const number2 = prompt("enter the second number :");
const summation = number1 + Number(number2) ;
console.log(summation) ;

*/

// string - string = automatically converts string into number and then subtracts.
// string - number = subtracts since it automatically converts string into number.
// NOTE : arthimatic opeation in JAVASCRIPT is done from left to right 

// to covert string into number
/*

let a = "5" ;
let b ;
 b = Number(a) ;
console.log(b);

*/

