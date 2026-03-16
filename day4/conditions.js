// Exercise # 1 > Basic if

let experience = 6;

if (experience > 5) {

console.log("Senior QA Engineer")

}


// Exercise 2 > if 

/* create a variable salary
if salary is greater than 1000000
print "Good Salary Level"
*/

let salary  = 10000000;

if (salary > 1000000) {

    console.log("Good Salary Level");

}

/* Exercise # 3

Create a variable age

set the value to 18

write the condition, "If age is greater than or equal to 18" print "Eligible to vote"

else print, "Not eligible to vote"

*/

let age = 18;

if (age >= 18) {

    console.log("Eligible to Vote");

} else {

    console.log("Not Eligible to Vote")

}

/* Exercise # 4

Login Simulation

*/


let username = "nixon";
let password = "1234"

if (username == "nixon" && password == "1234") {

     console.log("Login Successful");
     
} else {

     console.log ("Login Failed");

}

/* Exercise # 5

1. Create a variable, "score"
2. set value = 82
3. if score >= 90, grade A
4. if score > = 75, grade B
5. if scode >=60, grade C
6. Else, grade D  */


let score = 82;

if(score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log ("Grade B");
} else if (score >= 60) {
    console.log("Grade C")
} else {
    console.log("Grade D")
}

