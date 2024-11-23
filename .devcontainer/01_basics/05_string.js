const name="barsha"
const repoCount=3
//console.log(name+repoCount+" value");outdated syntax
//better syntax-use of backticks``advantage of using this is string interpolation i.e, we make placeholders where we can directly inject the variables
//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//string interpolation
//another way to declare string
const gamename= new String('barshahc')
//console.log(gamename)//op->[String:'barshahc']here string is not an array but an object with key value pairs as 0-'b',1-'a'etc we get the length property and also other methods which is under prototype
//console.log(gamename[0])//b
//we can also access the prototype-
//console.log(gamename.__proto__);//double underscores is used//{}-but this object is actually not empty we have many values in it and we can also access it in the following way
//console.log(gamename.length);//8
//console.log(gamename.toUpperCase());//BARSHAHC but this change will not be reflected in the original string as we have stored the gamename in primitive datatype

//once go throgh all the string methods in mdn 

//console.log(gamename.charAt(2));//r
//console.log(gamename.indexOf('r'));//2
//const newString=gamename;
//console.log(newString.substring(0,4));//from index 0-3 characters would be included 4th index char not taken->bars
const anotherString=gamename;
console.log (anotherString.slice(-4));//hahc-is used to extract from the end using -ve indexing
//trim function->works on white spaces and line terminators
const myname="  barsha  "
console.log(myname);//printed with spaces
console.log(myname.trim());//white spaces would be removed,also we can give the start and end index with trim function
const url="https://barsha.com/barsha%20singh"
console.log(url.replace('%20','-'))//https://barsha.com/barsha-singh
console.log(url.includes('rimmy'))//false
//we can also convert a string into an array on the basis of certain seperator
const str="barsha-hc-com";
console.log(str.split('-'));//[ 'barsha', 'hc', 'com' ]
