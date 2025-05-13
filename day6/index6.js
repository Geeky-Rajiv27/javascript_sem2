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
/*

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
*/

// truthy and falsy value 
/*
if(0)
{
    console.log("Truthy"); 
}
else if(1){
    console.log("this is 0")
}
else
{
    console.log("Falsy");
}
*/

// ------------------------------------BASIC BANKING SYSTEM USING JAVASCRIPT------------------------------------
//  ASSIGNMENT - 1 


/*

let transactionType = prompt("Transaction Type = ");
let accountType = prompt("accountType = ");
let amount = parseInt(prompt("Amount = "));

if((transactionType == "Deposit" || transactionType == "deposit"))
{
        if((accountType == "Savings" || accountType == "savings") || (accountType == "CurrentAcc" || accountType == "currentAcc"))
        {
        if(amount > 10000)
        {
                console.log("Large deposit - requires manager approval");
        }else if(amount > 0){
                console.log("Deposit successful");
        }else
            {
                console.log("invalid amount");
            }
        }
        else{
               console.log("Invalid Account Type");
        }
}else if(transactionType == "Withdraw" || transactionType == "withdraw")
   {
    
        if(accountType == "Savings" || accountType == "savings")
        {
        if(amount > 1000)
        {
                console.log("Saving withdrawal limits exceeded");
        }else
           {
                console.log("withdrawal from savings successful");
           }
        }
        else if(accountType == "CurrentAcc" || accountType == "currentAcc")
        {
             if(amount > 5000)
             {
                console.log("Overdraft alert ! Transaction Blocked");
             }else
            {
                console.log("withdrawal from current Account successful");
            }
        }
          
   }else if(transactionType == "Transfer" || transactionType == "Transfer")
   {

        if(accountType == "Savings" || accountType == "savings") 
        {
        console.log("Transfers from saving account is not allowed");
        }
        else if(accountType == "CurrentAcc" || accountType == "currentAcc")
        {
                if(amount > 2000)
                {
                        console.log("Transfer requires OTP verification");
                }else{
                        console.log("Transfer Successful");
                }
        }
   }else{
        console.log("Invalid transaction Type");
   }

*/


// ------------------------------------BASIC BANKING SYSTEM USING JAVASCRIPT------------------------------------

// task - 2 using switch + if else

/*

let transactionType = prompt("Transaction Type = ");
let accountType = prompt("accountType = ").toLowerCase();
let amount = parseInt(prompt("Amount = "));

switch((transactionType).toLowerCase())
{
       case "deposit":
       {
               if((accountType == "savings") || (accountType == "current"))
               {
               if(amount > 10000)
               {
                       console.log("Large deposit - requires manager approval");
               }else if(amount > 0){
                       console.log("Deposit successful");
               }else
                   {
                       console.log("invalid amount");
                   }
               }
               else{
                      console.log("Invalid Account Type");
               }
        }
break ;

      

       case "withdraw":

        if((accountType == "savings") || (accountType == "current"))
        {
        if(amount > 1000)
        {
                console.log("Saving withdrawal limits exceeded");
        }else
           {
                console.log("withdrawal from savings successful");
           }
        }
        else if(accountType == "CurrentAcc" || accountType == "currentAcc")
        {
             if(amount > 5000)
             {
                console.log("Overdraft alert ! Transaction Blocked");
             }else
            {
                console.log("withdrawal from current Account successful");
            }
        } else{
                console.log("Invalid Account Type");
         }
    
 break;        
     
       case "transfer":

        if((accountType == "savings") || (accountType == "current"))
        {
        console.log("Transfers from saving account is not allowed");
        }
        else if(accountType == "CurrentAcc" || accountType == "currentAcc")
        {
                if(amount > 2000)
                {
                        console.log("Transfer requires OTP verification");
                }else{
                        console.log("Transfer Successful");
                }
        }
   else{
        console.log("Invalid account Type");
   }

 break;  

   default : console.log("Invalid Transaction Type");
}

*/





