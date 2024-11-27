//Dates
let myDate=new Date()
//console.log(myDate);//we get a date object that is not readable or comparable or usable so our focus would be how to convert this date in the useable form->2024-11-26T10:35:48.973Z
//console.log(myDate.toString());//Tue Nov 26 2024 10:35:48 GMT+0000 (Coordinated Universal Time)better than the previous form 
//Major DateString Functions
//toDateString,toISOString,toJSON,toLocaleDateString,toLocaleString
//let myCreatedDate=new Date(2002,3,24);
//console.log(myCreatedDate.toLocaleString());//4/24/2002, 12:00:00 AM
//console.log(myCreatedDate.toDateString())//Wed Apr 24 2002 this indicates that month in js is from 0 to 11
let myCreatedDate=new Date("03-24-2002")//mm/dd/yyyyform
//console.log(myCreatedDate.toDateString());//Sun Mar 24 2002 so in singke digit month starts from 0 and in double digit from 1
//Time Stamps
let myTimeStamp=Date.now();
//console.log(myTimeStamp);//1732678293874
//console.log(myCreatedDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.->1016928000000,now we can comapre the two time values since both are in milliseconds, used in cases such as hotel booking,quiz submission etc
//console.log(Math.floor(Date.now()/1000));//Date.now will give the time in ms so to convert it into sec /1000 which will  give decimal values so we will use Math.floor to remove the decimal point
//we have many methods with Date such as myCreatedDate.getMonth,getDay->this will result in integers such as 0-january,1-Monday
let newDate=new Date();
newDate.toLocaleString('default',{
    weekday:"long",
})//toLocaleString is an object and we can customize the date in it acc to our need


    