const name = "Nixon";
const goal = "Become an Automation QA Engineer in Germany";

function introduction(person, dream) {
    return `My name is ${person} and my goal is to ${dream}`;
}

console.log(introduction(name, goal));

const skills = ["JavaScript", "Playwright", "API Testing"];

skills.forEach(skill => {
    console.log("Learning: " + skill);
});