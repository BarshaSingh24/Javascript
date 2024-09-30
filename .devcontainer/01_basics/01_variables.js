const accountId=144553
let accountEmail="barsha@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

//accountId=2//not allowed
accountEmail="hitesh.com"
accountPassword="21212121"
accountCity="Bengaluru"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])
//prefer not to use var because of issue in block scope and variable scope.