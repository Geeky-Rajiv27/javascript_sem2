//Assignment - 2 
// print the fibonacci series upto n but n must be asked from user.

/*
Ask the user how many Fibonacci numbers to generate using prompt().Use a for loop 
to generate the Fiboonacci series and display the result using alert().
*/

/*

let num = Number(prompt("Enter the number : "));

let a = 0, b = 1 , c = 0 ;
console.log(a);
for(let i = 1 ; i <= num ; i++)
{
    // console.log(a);
    console.log(b);
  c = (a + b);
  a = b ; 
  b = c ;
}
*/


//Assignment - 3
//Armstring Number Checker.

/*
Ask the user to enter a number using prompt().Use a for loop
 to check of the number is an Armstrong number and display the result using alert().
*/

let num =  parseInt(prompt("Enter the num : "));

  let temp;
  temp = num ;
  let sum = 0 ;
  let rem ;

    while(num != 0)
    {
       rem = rem % 10 ;
      sum = (sum + (rem * rem * rem)) ;
      num = parseInt(num / 10);
    }
    if(sum == temp)
    {
      console.log((num)+" number is armstrong number.");
    }else{
      console.log((num)+" number is not a armstrong number.");
    }