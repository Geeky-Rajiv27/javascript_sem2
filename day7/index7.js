/*

let i = 1 ;
while(i < 101)
{
    if(i % 2 == 0)
    {
    console.log("the even number is "+(i));
    }
    i++ ;
}

let j = 1;
while(j < 101)
{
    if(j % 2 != 0)
    {
    console.log("the odd number is "+(j));
    }
    j++ ;
}
*/

// to print name 100 times 
/*

let j = 1;
while(j < 101)
{
    console.log("my name is Rajiv");
    j++ ;
}

*/


// write a program using javascript to print the multiplication table of the number given by user.
/*

let number = Number(prompt("enter the number :"));
let i = 1 ;
while(i < 11)
{
    console.log((number) + " * " + (i) + " = " + (number * i));
    i++ ;
}

*/

/*
let i = 1 ;
while(i < 101)
{
 if(i % 3 == 0)
 {
    console.log("Fizz");
 }else if(i % 5 == 0)
 {
    console.log("Buzz");
 }else if(i % 3 == 0 && i % 5 ==0)
 {
    console.log("FizzBuzz");
 }
    i++;
}
*/


let num = Number(prompt("Enter the number :"))
let rev = 0 ;
let rem ;
while(num != 0)
{
rem = num % 10 ;
rev = rem + (rev*10);
num = parseInt(num / 10) ;        // parseInt or Math.floor

}
console.log(rev);