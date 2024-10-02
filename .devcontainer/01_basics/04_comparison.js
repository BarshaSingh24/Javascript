console.log("2">1)//true->so if we compare values with different datatypes we will not get our desired result
console.log("02">1)//true->in both the cases 2 is not being considered as string

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true the reason is that equality check == and comparisons >,<,>=,<= work differently.
//comparisons convert null to a number treating it as 0.
//so null>0->false but null>=0 is true.

// strict checking ===
console.log("2"===2)//false since it checks both the value and the datatype