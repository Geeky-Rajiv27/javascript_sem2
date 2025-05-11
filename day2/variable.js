/*
// there are 3 methods to initialize variable :

1) let a ;  --> this allow us to modify.This works within the block only.
2) var a ;  --> this can be used anywhere like global variable and also allow us to modify.
3) const a ; --> it's value cannot be changed.This works within the block only.

*/

// data types in javascript :
/* 
1)string :
--> let string = "hello " ;
2)number 
--> let number = 13132 ;
3)Boolean
--> let Boolean1 = true ;
--> let Boolean2 = false ;
4)Null
--> let a = null ;
5)Undefined
--> let d = undefined ;
6)object
--> variable_methods object name  = 
{
key1 : value1 ,
key2 : value2 ,
};

console.log(key1);      // this is wrong way and throws error
console.log(typeof object_name);   // typeof will give you the datatype of object 
console.log(object_name.key1) ;    // this will print the value of key1 and so on
console.log(object_name["key1"]) ;     // this will print the value of key1 and so on

7)Array
*/



// function var1()  // example of var method
// {
//     if(1)
//     {
//         var a = 5 ;
//     }
//     console.log(a , "var");
// }
// var1() ;   // calling 


// function var2()  // example of let method
// {
//     if(1)
//     {
//         let a = 5 ;
//     }
//     let a = 20 ;   // this will be printed 
//     console.log(a , "let"); // this won't work since "let" works within that particular block only.
// }
// var2() ;   // calling 



// function var3()  // example of const method
// {
//     if(1)
//     {
//         let a = 5 ;
//         console.log(a , "const"); // this won't work since "let" works within that particular block only.
//     }
//     // if try to print in this line then it will show error due to it's scope
// }
// var3() ;   // calling 

// const naam = "technologia" ;
// console.log(naam);

// let number = 1;
let number = prompt("enter the number : ");
number = Number(number); // convert string to number
var fact = 1 ; 
if(number === 1 || number === 0) {
    console.log("The factorial of 1 or 0 is: 1");
}

else {
  for(var i = number ; i >= 1  ; i--)
 

  {
     fact = fact * i ;
     
  }
  console.log(fact);
}
