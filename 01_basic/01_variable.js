const accountId = 1234
let accountemail = "abc@gmail.com"
var accountpassword = "0000"
acountcity = "Jaipur"

//accountId= 2 //not allowed
/*
never use var coz it doesnt understand the 
concept of block scope{} hence agr hm var ki value change krte
hain khin pr phi toh ye hr jhg hi change ho jati hai..
*/
console.log(accountId)
accountemail = "xyz@gmail.com"
accountpassword = "1111"
acountcity = "Raipur"

let accountstate

console.table([accountId,accountemail, accountpassword, acountcity, accountstate])