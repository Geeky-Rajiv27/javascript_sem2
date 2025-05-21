//  -------------- -------------- -------------- -------------- --------------
// print :   
/*
             *  *
             *  *
             *  *
*/

/*
let rows = Number(prompt("ENter the no of rows : "));
let column = Number(prompt("ENter the no of rows : "));
for(let i = 1 ; i<= rows ;i++)
{
    let box = " ";
    for(let j = 1 ; j <= column ; j++)
    {
     box = box + "* " ;
    }
    console.log(box);
    console.log("\n"); // this is supported in js
}
*/

//  -------------- -------------- -------------- -------------- --------------
//write a js program to count the occurence of the 3 from 1 to 500. 

/*
let count = 0;
for(let i = 1 ; i <= 500 ; i++)
{
   let temp = i ;
   
    while(temp > 0){
    rem = temp % 10 ;
    if(rem == 3)
    {
        count++ ;
    }
 temp = parseInt(temp / 10) ;
    }
}
console.log(count);
*/

//  -------------- -------------- -------------- -------------- --------------
// write to generate all possible three digits .
//example : 111 , 112 ,113 ,. . . . 

/*

for(let i = 1; i <= 3; i++)    // 3 = the limit of combination
{
    for(let j = 1; j <= 3 ; j++)
      {
           for(let k = 1; k <= 3 ; k++)
           { 
               console.log((i * 100) + (j * 10) + k);
           }
      }
}

*/
//  -------------- -------------- -------------- -------------- --------------
/*
// write to generate all possible three digits  using combination of number (1234) but
// combination containing repeating number must be skipped.


for(let i = 1; i <= 4; i++)    // 4 = the limit of combination
{
    for(let j = 1; j <= 4 ; j++)
      {
           for(let k = 1; k <= 4 ; k++)
           { 
           if(i == j || i == k || j == k)
           {
           continue;
           }else{
            console.log((i * 100) + (j * 10) + k) ;
           }
           }
      }

 }


*/

//  -------------- -------------- -------------- -------------- --------------

/*
Print all the numbers form 1 to 500 that gives the product of their digits 6.
example : 123 , 321 , 312 , 132 , .....
*/


/*
for(let i = 1; i <= 500; i++)    // 3 = the limit of combination
{
  let temp = i ;
  let pro = 1 ;
  while(temp > 0)
  {
  rem = temp % 10 ;
  pro = pro * rem ;
  temp = parseInt(temp / 10) ;
  }
  if(pro == 6)
  {
  console.log(i);
  }
}
*/

