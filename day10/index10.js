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


for(let i = 1 ; i <= 15 ; i++)
{
   if(i % 5 == 0)
   {
    continue;
   }else{
    console.log(i);
   }
}