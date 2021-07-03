# Linked Lists (Singly Linked-lists)

A linked list is a collection of items where each item points to the next one in the list. 

- Because of this structure, linked lists are very slow when searching for an item at a particular index. 
- An array, by comparison, has quick `get`s when searching for an index, but a linked list must start at the beginning, often called the "head", and loop through each item's `next` property until we arrive at the item. 
- This makes `get`s in a linked list an operation that takes `O(n)` time.
- While `get`s might be slow in a linked list, it's other operations, like `push` and `delete` come with some great benefits.

A Linked Lists consists of 2 main parts

- A Node
- Linked List

---

## Node

To make our linked list, we first want to create a node object for each item in our list. Our node has two properties -- the `value`stored at this node and a `next` property which gets pointed to the next item in our list. This property defaults to `null`.

```javascript
function createNode(value) {
  return {
    value,
    next: null
  }
}
```

---

## Linked List

Next, we want to make our list data structure. Our list will have several properties we want to keep track of -- a `head` property, a `tail` property, and a `length` property. 

```javascript
function createLinkedList() {
  // Important properties of LinkedList
  return {
    head: null,
    tail: null,
    length: 0,

    // easiest method check
    isEmpty() {
      return this.length === 0
    }
  }

}
```

the Linked-list has the following methods

- **push()** : Add items to the LinkedList - **O(1)**
- **pop()**: Remove items from the LinkedList - **O(1)**
- **get(index)**: Get the value at the particular index - **O(n)**
- **print()**: Helper method to print the LinkedList (can also be a **toString()**)

---

### print ()

I want to add a `print` method so we can visualize it. For our `print` method, we'll create an array of `values`.

Just like all the other loops that we've done in our linked list, we'll need to start at the `head` and loop through, so I'll store a current variable set to the `head`.

While we have a `current` item, we're going to `push` it's value into our value's array. Then we'll set our `current` variable to our current's `next` property.

When this loop is done, we know we've gone through our entire list. We're going to call `join` on our `values` array. We're going to pass in an arrow symbol that will return us a string that looks like our `values` are linked together.

```javascript
print() {
  const values = []
  let current = this.head

  while (current) {
    values.push(current.value)
    current = current.next
  }

  return values.join(' => ')
}
```



---

### push ()

As part of push method, we follow 4 steps in a linked-list

1. Create a node object from the value
2. Pass the node object to the tail, increment the length & return the node
3. Consider scenario where the head is null (first item to insert) :arrow_right: assign, increment, return
4. Consider scenario where the length is 1 (already one item exists) and has a head & tail :arrow_right: assign the same node to the `next`​property of tail

- **Step 1:** When we want to push a value onto our list, we need to first turn that value into a `node` using our `createNode` factory function.
- **Step 2:** No matter what state our list is in, we know that eventually we need to update our `tail` property to this node that we've just created. We also know that we will need to increment our `length` property, so let's write that.

```javascript
push(value) {
    // Step 1
    const node = createNode(value)

    // ....
    
    // Step 2
    this.tail = node;
    this.length++;
    return node;
}
```

- **Step 3:** Now if our list does not have a `head`, that is the first item in the list, then we can also deduce that it doesn't have a `tail`, the last item in its list because the list is empty.

  The opposite is also true. If our list has a `head` then we know that it has a `tail` as well because even a list of `length` 1 has a `head`and a `tail`.

  If we don't currently have a `head`, our list `head` property is set to our new node. Since we didn't have a `head`, we also don't have a `tail`, and that needs to be set to this `node` as well. Since this is a special case, we increment the `length` here and return the `node` now.

```javascript
push(value) {
    // Step 1
    const node = createNode(value)

    // Step 3
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
    }

    // Step 2
    this.tail = node;
    this.length++;
    return node;
}
```

- **Step 4:** However, in scenarios where our list does have a `length`, and thus has a `head` and a `tail`, our new `node` gets set to our current `tail`'s `next` property. Then we reset the `tail` like I said and we increment the `length`, so the only thing we have left is to `return`the `node`. 

```javascript
push(value) {
    // Step 1
    const node = createNode(value)
    // Step 3
    if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
    }
    // Step 4
    this.tail.next = node
    // Step 2
    this.tail = node
    this.length++
  	return node;
}
```

---

### pop ()

When popping items from Linked List, we need to understand 3 scenarios-

**How do we pop items when -**

	- When our list is empty
	- When our list has a length === 1
	- When our list has more than one item

- **Step 1: ** To handle an empty list is easy, we simple return `null`

```javascript
pop() {
    // Step 1
    if (this.isEmpty()) {
      return null
    }
  
  
}
```

- **Step 2:** Now for our remaining scenarios, a list of length `1` and a list of a length greater than `1`. We're always going to return the `tail`node, so let's store that in a variable.

```javascript
pop() {
  // Step 1
  if (this.isEmpty()) {
    return null;
  }
  // Step 2
  const node = this.tail;
}
```

- **Step 3:** A list of length `1` means that our `head` and our `tail` are the same `node`, which means in order to `pop` this `node` off of our list, we also need to set our `head` and `tail` back to `null`. When we do this, we also need to reset our `length` to `0`.

  Given that our length is `1`, we can just decrement it, and then we `return` the `node` that we've stored.

  ```javascript
  pop() {
      // Step 1
      if (this.isEmpty()) {
        return null
      }
      // Step 2
      const node = this.tail
  
      // Step 3
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }
  }
  ```

- **Step4:** Finding the Penultimate node in Linked-list

  Now for all other scenarios, we need to set the item before our `tail`, the penultimate item, as the new `tail` with its `next` value set to `null`. How do we do this?

  This is one of the inefficiencies of linked list. Whenever we have to find an item, we have to start at the `head` and continue to call `next` until we find that item. For our case, we're going to start by having a variable called `current` that we're going to set to the `head`. Then we're going to create a variable `penultimate` that will eventually set to the `penultimate` item.

  Now while we have a `current` node, we need to check if that current's `next` property is equal to the `tail`. That's how we know we have our penultimate item.

  Then we want to `break` our loop once we have our penultimate item. Otherwise, if we're not at that penultimate item, we set the item `current` to the `current.next` property to move on.

```javascript
pop() {
    // step 1
    if (this.isEmpty()) {
      return null
    }
    // step 2
    const node = this.tail
    // step 3
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.length--
      return node
    }
    // step 4
    let current = this.head
    let penultimate
    while (current) {
      if (current.next === this.tail) {
        penultimate = current
          break
        }
        current = current.next
    }
}
```

- **Step 5:** At this time we have our penultimate node so we just need to perform the following
  - Assign next property of the penultimate node to `null`
  - Assign penultimate node to `tail`
  - Decrease the `length` of the array
  - Return the tail node

```javascript
pop() {
    // step 1
    if (this.isEmpty()) {
      return null;
    }
    // step 2
    const node = this.tail
    // step 3
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    // step 4
    let current = this.head;
    let penultimate;
    while (current) {
      if (current.next === this.tail) {
        penultimate = current;
          break;
        }
        current = current.next;
    }
    // step 5
    penultimate.next = null;
    this.tail = penultimate;
    this.length--;
    return node;
}
```

---









