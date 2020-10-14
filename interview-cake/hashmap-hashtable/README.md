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

