const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);//{ username: 'hitesh' }
    }
//this refers to the current context
}

 //user.welcomeMessage()-hitesh , welcome to website
 //user.username = "sam"
 //user.welcomeMessage()sam ,-> welcome to website  (the value got changed because the context got changed from hitesh to sam

 console.log(this);//{}i.e empty object abhi global k liye koi context hi nhi hai but in case of browser window will be the output coz earlier there was only one way to run js i.e browser and the global object for browser is window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//undefined bcoz this can be used with objects not with funcs directly
//console.log(this)-it will give a series of amny values
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()