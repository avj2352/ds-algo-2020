# JS - Advanced Foundations

## Primitive Datatypes

There are 6 primitive datatypes other than "*Object*" datatype in Javascript

- *string*
- *number*
- *boolean*
- *bigint*
- *symbol*
- *object*
- *undefined*

```javascript
console.log(typeof 'hello world'); // string
console.log(typeof 1); // number
console.log(typeof false); // boolean
console.log(typeof 42n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```

## Mutating Functions

In Javascript, The following are the difference between pass by value & pass by reference.

- Primitive types are **Passed by Value** to function arguments
- Objects are **Passed by Reference** to function arguments

```javascript
let str = "1"; // string - primitive datatype
let obj = {a: '1'}; // custom object

// primitive datatype - pass by value
function mutateStr(str) {
  str = "pramod";
  console.log('Within the function: ', str);
}

// objects - pass by reference
function mutateObj(obj) {
  obj.a = '2';
}


mutateStr(str); 
mutateObj(obj);
console.log("Value of str: ", str); //original value is retained - primitive
console.log("Value of Object: ", obj); //original value is mutated - object

```

## Primitive Datatype Autoboxing in Javascript

Primitive datatypes are not Objects, then how does the following work? 

```javascript
let str = "Pramod";
console.log(str.length); // shows 6
```

How does the `.length` of str work if `typeof str` shows as string ?

The Trick is - Javascript autoboxes Primitive datatypes into Objects out of the box

Which means the following is done by Javascript (out of the box) -

| Primitive                               | Prototype                  | Description                                 |
| --------------------------------------- | -------------------------- | ------------------------------------------- |
| let str = "Pramod"; str.length          | String.length - property   | Javascript autoboxes **string** to String   |
| let num1 = 90; num1.toString()          | Number.toString() - method | Javascript autoboxes **number** to Number   |
| let isTruthy = true; isTruthy.valueOf() | Boolean.valueOf() - method | Javascript autoboxes **boolean** to Boolean |

Therefore *Primitive Datatypes behave like Objects due to Javascript autoboxing*

