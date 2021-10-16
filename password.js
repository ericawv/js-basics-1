
//Note: the answer to this problem is not complete. I have a road block on figuring this out.

// console.log("Welcome to the password validator tool")

// const readline = require('readline')

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// reader.question("What is your password?", function(input){
//     password = input 
//     console.log(input)

//     if(`${password} ${password.lenght}` >= 10){
//       console.log("Your password has been validated")
//     }

//     else{
//       console.log("Your password can not be validated")
//     }

//     reader.close()
// })

console.log("Welcome to the password validator tool")

const readline = require('readline')

const password = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

password.question("What is your password?", function(input){

  if(password.lenght >= 10){
    console.log("Your password has been validated")
  }
  else{
    console.log("Your password can not be validated")
  }
  password.close()
})

 