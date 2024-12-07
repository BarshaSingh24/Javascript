// const tinderUser = new Object()//singleton object
const tinderUser = {}//non-singleton obj
//in both cases if we do console.log(tinderUser)->{}i.e an empty object.
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 //console.log(tinderUser);//{id: '123abc', name: 'Sammy', isLoggedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);hitesh way to access nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }objects will not get combined instead there will be a scneraio of nested objects.{obj1:{1: "a", 2: "b"},obj2:{3: "a", 4: "b"}}

 //const obj3 = Object.assign({}, obj1, obj2, obj4)//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }//{}->this will act as target,and the rest obj1,obj2,obj4 will act as source.if this-{} would not have been used then obj1===obj3(true)coz all the objects would get combined in obj1 

const obj3 = {...obj1, ...obj2}//spread operator output same as assign but in most cases we would be using this
 //console.log(obj3);

//Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

 console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]//imp datatype of this func is array 
 console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
 console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

 //console.log(tinderUser.hasOwnProperty('isLoggedIn'));true 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//for better code readability
const {courseInstructor: instructor} = course//[{which value we want to extract:we can also modify the name of the variable}=from where]

 console.log(courseInstructor);//hitesh
console.log(instructor);//hitesh since we modified the courseInstructor to instructor

//API"S-kuch avlues aati h abckend se toh uss values ko kaise hm likhte hain recently the values come in json 
//json structure is below-a type of object w/o a name but not a object in json both the keys and the values are string
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//in many cases we get api's in the form of arrays inside which many objects 
[
    {},
    {},
    {}
]
