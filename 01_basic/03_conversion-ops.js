// let score = 33

// let score2 = "33a";


// console.log(typeof score)
// console.log(typeof (score2))

// let valueinnumber = Number(score)
// console.log(typeof valueinnumber)
// console.log(valueinnumber)

/*---------"33"-> 33
"33abc" -> NaN 
 "undefined" -> NaN
true / false-> 1 / 0 (for boolean)--------*/

let isloggedin = ""
let converttobool = Boolean(isloggedin)
console.log(converttobool)


//empty string and 0 give false
// and all other will give true

let somenumber = 33
let converttostring = String(somenumber)
console.log(converttostring)
console.log(typeof converttostring)


// ********************************* Operation ***********************//

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(5**2) // used as power
// console.log(2%2)

// let s1 = "Neelesh"
// let s2 = " Maurya"

// let s3 = s1 + s2
// console.log(s3)

// console.log("1"+2)
// console.log(1+"2")

// console.log("1"+2+2) //-> 122  primitive conversion change which come first
// console.log("1"+(2+2)) // -> 14 always use bracket to make code readable and reliable
// console.log(1+2+"2") // -> 32 here int came first therefore it output is 32

//******  Prefix and Postfix*********/

let num = 100
//postfix
console.log(num++)
console.log(num)
//prefix
num = 100
console.log(++num)
console.log(num)
