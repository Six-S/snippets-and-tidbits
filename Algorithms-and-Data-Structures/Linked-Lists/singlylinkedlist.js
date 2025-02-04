//Makes up each individual node.
//Stores the data for the node as well as the address for the next node.
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//The structure that stores all of our individual nodes.
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    //get our size
    size(){
        let count = 0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        }

        return count;
    }

    //reset the list
    clear(){
        this.head = null;
    }

    //return the first node
    getFirst(){
        return this.head;
    }

    //Return the last node
    getLast(){
        let node = this.head;
        while(node){
            if(node.next === null){
                return node;
            }
            node = node.next;
        }
    }
}


//Set up a few nodes to mess around with
const node1 = new ListNode(2);
const node2 = new ListNode(5);
const node3 = new ListNode(8);
const node4 = new ListNode(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;

//Attach them all to our list structure
const list = new LinkedList(node1);

//Run a few methods
console.log("Size: ", list.size());
console.log("First: ", list.getFirst());
console.log("Last: ", list.getLast());