# Doubly Linked Lists

**DLLs** have a few advantages over **SLLs**, but these perks do not come without a cost:

- **Doubly linked lists** can be traversed in both directions, which makes them more compatible with complex algorithms.
- Nodes in **Doubly linked lists** require **extra memory** to store the `previousElement` pointer.
- **Deletion** is more efficient in doubly linked lists as we do not need to keep track of the previous node. We already have a backwards pointer for it.

At this point, we’ve compared the two major types of linked lists. The minor memory load that comes with DLLs can be forgone because of the convenience they provide.

A Doubly Linked List has a node with the following properties

### Node properties

- **value**: Value of the node
- **next**: pointer to the next node
- **prev**: pointer to the previous node (cause its a doubly-linked list)

The constructor of the Node takes 3 params in the following order

- `value`
- `next`
- `prev`

------

### LinkedList properties

The doubly-linked list itself has 2 properties and 6 methods in it

### Properties

- **head**: Head pointer of the LinkedList
- **tail**: Tail pointer of the LinkedList

```javascript
function createDoublyLinkedList() {
   return {
     head : null,
     tail : null,
     length: 0,
     ....
   };
}
```



### Methods

#### 1. addToHead - 1 parameter, value

- Simple function - as the name suggests, we are adding value to the Head side pointer of the linked list.
- Create a node first with the following params - **value**, **this.head**, null
- Check if header pointer is previously assigned
- If **True** - assign the new node to the prev pointer of the head pointer
- else assign the new node to the Tail pointer

```javascript
addToHead (value) {
       const newNode = createNode(value, this.head, null);
       if (this.head) this.head.prev = newNode;
       else this.tail = newNode;
       this.head = newNode;
     },
```



------

#### 2. addToTail - 1 parameter, value

- Very similar to **addToHead** method, just the head and tail pointers get reversed.

```javascript
addToTail (value) {
       const newNode = createNode(value, null, this.tail);
       if (this.tail) this.tail.next = newNode;
       else this.head = newNode;
       this.tail = newNode;
     },
```



------

#### 3. removeHead - no params

- **Edge case scenario**: First check if the head pointer exists (is not null) else return null
- Create a node first with the following params - **value**, **this.head**, null
- Check if header pointer is previously assigned
- If **True** - assign the new node to the prev pointer of the head pointer
- else assign the new node to the Tail pointer

```javascript
removeHead () {
       //edge case - if head is empty return null
       if (!this.head) return false;       
       this.head = this.head.next;
       if (this.head) this.head.prev = null;
       else this.tail = null;
       return true;
     },
```



------

#### 4. removeTail - no params

- Very similar to **removeHead** method, just the head and tail pointers get reversed.

```javascript
removeTail () {
       //edge case - if tail is empty return null
       if (!this.tail) return false;       
       this.tail = this.tail.prev;
       if (this.tail) this.tail.next = null;
       else this.head = null;
       return true;
     },
```



------

#### 5. contains (or search) - 1 parameter, value

- Method to check if the linkedlist contains the value passed to the method or not
- Returns boolean - true / false

```javascript
search (value) {
       let currNode = this.head;
       while (currNode) {
         if (currNode.value === value) return currNode.value;
         currNode = currNode.next;
       }
       return null;
     },
```



------

#### 6. indexOf - 1 parameter, value

- Returns an array of index positions where all the value is present

```javascript
indexOf (value) {
       let result = [];
       let indexCounter = 0;
       let currNode = this.head;
       while (currNode) {
         // Where and all the value is there - record their positions
         if (currNode.value === value) result.push(indexCounter);
         // If the Head pointer reches the tail pointer - return the array
         if (currNode === this.tail) return result;
         currNode = currNode.next;
         indexCounter++;
       }
     },
```



------

#### 7. reverse - no params

- Reverse a linked list (Doubly linked list)
- First check for edge case scenarios
- If the head pointer doesn't have a next pointer then immediately return the head.
- Else assign a new variable `first` the value of head pointer
- assign a variable `second` the next element of the head pointer
- Also assign the tail the value of the head pointer
- Now in the while loop - if second variable is not null
- first take a backup of the next property of the `second` variable = temp;
- Assign `second.next` the value of the `first`
- Interchange `first` variable with second
- Assign back the backup of second.next to second variable
- Repeat
- Once out of the while loop, nullify the head.next property
- Assign the this.head value of `first`
- Return instance

```javascript
reverse () {
       // Edge case - check if the head pointer has the ppty next
       if (!this.head.next) {
         return this.head;
       }
       let first = this.head;
       this.tail = this.head;
       let second = first.next;

       while (second) {
         const temp = second.next;
         second.next = first;
         first = second;
         second = temp;
       }

       this.head.next = null;
       this.head = first;
       return this;
     }
```

------

#### 8. printList - no params

- Convert a linked list into a flattened array

---

### Complete Doubly Linked List data-structure

the following shows the complete data-structure

```javascript
function createNode(value, next=null, prev=null) {
  return {
    value,
    prev,
    next
  };
}

function createDoublyLinkedList() {
   return {
     head : null,
     tail : null,
     length: 0,
     addToHead (value) {
       const newNode = createNode(value, this.head, null);
       if (this.head) this.head.prev = newNode;
       else this.tail = newNode;
       this.head = newNode;
     },
     addToTail (value) {
       const newNode = createNode(value, null, this.tail);
       if (this.tail) this.tail.next = newNode;
       else this.head = newNode;
       this.tail = newNode;
     },
     removeHead () {
       //edge case - if head is empty return null
       if (!this.head) return false;       
       this.head = this.head.next;
       if (this.head) this.head.prev = null;
       else this.tail = null;
       return true;
     },
     removeTail () {
       //edge case - if tail is empty return null
       if (!this.tail) return false;       
       this.tail = this.tail.prev;
       if (this.tail) this.tail.next = null;
       else this.head = null;
       return true;
     },
     search (value) {
       let currNode = this.head;
       while (currNode) {
         if (currNode.value === value) return currNode.value;
         currNode = currNode.next;
       }
       return null;
     },
     indexOf (value) {
       let result = [];
       let indexCounter = 0;
       let currNode = this.head;
       while (currNode) {
         // Where and all the value is there - record their positions
         if (currNode.value === value) result.push(indexCounter);
         // If the Head pointer reches the tail pointer - return the array
         if (currNode === this.tail) return result;
         currNode = currNode.next;
         indexCounter++;
       }
     },
     printList () {
       const array = [];
       let currentNode = this.head;
       while (currentNode !== null) {
         array.push(currentNode.value);
         currentNode = currentNode.next;
       }
       return array;
     },
     reverse () {
       // Edge case - check if the head pointer has the ppty next
       if (!this.head.next) {
         return this.head;
       }
       let first = this.head;
       this.tail = this.head;
       let second = first.next;

       while (second) {
         const temp = second.next;
         second.next = first;
         first = second;
         second = temp;
       }

       this.head.next = null;
       this.head = first;
       return this;
     }
   };
}
```

---

