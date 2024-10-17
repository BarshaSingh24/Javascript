/*there are two main categories of datatypes on the basis of how different data is stored in the memory and how we can access the data and that is 1)Primitive datatype and 2)non-primitive datatype or Reference type

Primitive data types are passed by value, meaning when they are copied from one place to another, a copy of the value is made. Changes made to the copy do not affect the original value.

7 types-String,Number,Boolean,null,undefined,Symbol,BigInt*/

const id=Symbol('123');
const anotherId=Symbol('123');
//console.log(id===anotherId)//false as symbol will make both the id's unique.

/*Non-primitive data types are passed by reference, meaning they hold a reference to the memory location where the actual data is stored. As a result, changes made to the data through one reference will be reflected in all references to the same data." 

Array,object,function are reference types*/

const heros=["shaktiman", "naagraj", "doga"];//array

let myobj={
    name:"Barsha",
    age:22,
}

//one way to declare func is treating function as a variable in js
const myfunction=function(){
    //console.log("Hello world");
}
//console.log(typeof myfunction)//output-function which is basically called object function.
//datatype of non-primitive datatypes is object.
//++++++++++++++++++++++++++++++++++++++++
// Stack(primitive), Heap(Non-Primitive)
let myName="Barsha"
let myanotherName=myName;
myanotherName="Shivani"
console.log(myName);//Barsha
console.log(myanotherName);//Shivani
//so myName remains unaffected since it is of primitive data type so the changes are made in the copy of it.

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo= userOne
userTwo.email = "barsha@google.com"
console.log(userOne.email);//barsha@google.com
console.log(userTwo.email);//barsha@google.com
//As in case of heap both userOne and userTwo will get the same reference of email & upi.