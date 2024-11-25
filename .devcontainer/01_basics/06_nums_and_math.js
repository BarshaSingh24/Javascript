const num=400;
//console.log(num);//400
const balance=new Number(100);
//console.log(balance);//[Number: 100]
//console.log(balance.toString().length);//3
//console.log(balance.toFixed(2));//100.00
const num1=23.8966
const num2=123.8966
//console.log(num1.toPrecision(3));//23.9
//console.log(num2.toPrecision(3));//124
const num3=1123.8966
//console.log(num3.toPrecision(3));//1.12e+3->upto 3 digits precision and the next is converted to exponential
const hundreds=1000000;
console.log(hundreds.toLocaleString());//1,000,000according to the american standards
//to convert it into Indian standard
console.log(hundreds.toLocaleString('en-IN'));//10,00,000
//in Number datatype we have Number.MAX_VALUE, Number.MIN_VALUE,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER
//+++++++++++++++++++++++++++Numbers

