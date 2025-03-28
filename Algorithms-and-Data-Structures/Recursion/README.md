## Recursion

### Tail Recursion
*Tail Recursion* is simply a type of recursion where the recursive statement is 
the _final_ statement to be run in a given function.

As long as nothing happens after the recursive statement, it can be considered tail recursion.

Generally speaking, if you have to write a tail recursion, it should probably just be a loop instead. This is because a loop is much more effecient in terms of space. Some compilers will even attempt to automatically convert tail recursions into loops. See the `tail_recursion.cpp` example file for details.

### Head Recursion
*Head Recursion* is pretty similar to Tail Recursion, with the primary difference being that the recursive statement happens first instead.

This recursion type is also unique because anything coming after the recursive statement will be processed at _return_ time.

Additionally, Head Recursion implementations cannot be as easily converted into loops. Of course it can be done, but compared to Tail Recursion, where a loop can basically created as a 1:1 copy of a recursive workflow, minus the recursion, it's a little less straight forward. See the example for details.

### Tree Recursion and Linear Recursion
*Linear Recursion* is a recursion type where recursive statements are called only once. The *Tail* and *Head* Recursion examples we have been looking at are examples of Linear Recursion.

*Tree Recursion* refers to a recursive function which calls itself _more than once_ in a single workflow.

Tree Recursion implementations can get a bit out of hand quickly, as our first recursion type to have a time complexity of O(2^n). Space complexity for our Tree Recursion will still be O(n)


