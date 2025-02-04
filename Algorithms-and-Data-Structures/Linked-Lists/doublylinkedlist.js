//Each individual node in the list is derived from this class
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;           
    }
}

//This class represents the entire list.
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Insert adds a new entry into our list.
    insert(data){

        const newNode = new ListNode(data);
        this.length++;

        //If tail is storing anything, our list isn't empty.
        //So let's shift things around as necessary
        if (this.tail) {
            //Add the new node to the existing last entry
            this.tail.next = newNode;
            //Ensure the current last entry is represented as the previous node in the new node.
            newNode.prev = this.tail;
            //Now, make the last entry and the new node one in the same, and return it.
            this.tail = newNode;
            return newNode;
        }
        
        //Otherwise, we need to start a new list so kick everything off.
        this.head = this.tail = newNode;
        return newNode;
    }

    size(){
        return this.length;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        return this.tail;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(`${current.prev?.data} ${current.data} ${current.next?.data}`);
            current = current.next;
        }
    }
      
}

const dLinkedList = new LinkedList();

dLinkedList.insert(7);
dLinkedList.insert(8);
dLinkedList.insert(9);
dLinkedList.print(); 