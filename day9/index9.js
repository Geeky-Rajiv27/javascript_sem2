/*
fing the digit (0 - 9) that occurs least of the time in the number 
using do while loop */


let num = Number(prompt("Enter the digits :"));
let min_count = 0;
let min_digit = 0;
let first = 1;
let d = 0 ;
while(d <= 9)
{
    let count = 0 ;
    let temp = num ;
 
    while(temp > 0)
    {
  
        let digit = temp % 10 ;
        if(digit == d)
        {
            count ++ ;
        }
        temp = parseInt(temp / 10) ;
    }
    if(count > 0)
    {
    if(first || count < min_count )
    {
        min_count = count ; 
        min_digit = d ;
        first = 0;
    }
}
    d++ ;
}
console.log("the least occuring digit is : "+(min_digit)+" and the count is " +(min_count) );




