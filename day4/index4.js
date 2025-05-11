/*
three methods are used to initialize variable;
1)camelCase   : first letter small and following word's first letter is capital
2)snake_case  : thier should be underscore in between and all small letter
3)PascalCase  : first letter is capital and following word's first letter is capital
4)kabab-case  : all letters in small
*/

/*
// OPERATION IN JAVASCRIPT.

let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");

console.log(Number(a) + Number(b));    // needs to convert separately
console.log(Number(a) - Number(b));   
console.log(Number(a) * Number(b));   
console.log(Number(a) / Number(b));   
console.log(Number(a) % Number(b));   
console.log(Number(a) ** Number(b));   
console.log(++a);   // ++ operator changes string into number
console.log(--b);

    */    


   /*

  //to find the facotrial of the given number. 

var fact = 1;
var num = prompt("enter the number :");
num = Number(num) ;
if(num == 1 || num == 0)
{
    console.log("the factorial of 1 or 0 is always 1 ");
}else
{
    for(let i = num ; i >=1 ; i--)
    {
        fact = fact * i ;
    }
    console.log(fact);
}


*/


// LOGICAL OPERATOR
/*

let x = 5 ;
let y = 10 ;

console.log(x == 5 && y == 10);  
console.log(x == 2 || y == 1);
console.log(!(x == 5 && y == 10));   // this will show true if it is false

// comparison operator 
let q = prompt("enter the value of q :");
q = Number(q);
console.log(q === 5);  // === this converts string into number and then compares by checking datatypes 
// at last and to be true this bot h condition must be true
let a = (x+y == 20)?x:y;
console.log(a); 

console.log(x !== y );   // we know == changes string into number and then compares 
//without ckecking the data types if there is only == but if any extra opeartor 
// like > , < , ! etc comes in front of (==) then it is check datatypes
console.log(x != y );  


*/
/*
let age = prompt("enter the age");
let nationality = prompt("enter your nationality");
(Number(age) >= 18 && (nationality == "nepali" || nationality == "Nepali") )?console.log("you are eligible to vote"):console.log("you are not eligible to vote");

*/

// assignment - 1 
/*


let age = parseInt(prompt("enter your age :"));
let qual = prompt("enter your qualification : ");
let exp = parseInt(prompt("Enter your experience : "));
var result = ((age > 21 && age < 35) && 
(qual == "bachelor" || qual == "BACHELOR" || qual == "Bachelor") &&
 (exp >= 2))
?"you are eligible for the job" 
:((age > 21 && age < 35) &&
 (qual == "bachelor" || qual == "BACHELOR" || qual == "Bachelor"))?
"you meet age and qualification but not experience" 
:(age > 21 && age < 35)?"you meet the age only." 
: "you are not eligible";
alert(result);


*/



//assigment - 2

/*

let age = parseInt(prompt("enter your age :"));
let credit_score = parseInt(prompt("enter your Credit score : "));
let monthly_income = parseInt(prompt("Enter your monthly income : "));
var result = ((age > 25 && age < 60) && 
(credit_score >= 650) &&
 (monthly_income >= 30000))
?"Loan approved" 
:(((age > 25 && age < 60) &&(monthly_income >= 30000)) || (credit_score <= 650))?
"Good income and age but poor credit score" 
:(age > 25 && age < 60)?"you meet the age only." 
: "you are not eligible for loan";
alert(result);


*/
