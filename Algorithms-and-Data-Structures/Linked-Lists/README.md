# Linked Lists

## Singly Linked List

A Singly Linked List is a basic data structure that stores data in multiple nodes.
Each node also stores the address of the next node. 

#### Key Considerations:
- *Memory Efficiency*
    – Each node stores only one reference to the next node, reducing memory overhead compared to doubly linked lists.
- *Insertion and Deletion*
    – Efficient at inserting and deleting elements at the beginning (O(1)), but slower for arbitrary positions (O(n)).
- *Traversal*
    – Can only traverse in one direction (_forward_), unlike doubly linked lists.
- *Search Performance*
    – Searching requires O(n) time complexity, as there's no indexing like an array.
- *No Backtracking*
    – Since there's no reference to the previous node, reversing or deleting the last node efficiently is more challenging

#### Potential Uses:
- When frequent insertions/deletions at the head are required (_e.g., stacks, queue implementations_).
- When memory efficiency is important (_compared to a doubly linked list_).
- When order matters but random access isn't needed.
- In applications like:
    - Symbol tables in compilers.
    - Hash table chaining (_collision handling_).
    - Undo functionality in text editors (_simpler than doubly linked lists_).

![example](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/640px-Singly-linked-list.svg.png "singly_linked_list_example")

## Doubly Linked List

A Doubly Linked List is similar to the previously mentioned Singly Linked List, with one key difference -
A Doubly Linked List stores _two_ addresses in each node. The address of the next node, and also the previous node.

#### Key Considerations:
- *Bidirectional Traversal* 
    – Unlike singly linked lists, DLLs store two references (_next & previous_), allowing movement in both directions.
- *Memory Overhead* 
    – Each node requires extra memory for the prev pointer, increasing space complexity.
- *Efficient Deletion* 
    – Deleting a node in O(1) is possible if you have a direct reference to it (_no need to traverse from the head_).
- *Insertion at Both Ends* 
    – Easier to insert at both the head and tail, making them ideal for deques.
*Reversibility* 
    – Traversing in reverse is straightforward, unlike a singly linked list.
*Complexity* 
    – Slightly more complex to implement due to maintaining both next and prev pointers.

#### Potential Uses:
- When fast deletions are required from anywhere in the list (_LRU caches_).
- When bidirectional traversal is needed, such as:
    - Browser history (_forward & back navigation_)
    - Undo/Redo functionality
- When insertions/removals at both ends are frequent, like in Deques (_Double-ended Queues_).
- In tree-based structures (_some balanced trees use DLLs internally_).

![example](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/1024px-Doubly-linked-list.svg.png "doubly_linked_list_example")