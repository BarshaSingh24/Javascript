
/*function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 sayMyName()sayMyName-func reference,sayMyName()-func executionH
 I
 T
 E
 S
 H*/

 /*function addTwoNumbers(number1, number2){//number1,number2 are func parameters, in js it is not necessary to write the datatype of the parameters

     console.log(number1 + number2);
 }
const result=addTwoNumbers(3,4)
console.log("Result1:",result);//undefined-as the func does not have any return statement

addTwoNumbers(3,4)3,4 are arguments//7 
addTwoNumbers(3,"4")//34
addTwoNumbers(3,null)//3 so if we pass the arguments which are not nos then we will not get our desired result*/
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

 //console.log("Result: ", result);//8**after a return statement in a func if there is still a part of code then that part of the code will never be excuted


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
//sam is the default value if we do not pass anything or a empty string by default it will atke sam and the if part will never be executed and if a value is passed sam will be overwritten
//console.log(loginUserMessage())//undefined
//console.log(loginUserMessage(""))//just logged in
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//in js ...-this same operator is used as rest op and spread operator but there use cases are diff rest wraps up in a single unit 
 //console.log(calculateCartPrice(200, 400, 500, 2000))//[500,2000]since before num1 the rest operator is used so after this whatever values are passed will be stored in num1 in the form of array .use case of rest op when we want to add the prices of the items of a customer's shopping cart and we don't know how many items will be added so using rest op it will be stored in array from where we can easily sum up the values

const user = {
    username: "hitesh",
    prices: 199
}
//passing of obj into func
function handleObject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//direct object declared inside func
handleObject({
    username: "sam",
    price: 399
})
//passing of arary into a func
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    //return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));