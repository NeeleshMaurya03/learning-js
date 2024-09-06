"use strict" // treat all js code as newer version

console.log(3+3)//for readasblity and avoid error
//always use next line or semicolon

console.log("Neelesh")

let name = "Neelesh"
let age = 21
let isloggedin = false

// number -> 
// bigint
// boolean
// null -> standalone vale -> empty
// undefined -> abhi value di hi nhi hai
// symbol -> uniqueness

//object


console.log(typeof age)


/*********  DataTypes ***********/
// Primitive -> Use Stck memory ->cpybnegi
// 7 types -> String, Number, Boolean, null, undefined, Symbol, BigInt
 
const num = 300
const num2 = 300.200

console.log(typeof num)
console.log(typeof num2)

// Non-Primitive (Referenc Type) -> USe HEAP memory
// Array, Objects, Functions

//Array
const heroes = ["ME","You",1]
console.log (heroes)

//Objects

let myobj = {
    name : "Neelesh",
    age: 21,
}

const myfunction = function(){
    console.log("Same work as c++")

}
console.log(myfunction)