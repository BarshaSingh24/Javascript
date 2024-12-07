//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website);//when we execute one then this will throw error that website was not declared coz the scope of website will end with two and the inner func can access the values of outer func but vice-versa is not true

     //two()

}

 //one() so now when two and one is executed it will print hitesh

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5))-6 this will not throw error

function addone(num){
    return num + 1
}

//in js variables are very powerful ,they can hold funcs,json values etc
addTwo(5)//cannot access addTwo before initialization
const addTwo = function(num){//can also be called as expression
    return num + 2
}