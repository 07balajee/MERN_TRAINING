const inputEl = document.getElementById('name');
const passEL = document.getElementById('pass');
const submitbtn = document.getElementById('btn');
const outputEl = document.getElementById('output');

submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(inputEl.value>5 && passEL.value.length>5){
        if(inputEl.value ===  passEL.value){
            outputEl.innerHTML="Login Successfull!";
            outputEl.style.color="green";
        }
        else{
            outputEl.innerHTML = "Login Failed";
            outputEl.style.color="red";
        }
    } else {
        outputEl.innerHTML = "Please enter valid input";
        outputEl.style.color="orange";
    }
});