//Objective is to partition a linked list in such a way that all values less than 'x'
//are first then all values above it are after. The order of the nodes should stay the same.

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)

x = 2


//O(n) solution that makes two pseudo-nodes to traverse the list

//Make two new lists - one to hold all values less than x and the other
//to hold values greater than or equal to x
let newNode = new ListNode(-1)
let temp = newNode
    
let newNode2 = new ListNode(-1)
let temp2 = newNode2
    
while (head) {
    if (head.val < x) {
        temp.next = head
        temp = temp.next
    } else {
        temp2.next = head
        temp2 = temp2.next
    }
        
    head = head.next
}
//Make the last node in the list null
temp2.next = null
//Connect the end of the lesser list to the head of the greater list
temp.next = newNode2.next
    
return newNode.next