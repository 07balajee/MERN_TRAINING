const questc = document.getElementById("questc");
const ques = document.getElementById("ques");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const btn = document.getElementById("next");

//question array
const question=[
    {
        count:"Question 1 of 10",
        ques:"Which keyword declares a constant in JavaScript?",
        options:["const", "let", "var", "static"],
        correct:0
    },
    {
        count:"Question 2 of 10",
        ques:"Which Method is used to log the console?",
        options:["console.log()", "print()", "log.console()", "console.print()"],
        correct:0
    },
    {
        count:"Question 3 of 10",
        ques:"Which of these is NOT a JavaScript data type?",
        options:["string", "number", "boolean", "character"],
        correct:3
    },
    {
        count:"Question 4 of 10",
        ques:"Which symbol is used for comments in JavaScript?",
        options:["//", "/* */", "#", "<!-- -->"],
        correct:0
    },
    {
        count:"Question 5 of 10",
        ques:"Which method is used to add an element at the end of an array?",
        options:["push()", "pop()", "shift()", "unshift()"],
        correct:0
    },
    {
        count:"Question 6 of 10",
        ques:"Which function is used to parse a string to an integer in JavaScript?",
        options:["parseInt()", "toInteger()", "intParse()", "stringToInt()"],
        correct:0
    },
    {
        count:"Question 7 of 10",
        ques:"Which of the following is a JavaScript framework?",
        options:["React", "Django", "Laravel", "Ruby on Rails"],
        correct:0
    },
    {
        count:"Question 8 of 10",
        ques:"Which operator is used for strict equality comparison in JavaScript?",
        options:["===", "==", "=", "!=="],
        correct:0
    },
    {
        count:"Question 9 of 10",
        ques:"Which method is used to convert a JavaScript object to a JSON string?",
        options:["JSON.stringify()", "JSON.parse()", "toJSON()", "stringify()"],
        correct:0
    },
    {
        count:"Question 10 of 10",
        ques:"Which event is triggered when a user clicks on an HTML element?",
        options:["onclick", "onhover", "onchange", "onsubmit"],
        correct:0
    }
];

let score=0;
let current=0;
let selected=null;
const options=[one, two, three, four]

//functioin to change in UI
function changequestion(i){
    const q=question[i];

    ques.innerHTML=q.ques;
    questc.innerHTML=q.count;
    one.innerHTML=q.options[0];
    two.innerHTML=q.options[1];
    three.innerHTML=q.options[2];
    four.innerHTML=q.options[3];
    selected=null;
    options.forEach((o=>o.style.background=""));

}

options.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        selected=i;
        btn.style.background="lightblue";
    });
})

//cgange first question
changequestion(current);
//change question by on click button
btn.addEventListener("click",()=>{
    if(selected===null){
        alert("select an option");
        return;
    }
    if(selected===question[current].correct){
        score++;
    }
    current++;
    if(current<question.length){
        changequestion(current);
    }else{
        alert("Quiz Completed! score: "+score+"/"+question.length);
    }
});