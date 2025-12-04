const questc = document.getElementById("questc");
const ques = document.getElementById("ques");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const btn = document.getElementById("next");
let count = 1;

btn.addEventListener("click", () => {
    count++;

    if (count == 2) {
        questc.innerHTML = "Question 2 of 3";
        ques.innerHTML = "Which Method is used to log the console?";
        one.innerHTML = "print()";
        two.innerHTML = "console.log()";
        three.innerHTML = "log()";
        four.innerHTML = "console()";
    }

    if (count == 3) {
        questc.innerHTML = "Question 3 of 3";
        ques.innerHTML = "Which of these is NOT a JavaScript data type?";
        one.innerHTML = "number";
        two.innerHTML = "string";
        three.innerHTML = "boolean";
        four.innerHTML = "character";
    }
});
