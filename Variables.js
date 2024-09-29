const accountId = 12543
let accountEmail = "ABC0912@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2   // Its Not Allowed To change

accountEmail = "You@Gmg.com"
accountPassword = "1111"
accountCity = "Delhi"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
   Prefer to not use var
   Because of issue in block scope  and functional scope.
 */

console.table([accountId,accountEmail,accountPassword,accountCity])
