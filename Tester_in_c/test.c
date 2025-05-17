/*
#include<stdio.h>
int main()
{
    int num , rem , max_count = 0 , max_digit = 0;
    printf("Enter the digits :");
    scanf("%d", &num);
    int d  = 0 ;
    while(d <= 9)  // d = 0 ,1 ,2 ,3 ,4, 5, 6, 7, 8, 9     total 10 times !
    {
        int temp = num ;
       int count = 0 ;
        while(temp > 0)  //this runs for the number of digit given for every d.
        {
       rem = temp % 10 ;
       if(rem == d)
       {
        count++ ;
       }
       temp = temp / 10;
        }
        if(count > max_count)
        {
            max_count = count ;
            max_digit = d;
        }
        d++ ;
    }
    printf("The most occuring number is : %d\t and it occured for %d times.\n",max_digit,max_count);
}
*/


// this works for least counting only if the least counted number is 1 times
/*
#include<stdio.h>
int main()
{
    int num , rem , min_digit = 0;
    printf("Enter the digits :");
    scanf("%d", &num);
    int d  = 0 ;
    while(d <= 9)  // d = 0 ,1 ,2 ,3 ,4, 5, 6, 7, 8, 9     total 10 times !
    {
        int temp = num ;     // 38783881
       int count = 0 ;
        while(temp > 0)  //this runs for the number of digit given for every d.
        {
       rem = temp % 10 ;
       if(rem == d)
       {
        count-- ;
       }
       temp = temp / 10;
        }
        if(count == -1)
        {
            min_digit = d;
             printf("The least occuring number is : %d\n",min_digit);
        }else{
            min_digit = 0 ;
        }
        d++ ;
    }
    // printf("The most occuring number is : %d\t and it occured for %d times.\n",min_digit,min_count);
}
*/



#include<stdio.h>
int main()
{
    int num , rem , min_count = 0 , min_digit = 0 , first = 1;
    printf("Enter the digits :");
    scanf("%d", &num);
    int d  = 0 ;
    while(d <= 9)  // d = 0 ,1 ,2 ,3 ,4, 5, 6, 7, 8, 9     total 10 times !
    {
        int temp = num ;
       int count = 0 ;
        while(temp > 0)  //this runs for the number of digit given for every d.
        {
       rem = temp % 10 ;
       if(rem == d)
       {
        count++ ;
       }
       temp = temp / 10;
        }
        int  gap_II = count -1 ;
        if(count > 0)
        {
        if(first || count < min_count)
        {

            min_count = count ;
            min_digit = d;
            first = 0 ;
        }
        }
        d++ ;
    }
    printf("The least occuring number is : %d and it occured for %d times.\n",min_digit,min_count);
}