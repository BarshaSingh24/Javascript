/*there are two main categories of datatypes on the basis of how different data is stored in the memory and how we can access the data and that is 1)Primitive datatype and 2)non-primitive datatype or Reference type

Primitive data types are passed by value, meaning when they are copied from one place to another, a copy of the value is made. Changes made to the copy do not affect the original value.

7 types-String,Number,Boolean,null,undefined,Symbol,BigInt*/

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId)//false as symbol will make both the id's unique.

/*Non-primitive data types are passed by reference, meaning they hold a reference to the memory location where the actual data is stored. As a result, changes made to the data through one reference will be reflected in all references to the same data." 

Array,object,function*/

const heros=["shaktiman", "naagraj", "doga"];//array

let myobj={
    name:"Barsha",
    age:22,
}

//treating function as a variable in js
const myfunction=function(){
    console.log("Hello world");
}