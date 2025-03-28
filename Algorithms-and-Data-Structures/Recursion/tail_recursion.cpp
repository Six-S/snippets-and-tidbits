#include<stdio.h>
#include<iostream>
using namespace std;

//Tail recursion refers to a type of recursion where the
//recursive call is the last statement in a given function

int main(){
    fun(5);
    return 0;
}

//Using this recusrion type, you create multiple activation records on the stack
//leading to a different space complexity compared to a standard loop
// Time = O(n)
// Space = O(n)
void fun(int n) {
    if(n > 0){
        printf("%d", n);
        fun(n-1);
    }
}

//Loop included for comparison of time/space complexity
//Because the loops function is only invoked once
//Time = O(n)
//Space = O(1)
void funLoop(int n){
    while(n > 0){
        printf("%d", n);
        n--;
    }
}