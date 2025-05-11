// to check the day for specific number

/*

let num = Number(prompt("enter the numbere for your days : "));
switch(num)
{
    case 1: alert("for number 1 your day is SUNDAY");
            break ;

    case 2: alert("for number 2 your day is MONDAY");
            break ;

    case 3: alert("for number 3 your day is TUESDAY");
            break ;

    case 4: alert("for number 4 your day is WEDNESDAY");
            break ;

    case 5: alert("for number 5 your day is THURSDAY");
            break ;

    case 6: alert("for number 6 your day is FRIDAY");
            break ;

    case 7: alert("for number 7 your day is SATURDAY");
            break ;

default : alert("please enter number between 0 and 8 ");

        }


        */

// to check the grade condition based on the obtained marks

/*
 let grade = prompt("Enter your Grade :");
let marks = Number(prompt("Enter your marks :"));
 switch (grade)
 {

    case 'A' :
      if(marks >= 90 && marks <= 100)
     {
        alert("It is a Excellent grade");
        break ;
     }
           
 
    case 'B': if(marks >= 80)
     {
        alert("It is a good grade");
        break ;
     }
           

    case 'C': if(marks >= 70)
     {
        alert("It is a average grade");
        break ;
     }
            

    case 'D': if(marks >= 60)
     {
        alert("Grade 'D' thikai xa");
        break ;
     }
            

    case 'E': if(marks >= 50)
     {
        alert("Grade 'E' tw khattamai ho ni!");
        break ;
     }
            

 
 
 default : alert("You are fail and your grade is too poor");
 
         }

*/


//Make a calculator using Switch case

let num1 = Number(prompt("Enter the first number :"));
let num2 = Number(prompt("Enter the second the number"));
let operation = prompt("what do you want to perform");
switch(operation)
{
    case '+' : let sum = (num1 + num2);
    alert("the sum of num1 and num2 is " + (sum));
    break;

    case '-' : let difference = (num1 - num2);           
    alert("the sum of num1 and num2 is " + (difference));
    break;

    case '*' : let multiply = (num1 * num2);           
    alert("the sum of num1 and num2 is " + (multiply));
    break;
             
    case '/' : let divide = (num1 / num2);             
    alert("the sum of num1 and num2 is " + (divide));
    break;

    case '%' : let MOD = (num1 % num2);       
    alert("the sum of num1 and num2 is " + (MOD));
    break;

    default : alert("invalid input")
}