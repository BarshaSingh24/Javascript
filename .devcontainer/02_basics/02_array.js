const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 //marvel_heros.push(dc_heros)

 //console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]this indicates that arrays in js can take any datatype so it took array also as a single elemnt
// console.log(marvel_heros[3][1]);//flash

 const allHeros = marvel_heros.concat(dc_heros)
 //console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]push op works on the same array and concat returns a new array

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);//same output as the concat also known as spread operator.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
/*console.log(real_another_array);[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]infinity will handle the max depth to which the array will be flattened*/



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) //[] interesting-coz we have to mention whether to make array out of the keys,or the values

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));//[100,200,300]