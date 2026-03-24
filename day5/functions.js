function greet() {

console.log("Hello Nixon")

}

greet();


//Exercise # 2

function greetings(user) {

 console.log("Hello " +user);

}

greetings("nixon");
greetings("Richards")


// Exercise # 3

function add(a,b){

return a+b;

}

let result = add(5,10);

console.log("Result " +result)


//Exercise # 4

function square(number){

    return number * number;

}

let result2 = square(4);

console.log(result2);

//Exercise # 5

function getFullName (firstName , lastName){

return firstName + lastName;

}

let fullName = getFullName("Nixon ", "Richards");

console.log(fullName);

//Exercise # 6

function isEligibleToVote(age){

if (age>=18) {

    return true

} else {

    return false

}

} let voterAge = isEligibleToVote(15);

console.log(voterAge);


//Exercise # 7

function isEven(number){

if (number%2===0) {

    return "Even";

} else {
  
return "Odd";

}
   
} 

let findNumber = isEven(5);

console.log(findNumber);


