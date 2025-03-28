#include<stdio.h>
#include<iostream>
using namespace std;

//Head Recursion refers to the recursion type where the recursive
//statement is the first statement.

int main(){
    fun(5);
    return 0;
}

void fun(int n) {
    if(n > 0){
        fun(n-1);
        printf("%d", n);
    }
}
//o/p 1, 2, 3, 4, 5

void funLoop(int n){
    while(n > 0){
        n--;
        printf("%d", n);
    }
}
//assuming the "n--" isn't present, 
//out o/p is still 5, 4, 3, 2, 1
//with the n--; present, things get even more wonky

//To create a "better" representation of a Head Recursion using loops,
//you can do something closer to the following:
void funLoopTwo(int n){
    int i = 0;
    while(i <= 0){
        printf("%d", n);
        i++;
    }
}
//o/p 1, 2, 3, 4, 5