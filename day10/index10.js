// console.log(typeof 9);
// console.log(typeof typeof 9); // this will print string because the typeof 9 is number and it's type is stirng.

// -----------------daY 10 of learning of javascript--------------

/*
for(let i = 1 ; i <= 100 ; i++)
{
    console.log("my name is Rajiv Chaudhary ." + (i));
}
*/

//  -------------- -------------- -------------- -------------- --------------
/*
let num = Number(prompt("Enter the number : "));
for(let i = 1 ; i <= 10 ; i++)
{
    console.log((num) + " * " + (i) + " = "+(num*i));
}
*/

//  -------------- -------------- -------------- -------------- --------------
/*
for(let i = 1 ; i <= 100 ; i++)
{
   if(i % 2 == 0)
   {
    console.log((i) + " is even number .");
   }else{
    console.log((i) + " is odd number .");
   }
}
*/

//  -------------- -------------- -------------- -------------- --------------
// write a program to print sum of first n whole numbers using for loop
// n taken form input

/*
let n = Number(prompt("Enter the value of nth term : "));
let sum = 0 ;
for(let i = 0 ; i <= n ; i++)
{
sum = sum + i ;
}
console.log(sum);
*/
//  -------------- -------------- -------------- -------------- --------------
/*
let n = Number(prompt("Enter the value of nth term : "));
let product = 1 ;
for(let i = 0 ; i < n ;)
{
    i++ ;
product = product * i ;
}
console.log(product);
*/
//  -------------- -------------- -------------- -------------- --------------

/*
for(let i = 1; i <= 5; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row = row + "* ";  
    }
    console.log(row); // Print the whole row
}
*/
//  -------------- -------------- -------------- -------------- --------------
/*

for(let i = 1; i <= 5; i++) {
    let row = " ";
    for(let j = 1; j <= i; j++) {
        row = row+" "+ j;  
    }
    console.log(row); // Print the whole row
}
*/

//  -------------- -------------- -------------- -------------- --------------
// to print the number except the multiple of 5
/*
for(let i = 1 ; i <= 15 ; i++)
{
   if(i % 5 == 0)
   {
    continue;
   }else{
    console.log(i);
   }
}

*/

//assignment of day 10 

/*
Assignment 1 : Factorial Finder
problem :

Ask the user to enter a positive integer using prompt().Use a for loop
to claculate the factorial of the number and display the result using 
alert(). 
*/
/*

let num = parseInt(prompt("Enter any number : "));
let fact = 1;
    if(num > 0)
    { 
        for(let i = 1; i <= num ; i++)
           {
         fact = fact * i  ;
           }
           console.log(fact);
    }else{
        alert("Invalid Input. ")
    }
*/

// Assignment 2 : SUm of Odd numbers
//problem:

/*
Ask the user to enter how many odd numbers to sum using prompt(). 
Then calculate and display the sum of the first n odd numbers using a loop.
*/

/*
let num = Number(prompt("Enter any number : "));
let sum = 0 , count = 0;
for(let i = 1 ; ; i = i + 2)  // here i have done increment by 2 that is only odd no. 
     //        number will come so no need to check down using condition.
{
        sum = sum + i ;
        count++ ;

    if(count === num)   //  when the count that is unit becomes equal 
//                    to the num given by the user then it stops .
    {
        break;
    }
}
alert("the sum of "+(num)+" terms of odd number is : "+(sum) );

*/



// Assignment 3 : SUm of even numbers
//problem:

/*
Ask the user to enter how many even numbers to sum using prompt(). 
Then calculate and display the sum of the first n even numbers using a loop.
*/

/*

let num = Number(prompt("Enter any number : "));
let sum = 0 , count = 0;
for(let i = 2 ; ; i = i + 2)  // here i have done increment by 2 that is only odd no. 
     //        number will come so no need to check down using condition.
{
        sum = sum + i ;
        count++ ;

    if(count === num)   //  when the count that is unit becomes equal 
//                    to the num given by the user then it stops .
    {
        break;
    }
}
alert("the sum of "+(num)+" terms of even number is : "+(sum) );

*/

// Assignment 4 : Perfect Square Sum
// Problem :
  /*
  Ask the user to enter a number n using prmpt().Then calculate the sum of the first n 
  perfect squares (1^2 + 2^2 + 3^2 + ......+ n^2), and display it using alert().
  */

/*

let num = Number(prompt("Enter any number : "));
let sum = 0;
for(let i = 1 ; i <= num; i++)
{
    sum = sum + (i*i) ;
}
alert("the sum of "+(num)+" terms of even number is : "+(sum) );

*/

