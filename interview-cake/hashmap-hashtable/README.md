# Hashing, HashMap, HashTable

## What is Hashing

A **hash function** takes data (like a string, or a file’s contents) and outputs a *hash*, a fixed-size string or number.

For example, here’s the MD5 hash (MD5 is a common hash function) for a file simply containing “cake”:

## Some uses for hashing:

1. **Objects**. Suppose we want an array-like data structure with constant-time lookups, but we want to look up values based on arbitrary "keys," not just sequential "indices." We could allocate an array, and use a hash function to translate keys into array indices. That's the basic idea behind an object!
2. **Preventing man-in-the-middle attacks**. Ever notice those things that say `hash` or `md5` or `sha1` on download sites? The site is telling you, "We hashed this file on our end and got this result. When you finish the download, try hashing the file and confirming you get the same result. If not, your internet service provider or someone else might have injected malware or tracking software into your download!"

## Hash Table

A **hash table** organizes data so you can quickly look up values for a given key.

| Strengths                                                    | Weaknesses                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Fast Lookups**: Lookups take `O(1)` time *on **average***. | **Slow Worst-case Lookups** : Lookups take `O(N)`time on a worst case scenario |
| **Flexible Keys:** With Maps, keys can EVEN be null, string, integer or objects :smile: | **Unordered**: Keys aren't stored in a specific order. In order to lookup, you need to ATLEAST travers the HashMap ONCE. :sweat: |
| **In Java:** As long as a datatype is **Hashable**. It can be used as a Key in a HashMap. :imp: | **Single-directional lookups**. While you can look up the *value* for a given key in O(1) time, looking up the *keys* for a given *value* requires looping through the whole dataset—O(n) time. |
|                                                              | **Not cache-friendly**. Many hash table implementations use [Linked-lists](https://www.interviewcake.com/concept/linked-list) :smirk: ​which don't put data next to each other in memory. |

| X            | Average | Worst |
| ------------ | ------- | ----- |
| **Space**    | O(N)    | O(N)  |
| **Retrieve** | O(1)    | O(1)  |
| **Lookup**   | O(1)    | O(N)  |
| **Insert**   | O(1)    | O(N)  |
| **Delete**   | O(1)    | O(N)  |

## Hash maps are built on arrays

[Arrays](https://www.interviewcake.com/concept/array) are pretty similar to hash maps already. Arrays let you quickly look up the value for a given "key" . . . except the keys are called "indices," and we don't get to pick them—they're always sequential integers (0, 1, 2, 3, etc).

Think of a hash map as a ***"hack"*** on top of an array to let us use flexible keys instead of being stuck with sequential integer "indices."

All we need is a function to convert a key into an array index (an integer). That function is called a **[hashing function](https://www.interviewcake.com/concept/hashing)**.

![Hashmap](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_key_labeled.svg?bust=209)

To look up the value for a given key, we just run the key through our hashing function to get the index to go to in our underlying array to grab the value.

How does that hashing function work? There are a few different approaches, and they can get pretty complicated. But here's a simple proof of concept:

Grab the number value for each character and add those up.

![The word "lies" in quotes. Arrows point from each character down to their corresponding number values, which are separated by plus signs and shown in sum to equal 429.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_lies_chars.svg?bust=209)

The result is 429. But what if we only have *30* slots in our array? We'll use a common trick for forcing a number into a specific range: the [**modulus operator (%)**](https://www.interviewcake.com/concept/modulus) Modding our sum by 30 ensures we get a whole number that's less than 30 (and at least 0):

`429%30=9429%30=9`

The hashing functions used in modern systems get pretty complicated—the one we used here is a simplified example.

Here's a common one: instead of storing the actual values in our array, let's have each array slot hold a *pointer* to a *[linked list](https://www.interviewcake.com/concept/linked-list)* holding the values for all the keys that hash to that index:

![An array storing pointers. The pointer at index 9 has an arrow pointing to a linked list to the right of the array. Each linked list node now stores the word as well as its count and a pointer.](https://www.interviewcake.com/images/svgs/cs_for_hackers__hash_tables_hash_collision_key_val.svg?bust=209)

Notice that we included the *keys* as well as the values in each linked list node. Otherwise we wouldn't know which key was for which value!

There are other ways to deal with hash collisions. This is just one of them.

## Dynamic array resizing

Suppose we keep adding more items to our hash map. As the number of keys and values in our hash map exceeds the number of indices in the underlying array, hash collisions become inevitable.

To mitigate this, we could expand our underlying array whenever things start to get crowded. That requires allocating a larger array and rehashing all of our existing keys to figure out their new position—`O(n)` time.

## Sets

A **set** is like a hash map except it only stores keys, without values.

Sets are usually implemented very similarly to hash maps—using hashing to index into an array—but they don't have to worry about storing values alongside keys.

```javascript
// Set Implementation
lightBulbs = new Set(["incandescent", "compact fluorescent", "LED"]);

lightBulbs.has("LED");  // true
lightBulbs.has("halogen");  // false
```

## Practical applications of Set

Sets often come up 

- when we're tracking groups of items—nodes we've visited in a graph, 
- characters we've seen in a string, 
- or colors used by neighboring nodes. 
- Usually, we're interested in whether something is in a set or not.

