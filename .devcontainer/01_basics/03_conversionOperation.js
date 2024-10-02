let score ="33"

//console.log(typeof score);
//console.log(typeof (score));//method format

let valueInNumber= Number(score)//conversion of string score to number.here 'n' will be capital of the Number but in output the datatype will be number that is small n.
//console.log(typeof valueInNumber);

let score1="33abc"
let valInNumber= Number(score1)
//console.log(typeof valInNumber);//will still output number
//console.log(valInNumber);//will output NaN i.e not a number so the two outputs are conflicting in nature.
let score2=null
let valInNumber2= Number(score2);
//console.log(valInNumber2);//will output 0

let score3=undefined
let valInNumber3= Number(score3);
//console.log(valInNumber3);// NaN

score4=true
let valInNumber4= Number(score4);
//console.log(valInNumber4);//1


/*conversion to boolean 
1=>true 0=>false
""=>false "Barsha"=>true

conversion to string datatype
let num=33
let toString= String(num);
console.log(toString)//33
console.log(typeof toString)->string

 operations
let value=3
let negValue=-value
console.log(negValue)//-3

console.log(2*2)=4
console.log(2**3)=2^3=8

important*/
let str1="hello"
let str2=" Barsha"
let str3=str1+str2
//console.log(str3)//hello Barsha

//console.log("1"+2)//=>12
//console.log(1+"2")//12
//console.log("1"+2+2)//122->if string is in first everything will be treated as string
//console.log(1+2+"3")//33->first 1+2=3concatenated with string 3 gives 33
console.log(true)//true
console.log(+true)//1
console.log(+"")//0
//console.log(true+)//error

//study prefix and postfix in js mdn