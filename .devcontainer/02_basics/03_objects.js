// singleton-object made from constructor i.e,ye apne tarh k ek hi object h
// Object.create-constructor way to create objects
// to ways to declare objects-1(literal),2(constructor)
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//symbol var has to be written in []and also has to be accessed in JsUser[mySym]
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)accessing object values with objname.varname
// console.log(JsUser["email"])another way to access object values objname[varname]since email was string so it has to be written under double quotes or eles it will throw error
// console.log(JsUser["full name"])we cannot access the obj value in this case using the dot method
// console.log(JsUser[mySym])myKey1

JsUser.email = "hitesh@chatgpt.com"//the previous email value will be changed with this email value
// Object.freeze(JsUser)after this if we try to change the email value it will take the prev value only
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");//Hello JS user
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//by using this we get the access of all the elements of the current object .->Hello JS user, Hitesh
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting);//[Function (anonymous)]a refernce to the function