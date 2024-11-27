//Javascript arrays are resizable and can contain a mix of datatypes[when those characteristics are undesirable use typed arrays instead] 
//Javascript array copy-operations create shallow copies[all standard built in copy-operations with any js objects create shallow copies rather than deep copies]
//Shallow copy of an object is a copy whose object share the same references.Deep copy is opposite to this
const myArr=[0,1,2,3,4,5];
const myArr1=new Array(0,1,2,3);
//myArr.push(6)
//console.log(myArr);//[
    //0, 1, 2, 3,
    //4, 5, 6
  //]
  //myArr.unshift(9);
  //console.log(myArr);
  //[
  /*  9, 0, 1, 2,
      3, 4, 5
  ]
      this is not that useful operation bcoz if we have array size as 10000 and we apply unshift then 10000 elemnts will have to be shifted which is time consuming.*/
      //myArr.shift()
      //console.log(myArr.includes(9));//false
      //console.log(myArr.indexOf(3));//3
      const newArr=myArr.join()//array into string
  //console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
  //console.log(newArr);//0,1,2,3,4,5
  
//Slice and Splice
console.log("A ",myArr);//A  [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3);
console.log(myn1);//[1,2]
console.log("B ",myArr);//B  [ 0, 1, 2, 3, 4, 5 ]slice operation does not affect the original array
const myn2=myArr.splice(1,3)
console.log(myn2);//[1,2,3]
console.log("C ",myArr);//[0,4,5]splice op manipulates the original array


