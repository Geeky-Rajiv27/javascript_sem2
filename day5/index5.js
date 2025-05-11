// using if - else - else if  for assignment 5
/*
let age = parseInt(prompt("enter your age :"));
let qual = prompt("enter your qualification : ");
let exp = parseInt(prompt("Enter your experience : "));

if(age > 21 && age < 35)
{
    if((qual == "bachelor" || qual == "BACHELOR" || qual == "Bachelor"))
    {
        if(exp >= 2)
        {
            console.log("you are eligible");
        }else
          {
           console.log("age and qualification is good but poor experience");
          } 
    }
     else
          {
            console.log("you met age only");
          }
}
else
   {
    console.log("you are not eligible");
   }
*/
   // method -2 for assignment - 1
   
   /*

let age = parseInt(prompt("enter your age :"));
let qual = prompt("enter your qualification : ");
let exp = parseInt(prompt("Enter your experience : "));

 (age > 21 && age < 60)?
(qual == "bachelor" || qual == "BACHELOR" || qual == "Bachelor")?
(exp >= 2)?
console.log("you are eligible")
:console.log("you meet age and qualification only")
:console.log("you meet age only")
:console.log("you aren't elgible");

*/

// write a js program to check if given input is a (number or string)
// / if it is a number then check whether it is a (whole number or not
// and also (positive or not) and at last check wether it is 
//  (odd or even)

/*

let num = prompt("enter any number :");
if(isNaN(num)) //  this will be true if not a number
{
    console.log("given input is string so enter any number");
}else
   {
    console.log("given input is number");
   if(num >= 0)
     {
      console.log("given number is whole number and positive too");
      if(num % 2 == 0)
       {
        console.log("it is also a even number");
       }else
          {
            console.log("but it is odd number");
          }
     }else
          {
            console.log("given number is negative number so it is not whole number");
          if(num % 2 == 0)
             {
              console.log("it is even number though ");
             }else
                {
                  console.log("it is also a odd number"); 
                }
          }
   }

   */


   // TASK - 2
   // Take 3 numbers from the input and find the greatest and smallest number
/*
   const num1 = parseInt(prompt("enter the first number :"));
   const num2 = parseInt(prompt("enter the second number :"));
   const num3 = parseInt(prompt("enter the third number :"));
  
  if(isNaN(num1) || isNaN(num2) || isNaN(num3))
  {
  alert("stirng is not allowed please enter any 3 numbers");
  }else
  {
    if(num1 > num2 && num1 > num3)
    {
     alert("Greatest is " + (num1));
     if(num2 < num3)
        {
         alert("Smallest is " + (num2));
        }else
           {
             alert("Smallest is " + (num3));
           }
    }else if(num2 > num1 && num2 > num3)
       {
         alert("Greatest is " + (num2));
         if(num1 < num3)
             {
               alert("Smallest is " + (num1));
             }else
               {
                 alert("Smallest is " + (num3));
               }
       }else
          {
           alert("Greatest is " + (num3));
           if(num1 < num2)
             {
               alert("Smallest is " + (num1));
             }else
               {
                 alert("Smallest is " + (num2));
               }
          }
 
  }
   */

// TASK - 3 DAY 5



/*
  let marks = parseInt(prompt("enter your marks :"));
  if(marks > 100 || marks < 0)
  {
  alert("Invalid marks");
  }
   else if(marks >= 90 && marks <= 100)
  {
    alert("Grade A");
  } else if(marks >= 80 && marks <= 89)
  {
    alert("Grade B");
  } else if(marks >= 70 && marks <= 79)
  {
    alert("Grade C");
  } else if(marks >= 60 && marks <= 69)
  {
    alert("Grade D");
  } else
     {
      alert("Grade F");
     }

*/

   
   