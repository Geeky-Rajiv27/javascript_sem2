// Task - 1 
/*
take a number from input & multiply all it's digits repeatedly
untill result become a single digit using do while loop
*/

/*
let num = parseInt(prompt("Enter the number"));
let product  ; 
while(num > 9)
{ 
    product = 1;
    while(num != 0)
    {
        rem = num % 10 ;
        product = (product * rem) ;
        num = Math.floor(num / 10) ;
    }
num = product;
}
console.log(num);

*/
//----------------###############-------------###############-------------##############-----------
//Task - 2
/*
find the first digit from right that is not 7 using do while loop
*/

/*

let num = parseInt(prompt("Enter the number"));
let rem , rev = 0 ;
 do{
rem = num % 10 ;
if(rem !== 7)
{
    console.log(rem);
    break;
}
num = Math.floor(num / 10) ;
}while(num != 0);

*/

//----------------###############-------------###############-------------##############-----------

// Task - 3
/*
fing the digit (0 - 9) that occurs most of the time in the number 
using do while loop
*/
/*

let num = Number(prompt("Enter the digits :"));
let max_count = 0;
let max_digit = 0;
let d = 0 ;
while(d <= 9)
{
    let count = 0 ;
    let temp = num ;
 
    while(temp> 0)
    {
  
        let digit = temp % 10 ;
        if(digit == d)
        {
            count ++ ;
        }
        temp = parseInt(temp / 10) ;
    }
    
    if(count > max_count)
    {
        max_count = count ; 
        max_digit = d ;
    }
    d++ ;
}
console.log("the most occuring digit is : "+(max_digit)+" and the count is " +(max_count) );

*/

//----------------###############-------------###############-------------##############-----------

// Task - 4
/*
Write a program to check string a palindrome  or not using do while loop
*/

/*
let string = prompt("enter the string you want to check : ");
let i = 0;
let j = string.length-1 ;
let checker ;
do {
    if(string[i] !== string[j])
    {
         checker = false ;
         break;
    }else{
        checker = true ;
    }
    i++ ;
    j-- ;
}while(i < j);
if(checker)       // True if 1
{
    console.log("Given string " + "[" + (string)+ "]" + " is palindrome");
}else{
    console.log("Given string " + "[" + (string) + "]" + " is not a palindrome");
}
*/


//----------------###############-------------###############-------------##############-----------

//Task - 5
// count the no of vowels and consonants in a word using do..while / while loop 
/*

let string = prompt("Enter any string : ");
let i = string.length - 1;      // if string = rajiv then i = 5-1 ;
let count_vowel = 0 ;
let count_consonant = 0;
do{
    let checker = string[i] ;
    if(checker >= 'a' && checker <= 'z')
    {
if(string[i] !== 'a' && string[i] !== 'e' && string[i] !== 'i' && string[i] !== 'o'  && string[i] !== 'u')
{
    count_consonant++ ;
}else{
    count_vowel++;
}
}
i-- ;
}while(i >= 0);
console.log("the count of the vowels is : " + (count_vowel));
console.log("the count of the consonants is : " + (count_consonant));

*/